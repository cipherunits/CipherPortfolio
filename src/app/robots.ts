import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

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
          "/github",
        ],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/", "/_next/", "/private/", "/github"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/", "/_next/", "/private/", "/github"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/", "/_next/", "/private/", "/github"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/", "/_next/", "/private/", "/github"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/", "/_next/", "/private/", "/github"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt"],
        disallow: ["/api/", "/_next/", "/private/", "/github"],
      },
    ],
    sitemap: [
      absoluteUrl("/sitemap.xml"),
      absoluteUrl("/image-sitemap.xml"),
    ],
    host: siteConfig.url,
  };
}
