# CLI & Terminal Commands

## pnpm (package manager)

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies declared in `package.json` |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production server |
| `pnpm lint` | Run ESLint |

pnpm is used across the entire project (scripts, `Dockerfile`, `Makefile`). The `pnpm-lock.yaml` is present at the root. While `package-lock.json` exists, it is not used by the tooling.

## Make (Docker & local workflows)

The `Makefile` wraps Docker and local pnpm commands for convenience.

```bash
make help        # Print available targets
make build       # Build Docker image next-app:latest
make run         # Run container on port 3000
make stop        # Stop container
make rm          # Remove container
make restart     # Stop + remove + run
make logs        # Tail container logs (follow mode)
make clean       # Stop, remove container, remove image
make dev         # Run dev server locally with pnpm
make install     # Install dependencies with pnpm
make build-app   # Build Next.js app locally with pnpm
```

Defaults:
- Container name: `next-app-container`
- Port: `3000`
- Image: `next-app:latest`

## Docker CLI

Equivalent raw Docker commands for operations covered by the Makefile:

```bash
# Build
docker build -t next-app:latest .

# Run
docker run -d --name next-app-container -p 3000:3000 next-app:latest

# Stop
docker stop next-app-container

# Remove container
docker rm next-app-container

# Logs
docker logs -f next-app-container

# Clean
docker rmi next-app:latest
```

## Application Terminal (Embedded)

The portfolio includes an interactive terminal overlay on every page. It is not a real shell; it runs entirely client-side.

Open it by clicking the terminal icon in the bottom-left corner.

### Supported Commands

| Command | Response / Behavior |
|---------|--------------------|
| `help` | List all supported commands |
| `whoami` | `cipherunit` |
| `about` | Fixed bio description |
| `skills` | List of skills |
| `projects` | Numbered list of sample projects |
| `contact` | Email and location |
| `social` | GitHub, LinkedIn, Twitter handles |
| `github` | Acknowledgment string |
| `blog` | Sample blog posts list |
| `ls` | Simulated directory listing |
| `pwd` | `/home/cipherunit` |
| `date` | Current date string (dynamic) |
| `uptime` | Static string (127 days, 14 hours, 32 minutes) |
| `neofetch` | Simulated system specs |
| `cat <filename>` | Usage hint string |
| `clear` | Clears terminal history |

### How It Works

- `Commands.ts` exports a plain object mapping command names to string responses.
- `Terminal.tsx` reads user input on Enter and either returns the matching response or `command not found: <cmd>`.
- `clear` resets the local `history` state.
- No network requests or shell execution occur.

### Extending Commands

To add a new command, append a key/value pair to the `commands` object in `src/components/terminal/Commands.ts`. No backend or API changes are needed.

## Zensical CLI (Documentation)

The docs site is built and deployed with Zensical.

```bash
# Install Zensical (Python environment)
pip install zensical

# Build docs
zensical build --clean

# Serve docs locally (if supported by the installed version)
zensical serve
```

The GitHub Actions workflow (`.github/workflows/docs.yml`) runs `zensical build --clean` on every push to `main` or `master` and deploys the output in `site/` to GitHub Pages.
