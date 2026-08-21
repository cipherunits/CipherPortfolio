# 2 — Architecture

## App Router

```
src/app/
  layout.tsx              # shell, fonts, global metadata, org/website JSON-LD
  page.tsx                # landing (revalidate 3600)
  projects/page.tsx
  projects/[slug]/page.tsx  # SSG + revalidate 3600 + README
  team/page.tsx
  contact/page.tsx
  sitemap.ts
  robots.ts
  image-sitemap.xml/route.ts
  avatars/[login]/route.ts  # same-origin GitHub avatar proxy
  not-found.tsx
```

`layout.tsx` wraps Header → `{children}` → TerminalManager → Footer.

## Data (`src/lib/`)

| File | Role |
|------|------|
| `site.ts` | URL, brand, email, helpers |
| `projects.ts` | Project list + types |
| `project-readme.ts` | GitHub README fetch + URL normalize |
| `team.ts` | Org members API |
| `faq.ts` | FAQ copy + schema source |
| `seo-images.ts` | Image titles, OG helpers, image sitemap XML |

## README pipeline

1. `getProjectReadme(project)` uses `linkLive` → owner/repo  
2. Prefer `raw.githubusercontent.com` (`main` / `master`)  
3. Fallback: GitHub Contents API (`GITHUB_TOKEN` optional)  
4. `ProjectReadmeView` renders markdown (GFM + safe HTML)  
5. Missing README → nothing rendered  

## Styling

`src/app/styles/globals.css` — CSS variables under `:root`, Tailwind v4 `@import` / `@theme`.

## Terminal

Client-only overlay: `src/components/terminal/`. Commands in `Commands.ts`.
