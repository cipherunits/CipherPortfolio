# Troubleshooting

## Dev server will not start

**Symptom:** `pnpm dev` fails or port 3000 is busy.

**Fix:**

```bash
lsof -ti:3000 | xargs kill -9
# or
PORT=3001 pnpm dev
```

Confirm Node 20+ and a completed `pnpm install`.

## Dependency install failures

**Symptom:** Native module / sharp errors during `pnpm install`.

**Fix:**

- Use Node 20+
- Keep `pnpm-workspace.yaml` opt-outs for `sharp` / `unrs-resolver`
- Clean reinstall:

```bash
rm -rf node_modules
pnpm install
```

Prefer not deleting `pnpm-lock.yaml` unless you intend to refresh the lockfile.

## Team section empty or Overview shows `8+`

**Cause:** GitHub API failure, rate limit, or network error in `getTeamMembers()`.

**Fix:**

- Set `GITHUB_TOKEN` in `.env.local` (fine-grained or classic read token)
- Check server logs for `GitHub org members fetch failed`
- Confirm `avatars.githubusercontent.com` remains in `images.remotePatterns`

## Terminal icon missing

- Ensure `<TerminalManager />` is in `src/app/layout.tsx`
- Check the browser console; the terminal tree is client-rendered

## Docker build fails on native modules

Confirm workspace opt-outs are present and the Dockerfile install step respects them. Rebuild without cache if layers are stale: `docker build --no-cache -t next-app:latest .`.

## Docs site 404 or stale on GitHub Pages

- Pages must be enabled; workflow needs `pages: write`
- Confirm `docs.yml` completed and uploaded `site/`
- Run `zensical build --clean` locally and fix reported link/nav errors
- Hard-refresh or wait for CDN propagation

## Mobile terminal goes fullscreen

Intended: `LayerTerminal` forces `full` at `width <= 768`. Adjust that breakpoint only if the UX should change.

## TypeScript errors on new components

- Use `.tsx` for JSX
- Prefer `@/` imports
- Put `"use client"` at the top before imports when using hooks or browser APIs

## ESLint / `next/navigation`

Import client hooks (`usePathname`, etc.) only in Client Components. Server routes should use `redirect` from `next/navigation` in Server Components as documented by Next.js 16.

## Content not updating in production

1. Redeploy after `pnpm build`
2. For Docker: `make build && make restart`
3. Team/Overview data may be cached up to ~1 hour (`revalidate`)
4. Bust CDN cache for Cloudinary brand assets if used

## SEO / IndexNow

```bash
node scripts/seo-notify.mjs
```

Ensure `public/cipherunit-indexnow-2026.txt` is deployed and `SITE_NAME` matches the live origin.
