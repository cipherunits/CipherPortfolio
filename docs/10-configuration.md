# Configuration

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Scripts, dependencies, metadata |
| `next.config.ts` | Next.js runtime config (output mode, images, security headers) |
| `tsconfig.json` | TypeScript compiler options and path aliases |
| `postcss.config.mjs` | Tailwind CSS v4 PostCSS integration |
| `eslint.config.mjs` | Flat ESLint config using `eslint-config-next` |
| `pnpm-workspace.yaml` | Workspace constraints (disable native builds for `sharp`, `unrs-resolver`) |
| `.env` / `.env.local` | Environment variables (gitignored; use `.env.example`) |
| `.env.example` | Documented env keys for local/prod setup |
| `src/lib/site.ts` | Central site URL, contact, social, and brand config |
| `zensical.toml` | Zensical docs site configuration |
| `Makefile` | Docker and local dev targets |
| `Dockerfile` | Multi-stage production image definition |
| `public/manifest.json` | PWA manifest |
| `src/app/robots.ts` | Dynamic robots.txt |
| `src/app/sitemap.ts` | Dynamic sitemap.xml |

## Package Scripts

Defined in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

## Environment Variables

Defined in `.env` at the project root.

| Name | Current Value | Used in |
|------|--------------|---------|
| `APP_NAME` | `CipherPortfolio` | Metadata / display |
| `APP_VERSION` | `1.3.4` | package.json |
| `CONTACT_EMAIL` | `cipherunit.dev@gmail.com` | `Footer`, `Contact.tsx`, `ContactBox.tsx` |
| `GITHUB_API_BASE_URL` | `https://api.github.com/users` | Future integrations |
| `GITHUB_ACCESS_TOKEN` | placeholder only | Future integrations |
| `PORT` | `3000` | Dev / prod server port |

Local development should create `.env.local` with real values and ensure it is gitignored.

## TypeScript Configuration

`tsconfig.json` highlights:

- Strict mode enabled
- Target: ES2017
- Module: esnext with bundler resolution
- Path alias: `@/*` maps to `./src/*`
- `resolveJsonModule`, `isolatedModules`, `jsx: react-jsx`
- Next.js plugin enabled

## Tailwind CSS v4

Configured through `@tailwindcss/postcss` in `postcss.config.mjs`.

Theme tokens are in `src/app/styles/globals.css`:
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
  --color-shadow-primery: rgba(199,120,221,0.6);
}
```

Global overflow behavior disables the native scrollbar for a custom-tinted experience.

## Next.js Config

`next.config.ts`:

- `output: 'standalone'` — produces a minimal standalone server bundle suitable for Docker.
- `images.remotePatterns` allows:
  - `https://res.cloudinary.com/*`
  - `https://cipherunit.xyz/*`
- Headers middleware returns security headers for all routes (`/(.*)`).

## Zensical Configuration

`zensical.toml` configures the documentation site:

- Site name, author, and description
- Dark (`default`) and light (`slate`) palettes
- Navigation structure
- Markdown extensions (abbreviations, tasklists, code blocks, footnotes, etc.)
- Features: instant navigation, search highlighting, code block copy/select, etc.

## Docker Build Arguments

The `Dockerfile` hardcodes:
- builder image: `node:20`
- runner image: `node:20`
- pnpm version installed globally: `pnpm@10.5.1`
- working directory: `/app`

If managing builds through the Makefile, these are fixed in the Dockerfile. To override, edit the Dockerfile directly or use build args.
