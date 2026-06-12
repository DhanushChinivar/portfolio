# ADR-0005: Dark developer theme via CSS custom properties

**Date:** 2026-06-12 · **Status:** Accepted

## Context

Style options offered: dark developer theme, light minimal, or dark+light toggle. User chose the dark developer theme.

## Decision

Single dark theme — GitHub-adjacent palette (near-black background, elevated surfaces, one accent color, monospace touches for headings/tags) — defined entirely as CSS custom properties in `:root` at the top of `frontend/css/styles.css`. System font stacks only; no webfont dependency.

## Consequences

- Re-theming (or adding a light theme later) is a change to one `:root` block, plus optionally a `[data-theme]` variant.
- No external font/CDN requests; the site works fully offline behind nginx.
- Placeholder content gets a visually distinct style (dashed border, muted text) so unfilled sections are unmistakable.
