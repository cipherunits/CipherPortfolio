# CipherPortfolio

Official portfolio website for **[Cipher Unit](https://cipherunit.xyz)** — an open-source engineering collective building secure, scalable developer tools.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

<a href="https://cipherunit.xyz">
  <img src="https://raw.githubusercontent.com/cipherunits/CipherPortfolio/main/public/images/github-image-page.png" alt="CipherPortfolio preview" />
</a>

---

## Live

| Resource | URL |
|----------|-----|
| Website | [cipherunit.xyz](https://cipherunit.xyz) |
| Documentation | [cipherunits.github.io/CipherPortfolio](https://cipherunits.github.io/CipherPortfolio/) |
| GitHub Org | [github.com/cipherunits](https://github.com/cipherunits) |

---

## Features

- Responsive landing page with hero, projects, skills, team, FAQ, and contact
- Dedicated `/projects`, `/team`, and `/contact` routes
- Interactive client-side terminal overlay
- SEO: metadata, Open Graph, Twitter Cards, JSON-LD, sitemap, robots, `llms.txt`
- Team members loaded from the GitHub organization API
- Docker multi-stage production image
- Docs site via [Zensical](https://zensical.org) → GitHub Pages

---

## Quick Start

**Requirements:** Node.js 20+, pnpm 9+

```bash
git clone https://github.com/cipherunits/CipherPortfolio.git
cd CipherPortfolio
cp .env.example .env.local
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Via Make:

```bash
make install
make dev
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Typecheck, lint, then production build |
| `pnpm start` | Serve the production build |
| `pnpm check` | TypeScript + ESLint |
| `pnpm lint` | ESLint only |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm clean` | Remove `.next` / build caches |
| `pnpm seo:notify` | Ping search engines (IndexNow) |

---

## Production

```bash
pnpm build
pnpm start
```

Docker:

```bash
make build   # docker image
make run     # container on :3000
```

---

## Documentation

Full architecture, routes, components, SEO, and contribution guides:

**[https://cipherunits.github.io/CipherPortfolio/](https://cipherunits.github.io/CipherPortfolio/)**

Source lives in [`docs/`](./docs/). Build locally:

```bash
pip install zensical
zensical serve
```

---

## Project Layout

```
src/
  app/           # App Router pages, layout, sitemap, robots
  components/    # Landing, contact, terminal, shared UI
  lib/           # site config, projects, team, FAQ data
docs/            # Zensical documentation
public/          # Static assets, fonts, manifest, llms.txt
```

---

## Contributing

Bug fixes, docs, and features are welcome. Open an issue or pull request on [GitHub](https://github.com/cipherunits/CipherPortfolio).

Please keep changes focused and follow existing code style. Licensed under MIT.

---

## License

[MIT](./LICENSE) © Cipher Unit

<p align="center">
  <i>Built by <a href="https://cipherunit.xyz">Cipher Unit</a></i>
</p>
