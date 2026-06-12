# CipherPortfolio

Official portfolio website for **Cipher Unit**, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

This project presents Cipher Unit’s brand, featured work, technical skills, contact channels, and SEO-ready public pages in a clean and responsive interface.

## Highlights

- Responsive single-page portfolio layout with reusable UI components
- Dedicated `/github` route that redirects visitors to the Cipher Unit GitHub profile
- SEO-focused metadata configuration (Open Graph, Twitter cards, robots, canonical, sitemap)
- Componentized architecture for quick content updates and future feature growth
- Tailwind CSS v4 styling with a centralized custom color system

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + global CSS variables
- **Linting:** ESLint 9 + `eslint-config-next`
- **Package Manager:** pnpm

## Project Structure

```text
CipherPortfolio/
├── public/                         # Static assets (logos, images, robots.txt)
├── src/
│   ├── app/
│   │   ├── github/page.tsx         # Redirect route to GitHub
│   │   ├── layout.tsx              # Global layout + metadata + viewport
│   │   ├── page.tsx                # Main homepage composition
│   │   ├── sitemap.ts              # Dynamic sitemap entries
│   │   └── styles/globals.css      # Global Tailwind + theme variables
│   └── components/
│       ├── about-me/
│       ├── contacts/
│       ├── hero/
│       ├── overview/
│       ├── projects/
│       ├── skils/
│       └── shared/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+

### Install Dependencies

```bash
pnpm install
```

### Run in Development

```bash
pnpm dev
```

Open: `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Environment Variables

Create a `.env` (or preferably `.env.local`) file:

```env
APP_NAME=CipherUnit
APP_VERSION=1.2
CONTACT_EMAIL=your-email@example.com
GITHUB_API_BASE_URL=https://api.github.com/users
GITHUB_ACCESS_TOKEN=replace-with-a-real-token
```

### Current Usage

- `CONTACT_EMAIL` is used in:
  - `src/components/shared/footer/Footer.tsx`
  - `src/components/contacts/Contact.tsx`
- `GITHUB_API_BASE_URL` and `GITHUB_ACCESS_TOKEN` are defined for future API integrations.

> Do not commit real secrets/tokens to source control.

## SEO Implementation

SEO configuration is already integrated through:

- Rich `metadata` and `viewport` in `src/app/layout.tsx`
- Sitemap generation in `src/app/sitemap.ts`
- Crawler directives in `public/robots.txt`

The project base URL is currently configured as: `https://cipherunit.xvz`.

## Content Customization Guide

- **Header navigation items:** `src/components/shared/header/Item.ts`
- **Homepage section assembly:** `src/app/page.tsx`
- **Project cards:** `src/components/projects/Projects.tsx`
- **Skills blocks:** `src/components/skils/Skils.tsx`
- **Contact channels:** `src/components/contacts/Contact.tsx`
- **Brand assets:** files inside `public/`

## Available Scripts

From `package.json`:

- `pnpm dev` — Start development server
- `pnpm build` — Create production build
- `pnpm start` — Run production server
- `pnpm lint` — Run ESLint checks

## Deployment

This is a standard Next.js app and can be deployed on:

- Vercel (recommended)
- Any Node.js-compatible host supporting Next.js standalone/server mode

Before deployment, verify:

- Correct environment variables
- Correct production domain in metadata/sitemap/robots

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make focused, clean commits
4. Run lint/build checks
5. Open a pull request

## Notes

- `Dockerfile` currently exists but is empty.
- Main branch recent tag lineage includes `v1.2`.
