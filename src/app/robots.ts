import type { MetadataRoute } from "next";

const BASE_URL = "https://cipherunit.xyz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/contact",
          "/github",
          "/projects",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/contact",
          "/github",
          "/projects",
        ],
        disallow: [
          "/api/",
          "/_next/",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: [
          "/",
          "/contact",
          "/github",
          "/projects",
        ],
        disallow: [
          "/api/",
          "/_next/",
        ],
        crawlDelay: 1,
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}