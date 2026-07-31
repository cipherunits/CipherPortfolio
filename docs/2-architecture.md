# Architecture

## Rendering Model

The app uses Next.js 16 **App Router** with server-side rendering by default.

- Most components are **Server Components**.
- Interactive components are marked with `"use client"` when they require browser APIs, React hooks, or client-side interactivity.

Client components in this project:
- `Header` — mobile menu toggle state
- `NamePage` — uses `next/navigation` `usePathname`
- `Terminal` — command input and history state
- `OpenTerminal` — click handler
- `TerminalManager` — toggle state
- `LayerTerminal` — drag/position state

## Layout Composition

`src/app/layout.tsx` is the root layout for the entire application. It:

1. Imports global styles from `src/app/styles/globals.css`
2. Declares `metadata` (title, description, Open Graph, Twitter, robots, canonical, icons, search action)
3. Declares `viewport`
4. Renders the DOM shell:
   - `<JsonLd />` blocks for `OrganizationJsonLd`, `WebSiteJsonLd`, `FAQJsonLd`, `BreadcrumbJsonLdHome`
   - `<Header />`
   - `{children}` (page content)
   - `<TerminalManager />` — floating terminal overlay available on all pages
   - `<Footer />`

## Home Assembly

`src/app/page.tsx` composes the homepage sections in order:

1. `Hero`
2. `Overview`
3. `Projects`
4. `Skills`
5. `AboutMe`
6. `Contact` (landing)

## Terminal Overlay

The terminal feature is mounted at the layout level so it is available globally across every route. The component tree is:

- `TerminalManager` — toggles terminal visibility
  - `OpenTerminal` — floating action button at bottom-left
  - `LayerTerminal` — draggable/fullscreen wrapper
    - `Terminal` — UI shell + command input + history
    - `Commands.ts` — dictionary of supported text responses

Command responses are predefined strings in `src/components/terminal/Commands.ts`. No backend execution occurs.

## Styling Strategy

Tailwind CSS v4 is configured via `@tailwindcss/postcss` in `postcss.config.mjs`.

Global theme tokens are declared as CSS variables in `src/app/styles/globals.css` and consumed via Tailwind arbitrary value syntax, for example `text-(--color-primery)`.

## Asset Delivery

- Local static assets live under `public/`.
- Remote images (profile/logo assets) are served from Cloudinary (`res.cloudinary.com`) and configured as allowed `remotePatterns` in `next.config.ts`.

## Dependency Structure

| Concern | Location | Notes |
|---------|----------|-------|
| Routes | `src/app/*` | App Router files: `page.tsx`, `layout.tsx`, `contact/page.tsx`, `github/page.tsx`, `not-found.tsx`, `sitemap.ts` |
| UI | `src/components/` | Split into `landing/`, `contacts/`, `terminal/`, `shared/` |
| Styles | `src/app/styles/globals.css` | Tailwind v4 import + CSS variables |
| Config | root config files | `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` |
| Docs | `docs/` | Zensical markdown source |
