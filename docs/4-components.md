# Component Guide

Components live under `src/components/`, split into `landing/`, `contacts/`, `terminal/`, and `shared/`.

## Landing (homepage sections)

Composed in `src/app/page.tsx`.

### `Hero`

`src/components/landing/hero/Hero.tsx`

Headline, supporting copy, Contact CTA (`/contact`), hero image, status strip.

### `Overview`

`src/components/landing/overview/Overview.tsx`

Async server component. Stats: projects built, people (from `getTeamMembers()` length, fallback `8+`), commands (`∞`).

### `Projects`

`src/components/landing/projects/components/Projects.tsx`

- Data from `src/lib/projects.ts`
- `view={true}` shows “View all projects →” linking to `/projects`
- Cards rendered with `ProjectBox`

### `ProjectBox`

`src/components/landing/projects/components/ProjectBox.tsx`

Props match `Project` in `src/lib/projects.ts` (`imageUrl`, `tech`, `title`, `description`, links/buttons). Microdata + Live/Docs actions.

Type re-export: `src/components/landing/projects/types/projects.type.ts`.

### `Skills` / `SkillBox`

`src/components/landing/skills/`

Categorized skill rows beside `/images/Skills.png`.

### `Team` / `MemberCard`

`src/components/landing/team/`

- `Team` — async; fetches members; `preview` shows 4 + “View all team →”
- `MemberCard` — avatar, name, bio, GitHub link
- Returns `null` when the API yields no members

### `AboutMe`

`src/components/landing/about-me/AboutMe.tsx`

Brand blurb, CTA, `/images/AboutMe.png`.

### `Faq`

`src/components/landing/faq/Faq.tsx`

Renders entries from `src/lib/faq.ts` (shared with FAQ JSON-LD).

### `Contact` (landing)

`src/components/landing/contact/Contact.tsx`

Homepage contact teaser using `siteConfig` for email/GitHub.

## Contact page (`/contact`)

| Component | Path | Role |
|-----------|------|------|
| `ContactText` | `contacts/ContactText.tsx` | Intro |
| `ContactBox` | `contacts/ContactBox.tsx` | GitHub + mailto |
| `ContactMedia` | `contacts/ContactMedia.tsx` | Social links |

## Shared

| Component | Notes |
|-----------|-------|
| `Button` | `Theme`: `primary` \| `stroke` |
| `Fields` | Section heading (`#` + label + accent rule) |
| `NamePage` | Client; last path segment as title |
| `SubNamePage` | Supporting subtitle under `NamePage` |
| `ImageLogo` | Logo + wordmark → `/` |
| `Header` / `NavItem` | Desktop nav + mobile overlay from `Item.ts` |
| `Footer` | Email, media links, attribution |
| `JsonLd` | Script injector + schema builders/constants |

### JSON-LD exports (`JsonLd.tsx`)

- `OrganizationJsonLd`, `WebSiteJsonLd`, `FAQJsonLd`, `HomePageJsonLd`
- Breadcrumbs: Home, Contact, Projects, Team
- `ContactPageJsonLd`
- `buildProjectsGraphJsonLd()`, `buildTeamGraphJsonLd(members)`

## Terminal

| Component | Role |
|-----------|------|
| `TerminalManager` | Visibility toggle |
| `OpenTerminal` | Fixed FAB (`left-4 bottom-4`) |
| `LayerTerminal` | Drag; fullscreen ≤768px |
| `Terminal` | Shell UI + history |
| `Commands.ts` | Command → string map |
| `Type.ts` | `HistoryItem` |

Supported commands include: `help`, `ls`, `pwd`, `whoami`, `about`, `skills`, `projects`, `contact`, `social`, `github`, `date`, `neofetch`, `cat`, `clear`.
