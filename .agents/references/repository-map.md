# Repository map

## Application

- `app/layout.tsx` — root layout and global application shell.
- `app/page.tsx` — home page route.
- `app/` — App Router routes, layouts, route states, and route-specific components.

## Shared UI

- The project uses an atomic component hierarchy. See [`atomic-design.md`](./atomic-design.md) for detailed responsibilities and composition guidance.
- `components/atoms/` — reusable UI primitives.
- `components/molecules/` — small reusable compositions of atoms.
- `components/organisms/` — feature-oriented UI sections.
- `components/templates/` — reusable page-level layouts.

Use the smallest level that accurately represents a component's responsibility. Not every feature needs every level.

## Supporting code

- `constants/` — named application constants and configuration-related values. Keep environment-variable access in `constants/environment-variables.ts`; do not place secrets in source control.
- `hooks/` — reusable React hooks for shared stateful or lifecycle-related behavior. This directory is currently reserved and should only contain hooks used by more than one feature.
- `libraries/` — integrations and configured clients for external or substantial dependencies. Keep setup and boundary concerns here rather than scattering them through route or component files. This directory is currently reserved.
- `utilities/` — small reusable, preferably pure helper functions that do not belong to a component or a specific route. `utilities/fonts.ts` contains shared font-related helpers.
- `styles/` — global styles, design tokens, and shared styling resources. `styles/main.css` contains the main global stylesheet.

## Project configuration

- `next.config.ts` — Next.js configuration.
- `eslint.config.mjs` — ESLint configuration and repository style rules.
- `tsconfig.json` — strict TypeScript configuration and `@/*` path alias.
- `package.json` — supported scripts and dependency manifest.

## Generated or local-only paths

- `.next/` — Next.js build output; do not edit or commit.
- `node_modules/` — installed dependencies; do not edit or commit.
- `.env*` — local environment files; do not commit.

## Placement rules

Use `app/` for route-owned code, the appropriate atomic component directory for shared UI, `hooks/` for reusable React hooks, `libraries/` for configured integrations, `utilities/` for general helpers, and `styles/` for global styling resources. Keep route-specific content and data in `app/`, and add another top-level directory only when its responsibility is clear and documented.
