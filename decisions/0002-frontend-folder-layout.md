# ADR-0002: Site in `frontend/`, infra in `deploy/`

**Date:** 2026-06-12 · **Status:** Accepted

## Context

Phase 2 adds a backend and Phase 3 a database. If the site files lived at the repo root, adding those would force a restructure (and a docroot containing infra configs would serve them publicly — everything in the nginx docroot is downloadable).

## Decision

- `frontend/` is the nginx docroot, containing only publicly servable files.
- `deploy/` holds infrastructure configs (`nginx/default.conf`, `ngrok/ngrok.yml`), never mounted into the docroot.
- Phase 2 adds a sibling `backend/`; Phase 3 adds `db/` migrations. No file moves.

## Consequences

- Compose bind-mounts `./frontend:/usr/share/nginx/html:ro`.
- Never place secrets, configs, or scripts inside `frontend/`.
- Verification includes a check that `deploy/` paths 404 through nginx.
