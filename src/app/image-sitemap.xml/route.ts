import {
  brandImageUrls,
  buildImageSitemapXml,
  projectImageCaption,
  projectImageTitle,
  projectPagePath,
  projectSitemapImages,
  teamSitemapImages,
} from "@/lib/seo-images";
import { projects } from "@/lib/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getTeamMembers } from "@/lib/team";

export const revalidate = 3600;

export async function GET() {
  const members = await getTeamMembers();
  const brandImages = brandImageUrls().map((loc) => ({
    loc,
    title: "Cipher Unit (CipherUnit) — open-source engineering collective",
    caption:
      "Official Cipher Unit brand imagery for the CipherUnit open-source developer tools site.",
  }));

  const xml = buildImageSitemapXml([
    {
      pageUrl: siteConfig.url,
      images: [
        ...brandImages,
        ...projectSitemapImages(),
        ...teamSitemapImages(members),
      ],
    },
    {
      pageUrl: absoluteUrl("/projects"),
      images: projectSitemapImages(),
    },
    ...projects.map((project) => ({
      pageUrl: absoluteUrl(projectPagePath(project)),
      images: [
        {
          loc: absoluteUrl(project.imageUrl),
          title: projectImageTitle(project),
          caption: projectImageCaption(project),
        },
      ],
    })),
    {
      pageUrl: absoluteUrl("/team"),
      images: teamSitemapImages(members),
    },
    {
      pageUrl: absoluteUrl("/contact"),
      images: brandImages,
    },
  ]);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
