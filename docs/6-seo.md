# 6 — SEO

## Surfaces

| Surface | Where |
|---------|--------|
| Global metadata | `src/app/layout.tsx` |
| Per-route metadata | Each `page.tsx` / `generateMetadata` |
| Project page | Title, description, keywords, OG image 1200×675 |
| JSON-LD | `JsonLd.tsx` (+ project page graph) |
| Sitemap | `src/app/sitemap.ts` |
| Image sitemap | `src/app/image-sitemap.xml/route.ts` |
| Robots | `src/app/robots.ts` |
| LLM summary | `public/llms.txt` |
| IndexNow | `scripts/seo-notify.mjs` |

## Project images

- Assets under `public/images/` (cards are 1200×675 PNG)
- Helpers: `projectImageTitle`, `projectImageCaption`, `projectOgImage`, `projectImageObject`
- Microdata `ImageObject` on cards and detail pages
- Listed in sitemap + image sitemap per project URL

## After content/URL changes

1. Update `projects.ts` / `llms.txt` as needed  
2. Rebuild  
3. Optionally `pnpm seo:notify`  
4. Submit sitemaps in Google Search Console if new  
