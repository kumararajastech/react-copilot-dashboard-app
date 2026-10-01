---
applyTo: "src/**/__tests__/*.{ts,tsx}"
---
# Testing Guidelines
- Use React Testing Library queries (`findByRole`, `findByText`).
- Avoid testing implementation details; test user behavior and DOM state.
- Mock external service calls via `src/services/` mocks and runtime configs via `src/config/runtimeenv.ts`.
