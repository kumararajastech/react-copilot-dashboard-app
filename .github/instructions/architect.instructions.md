---
applyTo: "src/{config,schemas,types}/**/*.{ts,tsx}"
---
# Architect & Schema Guidelines
- Enforce strict interface definitions in `src/types/`.
- Validate all incoming/outgoing data using Zod schemas in `src/schemas/`.
- Access environment variables exclusively through `src/config/runtimeenv.ts`.
