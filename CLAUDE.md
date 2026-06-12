# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Dhanush Chinivar. Vanilla HTML/CSS/JS (no framework, no build step) served by nginx in Docker, exposed via ngrok. Currently Phase 1 (static, no backend); Phase 2 adds a backend API and Phase 3 a database — see `tasks.md` for the phase roadmap.

## Commands

```bash
docker compose up -d            # run the stack (nginx on :8080, ngrok UI on :4040)
docker compose logs ngrok       # first stop when the tunnel is broken
curl -s localhost:4040/api/tunnels | jq -r '.tunnels[0].public_url'   # public URL

cd frontend && python3 -m http.server 8000   # quick local run without Docker (http only — fetch breaks on file://)

jq . frontend/data/*.json       # validate data files after editing
for f in frontend/js/*.js; do node --check --input-type=module < "$f"; done   # JS syntax check (ES modules)
```

No build, lint, or test toolchain — there is nothing to compile.

## Architecture

- `frontend/` is the nginx docroot. **Everything in it is publicly served** — never put configs or secrets there (ADR-0002). Infra configs live in `deploy/`.
- All data access goes through `frontend/js/api.js` (`DATA_SOURCE` flag). Phase 2 switches from static JSON to `/api/*` by flipping that one constant; static files and the future API must return identical shapes — top-level object wrappers, never bare arrays (ADR-0003).
- `frontend/js/render.js` builds DOM via `createElement`/`textContent` only — no innerHTML with data. Values prefixed `PLACEHOLDER:` get a `.placeholder` style (ADR-0006).
- nginx serves HTML/JSON with `no-cache` because filenames aren't fingerprinted — don't extend cache lifetimes (ADR-0001). The Phase 2 `location /api/` block in `deploy/nginx/default.conf` ships commented; nginx fails at startup on unresolvable upstreams.
- ngrok tunnels to `web:80` (compose DNS), token via `NGROK_AUTHTOKEN` in gitignored `.env`.

## Process

- Update `tasks.md` checkboxes as work proceeds; add new tasks there before starting them.
- Record significant decisions as a new numbered ADR in `decisions/` (Context / Decision / Consequences).
