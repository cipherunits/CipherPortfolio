# Development

## Prerequisites

- Node.js 20+ (LTS recommended)
- pnpm 9+ (used consistently across `package.json` scripts, `Dockerfile`, and `Makefile`)
- A clone of the repository

## Clone the Repository

```bash
git clone https://github.com/cipherunits/CipherPortfolio.git
cd CipherPortfolio
```

## Install Dependencies

```bash
pnpm install
```

## Environment Configuration

The `.env` file at the project root defines the current environment values.

| Variable | Current Value | Purpose |
|----------|--------------|---------|
| `APP_NAME` | `CipherPortfolio` | Site display name |
| `APP_VERSION` | `1.3.4` | Current release tag |
| `CONTACT_EMAIL` | `cipherunit.dev@gmail.com` | Rendered email in footer and contact pages |
| `GITHUB_API_BASE_URL` | `https://api.github.com/users` | Future GitHub API integrations |
| `GITHUB_ACCESS_TOKEN` | placeholder only | Future GitHub API token |
| `PORT` | `3000` | Dev / prod server port |

For local development, copy values into `.env.local` (already gitignored). Never commit real secrets or tokens.

## Run the Project (Development)

```bash
pnpm dev
```

Open http://localhost:3000. Next.js runs in development mode with hot reloading.

## Build the Project

```bash
pnpm build
```

Generates an optimized standalone production build in `.next/`.

## Run the Production Build

```bash
pnpm build    # First build
pnpm start    # Then start the production server
```

The production server listens on the port defined by `PORT` (default `3000`).

## Run via Docker

Build and run the containerized production build:

```bash
# Build image
make build

# Run container
make run

# View logs
make logs

# Stop and clean up
make stop
make rm
```

Or use `make dev` to run locally with pnpm.

## Lint

```bash
pnpm lint
```

ESLint runs with `eslint-config-next/core-web-vitals` and TypeScript rules.

## TypeScript Check

The project runs with `strict: true` and `noEmit: true`. Next.js handles type checking during `next build`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js development server on port 3000 |
| `pnpm build` | Run `next build` (standalone mode) |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint |

## Docker Targets

From `Makefile`:

| Target | Description |
|--------|-------------|
| `make build` | Build Docker image `next-app:latest` |
| `make run` | Run container on port 3000 |
| `make stop` | Stop container |
| `make rm` | Remove container |
| `make restart` | Stop, remove, run |
| `make logs` | Tail container logs (follow mode) |
| `make clean` | Stop, remove container, remove image |
| `make dev` | Run dev server locally with pnpm |
| `make install` | Install dependencies with pnpm |
| `make build-app` | Build Next.js app locally with pnpm |

Defaults:
- Container name: `next-app-container`
- Port: `3000`
- Image: `next-app:latest`

## Dockerfile Stages

1. **builder**: `node:20` image installs pnpm globally, installs deps, builds Next.js app.
2. **runner**: `node:20` copies standalone server + static files from builder.

The multi-stage build minimizes final image size by excluding `node_modules` and build tooling.

## GitHub Actions Docs Workflow

`.github/workflows/docs.yml` runs on push to `main` or `master`:

1. Checks out the repo
2. Installs Python + Zensical
3. Builds docs with `zensical build --clean`
4. Uploads `site/` as a Pages artifact
5. Deploys to GitHub Pages

No secret is required for this workflow beyond the default `GITHUB_TOKEN`.
