# SEO & Metadata

## Global metadata

**File:** `src/app/layout.tsx`

Driven by `siteConfig` (`src/lib/site.ts`):

| Concern | Behavior |
|---------|----------|
| `metadataBase` | `siteConfig.url` |
| Title | Template `%s \| Cipher Unit`; default absolute brand title |
| Description / keywords | Collective + developer-tools focused |
| Open Graph | `website`, en_US, `brandOgImages()` |
| Twitter | `summary_large_image` |
| Robots | index/follow + googleBot preview/snippet limits |
| Icons | Brand logo / Apple touch from `siteConfig.brand` |
| Verification | `GOOGLE_PUBLIC_KEY` when set |

Root layout injects **Organization** and **WebSite** JSON-LD only. Page-level schemas are on each route.

## Per-route metadata & JSON-LD

| Route | Notes |
|-------|-------|
| `/` | Absolute home title; `HomePageJsonLd`, breadcrumb, `FAQJsonLd` |
| `/projects` | Projects keywords/OG; `buildProjectsGraphJsonLd()` |
| `/team` | Team keywords/OG; `buildTeamGraphJsonLd(members)` |
| `/contact` | Contact metadata + contact JSON-LD / breadcrumb |
| `/github` | `noindex, nofollow`; redirect only |

## Sitemap

`src/app/sitemap.ts` — `/`, `/projects`, `/team`, `/contact` with weekly/monthly frequencies and priorities `1.0` / `0.9` / `0.85` / `0.8`.

Cache-Control for `/sitemap.xml` is set in `next.config.ts` (1 hour).

## Robots

`src/app/robots.ts` — dynamic `MetadataRoute.Robots`.

- Blocks `/github` and internal paths
- Explicit allows for major AI crawlers on `/` and `/llms.txt`
- Host + sitemap from `siteConfig` / `absoluteUrl`

## `llms.txt`

`public/llms.txt` — concise brand/project summary for LLM crawlers. Keep in sync when routes or flagship projects change.

## Security & cache headers

`next.config.ts`:

- `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `X-XSS-Protection`
- `Permissions-Policy`, `X-DNS-Prefetch-Control`
- Cache headers for sitemap, robots, `llms.txt`
- `poweredByHeader: false`, `compress: true`

## Manifest

`public/manifest.json` — PWA name/short name, theme `#22c55e`, background `#0a0a0a`, icons under `/images/`.

## IndexNow

- Key file: `public/cipherunit-indexnow-2026.txt`
- Notify script: `scripts/seo-notify.mjs` (home, projects, team, contact, sitemap)
