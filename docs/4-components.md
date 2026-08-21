# 4 — Components

## Landing

| Component | Path | Notes |
|-----------|------|--------|
| Hero | `landing/hero/Hero.tsx` | |
| Overview | `landing/overview/Overview.tsx` | Stats |
| Projects | `landing/projects/components/Projects.tsx` | Grid from `projects` |
| ProjectBox | `.../ProjectBox.tsx` | Card → `/projects/[slug]` |
| ProjectReadmeView | `.../ProjectReadmeView.tsx` | Markdown + GFM + sanitized HTML |
| Skills | `landing/skills/` | |
| Team / MemberCard | `landing/team/` | |
| AboutMe | `landing/about-me/` | |
| Faq | `landing/faq/` | Uses `lib/faq.ts` |
| Contact teaser | `landing/contact/` | |

## Contact page

`contacts/ContactText.tsx`, `ContactBox.tsx`, `ContactMedia.tsx`.

## Shared

Header (`header/`), Footer, Button, NamePage, SubNamePage, ImageLogo, JsonLd.

JSON-LD builders in `shared/JsonLd.tsx`: org/website, projects graph, project page, team, contact, FAQ.

## Terminal

`terminal/TerminalManager.tsx`, `OpenTerminal.tsx`, `Commands.ts`.
