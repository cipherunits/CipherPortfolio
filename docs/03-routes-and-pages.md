# 03 — Routes and Pages

## `/` (Home)

File: `src/app/page.tsx`

Assembles all landing sections from `src/components`.

## `/contact`

File: `src/app/contact/page.tsx`

Contains:

- section title via `NamePage`
- intro text (`ContactText`)
- contact card (`ContactBox`)
- social links (`ContactMedia`)

## `/github`

File: `src/app/github/page.tsx`

Behavior:

- sets route metadata
- redirects user to GitHub profile URL

## Not Found

File: `src/app/not-found.tsx`

Custom 404 page with a CTA back to `/`.
