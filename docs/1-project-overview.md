# 1 — Overview

Portfolio site for **Cipher Unit** (`CipherUnit`): open-source developer tools and infrastructure.

| | |
|--|--|
| Version | `4.0.0` (`package.json`) |
| Site | https://cipherunit.xyz |
| Org | https://github.com/cipherunits |
| Email | cipherunit.dev@gmail.com |

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · pnpm

## What it does

- Landing: hero, projects, skills, team, FAQ, contact
- Routes: `/`, `/projects`, `/projects/[slug]`, `/team`, `/contact`
- Project pages fetch and render GitHub `README.md` when available
- Team from GitHub org API
- SEO: metadata, JSON-LD, sitemap, image sitemap, robots, `llms.txt`
- Client terminal overlay
- Docker production image

## Projects (order)

1. Fusion Framework  
2. Cipher Token  
3. Cipher Scope  
4. NPM Mirror  

Data: `src/lib/projects.ts`.
