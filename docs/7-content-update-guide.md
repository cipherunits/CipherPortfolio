# 7 — Content updates

| What | Where |
|------|--------|
| Site URL / brand / email | `src/lib/site.ts` + env |
| Projects | `src/lib/projects.ts` |
| FAQ | `src/lib/faq.ts` |
| Hero / About / Skills | Matching components under `landing/` |
| Nav | `shared/header/Item.ts` |
| Terminal copy | `terminal/Commands.ts` |
| LLM crawler text | `public/llms.txt` |
| Overview counts | `landing/overview/Overview.tsx` |

## Adding a project

1. Add object to `projects` in `src/lib/projects.ts` (`slug`, `imageUrl`, `tech`, languages, copy, `linkLive`, `linkDocs`)  
2. Put image in `public/images/` (prefer 1200×675)  
3. Update `public/llms.txt`  
4. Update `scripts/seo-notify.mjs` slug/image lists if present  
5. README is loaded automatically from `linkLive` when the repo has one  

## Team

Not hardcoded. `getTeamMembers()` → GitHub org `cipherunits`. Optional `GITHUB_TOKEN`.
