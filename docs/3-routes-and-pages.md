# 3 — Routes

| Path | File | Notes |
|------|------|--------|
| `/` | `src/app/page.tsx` | Landing sections |
| `/projects` | `projects/page.tsx` | Full grid |
| `/projects/[slug]` | `projects/[slug]/page.tsx` | Detail + optional README |
| `/team` | `team/page.tsx` | GitHub members |
| `/contact` | `contact/page.tsx` | Contact |
| `/github` | redirect | Org GitHub |
| `/avatars/[login]` | route handler | Avatar proxy |
| `/sitemap.xml` | `sitemap.ts` | |
| `/image-sitemap.xml` | `image-sitemap.xml/route.ts` | |
| `/robots.txt` | `robots.ts` | |
| `/llms.txt` | `public/llms.txt` | |

## Project detail

- `generateStaticParams` from `projects`
- `dynamicParams = false`
- `revalidate = 3600`
- Metadata + `buildProjectPageJsonLd(project)`
- README via `getProjectReadme` → `ProjectReadmeView` or omit

Slugs: `fusion-framework`, `cipher-token`, `cipher-scope`, `npm-mirror`.

## Sitemap priorities

| URL | Priority |
|-----|----------|
| `/` | 1.0 |
| `/projects` | 0.9 |
| `/projects/[slug]` | 0.88 |
| `/team` | 0.85 |
| `/contact` | 0.8 |

Each project URL includes its image. Image sitemap lists home, `/projects`, each slug page, `/team`, `/contact`.

## Robots

Allow: `/`, `/images/`, `/avatars/`, `/_next/static/`, `/_next/image/` (+ `/llms.txt` for AI bots).

Disallow: `/api/`, `/_next/data/`, `/private/`, `/_vercel/`, `/github`.

Sitemaps: `/sitemap.xml`, `/image-sitemap.xml`.
