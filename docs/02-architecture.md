# 02 — Architecture

## Rendering Model

- App Router is used via `src/app`.
- Root layout wraps all routes with shared chrome.
- Most components are server components by default.
- Interactive components use `"use client"` when needed.

## Layout Composition

`src/app/layout.tsx`:

- imports global styles
- defines site-wide metadata/viewport
- renders:
  - `Header`
  - page content (`children`)
  - `Footer`

## Home Assembly

`src/app/page.tsx` composes homepage sections in order:

1. `Hero`
2. `Overview`
3. `Projects`
4. `Skils`
5. `AboutMe`
6. `LandingContact`

## Shared Building Blocks

Reusable primitives under `src/components/shared`:

- `Button`
- `Fields`
- `ImageLogo`
- header and footer parts
