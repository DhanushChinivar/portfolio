# ADR-0003: Curated static JSON behind an api.js data provider

**Date:** 2026-06-12 · **Status:** Accepted

## Context

Project data could come from the live GitHub API (always fresh, but rate-limited, unfiltered, and wording is repo descriptions) or curated static JSON (full editorial control, manual updates). User chose curated static JSON, with a hand-picked featured list excluding forks and university repos. A Phase 2 backend will eventually serve this data.

## Decision

- `frontend/data/projects.json` and `frontend/data/profile.json` are the source of truth.
- All data access goes through `frontend/js/api.js`, which exposes `getProjects()` / `getProfile()` / `submitContact()` and switches between static files and `/api/*` via a single `DATA_SOURCE` constant.
- Static files and the future API return **identical response shapes**: top-level object wrappers (`{"projects": [...]}`), never bare arrays, so the API can add metadata later without breaking the frontend.

## Consequences

- Phase 2 frontend migration is one line: `DATA_SOURCE = 'static'` → `'api'`.
- New projects require a manual edit to `projects.json` (live-reloads via bind mount + `no-cache`).
- `id` slugs in projects.json are stable keys that become DB primary keys in Phase 3.
- No CORS configuration ever needed: static JSON now and `/api` later are both same-origin through nginx.
