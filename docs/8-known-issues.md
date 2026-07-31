# Known Issues & Notes

## Resolved in production pass

The following content/config issues were fixed for production readiness:

| Previous issue | Resolution |
|----------------|------------|
| `<Co1ntact />` import typo | Renamed to `<Contact />` |
| Folder/file `skils` / `Skils` | Renamed to `skills` / `Skills` |
| `IGet in touch` | Corrected to `Get in touch` |
| `CiphrtUnit !` | Corrected to `CipherUnit!` |
| `items-cennter` | Corrected to `items-center` |
| `teck` / `diceription` | Renamed to `tech` / `description` |
| `Instageram_PAGE` | Prefer `INSTAGRAM_PAGE` (legacy key still accepted) |
| Manifest at `public/images/manifest.json` | Moved to `public/manifest.json` |
| Broken icon path `/Hero.png` in manifest | Fixed to `/images/Hero.png` |
| Wrong projects domain `cipherunit.com` | Uses `siteConfig.url` (`cipherunit.xyz`) |
| Google verification meta double-prefixed | Uses Next.js `verification.google` |
| Scattered env/GitHub URLs | Centralized in `src/lib/site.ts` |
| Terminal `social` / `github` wrong org | Updated to `cipherunits` |
| Duplicate JSON-LD script `id` | Unique ids per block |
| `.env` tracked / not ignored | `.env` gitignored; `.env.example` added |

## Docs vs. Site

- The docs site (this folder) is published via Zensical to GitHub Pages.
- The main portfolio site lives under `src/app/` and is deployed separately (Vercel recommended).

## Dockerfile

The Dockerfile is functional. Node `20` and pnpm `10.5.1` are hardcoded; add `ARG`s if the pipeline needs overrides.

## pnpm-workspace.yaml

The workspace file disables native builds for `sharp` and `unrs-resolver`. This is intentional for compatibility in constrained environments.

## Remaining notes

- CSS token `--color-primery` keeps the historical spelling; renaming would touch many class names with no user-facing benefit.
- Terminal content is still partly playful/demo (e.g. uptime, neofetch) and not live system data.
