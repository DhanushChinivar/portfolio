# Dhanush Chinivar — Portfolio

Personal portfolio site showcasing curated projects from [github.com/DhanushChinivar](https://github.com/DhanushChinivar). Vanilla HTML/CSS/JS served by nginx in Docker, exposed publicly via ngrok. No backend yet — built phase-wise (see [`tasks.md`](tasks.md)); design decisions are recorded in [`decisions/`](decisions/).

## Prerequisites

- Docker Desktop
- A free [ngrok account](https://dashboard.ngrok.com/signup) and its authtoken

## Quickstart

```bash
cp .env.example .env
# paste your real token into .env (from https://dashboard.ngrok.com/get-started/your-authtoken)

docker compose up -d
```

- Local: http://localhost:8080
- Public URL: `curl -s http://localhost:4040/api/tunnels | jq -r '.tunnels[0].public_url'` (or open http://localhost:4040)

Free-tier ngrok notes: the public URL **changes every time the ngrok container restarts**, and visitors see a one-click interstitial page first. `curl` tests of the public URL need the header `ngrok-skip-browser-warning: true`.

## Editing content

All content is data, no code changes needed:

- **Projects** — `frontend/data/projects.json` (one entry per project; sorted by `order`)
- **Profile / skills / experience / contact** — `frontend/data/profile.json`

Values prefixed `PLACEHOLDER:` render with a dashed outline until you replace them. Find what's left to fill in:

```bash
grep -rn "PLACEHOLDER" frontend/data/
```

To add your resume: drop `resume.pdf` into `frontend/assets/` and set `resumeUrl` to `"assets/resume.pdf"` in profile.json.

Edits appear on hard-refresh — the docroot is bind-mounted and HTML/JSON are served with `no-cache`.

## Running without Docker (quick check)

```bash
cd frontend && python3 -m http.server 8000
```

Must be served over http — opening `index.html` via `file://` breaks `fetch()` of the JSON files.

## Layout

```
frontend/   nginx docroot — the site (never put configs/secrets here; it's all public)
deploy/     nginx + ngrok configs
decisions/  ADRs — one file per significant decision
tasks.md    phase-wise task tracker (Phase 2: backend API · Phase 3: database)
```

## Troubleshooting

- **ngrok container restart-looping** → bad or missing authtoken. `docker compose logs ngrok` (e.g. `ERR_NGROK_105` = invalid token). Fix `.env`, then `docker compose up -d ngrok`.
- **Edit not showing after hard-refresh** (rare macOS bind-mount staleness) → `docker compose restart web`.
- **`curl localhost:4040` refused** → ensure `deploy/ngrok/ngrok.yml` still sets `web_addr: 0.0.0.0:4040`.
