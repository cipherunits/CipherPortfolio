# SEO & Metadata

## Global Metadata

File: `src/app/layout.tsx`

The root layout exports `metadata` and `viewport` objects from `next`.

### Title

Template is `"%s | Cipher Unit"`, defaulting to:
`Cipher Unit (CipherUnit) | Open-Source Developer Tools & Engineering Collective`

### Description

Focused on the Cipher Unit mission: secure, scalable, high-quality software systems.

### Keywords

Cipher Unit, CipherUnit, open source developer tools, clean architecture, scalable systems, backend tools, dev infrastructure, engineering collective.

### Open Graph

- Type: website
- URL: https://cipherunit.xyz
- Title and description variants
- Image set (1200x630) pointing to Cloudinary assets
- Locale: en_US

### Twitter Card

- Card type: `summary_large_image`
- Images: Cloudinary main hero asset

### Robots

- `index: true`, `follow: true`
- Google-specific directives for image preview and snippet limits

### Canonical & Alternates

- Canonical: `/`
- Languages: `en` → https://cipherunit.xyz, `fa` → https://cipherunit.xyz/?lang=fa

### Icons / App Metadata

- Favicon / icon: Cloudinary logo images
- Apple touch icon: 180x180 JPEG from Cloudinary
- Web app capable with `black-translucent` status bar style
- Format detection: telephone off, email on, address off, date off, URL on
- Google site verification meta tag present

### Structured Data (JSON-LD)

Four (4) schema pieces are injected by `<JsonLd />` in the root layout:

1. **Organization** (`OrganizationJsonLd`)
   - Name: Cipher Unit
   - Founders, contact point, sameAs, areaServed
2. **WebSite** (`WebSiteJsonLd`)
   - SearchAction pointing to `https://cipherunit.xyz/?q={search_term_string}`
3. **FAQPage** (`FAQJsonLd`)
   - Four questions about Cipher Unit, tools, open-source status, and contact
4. **BreadcrumbList** (`BreadcrumbJsonLdHome`)

## Per-Route Metadata

### `/contact`

- Title: `Contact CipherUnit — Cipher Unit Open Source Developer Tools`
- Canonical: `/contact`
- Breadcrumb JSON-LD: `BreadcrumbJsonLdContact` (Home → Contact)

### `/github`

- `robots: { index: false, follow: false }`
- Canonical: `/github`
- Viewport: standard device-width declaration
- No content rendered; user is redirected server-side.

## Sitemap

File: `src/app/sitemap.ts`

Generates a standard XML sitemap with three entries:

| URL | Priority | Frequency |
|-----|----------|-----------|
| `/` | 1.0 | daily |
| `/contact` | 0.8 | monthly |
| `/github` | 0.6 | weekly |

All entries include `lastModified` (2025-01-01) and `alternates.languages` (`en`, `fa`).

## robots.txt

File: `public/robots.txt`

Rules:
- `User-agent: *` — allow `/`, `/contact`, `/github`; block `/_next/static/`, `/_next/data/`, `/api/`
- `Googlebot` — full allow with crawl delay 0
- `Bingbot` — full allow with crawl delay 1
- Host and sitemap directives pointing to https://cipherunit.xyz

## Security Headers

`next.config.ts` injects the following HTTP response headers for all routes:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

## Manifest

`public/manifest.json` enables the site to be installed as a PWA with:
- Name: Cipher Unit
- Short name: CipherUnit
- Background color: `#0a0a0a`
- Theme color: `#22c55e`
- Icons: `/images/CipherUnit.png` (192x192), `/images/Hero.png` (512x512)
