# DevOps Automation Skill

## When to Execute
Use when updating build scripts, Vite configs, ESLint rules, or CI/CD pipelines.

## Step-by-Step Execution
1. Verify Vite 8.0.16 build config and chunk splitting in `vite.config.ts`.
2. Run type-check validation script `npx tsc --noEmit`.
3. Ensure `.gitignore` and Copilot exclusion settings block `dist/`, `build/`, `coverage/`, and `node_modules/`.
4. Output valid configuration YAML/JSON/TS files only.
