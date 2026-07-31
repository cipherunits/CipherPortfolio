# Architecture

## Rendering model

Next.js 16 **App Router** with Server Components by default.

Client components (`"use client"`) are used only where browser APIs or local state are required:

| Component | Reason |
|-----------|--------|
| `Header` | Mobile menu state |
| `NamePage` | `usePathname` |
| `NavItem` | Active route highlight |
| `Terminal` | Input + history |
| `OpenTerminal` | Click handler |
| `TerminalManager` | Open/close toggle |
| `LayerTerminal` | Drag / resize |

## Layout composition

`src/app/layout.tsx` is the root layout. It:

1. Loads Inter via `next/font/local` and global styles from `src/app/styles/globals.css`
2. Exports site-wide `metadata` and `viewport` from `siteConfig`
3. Injects `OrganizationJsonLd` and `WebSiteJsonLd`
4. Renders `<Header />`, `{children}`, `<TerminalManager />`, `<Footer />`

Page-specific JSON-LD (home FAQ/breadcrumb, projects graph, team graph, contact) is injected in each route’s `page.tsx`.

## Home assembly

`src/app/page.tsx` (`revalidate = 3600`) composes:

1. `Hero`
2. `Overview` — people count from GitHub team API
3. `Projects` (`view={true}` — link to `/projects`)
4. `Skills`
5. `Team` (`preview` — first 4 members + link to `/team`)
6. `AboutMe`
7. `Faq`
8. `Contact` (landing teaser)

## Data layer (`src/lib/`)

| Module | Role |
|--------|------|
| `site.ts` | URLs, email, brand images, OG helpers |
| `seo-images.ts` | Image sitemap helpers, ImageObject builders, avatar SEO URLs |
| `projects.ts` | Typed `projects` array + `Project` type |
| `team.ts` | `getTeamMembers()` via GitHub Org + user profiles |
| `faq.ts` | FAQ entries shared by UI and JSON-LD |

Team fetching uses `next: { revalidate: 3600 }` and optional `GITHUB_TOKEN` for higher rate limits. Avatar hosts are allowed in `next.config.ts` (`avatars.githubusercontent.com`).

## Terminal overlay

Mounted in the root layout so it is available on every route:

```
TerminalManager
├── OpenTerminal      # FAB, bottom-left
└── LayerTerminal     # drag / fullscreen
    └── Terminal      # shell UI + Commands.ts lookup
```

Responses are static strings. No shell execution or network I/O.

## Styling

- Tailwind v4 via `@tailwindcss/postcss` in `postcss.config.mjs`
- Theme tokens in `:root` inside `globals.css` (e.g. `--color-primery`)
- Components use Tailwind arbitrary values such as `text-(--color-stroke)`

## Asset delivery

- Static files under `public/` (images, fonts, `manifest.json`, `llms.txt`)
- Optional Cloudinary / remote brand URLs via env (`NEXT_PUBLIC_BRAND_IMAGE_*`)
- `images.remotePatterns`: Cloudinary, `cipherunit.xyz`, GitHub avatars

## Dependency map

| Concern | Location |
|---------|----------|
| Routes | `src/app/*` |
| UI | `src/components/{landing,contacts,terminal,shared}` |
| Shared data | `src/lib/*` |
| Styles | `src/app/styles/globals.css` |
| Docs | `docs/` + `zensical.toml` |
| SEO helpers | `scripts/seo-notify.mjs` |
