# Testing Workflow Skill

## When to Execute
Use when authoring unit or integration tests for React components or service modules.

## Step-by-Step Execution
1. Create test file under `src/**/__tests__/<component-name>.test.tsx`.
2. Render component using React Testing Library `render()`.
3. Fire events via `userEvent` or `fireEvent`.
4. Assert DOM changes using `findByRole` or `findByText`.
5. Mock external API calls from `src/services/` and runtime configs from `src/config/runtimeenv.ts`.
