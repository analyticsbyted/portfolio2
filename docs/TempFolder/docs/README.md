# Movie Explorer Documentation

A structured reference for maintainers and reviewers. Start here.

## Contents
- Architecture: ./ARCHITECTURE.md
- Project plan: ./PROJECT_PLAN.md
- Setup: ./SETUP.md
- Environment: ./ENVIRONMENT.md
- API usage (TMDB): ./API.md
- Types overview: ./TYPES.md
- Components: ./COMPONENTS.md
- Services: ./SERVICES.md
- Routing: ./ROUTING.md
- UI guidelines: ./UI-GUIDELINES.md
- ADRs: ./ADRs/INDEX.md
- Deployment: ./DEPLOYMENT.md

## Quick facts
- Stack: React + Vite + TypeScript + TanStack Query + Axios + React Router + Tailwind CSS
- Alias: `@` → `src` (configured in Vite and `tsconfig.app.json`)
- Env: `VITE_TMDB_API_READ_ACCESS_TOKEN` (TMDB v3 read token)

## Navigation
- ARCHITECTURE.md: High-level structure, directories, UI composition, data flow, tooling.
- PROJECT_PLAN.md: Step-by-step plan to build and extend the app.
- SETUP.md: Install, run dev server, build, preview, lint/format.
- ENVIRONMENT.md: Environment variables (TMDB token) and usage notes.
- API.md: TMDB endpoints used and request conventions.
- TYPES.md: Key TypeScript interfaces used across the app.
- COMPONENTS.md: Component catalog and responsibilities.
- SERVICES.md: Service layer (Axios instance and functions) overview.
- ROUTING.md: Routes, expected params, and navigation flow.
- UI-GUIDELINES.md: Sizing, containers, scrollers, headings, and states.
- DEPLOYMENT.md: Netlify settings, SPA redirect, env vars, Node version.
