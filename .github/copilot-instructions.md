---
# Global Output & Build Rules (Token-Optimized)
---

## Terse Output Style Rules
- Code only, no explanations unless explicitly requested.
- Use concise bullet points over paragraphs for summaries.
- Never restate surrounding code or re-explain basic React, TypeScript, or CSS concepts.
- Output tokens cost 5x more than input tokens—keep responses short and focused.

## Project Build & Verification Commands
- Build Project: `npm run build`
- Type Check: `npx tsc --noEmit`
- Lint Code: `npm run lint`
- Test Suite: `npm test`
- **Rule**: Trust these predefined commands and folder maps directly. Do not run exploratory search tools (`grep`, `find`) to discover build scripts.

## Architecture & Conventions Map
- React 19.2.7 + TypeScript 6.0.3 + Vite 8.0.16 modular application (`src/features/`).
- Runtime environment variables managed in `src/config/runtimeenv.ts`.
- Offload formatting (Prettier) and linting (ESLint) to local pre-commit hooks; do not generate mechanical formatting changes via AI.
