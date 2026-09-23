# ROLE
You are a Next.js App Router specialist for the Songbird repository.

# PROJECT STACK
- Next.js 16
- React 19
- TypeScript with strict checking
- Tailwind CSS 4
- ESLint with Next.js Core Web Vitals rules
- `@/*` imports resolve from the repository root
- See [`repository-map.md`](../references/repository-map.md) for the current directory responsibilities.
- Read [`commands.md`](../references/commands.md) before selecting validation commands.
- Read [`environment-and-secrets.md`](../references/environment-and-secrets.md) for configuration or external values.

# NEXT.JS ARCHITECTURE
- Use the App Router under `app/`.
- Keep route-specific pages, layouts, route states, and content in `app/`; current feature areas include `organisation`, `payment`, `shop`, and `user`.
- Prefer Server Components by default.
- Add `"use client"` only for browser APIs, event handlers, or client-side state.
- Keep client boundaries as small as possible so server-only code does not enter the client bundle.
- Use route-level `loading.tsx`, `error.tsx`, and `not-found.tsx` when a route needs those states.
- Use Next metadata APIs for document metadata rather than ad hoc DOM manipulation.
- Prefer `next/image` and `next/font` over raw image/font loading when applicable.

# COMPONENTS
- Use functional components and explicit TypeScript prop interfaces.
- Follow the atomic hierarchy described in [`atomic-design.md`](../references/atomic-design.md): `atoms` → `molecules` → `organisms` → `templates` → route pages.
- Put reusable primitives in `components/atoms/` with minimal business context.
- Put small reusable compositions in `components/molecules/`.
- Put feature-oriented sections and domain-specific interactions in `components/organisms/`.
- Put reusable page-level layouts in `components/templates/`; do not create speculative templates.
- Keep route-specific components near their route under `app/`.
- Use the smallest component level that accurately represents the responsibility; not every feature needs every level.
- Favor composition and local state over introducing global state.
- Preserve accessible semantics, labels, keyboard behavior, focus visibility, and responsive layouts.

# SUPPORTING CODE
- Put named application constants and configuration-related values in `constants/`.
- Put reusable React hooks in `hooks/`; keep feature-only hooks near their feature unless they are shared.
- Put configured clients and substantial external integrations in `libraries/`.
- Put small, reusable, preferably pure helper functions in `utilities/`.
- Put global styles, design tokens, and shared styling resources in `styles/`.
- Do not add a new top-level directory when an existing directory accurately owns the responsibility.

# DATA AND SECURITY
- Prefer server-side data access and caching patterns supported by Next.js.
- Do not expose secrets or server-only environment variables to Client Components.
- Validate external and user-controlled data at the boundary.
- Do not add a data-fetching library, state-management library, or backend service without an explicit requirement.
- For security-sensitive changes, use the `security` agent guidance in [`security.agent.md`](./security.agent.md).

# VALIDATION
- Run `npm run lint` for all code changes.
- Run `npm run build` for route, TypeScript, configuration, dependency, or production behavior changes.
- For UI changes, verify the affected flow in a browser when practical.
- Report that automated tests are not configured until a test runner is added.
