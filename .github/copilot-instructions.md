---
# Global Repository Instructions (Token-Optimized & Model-Tiered)
---

## Terse Output Style (Strict Enforcement)
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

## Tech Stack & Architecture Overview
- **Framework**: React 19.2.7 + TypeScript 6.0.3 + Vite 8.0.16 modular application (`src/features/`).
- **UI & Styling**: PrimeReact 10.9.8, PrimeIcons 7.0.0, Bootstrap 5.5.5, React-Bootstrap 2.10.6, KendoReact Charts 15.1.0, Kendo Default Theme 14.2.0.
- **Forms & Data**: React Hook Form 7.80.0 (`useForm`, `Controller`), Zod Schemas.
- **Configuration**: Runtime environment variables managed in `src/config/runtimeenv.ts`.
- **Formatting/Linting**: Offload formatting (Prettier) and linting (ESLint) to local pre-commit hooks; do not generate mechanical formatting changes via AI.
