# CipherPortfolio



Official portfolio website for **Cipher Unit**, built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

<a href="https://cipherunit.xyz/" style="margin-bottom:30px;">
  <img src="https://raw.githubusercontent.com/cipherunits/CipherPortfolio/main/public/github-image-page.png" alt="Github Page Image" />
</a>

<div align="center" style="margin-top: 30px; margin-bottom:30px;">
  <a href="https://github.com/cipherunits/CipherPortfolio/releases">
    <img src="https://img.shields.io/github/v/release/cipherunits/CipherPortfolio" alt="Latest Version" />
  </a>
  <a href="https://github.com/cipherunits/CipherPortfolio/stargazers">
    <img src="https://img.shields.io/github/stars/cipherunits/CipherPortfolio" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/cipherunits/CipherPortfolio/network/members">
    <img src="https://img.shields.io/github/forks/cipherunits/CipherPortfolio" alt="GitHub Forks" />
  </a>
  <a href="https://github.com/cipherunits/CipherPortfolio/issues">
    <img src="https://img.shields.io/github/issues/cipherunits/CipherPortfolio" alt="Issues" />
  </a>
  <a href="https://github.com/cipherunits/CipherPortfolio/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/cipherunits/CipherPortfolio" alt="License" />
  </a>
  <a href="https://github.com/cipherunits/CipherPortfolio/commits/main">
    <img src="https://img.shields.io/github/last-commit/cipherunits/CipherPortfolio" alt="Last Commit" />
  </a>
</div>

- **Author:** MohammadTahaBatoomi — [cipherunit.dev@gmail.com](mailto:cipherunit.dev@gmail.com)
- **Site:** [https://cipherunit.xyz](https://cipherunit.xyz)
- **License:** MIT

## Documentation

📖 **Full Documentation:** [https://cipherunits.github.io/CipherPortfolio/](https://cipherunits.github.io/CipherPortfolio/)

The `docs/` directory contains implementation-first documentation covering architecture, routes, components, SEO, and troubleshooting.

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16.2.7 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| ESLint | ^9 |
| Package Manager | pnpm |

## Project Structure

```text
CipherPortfolio/
├── .github/                   # GitHub workflows / CI
├── docs/                      # Zensical-based documentation site
├── public/                    # Static assets (images, robots.txt, manifest.json)
├── site/                      # Built documentation output
├── src/
│   ├── app/
│   │   ├── contact/           # /contact page
│   │   ├── github/            # /github redirect page
│   │   ├── layout.tsx         # Root layout, metadata, viewport, security headers
│   │   ├── not-found.tsx      # 404 page
│   │   ├── page.tsx           # Homepage composition
│   │   ├── projects/          # /projects page
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── styles/
│   │       └── globals.css    # Global Tailwind + theme variables
│   └── components/
│       ├── contacts/          # Contact section components
│       ├── landing/           # Homepage sections
│       │   ├── about-me/
│       │   ├── contact/
│       │   ├── hero/
│       │   ├── overview/
│       │   ├── projects/
│       │   └── skils/
│       ├── shared/            # Shared UI (header, footer, buttons, JsonLd)
│       └── terminal/          # In-page terminal components
├── Makefile                   # Task runner for install, dev, build, Docker
├── next.config.ts             # Standalone output, security headers, image config
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── zensical.toml              # Documentation site config
```

## Routes

- `/` — Homepage (hero, overview, projects, skills, contact)
- `/contact` — Contact page
- `/projects` — Projects page
- `/github` — Redirect to Cipher Unit GitHub profile


### Base URL

`https://cipherunit.xyz`


## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Using Makefile (Recommended)

```bash
make install      # Install dependencies
make dev          # Start development server
```

Open: `http://localhost:3000`

### Manual Commands

```bash
pnpm install
pnpm dev
```

### Build & Start (Production)

```bash
make build-app    # Build Next.js app
make run          # Run via Docker
```

Or manually:

```bash
pnpm build
pnpm start
```

### Lint

```bash
make lint         # If defined in Makefile
# or
pnpm lint
```

## Makefile Reference

A `Makefile` is included to simplify common development and deployment tasks:

```bash
make help         # Show all available commands
make install      # Install dependencies with pnpm
make dev          # Run development server locally
make build-app    # Build Next.js app locally
make build        # Build Docker image
make run          # Run Docker container on port 3000
make stop         # Stop running container
make restart      # Restart container
make logs         # Show container logs
make clean        # Remove container and image
```

## Deployment

This is a standard Next.js app and can be deployed on any platform that supports Node.js, including Vercel.

Before deployment, verify:
- Correct production domain in metadata (`src/app/layout.tsx`), sitemap (`src/app/sitemap.ts`), and `public/robots.txt`
- Environment variables if you opted to use them



<p align="center" style="margin-top: 100px;">
  <b><i>Made with ❤️ for developers by CipherUnit</i></b>
</p>