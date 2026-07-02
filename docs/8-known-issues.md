# Known Issues & Notes

## Content Typos

Several visible strings contain text errors. They are preserved in the source as written and can be corrected in a dedicated content pass:

| Location | Current text | Suggested |
|----------|-------------|-----------|
| `src/app/page.tsx:6` | `<Co1ntact />` | `<Contact />` (or rename imported component) |
| `src/components/landing/skils/Skils.tsx:1` | Folder/file name `skils` | `skills` |
| `src/components/contacts/ContactText.tsx:6` | `IGet in touch` | `Get in touch` |
| `src/components/landing/about-me/AboutMe.tsx:11` | `CiphrtUnit !` | `CipherUnit !` |
| `src/components/landing/overview/Overview.tsx:3` | `items-cennter` | `items-center` |
| `src/components/landing/projects/types/projects.type.ts:4` | `diceription` | `description` |
| `src/components/landing/projects/components/ProjectBox.tsx:10` | `diceription` | `description` |
| `src/components/landing/projects/components/ProjectBox.tsx:8` | `teck` | `tech` |

## GitHub URL Inconsistency

Several components hardcode the GitHub profile URL. Unifying this value in a central config module would reduce drift:
- `https://github.com/cipherunits` (redirect route in `src/app/github/page.tsx`)
- `https://github.com/cipherunits/` (media links, footer, contact components)

## Repeated Contact Email Source

`CONTACT_EMAIL` is rendered directly from `process.env` in multiple components (`Footer`, `Contact.tsx`, `ContactBox.tsx`). A shared config module would centralize this.

## Docs vs. Site

- The docs site (this folder) is published via Zensical to GitHub Pages.
- The main portfolio site lives under `src/app/` and is deployed separately (Vercel recommended).
- `site/` at the root contains the built Zensical output and should not be edited directly.

## Dockerfile

The Dockerfile is functional but unlabeled beyond author/type tags. Consider adding `ARG` declarations for Node version and pnpm version if extending the pipeline.

## pnpm-workspace.yaml

The workspace file disables native builds for `sharp` and `unrs-resolver`. This is intentional for compatibility in constrained environments.

## Social Command Mismatch

The terminal's `social` command lists `github.com/cipherunit` (no trailing `s`), while the actual portfolio links all use `cipherunits` (with `s`).
