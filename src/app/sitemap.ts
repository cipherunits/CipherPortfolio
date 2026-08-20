import type { MetadataRoute } from "next";

import { projects } from "@/lib/projects";
import {
  brandImageUrls,
  projectImageUrls,
  projectPagePath,
  teamAvatarUrl,
} from "@/lib/seo-images";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { getTeamMembers } from "@/lib/team";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const members = await getTeamMembers();
  const teamAvatars = members.map((member) => teamAvatarUrl(member));
  const projectImages = projectImageUrls();
  const brandImages = brandImageUrls();
  const lastModified = new Date();

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(projectPagePath(project)),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.88,
    images: [absoluteUrl(project.imageUrl)],
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [...brandImages, ...projectImages, ...teamAvatars],
    },
    {
      url: absoluteUrl("/projects"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: projectImages,
    },
    ...projectPages,
    {
      url: absoluteUrl("/team"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      images: teamAvatars,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: brandImages,
    },
  ];
}
