import type { MetadataRoute } from "next";

const SITE_URL = "https://cipherunit.xyz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/_vercel/",
        ],
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}