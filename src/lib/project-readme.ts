import type { Project } from "@/lib/projects";

const REVALIDATE_SECONDS = 60 * 60; // 1 hour

export type ProjectReadme = {
  markdown: string;
  owner: string;
  repo: string;
  branch: string;
  htmlUrl: string;
};

type GitHubReadmeResponse = {
  download_url: string | null;
  html_url: string;
  content?: string;
  encoding?: string;
};

function githubHeaders(accept: string): HeadersInit {
  const headers: HeadersInit = {
    Accept: accept,
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "CipherPortfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

export function parseGithubRepo(
  repoUrl: string,
): { owner: string; repo: string } | null {
  try {
    const url = new URL(repoUrl);
    if (!/(^|\.)github\.com$/i.test(url.hostname)) {
      return null;
    }

    const segments = url.pathname.split("/").filter(Boolean);
    const owner = segments[0];
    const repo = segments[1]?.replace(/\.git$/i, "");
    if (!owner || !repo) {
      return null;
    }

    return { owner, repo };
  } catch {
    return null;
  }
}

function branchFromDownloadUrl(downloadUrl: string, owner: string, repo: string) {
  const prefix = `https://raw.githubusercontent.com/${owner}/${repo}/`;
  if (!downloadUrl.startsWith(prefix)) {
    return "main";
  }

  const rest = downloadUrl.slice(prefix.length);
  const branch = rest.split("/")[0];
  return branch || "main";
}

function decodeReadmeContent(payload: GitHubReadmeResponse): string | null {
  if (payload.content && payload.encoding === "base64") {
    try {
      return Buffer.from(payload.content.replaceAll("\n", ""), "base64").toString(
        "utf8",
      );
    } catch {
      return null;
    }
  }

  return null;
}

async function fetchRawReadme(
  owner: string,
  repo: string,
  branch: string,
  fileName: string,
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${fileName}`,
      {
        headers: { "User-Agent": "CipherPortfolio", Accept: "text/plain" },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (!res.ok) {
      return null;
    }

    const text = (await res.text()).trim();
    return text || null;
  } catch {
    return null;
  }
}

async function fetchApiReadme(
  owner: string,
  repo: string,
): Promise<ProjectReadme | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: githubHeaders("application/vnd.github+json"),
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (res.status === 404 || !res.ok) {
      return null;
    }

    const payload = (await res.json()) as GitHubReadmeResponse;
    let markdown = decodeReadmeContent(payload);

    if (!markdown && payload.download_url) {
      const rawRes = await fetch(payload.download_url, {
        headers: { "User-Agent": "CipherPortfolio", Accept: "text/plain" },
        next: { revalidate: REVALIDATE_SECONDS },
      });
      if (rawRes.ok) {
        markdown = (await rawRes.text()).trim();
      }
    }

    const trimmed = markdown?.trim();
    if (!trimmed) {
      return null;
    }

    const branch = payload.download_url
      ? branchFromDownloadUrl(payload.download_url, owner, repo)
      : "main";

    return {
      markdown: trimmed,
      owner,
      repo,
      branch,
      htmlUrl:
        payload.html_url ||
        `https://github.com/${owner}/${repo}/blob/${branch}/README.md`,
    };
  } catch {
    return null;
  }
}

/**
 * Fetch README for a project GitHub repo.
 * Prefers raw.githubusercontent.com (reliable in CI/Docker), then GitHub API.
 * Returns null when missing — page shows nothing.
 */
export async function getProjectReadme(
  project: Pick<Project, "linkLive">,
): Promise<ProjectReadme | null> {
  const parsed = parseGithubRepo(project.linkLive);
  if (!parsed) {
    return null;
  }

  const { owner, repo } = parsed;
  const branches = ["main", "master"];
  const fileNames = ["README.md", "Readme.md", "readme.md"];

  for (const branch of branches) {
    for (const fileName of fileNames) {
      const markdown = await fetchRawReadme(owner, repo, branch, fileName);
      if (markdown) {
        return {
          markdown,
          owner,
          repo,
          branch,
          htmlUrl: `https://github.com/${owner}/${repo}/blob/${branch}/${fileName}`,
        };
      }
    }
  }

  const fromApi = await fetchApiReadme(owner, repo);
  if (fromApi) {
    return fromApi;
  }

  return null;
}

export function resolveReadmeHref(
  href: string | undefined,
  readme: Pick<ProjectReadme, "owner" | "repo" | "branch">,
): string | undefined {
  if (!href) {
    return href;
  }

  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("#") ||
    href.startsWith("data:")
  ) {
    return href;
  }

  const cleaned = href.replace(/^\.\//, "").replace(/^\//, "");
  return `https://github.com/${readme.owner}/${readme.repo}/blob/${readme.branch}/${cleaned}`;
}

/** Turn github.com/.../blob/... asset URLs into raw.githubusercontent.com. */
export function toRawGithubAssetUrl(url: string): string {
  const blobMatch = url.match(
    /^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw)\/([^/]+)\/(.+?)(?:\?.*)?$/i,
  );
  if (blobMatch) {
    const [, owner, repo, branch, path] = blobMatch;
    return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
  }
  return url;
}

export function resolveReadmeImageSrc(
  src: string | undefined,
  readme: Pick<ProjectReadme, "owner" | "repo" | "branch">,
): string | undefined {
  if (!src) {
    return src;
  }

  if (src.startsWith("data:")) {
    return src;
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return toRawGithubAssetUrl(src);
  }

  const cleaned = src.replace(/^\.\//, "").replace(/^\//, "");
  return `https://raw.githubusercontent.com/${readme.owner}/${readme.repo}/${readme.branch}/${cleaned}`;
}

/**
 * Normalize README markdown before render:
 * - strip HTML comments (SEO meta blocks, etc.)
 * - rewrite github blob asset URLs to raw
 */
export function normalizeReadmeMarkdown(markdown: string): string {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(
      /https:\/\/github\.com\/([^/\s"'<>]+)\/([^/\s"'<>]+)\/(?:blob|raw)\/([^/\s"'<>]+)\/([^\s"'<>]+)/gi,
      "https://raw.githubusercontent.com/$1/$2/$3/$4",
    )
    .trim();
}
