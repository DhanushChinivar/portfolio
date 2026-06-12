# ADR-0001: Vanilla HTML/CSS/JS, no framework, no build step

**Date:** 2026-06-12 · **Status:** Accepted

## Context

The Phase 1 site is a content portfolio: five sections rendered from two JSON files. Options considered: vanilla HTML/CSS/JS, React + Vite, Next.js static export.

## Decision

Plain HTML, CSS, and ES-module JavaScript served as-is by nginx. No bundler, no node toolchain, no transpilation.

## Consequences

- nginx serves the `frontend/` directory directly; the Docker image is just stock `nginx:alpine` with a bind mount — nothing to build.
- Anyone can read and edit the code without learning a framework.
- Manual DOM rendering code in `js/render.js` instead of components.
- No asset fingerprinting, so cache headers must stay conservative (see nginx config: `no-cache` for HTML/JSON, 1h for assets). Do not "optimize" to long max-ages.
- If Phase 2+ ever needs heavy interactivity, revisit — but the api.js seam means a framework migration wouldn't change the data contract.
