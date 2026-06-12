# ADR-0004: docker-compose with nginx + ngrok containers

**Date:** 2026-06-12 · **Status:** Accepted

## Context

The site must run in Docker with nginx serving it and be publicly reachable via ngrok. Alternatives: a single nginx container with ngrok run manually on the host, vs. composing both as containers. User has an ngrok authtoken (free tier, no static domain).

## Decision

One `docker-compose.yml` with two services:

- `web`: `nginx:1.27-alpine`, docroot bind-mounted from `./frontend`, host port 8080 for local browsing.
- `ngrok`: `ngrok/ngrok:3`, tunneling to `web:80` (compose DNS name), authtoken via `NGROK_AUTHTOKEN` interpolated from a gitignored `.env` (`.env.example` committed). Inspection UI/API exposed on host port 4040.

`docker compose up -d` starts everything.

## Consequences

- Public URL comes from `curl localhost:4040/api/tunnels` or the ngrok logs.
- The tunnel is pinned via `--url` to the account's free static dev domain (`footgear-unframed-sequel.ngrok-free.dev`), so the public URL is **stable across restarts**. Free tier still shows visitors a one-click browser interstitial.
- The exact env var name `NGROK_AUTHTOKEN` is what the v3 agent reads — a wrong name causes a silent restart loop (`docker compose logs ngrok` to diagnose).
- The tunnel target is `web:80`, not localhost — localhost inside the ngrok container is the ngrok container itself.
- Phase 2's `api` service and Phase 3's `db` slot into the same compose file (stubs are pre-commented there).
