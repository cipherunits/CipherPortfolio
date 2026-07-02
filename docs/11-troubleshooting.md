# Troubleshooting

## Development server won't start

**Symptom:** `pnpm dev` fails or port 3000 is already in use.

**Fix:**
- Ensure no other Next.js or Node process is using port 3000.
- Free the port:
  ```bash
  # Linux / macOS
  lsof -ti:3000 | xargs kill -9

  # Or use a different port
  PORT=3001 pnpm dev
  ```

## Dependencies install errors

**Symptom:** `pnpm install` fails due to native module builds.

**Fix:**
- Ensure you are on Node.js 20+.
- If running in restricted CI, verify `pnpm-workspace.yaml` has `sharp` and `unrs-resolver` disabled (it does by default).
- Delete `node_modules` and `pnpm-lock.yaml` and reinstall:
  ```bash
  rm -rf node_modules pnpm-lock.yaml
  pnpm install
  ```

## `GITHUB_ACCESS_TOKEN` placeholder warning

The `.env` file contains a placeholder token. Replace it with a real GitHub token if future API integrations are used, or leave it as a dummy string for local development.

## Terminal component not visible

**Symptom:** The little terminal icon in the bottom-left doesn't appear.

**Fix:**
- Verify `src/app/layout.tsx` includes `<TerminalManager />` in the body.
- Check your browser console for JavaScript errors; the terminal is client-rendered.

## Docker build fails on `sharp` or `unrs-resolver`

**Fix:**
- The `pnpm-workspace.yaml` already sets `sharp: false` and `unrs-resolver: false`. If the problem persists, confirm the workspace file is present at the repo root and is not overridden by workspace-tools.
- Ensure the Dockerfile does not run install scripts that require native compilation for those packages.

## Build succeeds but docs site won't load

**Symptom:** GitHub Pages returns 404 or outdated content.

**Fix:**
- Verify the branch used by GitHub Pages points to the Pages source configured by the workflow artifact.
- Ensure the `docs.yml` workflow has Pages enabled in the repository settings and the `pages` permission is granted.
- Check that `zensical build --clean` completes without warnings about broken links.
- Confirm `site/` is uploaded in the workflow step.

## Floating terminal blocks scrolling on mobile

**Symptom:** On mobile the terminal becomes fullscreen unexpectedly.

**Fix:**
This is intended behavior. `LayerTerminal.tsx` auto-switches to `full` size on viewports `<= 768px` to prevent overflow. If the layout breaks, inspect the `isMobile` detection logic and ensure `window.innerWidth` is correct.

## Toast / alert not found

There is no toast or alert system in the codebase. Use `console.warn` or a future notification system for debugging.

## TypeScript type errors on new components

**Fix:**
- Ensure the new component file has the `.tsx` extension.
- Import types from relative paths or the `@/` alias.
- Use `"use client"` at the very top of the file before imports if using hooks or browser APIs.

## ESLint reports `next/navigation` import issues

**Fix:**
- Only import `usePathname` and `redirect` inside Client Components (files with `"use client"`).
- Verify you are on Next.js 16 where `next/navigation` is the recommended client navigation API.

## Known typos in content

Several visible strings contain typos (see `docs/8-known-issues.md`). These do not affect functionality but may impact accessibility and branding consistency.

## Content changes not reflecting in production

**Fix:**
- Ensure you ran `pnpm build` after changes.
- If using Docker, rebuild the image with `make build` or `docker build`.
- If deploying the Next.js site, push the latest commit and trigger the platform rebuild.
- Clear CDN cache if using Cloudinary for image assets with aggressive caching.
