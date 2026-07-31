# Development

## Prerequisites

- Node.js **20+** (LTS recommended)
- **pnpm 9+** (scripts, Dockerfile, and Makefile all assume pnpm)
- Repository clone

## Setup

```bash
git clone https://github.com/cipherunits/CipherPortfolio.git
cd CipherPortfolio
cp .env.example .env.local
pnpm install
```

## Environment

Copy `.env.example` → `.env.local` (gitignored). Never commit secrets.

| Variable | Purpose |
|----------|---------|
| `SITE_NAME` | Public site origin (no trailing slash) |
| `APP_NAME` | Display / package name |
| `CONTACT_EMAIL` | Footer and contact mailto |
| `GITHUB_PAGE` | Organization URL |
| `INSTAGRAM_PAGE` | Optional Instagram URL |
| `NEXT_PUBLIC_BRAND_IMAGE_MAIN` | OG / hero brand image |
| `NEXT_PUBLIC_BRAND_IMAGE_LOGO` | Logo image |
| `NEXT_PUBLIC_BRAND_IMAGE_ALT` | Secondary OG image |
| `GOOGLE_PUBLIC_KEY` | Search Console verification token |
| `GITHUB_TOKEN` | Optional; raises GitHub API rate limits for `/team` |

Defaults for URL, email, and brand paths live in `src/lib/site.ts`.

## Run (development)

```bash
pnpm dev
# or
make dev
```

Open http://localhost:3000.

## Quality checks

```bash
pnpm typecheck   # tsc --noEmit
pnpm lint        # ESLint
pnpm check       # typecheck + lint
```

`pnpm build` runs `check` before `next build`.

## Production

```bash
pnpm build
pnpm start
```

## Docker

```bash
make build    # image next-app:latest
make run      # container :3000
make logs
make stop && make rm
```

Dockerfile: multi-stage `node:20` builder → standalone runner. pnpm version is pinned in the Dockerfile.

## Scripts (`package.json`)

| Script | Description |
|--------|-------------|
| `dev` | Banner + `next dev` |
| `build` | Banner + `check` + `next build` |
| `start` | Banner + `next start` |
| `lint` | `eslint .` |
| `typecheck` | `tsc --noEmit` |
| `check` | typecheck + lint |
| `prepare` | husky |

## Make targets

| Target | Description |
|--------|-------------|
| `make install` | `pnpm install` |
| `make dev` | Local dev server |
| `make build-app` | `pnpm build` |
| `make build` / `run` / `stop` / `rm` / `restart` / `logs` / `clean` | Docker lifecycle |

Defaults: image `next-app:latest`, container `next-app-container`, port `3000`.

## Documentation site (Zensical)

```bash
pip install zensical
zensical serve          # local preview
zensical build --clean  # output → site/
```

Config: `zensical.toml`. Source: `docs/`.

### GitHub Actions

`.github/workflows/docs.yml` on push to `main` / `master`:

1. Checkout + Python
2. `pip install zensical`
3. `zensical build --clean`
4. Upload `site/` → deploy GitHub Pages

Uses default `GITHUB_TOKEN` with `pages: write`.

## SEO notify helper

```bash
node scripts/seo-notify.mjs
```

Prints Search Console / Rich Results links and pings IndexNow for key URLs.
