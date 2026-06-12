# Portfolio Website — Task Tracker

Phase-wise development tracker. Check items off as they're completed.
Significant decisions are recorded in [`decisions/`](decisions/).

## Phase 1 — Static site + Docker + ngrok

### Scaffolding & process
- [x] `git init`, create `.gitignore` (`.env`, `.DS_Store`, `*.log`)
- [x] Create `tasks.md` (this file) with the full phase task list
- [x] Seed `decisions/` with ADRs 0001–0006
- [x] First commit: scaffold + process files

### Data layer
- [x] `frontend/data/profile.json` — real GitHub-derived values; `PLACEHOLDER:` strings for email, LinkedIn, resume, experience, education
- [x] `frontend/data/projects.json` — 8 curated projects (no forks, no uni repos)
- [x] Validate both with `jq`

### Frontend
- [x] `frontend/index.html` — single page: nav, hero/about, skills, projects, experience, contact, footer
- [x] `frontend/css/styles.css` — dark developer theme, CSS custom properties, responsive
- [x] `frontend/js/api.js` — data-provider abstraction (`DATA_SOURCE` flag, Phase 2 seam)
- [x] `frontend/js/render.js` — pure DOM renderers, `PLACEHOLDER:` detection
- [x] `frontend/js/main.js` — fetch + render + error state + nav behavior
- [x] `frontend/assets/favicon.svg`
- [x] Sanity check via `python3 -m http.server` in `frontend/`

### Docker / nginx / ngrok
- [x] `deploy/nginx/default.conf` — gzip, cache headers, commented Phase 2 `/api/` block
- [x] `deploy/ngrok/ngrok.yml` — `web_addr: 0.0.0.0:4040`, log to stdout
- [x] `docker-compose.yml` — `web` (nginx) + `ngrok` services, Phase 2/3 stubs commented
- [x] `.env.example` — `NGROK_AUTHTOKEN` template (user pastes real token into `.env`)

### Verification & docs
- [x] `docker compose up -d` — nginx healthy (ngrok pending real authtoken in `.env`)
- [x] curl checks: 200s, cache headers, gzip, JSON served, infra configs NOT served
- [x] Real `NGROK_AUTHTOKEN` in `.env` (minted via ngrok API from user's API key), `docker compose up -d ngrok`
- [x] Get public URL from `http://localhost:4040/api/tunnels`, verify 200 through tunnel
- [ ] Browser pass: all sections render, 8 project cards, placeholders visibly marked, responsive
- [x] `README.md` — quickstart, ngrok setup, troubleshooting
- [x] Update `CLAUDE.md` — run commands + architecture
- [x] Final commit

### Post-launch (user)
- [ ] Fill in `PLACEHOLDER:` values in `frontend/data/profile.json` (email, LinkedIn, experience, education)
- [ ] Drop real `resume.pdf` into `frontend/assets/` and update `resumeUrl`

## Phase 2 — Backend API (future)

- [ ] ADR-0007: choose backend runtime (Node/Express or FastAPI)
- [ ] `backend/` service: `GET /api/projects`, `GET /api/profile`, `POST /api/contact` — same JSON shapes as static files
- [ ] Add `api` service to `docker-compose.yml` (stub already commented there)
- [ ] Uncomment nginx `location /api/` block (resolver + variable form)
- [ ] Flip `DATA_SOURCE = 'api'` in `frontend/js/api.js`
- [ ] Implement `submitContact()` and enable the contact form (markup ships disabled in Phase 1)

## Phase 3 — Database (future)

- [ ] Add `db` service (Postgres + named volume + healthcheck) to compose
- [ ] Migrations: `projects`, `profile`, `contact_submissions` tables
- [ ] Seed script importing `frontend/data/*.json`
- [ ] API switches from reading JSON files to DB queries
- [ ] Contact form submissions persist to DB
- [ ] DB credentials added to `.env` / `.env.example`
