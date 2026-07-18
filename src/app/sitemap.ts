import { MetadataRoute } from "next";

const baseUrl = "https://cipherunit.xyz";
const now = new Date("2025-01-01T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          fa: `${baseUrl}/?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/contact`,
          fa: `${baseUrl}/contact?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/projects`,
          fa: `${baseUrl}/projects?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/github`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/github`,
          fa: `${baseUrl}/github?lang=en`,
        },
      },
    },
  ];

  return pages;
}
