# Content Update Guide

Quick map for editing static content. Paths are relative to the repository root.

## Site-wide brand & URLs

**File:** `src/lib/site.ts` + `.env.local`

- Name, tagline, description, URL, email, GitHub, docs URL
- Brand image paths (`NEXT_PUBLIC_BRAND_IMAGE_*`)
- Google verification (`GOOGLE_PUBLIC_KEY`)

## Hero

`src/components/landing/hero/Hero.tsx` — headline, copy, CTA, status strip. Image: `public/images/Hero.png`.

## Overview stats

`src/components/landing/overview/Overview.tsx`

- Project count and commands are hardcoded
- People count comes from `getTeamMembers()` (fallback `8+`)

## Projects

**Data:** `src/lib/projects.ts` — append objects to the `projects` array.

| Field | Required | Notes |
|-------|----------|-------|
| `slug` | yes | Stable id |
| `imageUrl` | yes | Under `public/images/` |
| `tech` | yes | Display string |
| `programmingLanguages` | yes | Array for schema |
| `title` / `description` | yes | Card copy |
| `linkLive` / `linkDocs` | yes | URLs |
| `buttonLive` / `buttonDocs` | no | Button labels |

UI: `Projects.tsx`, `ProjectBox.tsx`.

## Team

Members are **not** hardcoded. Source: GitHub org public members via `src/lib/team.ts`.

- Preview count: `LANDING_PREVIEW_COUNT` in `Team.tsx` (default `4`)
- Optional `GITHUB_TOKEN` for API rate limits
- Card UI: `MemberCard.tsx`

## Skills

`src/components/landing/skills/Skills.tsx` + `SkillBox.tsx` — edit categories and entries in the component tree.

## About

`src/components/landing/about-me/AboutMe.tsx` — copy + CTA. Image: `public/images/AboutMe.png`.

## FAQ

`src/lib/faq.ts` — shared by `Faq.tsx` and `FAQJsonLd`. Update both answer text and schema by editing this file only.

## Contact

| Surface | Files |
|---------|-------|
| Landing teaser | `landing/contact/Contact.tsx` |
| `/contact` page | `contacts/ContactText.tsx`, `ContactBox.tsx`, `ContactMedia.tsx` |

Email/GitHub resolve from `siteConfig` / env.

## Navigation & footer

- Nav: `src/components/shared/header/Item.ts`
- Footer: `src/components/shared/footer/Footer.tsx`

## Terminal commands

`src/components/terminal/Commands.ts` — add keys to the `commands` object. Client-only.

## Theme

`src/app/styles/globals.css` — CSS variables under `:root`.

## SEO surfaces

| What | Where |
|------|-------|
| Global metadata | `src/app/layout.tsx` |
| Per-route metadata | Each `src/app/*/page.tsx` |
| Sitemap | `src/app/sitemap.ts` |
| Robots | `src/app/robots.ts` |
| LLM summary | `public/llms.txt` |
| Manifest | `public/manifest.json` |
| IndexNow ping | `scripts/seo-notify.mjs` |

After meaningful URL or content changes, rebuild and consider running the SEO notify script.
