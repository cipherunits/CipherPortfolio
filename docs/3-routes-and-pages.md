# Routes & Pages

## `/` — Home

**File:** `src/app/page.tsx`

Landing composition: Hero → Overview → Projects → Skills → Team (preview) → AboutMe → Faq → Contact.

- `revalidate = 3600`
- Page metadata overrides title/OG/Twitter for the home absolute title
- JSON-LD: `HomePageJsonLd`, `BreadcrumbJsonLdHome`, `FAQJsonLd`

## `/projects`

**File:** `src/app/projects/page.tsx`

Full projects listing via `<Projects view={false} />`.

- Canonical `/projects`
- JSON-LD: `buildProjectsGraphJsonLd()`

## `/team`

**File:** `src/app/team/page.tsx`

Public GitHub organization members.

- `revalidate = 3600`
- Loads members with `getTeamMembers()` from `src/lib/team.ts`
- Renders `<Team preview={false} />`
- JSON-LD: `buildTeamGraphJsonLd(members)`
- Header copy via `NamePage` + `SubNamePage`

## `/contact`

**File:** `src/app/contact/page.tsx`

Dedicated contact page:

- `NamePage` — path-derived heading
- `ContactText` — intro
- `ContactBox` — GitHub + email
- `ContactMedia` — social row

Metadata and contact-page JSON-LD are defined on the route.

## `/github`

**File:** `src/app/github/page.tsx`

- `robots: { index: false, follow: false }`
- Server `redirect()` to `https://github.com/cipherunits`
- Disallowed in `src/app/robots.ts`

## Not found

**File:** `src/app/not-found.tsx`

Custom 404 with CTA back to `/`.

## Sitemap

**File:** `src/app/sitemap.ts`

| Path | changeFrequency | priority |
|------|-----------------|----------|
| `/` | weekly | 1.0 |
| `/projects` | weekly | 0.9 |
| `/team` | weekly | 0.85 |
| `/contact` | monthly | 0.8 |

`lastModified` is `new Date()` at build/request time. `/github` is intentionally omitted.

## Robots

**File:** `src/app/robots.ts` (dynamic; no static `public/robots.txt`)

- Default UA: allow `/`, disallow `/api/`, `/_next/`, `/private/`, `/_vercel/`, `/github`
- AI crawlers (GPTBot, ClaudeBot, etc.): allow `/` and `/llms.txt`
- `sitemap` + `host` from `siteConfig`

## Navigation

**File:** `src/components/shared/header/Item.ts`

```ts
[
  { name: "home", link: "/" },
  { name: "projects", link: "/projects" },
  { name: "team", link: "/team" },
  { name: "contact", link: "/contact" },
  { name: "docs", link: "https://cipherunits.github.io/CipherPortfolio/" },
]
```
