# Content Update Guide

This is the quick-reference map for updating static content in the portfolio. All paths are relative to the repository root.

## Hero Section

File: `src/components/landing/hero/Hero.tsx`

- Headline, intro paragraph, CTA label
- Status strip text ("Currently working on Cipher Unit")
- Image: `/images/Hero.png` in `public/`

## Overview Stats

File: `src/components/landing/overview/Overview.tsx`

- Edit the three stat numbers/labels directly in the component.

## Projects

Files:
- `src/components/landing/projects/components/Projects.tsx` — section header and project list
- `src/components/landing/projects/components/ProjectBox.tsx` — card layout
- `src/components/landing/projects/types/projects.type.ts` — `Project` type definition

To add a project, append an object to the `projects` array in `Projects.tsx`.

Project card props:
- `imageUrl`, `tech`, `title`, `description`, `linkLive`, `linkDocs`, `buttonLive`, `buttonDocs`

## Skills

Files:
- `src/components/landing/skills/Skills.tsx` — category list and layout
- `src/components/landing/skills/SkillBox.tsx` — single category box

Edit the `SkillBox` instances to change categories and tool entries.

## About Me

File: `src/components/landing/about-me/AboutMe.tsx`

- Brand description paragraph
- CTA label

Image: `/AboutMe.png`

## Contact Sections

### Landing contact teaser
`src/components/landing/contact/Contact.tsx`

- Description paragraph and message card on homepage.

### Dedicated `/contact` page
Files:
- `src/components/contacts/ContactText.tsx` — intro paragraph
- `src/components/contacts/ContactBox.tsx` — contact card (GitHub + email)
- `src/components/contacts/ContactMedia.tsx` — social links row

Email displayed is read from `process.env.CONTACT_EMAIL`.

## Header Navigation

File: `src/components/shared/header/Item.ts`

Edit the `navItems` array to change labels and links. The array contains:

```ts
[
  { name: "home", link: "/" },
  { name: "contact", link: "/contact" },
  { name: "docs", link: "https://cipherunits.github.io/CipherPortfolio/" },
]
```

## Footer

`src/components/shared/footer/Footer.tsx`

- App name, `CONTACT_EMAIL`, and social media image links
- Attribution text

## Terminal Commands

File: `src/components/terminal/Commands.ts`

Edit or extend the `commands` object to add new terminal responses. Client-side only; no backend.

## Global Theme

File: `src/app/styles/globals.css`

Edit CSS variables at the top of the file to change the color system. All components consume these via Tailwind arbitrary tokens.

## SEO Values

- Global / per-route: `src/app/layout.tsx`, `src/app/contact/page.tsx`, `src/app/github/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `public/robots.txt`
- Manifest: `public/manifest.json`
