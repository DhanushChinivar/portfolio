// Data provider — the single seam between the frontend and its data source.
// Phase 2: flip DATA_SOURCE to 'api' once the backend serves the same shapes.
const DATA_SOURCE = 'static'; // 'static' | 'api'
const API_BASE = '/api';      // same-origin via nginx reverse proxy (no CORS)
const STATIC_BASE = 'data';

async function fetchJson(path, options) {
  const res = await fetch(path, options);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText} (${path})`);
  }
  return res.json();
}

export function getProjects() {
  return fetchJson(
    DATA_SOURCE === 'api' ? `${API_BASE}/projects` : `${STATIC_BASE}/projects.json`
  );
}

export function getProfile() {
  return fetchJson(
    DATA_SOURCE === 'api' ? `${API_BASE}/profile` : `${STATIC_BASE}/profile.json`
  );
}

export function submitContact(payload) {
  if (DATA_SOURCE !== 'api') {
    return Promise.reject(new Error('Contact form is not available yet (Phase 2).'));
  }
  return fetchJson(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}
