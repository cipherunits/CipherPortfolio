import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

const allowAssets = ["/", "/images/", "/avatars/", "/_next/static/", "/_next/image/"];
const allowAi = ["/", "/llms.txt", "/images/", "/avatars/", "/_next/static/", "/_next/image/"];
const disallow = [
  "/api/",
  "/_next/data/",
  "/private/",
  "/_vercel/",
  "/github",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: allowAssets,
        disallow,
      },
      {
        userAgent: "GPTBot",
        allow: allowAi,
        disallow,
      },
      {
        userAgent: "ChatGPT-User",
        allow: allowAi,
        disallow,
      },
      {
        userAgent: "Google-Extended",
        allow: allowAi,
        disallow,
      },
      {
        userAgent: "anthropic-ai",
        allow: allowAi,
        disallow,
      },
      {
        userAgent: "ClaudeBot",
        allow: allowAi,
        disallow,
      },
      {
        userAgent: "PerplexityBot",
        allow: allowAi,
        disallow,
      },
    ],
    sitemap: [
      absoluteUrl("/sitemap.xml"),
      absoluteUrl("/image-sitemap.xml"),
    ],
    host: siteConfig.url,
  };
}
