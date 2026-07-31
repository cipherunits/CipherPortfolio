# Component Guide

Components live under `src/components/`. The tree is split into feature directories (`landing/`, `contacts/`, `terminal/`) and a `shared/` library.

## Landing Section Components (Homepage)

These are composed in order in `src/app/page.tsx`.

### `Hero`
`src/components/landing/hero/Hero.tsx`

- Top-of-page hero section.
- Contains headline, descriptive paragraph, and primary "Contact us !" CTA (links `/contact`).
- Renders `/images/Hero.png` alongside a status strip showing "Currently working on Cipher Unit".

### `Overview`
`src/components/landing/overview/Overview.tsx`

- Quick stats strip.
- Displays three stat blocks: `6+` Project Built, `8+` People, `∞` Commands.

### `Projects`
`src/components/landing/projects/components/Projects.tsx`

- Section shell rendered with `Fields text="projects"`.
- Hardcoded project cards (Cipher Token, NPM Mirror).
- Optional "View all projects →" link to `/projects` when `view` is true.

### `ProjectBox`
`src/components/landing/projects/components/ProjectBox.tsx`

Props (from `src/components/landing/projects/types/projects.type.ts`):
- `imageUrl`
- `tech`
- `title`
- `description`
- `buttonLive`, `buttonDocs`
- `linkLive`, `linkDocs`

Renders a bordered card containing:
- Project image via Next.js `Image`
- Tech keywords strip
- Title and description
- Live (primary) and Docs (stroke) action buttons

### `Skills`
`src/components/landing/skills/Skills.tsx`

- Skills section shell.
- Renders `/images/Skills.png` alongside categorized `SkillBox` elements arranged in rows.

Categories currently shown:
- Languages: `TypeScript JavaScript Python C# Rust C`
- Databases: `SQLite PostgreSQL MongoDB SQLServer MySQL`
- Frameworks: `React Django FastApi .NetCore`
- Tools: `VScode Neovim Linux Git`
- Other: `NextJs JWT Tailwind pip pnpm uv cargo`
- DevOps: `IIS Nginx DockerSvc Bash CI-Cd`

### `SkillBox`
`src/components/landing/skills/SkillBox.tsx`

Props:
- `title` — category header
- `subTitle` — space-separated skills

Renders a bordered box with category title and skill list.

### `AboutMe`
`src/components/landing/about-me/AboutMe.tsx`

- About section with brand description.
- Renders CTA button "Read more ->" and `/images/AboutMe.png`.

### `Contact` (landing)
`src/components/landing/contact/Contact.tsx`

- Secondary contact teaser on the homepage.
- Renders `Fields text="contacts"`, a description paragraph, and a contact card with GitHub + email links.
- Uses `siteConfig` from `src/lib/site.ts` for email and GitHub URL.

## Contact Subcomponents (`/contact` route)

### `ContactText`
`src/components/contacts/ContactText.tsx`

- Intro paragraph for the contact page.
- Uses hardcoded text.

### `ContactBox`
`src/components/contacts/ContactBox.tsx`

- Contact card on `/contact`.
- Shows GitHub username (`cipherunits`) and `mailto:` link via `siteConfig`.

### `ContactMedia`
`src/components/contacts/ContactMedia.tsx`

- Social / community link row on `/contact`.
- Links to `https://github.com/cipherunits/` (GitHub profile).

## Shared Components (`src/components/shared/`)

### `Button`
`src/components/shared/Button.tsx`

- Themed action button.
- Props:
  - `children` — button label
  - `Theme` — `"primary"` (default) or `"stroke"`
- Uses Tailwind arbitrary color tokens for border and hover states.

### `Fields`
`src/components/shared/Fields.tsx`

- Reusable section heading line.
- Renders `#` + text in `text-white` with an accent-colored trailing border.

### `NamePage`
`src/components/shared/NamePage.tsx`

- Route-based section heading for nested pages.
- Uses `next/navigation` `usePathname()` to derive the last path segment.
- Client component.

### `ImageLogo`
`src/components/shared/ImageLogo.tsx`

- Brand logo + "Cipher Unit" wordmark linking to `/`.
- Renders `/images/CipherUnit.png` at `width={25}` / `height={25}`.

### `Header`
`src/components/shared/header/Header.tsx`

- Top navigation bar.
- Desktop: horizontal nav from `NavItem`.
- Mobile: hamburger icon (`MenuIcon.png`) toggling a full-screen overlay (`CloseIcon.png`).
- Client component with `useState` for menu visibility.
- Header is hidden entirely when the mobile overlay is open.

### `NavItem`
`src/components/shared/header/NavItem.tsx`

- Renders navigation links from `Item.ts`.
- Highlights the active route using `next/navigation` `usePathname()`.

### `Item`
`src/components/shared/header/Item.ts`

- Static configuration file exporting `navItems` array.
- Current items: `home` (`/`), `contact` (`/contact`), `docs` (external GitHub Pages URL).

### `Footer`
`src/components/shared/footer/Footer.tsx`

- Bottom footer with:
  - Logo + `CONTACT_EMAIL`
  - "Media" links to GitHub, CipherUnit, Linux assets
  - Attribution line "Made with ❤️ for developers by CipherUnit"

### `JsonLd`
`src/components/shared/JsonLd.tsx`

- Generic JSON-LD script injector.
- Exports pre-built objects for:
  - `OrganizationJsonLd`
  - `WebSiteJsonLd`
  - `FAQJsonLd`
  - `BreadcrumbJsonLdHome`
  - `BreadcrumbJsonLdContact`
  - `BreadcrumbJsonLdGithub`

These are injected by the root layout for structured search data.

## Terminal Components

These components render the interactive terminal overlay and are mounted inside the root layout.

### `TerminalManager`
`src/components/terminal/TerminalManager.tsx`

- Toggles terminal open/closed state.

### `OpenTerminal`
`src/components/terminal/OpenTerminal.tsx`

- Floating terminal icon at `fixed left-4 bottom-4 z-50`.
- Shows "Open Terminal" tooltip on hover.

### `LayerTerminal`
`src/components/terminal/LayerTerminal.tsx`

- Modal window wrapper.
- Handles drag positioning via pointer events.
- Auto-fullscreen on mobile (`width <= 768px`).
- Flips between `full`, `min`, and `close` size states.

### `Terminal`
`src/components/terminal/Terminal.tsx`

- Terminal shell UI.
- macOS-style traffic-light controls (close/minimize/maximize).
- Renders command history and output.
- Accepts Enter-key input and looks up responses from `Commands.ts`.

### `Commands`
`src/components/terminal/Commands.ts`

- Exports a `commands` map of predefined response strings.
- Supported client-side commands: `help`, `ls`, `pwd`, `whoami`, `about`, `skills`, `projects`, `contact`, `social`, `github`, `blog`, `date`, `uptime`, `neofetch`, `cat`, `clear`.

Note: The `social` command lists `github.com/cipherunit` (no trailing `s`), while the actual links in components use `cipherunits`.

### `Type`
`src/components/terminal/Type.ts`

- Exports `HistoryItem` interface: `{ command: string; output: string }`.
