import type { MetadataRoute } from "next";

import {
  brandImageUrls,
  projectImageUrls,
  seoAvatarUrl,
} from "@/lib/seo-images";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getTeamMembers } from "@/lib/team";

const LAST_MODIFIED = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const members = await getTeamMembers();
  const teamAvatars = members.map((member) => seoAvatarUrl(member.avatarUrl));
  const projectImages = projectImageUrls();
  const brandImages = brandImageUrls();

  return [
    {
      url: siteConfig.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
      images: [...brandImages, ...projectImages, ...teamAvatars],
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
      images: projectImages,
    },
    {
      url: absoluteUrl("/team"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.85,
      images: teamAvatars,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: brandImages,
    },
  ];
}
