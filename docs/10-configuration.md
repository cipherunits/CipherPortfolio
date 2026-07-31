# Configuration

## Files

| File | Purpose |
|------|---------|
| `package.json` | Scripts, deps, version `2.3.2` |
| `next.config.ts` | Standalone output, images, security/cache headers |
| `tsconfig.json` | Strict TS, `@/*` → `./src/*` |
| `postcss.config.mjs` | Tailwind v4 PostCSS |
| `eslint.config.mjs` | Flat ESLint + Next |
| `prettier.config.mjs` | Formatting |
| `pnpm-workspace.yaml` | Native build opt-outs |
| `.env.example` | Documented env keys |
| `src/lib/site.ts` | Runtime site config |
| `zensical.toml` | Docs site |
| `Makefile` / `Dockerfile` | Local + container workflows |
| `public/manifest.json` | PWA manifest |
| `src/app/robots.ts` | Dynamic robots |
| `src/app/sitemap.ts` | Dynamic sitemap |

## Package scripts

```json
{
  "dev": "banner && next dev",
  "build": "banner && check && next build",
  "start": "banner && next start",
  "lint": "eslint .",
  "typecheck": "tsc --noEmit",
  "check": "typecheck && lint",
  "prepare": "husky"
}
```

(See `package.json` for the exact banner wiring.)

## Environment variables

From `.env.example`:

| Name | Example / default role |
|------|------------------------|
| `SITE_NAME` | `https://cipherunit.xyz` |
| `APP_NAME` | `CipherPortfolio` |
| `CONTACT_EMAIL` | Footer / mailto |
| `GITHUB_PAGE` | Org URL |
| `INSTAGRAM_PAGE` | Optional social |
| `NEXT_PUBLIC_BRAND_IMAGE_*` | Main / logo / alt images |
| `GOOGLE_PUBLIC_KEY` | GSC verification |
| `GITHUB_TOKEN` | Optional GitHub API auth for team |

Legacy `Instageram_PAGE` is still accepted as a fallback in `siteConfig`.

## TypeScript

- `strict: true`, `noEmit` for `typecheck`
- Target ES2017, module `esnext`, bundler resolution
- Path alias `@/*` → `src/*`
- Next plugin enabled

## Tailwind CSS v4

Tokens in `src/app/styles/globals.css`:

```css
:root {
  --color-bg: #282c33;
  --color-pink: #E06B74;
  --color-green: #98C379;
  --color-yellow: #E5C07A;
  --color-blue: #62AEEF;
  --color-primery: #C778DD;
  --color-secondary: #55B6C2;
  --color-stroke: #ABB2BF;
  --color-terminal: #00ff00;
  --color-bg-terminal: #1e1e1e;
  /* …terminal chrome + shadow tokens */
}
```

Font stack uses `--font-inter` from the root layout.

## Next.js

- `output: "standalone"` for Docker
- Image formats: AVIF, WebP
- Remote patterns: Cloudinary, `cipherunit.xyz`, `avatars.githubusercontent.com`
- Global security headers + cache headers for SEO endpoints

## Zensical

`zensical.toml`:

- `docs_dir = "docs"`, `site_dir = "site"`
- Nav maps each markdown guide
- Dark/light palettes, Instant navigation, search highlight, Mermaid fences
- Logo/favicon: `docs/CipherUnit.png`

## Docker

Hardcoded in `Dockerfile`: `node:20`, global `pnpm@10.5.1`, workdir `/app`. Override by editing the Dockerfile or adding build args.
