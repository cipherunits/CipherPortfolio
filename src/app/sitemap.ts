import type { MetadataRoute } from "next";

const SITE_URL = "https://cipherunit.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${SITE_URL}/github`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: "https://github.com/cipherunits/CipherToken",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: "https://github.com/cipherunits/npm-mirror",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}