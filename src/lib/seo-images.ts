import { type Project, projects } from "@/lib/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";
import type { TeamMember } from "@/lib/team";

/**
 * Prefer a larger GitHub avatar for crawlers / image search.
 * Keep a single query param so Next.js sitemap XML stays well-formed (`&` is not escaped).
 */
export function seoAvatarUrl(avatarUrl: string, size = 460): string {
  try {
    const url = new URL(avatarUrl);
    url.search = "";
    url.searchParams.set("s", String(size));
    return url.toString();
  } catch {
    const withoutQuery = avatarUrl.split("?")[0];
    return `${withoutQuery}?s=${size}`;
  }
}

export function projectPagePath(project: Pick<Project, "slug">): string {
  return `/projects/${project.slug}`;
}

/** Same-origin path so Image Search attributes team photos to this site. */
export function teamAvatarPath(member: Pick<TeamMember, "login">): string {
  return `/avatars/${encodeURIComponent(member.login)}`;
}

export function teamAvatarUrl(member: Pick<TeamMember, "login">): string {
  return absoluteUrl(teamAvatarPath(member));
}

export function projectImageTitle(project: Project): string {
  return `${project.title} — Cipher Unit (CipherUnit) open source project`;
}

export function projectImageCaption(project: Project): string {
  return `${project.title} by Cipher Unit. ${project.description}`;
}

export function projectImageAlt(project: Project): string {
  return `${project.title} open source software developed by Cipher Unit (CipherUnit). ${project.description}`;
}

/** All project card assets are authored at 1200×675 for OG / Image Search. */
export const PROJECT_IMAGE_WIDTH = 1200;
export const PROJECT_IMAGE_HEIGHT = 675;

export function projectImageEncodingFormat(imageUrl: string): string {
  const path = imageUrl.split("?")[0]?.toLowerCase() ?? "";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) {
    return "image/jpeg";
  }
  if (path.endsWith(".webp")) {
    return "image/webp";
  }
  if (path.endsWith(".svg")) {
    return "image/svg+xml";
  }
  if (path.endsWith(".gif")) {
    return "image/gif";
  }
  return "image/png";
}

export function projectOgImage(project: Project) {
  return {
    url: absoluteUrl(project.imageUrl),
    secureUrl: absoluteUrl(project.imageUrl),
    width: PROJECT_IMAGE_WIDTH,
    height: PROJECT_IMAGE_HEIGHT,
    alt: projectImageTitle(project),
    type: projectImageEncodingFormat(project.imageUrl),
  };
}

export function projectImageObject(
  project: Project,
  options?: { representativeOfPage?: boolean },
) {
  const pageUrl = absoluteUrl(projectPagePath(project));
  const url = absoluteUrl(project.imageUrl);
  return {
    "@type": "ImageObject" as const,
    "@id": `${pageUrl}#image`,
    url,
    contentUrl: url,
    name: projectImageTitle(project),
    caption: projectImageCaption(project),
    description: projectImageCaption(project),
    encodingFormat: projectImageEncodingFormat(project.imageUrl),
    width: PROJECT_IMAGE_WIDTH,
    height: PROJECT_IMAGE_HEIGHT,
    representativeOfPage: options?.representativeOfPage ?? false,
    isPartOf: {
      "@type": "WebPage" as const,
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
    },
    creator: {
      "@type": "Organization" as const,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    creditText: "Cipher Unit (CipherUnit)",
    copyrightNotice: "Cipher Unit",
  };
}

export function teamImageTitle(member: TeamMember): string {
  return `${member.name} (@${member.login}) — Cipher Unit engineering team`;
}

export function teamImageCaption(member: TeamMember): string {
  return `${member.name} is a public GitHub member of Cipher Unit (cipherunits / CipherUnit).`;
}

export function teamImageObject(member: TeamMember, pageUrl: string) {
  const url = teamAvatarUrl(member);
  return {
    "@type": "ImageObject" as const,
    "@id": `${pageUrl}#${member.login}-image`,
    url,
    contentUrl: url,
    name: teamImageTitle(member),
    caption: teamImageCaption(member),
    description: teamImageCaption(member),
    encodingFormat: "image/jpeg",
    creator: {
      "@type": "Person" as const,
      name: member.name,
      url: member.htmlUrl,
    },
  };
}

export function projectImageUrls(): string[] {
  return projects.map((project) => absoluteUrl(project.imageUrl));
}

export function brandImageUrls(): string[] {
  return [
    absoluteUrl(siteConfig.brand.main),
    absoluteUrl(siteConfig.brand.logo),
  ];
}

export type SitemapImageEntry = {
  loc: string;
  title: string;
  caption: string;
};

export function projectSitemapImages(): SitemapImageEntry[] {
  return projects.map((project) => ({
    loc: absoluteUrl(project.imageUrl),
    title: projectImageTitle(project),
    caption: projectImageCaption(project),
  }));
}

export function teamSitemapImages(members: TeamMember[]): SitemapImageEntry[] {
  return members.map((member) => ({
    loc: teamAvatarUrl(member),
    title: teamImageTitle(member),
    caption: teamImageCaption(member),
  }));
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/** Google image sitemap entries with title + caption for Image Search. */
export function buildImageSitemapXml(
  pages: { pageUrl: string; images: SitemapImageEntry[] }[],
): string {
  const urls = pages
    .filter((page) => page.images.length > 0)
    .map((page) => {
      const imagesXml = page.images
        .map(
          (image) => `    <image:image>
      <image:loc>${escapeXml(image.loc)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(page.pageUrl)}</loc>
${imagesXml}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}
