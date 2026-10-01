---
applyTo: "{vite.config.ts,package.json,.eslintrc*,Dockerfile,*.yaml,.github/**}"
---
# DevOps & Build Guidelines
- Keep Vite 8.0.16 build targets aligned with modern ES2022+.
- Run `npm run build` and `npx tsc --noEmit` locally before committing.
- Exclude build output (`dist/`, `coverage/`) from git tracking and Copilot indexing.
