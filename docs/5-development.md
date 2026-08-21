# 5 — Development

## Requirements

Node.js 20.9+ · pnpm 9+

## Setup

```bash
git clone https://github.com/cipherunits/CipherPortfolio.git
cd CipherPortfolio
# create .env or .env.local (see Configuration)
pnpm install
pnpm dev
```

→ http://localhost:3000

## Scripts

| Command | Action |
|---------|--------|
| `pnpm dev` | Dev server |
| `pnpm build` | `check` then production build |
| `pnpm start` | Serve build |
| `pnpm check` | `tsc` + ESLint |
| `pnpm clean` | Clear `.next` / caches |
| `pnpm seo:notify` | IndexNow ping |

Make wrappers: `make install`, `make dev`, `make build`, `make start`.

## Docker

Multi-stage image at repo root. Build/run via `Makefile` / `docker compose` as defined there.

## Docs site (Zensical)

Config: `zensical.toml`. Published to GitHub Pages from `docs/`.
