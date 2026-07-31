# Known Issues & Notes

## Resolved (production hardening)

| Previous issue | Resolution |
|----------------|------------|
| Import / folder typos (`Co1ntact`, `skils`, etc.) | Renamed to correct identifiers |
| Manifest under `public/images/` | Moved to `public/manifest.json` |
| Wrong projects domain | Uses `siteConfig.url` (`cipherunit.xyz`) |
| Scattered env / GitHub URLs | Centralized in `src/lib/site.ts` |
| Terminal org slug mismatch | Aligned to `cipherunits` |
| Duplicate JSON-LD script ids | Unique `id` per block |
| Tracked `.env` | Gitignored; `.env.example` provided |
| Static `robots.txt` drift | Replaced by `src/app/robots.ts` |

## Docs vs portfolio

| Surface | Tooling | Deploy |
|---------|---------|--------|
| Portfolio | Next.js | App host (e.g. Vercel / Docker) |
| Documentation | Zensical (`docs/` + `zensical.toml`) | GitHub Pages via `docs.yml` |

## Dockerfile

Node `20` and a pinned pnpm version are hardcoded. Introduce `ARG`s if CI needs overrides.

## `pnpm-workspace.yaml`

Disables native builds for `sharp` and `unrs-resolver` intentionally for constrained environments.

## Intentional quirks

- CSS token `--color-primery` keeps the historical spelling; renaming would churn class names without user-facing benefit.
- Terminal output is demo content (static uptime, neofetch-style text), not live system metrics.
- Overview “People” falls back to `8+` if the GitHub API returns no members (rate limit / network).
- `/github` exists for redirects and branding but is `noindex` and omitted from the sitemap.
