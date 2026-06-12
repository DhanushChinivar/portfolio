# ADR-0006: `PLACEHOLDER:` convention for personal content

**Date:** 2026-06-12 · **Status:** Accepted

## Context

Work history, education, email, LinkedIn, and resume PDF aren't available yet. User chose to ship clearly marked placeholders they'll fill in later, rather than seeding only from the public GitHub profile.

## Decision

- All personal content lives in **one file**: `frontend/data/profile.json`.
- Every unfilled value is a string prefixed `PLACEHOLDER:` (e.g. `"PLACEHOLDER: you@example.com"`).
- `frontend/js/render.js` detects the prefix, strips it for display, and applies a `.placeholder` CSS class (dashed border, muted) so placeholder content can't be mistaken for real content.

## Consequences

- `grep -rn "PLACEHOLDER" frontend/data/` lists everything left to fill in.
- Filling in real content requires no code changes — edit profile.json, hard-refresh.
- The resume link points at `assets/resume-placeholder.txt` until a real `resume.pdf` is dropped into `frontend/assets/` and `resumeUrl` updated.
