# Project Overview

## Purpose

CipherPortfolio is the official portfolio website for **Cipher Unit (CipherUnit)**.

It presents:

- Brand identity and mission
- Highlighted open-source projects
- Team members from the GitHub organization
- Technical skill stack and FAQ
- Contact channels and an interactive terminal

## Site identity

| Field | Value |
|-------|-------|
| Name | Cipher Unit |
| Short name | CipherUnit |
| Website | https://cipherunit.xyz |
| Contact | cipherunit.dev@gmail.com |
| GitHub | https://github.com/cipherunits |
| Docs | https://cipherunits.github.io/CipherPortfolio/ |

Central config: `src/lib/site.ts` (`siteConfig`).

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Fonts | Local Inter via `next/font/local` |
| Data | `src/lib/*` (site, projects, team, FAQ) |
| Structured data | JSON-LD (Organization, WebSite, FAQ, breadcrumbs, page graphs) |
| Linting | ESLint 9 + `eslint-config-next` |
| Docs | Zensical → GitHub Pages |
| Package manager | pnpm |
| Containers | Docker multi-stage (`output: "standalone"`) |

## Features

- Landing page: Hero → Overview → Projects → Skills → Team → About → FAQ → Contact
- Routes: `/`, `/projects`, `/team`, `/contact`, `/github` (redirect), custom 404
- Team grid fed by GitHub Org API (`getTeamMembers`) with 1-hour revalidation
- SEO: Open Graph, Twitter Cards, dynamic sitemap/robots, `public/llms.txt`, IndexNow helper
- Global interactive terminal overlay (client-side command map)
- Security headers in `next.config.ts`
- Theme tokens as CSS variables in `src/app/styles/globals.css`

## Version

- Package version: **2.3.2** (`package.json`)
- License: **MIT**
