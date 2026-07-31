# Routes & Pages

## `/` (Home)

File: `src/app/page.tsx`

Part of: `src/app/page.tsx:1`

Assembles all landing sections from `src/components` in the following order:
1. `Hero`
2. `Overview`
3. `Projects`
4. `Skills`
5. `AboutMe`
6. `Contact` (landing)

Metadata is inherited from the root layout.

## `/contact`

File: `src/app/contact/page.tsx`

Part of: `src/app/contact/page.tsx:1`

Renders the dedicated contact page:

- `NamePage` — dynamic route heading (`/contact`)
- `ContactText` — introductory sentence
- `ContactBox` — GitHub + email contact cards
- `ContactMedia` — social/community links row

Metadata:
- Title: `Contact CipherUnit — Cipher Unit Open Source Developer Tools`
- Canonical: `/contact`
- Embedded JSON-LD: `BreadcrumbJsonLdContact`

## `/github`

File: `src/app/github/page.tsx`

Part of: `src/app/github/page.tsx:1`

Behavior:
- Sets route metadata (`robots: { index: false, follow: false }`, canonical `/github`)
- Calls Next.js `redirect()` to `https://github.com/cipherunits`
- No content is rendered; the user is redirected server-side.

## `/404` (Not Found)

File: `src/app/not-found.tsx`

Part of: `src/app/not-found.tsx:1`

- Custom 404 page rendered at a large headline scale.
- CTA button linking back to `/`.

## Sitemap

File: `src/app/sitemap.ts`

Part of: `src/app/sitemap.ts:1`

Generates a standard XML sitemap with three entries:

| Path | lastModified | changeFrequency | priority |
|------|------------|----------------|----------|
| `/` | 2025-01-01 | daily | 1.0 |
| `/contact` | 2025-01-01 | monthly | 0.8 |
| `/github` | 2025-01-01 | weekly | 0.6 |

All entries include `alternates.languages` for `en` and `fa`.

## robots.txt

File: `public/robots.txt`

Part of: `public/robots.txt:1`

Rules:
- `User-agent: *` — allow `/`, `/contact`, `/github`; block `/_next/static/`, `/_next/data/`, `/api/`
- `Googlebot` — full allow with crawl delay 0
- `Bingbot` — full allow with crawl delay 1
- Host: `https://cipherunit.xyz`
- Sitemap: `https://cipherunit.xyz/sitemap.xml`
