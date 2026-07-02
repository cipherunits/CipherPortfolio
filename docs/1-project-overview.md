# Project Overview

## Purpose

CipherPortfolio is the official portfolio website for **Cipher Unit (CipherUnit)**.

It presents:
- Cipher Unit brand identity and mission
- Highlighted open-source projects
- Technical skill stack
- Contact channels and social links
- Interactive terminal experience

## Site Identity

- **Name:** Cipher Unit
- **Website:** https://cipherunit.xyz
- **Contact:** cipherunit.dev@gmail.com
- **GitHub:** https://github.com/cipherunits
- **Author:** MohammadTahaBatoomi

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Icons / Assets | Next.js Image + custom PNG assets |
| Structured Data | JSON-LD (`Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`) |
| Linting | ESLint 9 + `eslint-config-next/core-web-vitals` + TypeScript |
| Docs | Zensical → GitHub Pages |
| Package Manager | pnpm |
| Containerization | Docker (multi-stage, standalone build) |

## High-Level Features

- Responsive single-page landing layout with reusable section components
- `/contact` route with structured breadcrumb JSON-LD
- `/github` route with external redirect and noindex/nofollow
- Custom `/404` not-found page
- Interactive draggable terminal overlay with command support
- SEO-ready metadata (Open Graph, Twitter Cards, robots, canonical, sitemap)
- Security headers defined in Next.js config
- Typed reusable `Project` component for feature cards
- Centralized theme via CSS variables in `globals.css`

## Version

Current package version: `1.3.4`
License: MIT
