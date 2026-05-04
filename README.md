# sustaing_project

React + TypeScript frontend with a Node.js + Express + TypeScript backend, run as a single npm workspace.

## Layout

- `frontend/` — Vite + React + TypeScript (port 5173)
- `backend/`  — Express + TypeScript (port 3001, mounted at `/api`)

## Run locally

```
npm install
npm run dev
```

That boots both servers concurrently. Open http://localhost:5173 — the page should show `backend: ok`, proving the Vite dev proxy (`/api/*` → `localhost:3001`) is wired through.

## Build

```
npm run build
```

Builds both workspaces.
