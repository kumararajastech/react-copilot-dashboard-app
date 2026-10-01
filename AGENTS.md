# AGENTS.md — Repository Memory & Structure Map

## Project Tech Stack
- **Framework**: React 19.2.7, React DOM 19.2.7, React Router DOM 7.18.0
- **UI Components & Styling**: PrimeReact 10.9.8, PrimeIcons 7.0.0, Bootstrap 5.5.5, React-Bootstrap 2.10.6, KendoReact Charts 15.1.0, Kendo Default Theme 14.2.0
- **Forms & Validation**: React Hook Form 7.80.0, Zod Schemas
- **Language & Build**: TypeScript 6.0.3, Vite 8.0.16

## Directory Layout Map
```text
/
├── index.html
├── .gitignore
├── .github/
│   ├── copilot-instructions.md
│   ├── agents/          # Custom Agent Role Definitions
│   ├── chatmodes/       # Model Tier Routing Chat Modes
│   ├── instructions/    # Path-Scoped Instructions
│   └── prompts/         # Reusable Skill Prompts
└── src/
    ├── config/          # Runtime environment configuration (runtimeenv.ts)
    ├── features/        # Feature domains:
    │   ├── auth/        # Authentication components & hooks
    │   ├── common/      # Shared UI utilities
    │   ├── dashboard/   # Main analytics & data view
    │   ├── dynamic forms/# Dynamic form engine
    │   ├── header/      # Application top header
    │   ├── ruleeditor/  # Business rules builder
    │   └── toast/       # Global toast notifications
    ├── pages/           # Application route pages (contact, etc.)
    ├── schemas/         # Data validation schemas
    ├── services/        # HTTP API service layer
    ├── types/           # Global TypeScript type definitions
    ├── utils/           # Deterministic helper utilities
    └── template/        # Layout templates
```

## Critical Repository Rules
1. **Runtime Config**: Always read environment settings from `src/config/runtimeenv.ts`. Never hardcode API URLs or secrets.
2. **Feature Boundaries**: Do not cross-import private sub-components across features. Share common components via `src/features/common/` or `src/utils/`.
3. **Token Efficiency**: Code only, no preamble. Use Ask mode for questions, Agent mode strictly for file modifications.
