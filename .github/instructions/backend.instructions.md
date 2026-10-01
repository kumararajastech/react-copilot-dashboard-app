---
applyTo: "src/services/**/*.{ts,js}"
---
# Back End / Service Layer Guidelines
- Centralize all fetch/axios HTTP calls inside `src/services/`.
- Read base URLs and runtime flags exclusively from `src/config/runtimeenv.ts`.
- Map response data against `src/types/` interfaces and validate with `src/schemas/`.
- Wrap async calls in typed try-catch blocks with standardized error returns.
