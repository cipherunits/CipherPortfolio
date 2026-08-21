# 10 — Configuration

## Environment

Create `.env` or `.env.local` (do not commit secrets).

| Variable | Purpose |
|----------|---------|
| `SITE_NAME` | Public origin (no trailing slash) |
| `APP_NAME` | Display name |
| `CONTACT_EMAIL` | Contact / footer |
| `GITHUB_PAGE` | Org URL |
| `INSTAGRAM_PAGE` | Optional Instagram |
| `NEXT_PUBLIC_BRAND_IMAGE_MAIN` | Primary brand / OG |
| `NEXT_PUBLIC_BRAND_IMAGE_LOGO` | Logo |
| `NEXT_PUBLIC_BRAND_IMAGE_ALT` | Alt brand image |
| `GOOGLE_PUBLIC_KEY` | GSC verification |
| `GITHUB_TOKEN` | Optional; team + README rate limits |

Defaults: `src/lib/site.ts`.

## Next.js

`next.config.ts` — `output: 'standalone'`, image formats, remotePatterns, security headers.

## Tailwind

v4 via `@import "tailwindcss"` in `src/app/styles/globals.css`. Tokens under `:root`.

## Docs (Zensical)

`zensical.toml` → GitHub Pages from `docs/`.
