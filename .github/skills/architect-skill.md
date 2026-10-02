# Architect Workflow Skill

## When to Execute
Use when designing new feature modules, state boundaries, or data contracts.

## Step-by-Step Execution
1. Read runtime environment parameters from `src/config/runtimeenv.ts`.
2. Define data validation schemas in `src/schemas/` using Zod.
3. Infer and export TypeScript interfaces into `src/types/`.
4. Outline component tree and state boundaries for `src/features/<feature-name>/`.
5. Provide interface definitions only; hand off implementation to Frontend/Backend agents.
