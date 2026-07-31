# CLI & Commands

## pnpm

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Development server |
| `pnpm build` | Check + production build |
| `pnpm start` | Production server |
| `pnpm check` | TypeScript + ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | ESLint |

Lockfile: `pnpm-lock.yaml`. Use pnpm only; do not introduce npm/yarn lockfiles.

## Make

```bash
make help
make install
make dev
make build-app
make build && make run
make logs
make stop && make rm
make restart
make clean
```

Defaults: image `next-app:latest`, container `next-app-container`, port `3000`.

## Docker (raw)

```bash
docker build -t next-app:latest .
docker run -d --name next-app-container -p 3000:3000 next-app:latest
docker logs -f next-app-container
docker stop next-app-container && docker rm next-app-container
docker rmi next-app:latest
```

## Embedded terminal

Client-side overlay (bottom-left icon). Not a real shell.

| Command | Behavior |
|---------|----------|
| `help` | Lists commands |
| `whoami` | `cipherunit` |
| `about` / `skills` / `projects` / `contact` / `social` / `github` | Static copy |
| `ls` / `pwd` | Simulated FS strings |
| `date` | Current date string |
| `neofetch` | Simulated specs |
| `cat` | Usage hint |
| `clear` | Clears history |

Extend via `src/components/terminal/Commands.ts`.

## Zensical

```bash
pip install zensical
zensical serve
zensical build --clean   # writes site/
```

CI: `.github/workflows/docs.yml` builds and deploys `site/` to GitHub Pages on `main` / `master`.

## SEO notify

```bash
node scripts/seo-notify.mjs
```

Uses `SITE_NAME` (default `https://cipherunit.xyz`) and IndexNow key `cipherunit-indexnow-2026`.
