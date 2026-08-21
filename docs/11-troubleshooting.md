# 11 — Troubleshooting

| Problem | Fix |
|---------|-----|
| Port in use | Stop other `next dev`, or use another port |
| Install / lockfile errors | `pnpm install`; Node 20+; match pnpm major when possible |
| Empty `/team` | Check GitHub API / rate limit; set `GITHUB_TOKEN` |
| No README on project page | Confirm repo has README; check network at build/runtime; token if rate-limited |
| Images broken in README | Blob URLs are rewritten to raw; ensure asset exists on the default branch |
| Docker build fails | Align Node/pnpm with Dockerfile; clear build cache |
| Docs Pages stale | Rebuild/publish Zensical workflow |
| SEO not updating | Rebuild, wait for revalidate (1h), run `pnpm seo:notify`, check GSC |
