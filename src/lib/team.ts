import { siteConfig } from "@/lib/site";

export type TeamMember = {
  login: string;
  name: string;
  avatarUrl: string;
  htmlUrl: string;
  bio: string | null;
};

type GitHubOrgMember = {
  login: string;
  avatar_url: string;
  html_url: string;
};

type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
};

const REVALIDATE_SECONDS = 60 * 60; // 1 hour

function githubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "CipherPortfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function resolveDisplayName(login: string, name: string | null): string {
  const trimmed = name?.trim();
  if (!trimmed) {
    return login;
  }
  if (/^(root|user|admin|null|undefined)$/i.test(trimmed)) {
    return login;
  }
  return trimmed;
}

async function fetchUserProfile(login: string): Promise<TeamMember | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${login}`, {
      headers: githubHeaders(),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return null;
    }

    const user = (await res.json()) as GitHubUser;
    return {
      login: user.login,
      name: resolveDisplayName(user.login, user.name),
      avatarUrl: `${user.avatar_url}&s=160`,
      htmlUrl: user.html_url,
      bio: user.bio?.trim() || null,
    };
  } catch {
    return null;
  }
}

/**
 * Public members of the Cipher Units GitHub organization.
 * Cached for one hour; set GITHUB_TOKEN to raise rate limits.
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(
      `https://api.github.com/orgs/${siteConfig.githubOrg}/public_members?per_page=100`,
      {
        headers: githubHeaders(),
        next: { revalidate: REVALIDATE_SECONDS },
      },
    );

    if (!res.ok) {
      console.error(`GitHub org members fetch failed: ${res.status}`);
      return [];
    }

    const members = (await res.json()) as GitHubOrgMember[];

    const profiles = await Promise.all(
      members.map(async (member) => {
        const profile = await fetchUserProfile(member.login);
        if (profile) {
          return profile;
        }

        return {
          login: member.login,
          name: member.login,
          avatarUrl: `${member.avatar_url}&s=160`,
          htmlUrl: member.html_url,
          bio: null,
        } satisfies TeamMember;
      }),
    );

    return profiles.sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
    );
  } catch (error) {
    console.error("Failed to load GitHub team members:", error);
    return [];
  }
}
