# AGENTS.md
To understand the project's purpose, please read `README.md` file in the root folder.

# Agent instructions for Songbird

## Project overview

Songbird is a Next.js application using the App Router, React, TypeScript, and Tailwind CSS. The repository is currently a small frontend application and does not yet have automated unit, component, or end-to-end test tooling.

Read the relevant files in [`references/`](./references/) before making non-trivial changes:

- [`repository-map.md`](./references/repository-map.md) explains where code belongs.
- [`commands.md`](./references/commands.md) lists the supported development and verification commands.
- [`testing-strategy.md`](./references/testing-strategy.md) describes the current testing gap and intended direction.
- [`environment-and-secrets.md`](./references/environment-and-secrets.md) defines environment-variable handling.

## Agent routing

- Use `general-coding` for general TypeScript, configuration, and repository work.
- Use `nextjs` for App Router, page, layout, route, server/client boundary, or React UI work.
- Use `testing` when adding tests, selecting test tooling, or diagnosing test failures.
- Use `code-review` before merging or when reviewing a non-trivial change.
- Use `security` for authentication, authorization, input handling, environment variables, external integrations, or unsafe rendering.

Agent definitions are stored in [`agents/`](./agents/):

- [`general-coding.agent.md`](./agents/general-coding.agent.md)
- [`nextjs.agent.md`](./agents/nextjs.agent.md)
- [`react.agent.md`](./agents/react.agent.md)
- [`testing.agent.md`](./agents/testing.agent.md)
- [`code-review.agent.md`](./agents/code-review.agent.md)
- [`security.agent.md`](./agents/security.agent.md)

## Engineering conventions

- Use TypeScript with strict type checking. Do not weaken `tsconfig.json` or add type-suppression comments to bypass errors.
- Use the `@/*` path alias for repository-root imports when it improves clarity.
- Follow the existing four-space indentation configured in ESLint.
- Prefer small, focused components and functions with explicit types.
- Place reusable primitive UI in `components/atoms/` and composed UI in `components/molecules/`.
- Keep route-specific code close to its route under `app/`; do not move code into a generic shared directory without a reuse case.
- Preserve existing styling and component patterns. Do not introduce a state-management or UI library without an explicit requirement.
- Prefer accessible semantic HTML, keyboard support, visible focus states, and labels for controls.
- Do not add comments that merely restate code. Document non-obvious decisions and constraints.

## Next.js rules

- Prefer Server Components. Add `"use client"` only when a component requires browser APIs, event handlers, or client-side state.
- Keep server-only values and operations out of Client Components.
- Use Next.js primitives and conventions where applicable, including `next/image`, `next/font`, metadata, route-level loading states, and error boundaries.
- Avoid unnecessary client-side fetching and duplicated data fetching.
- Do not assume that a generic React or Vite pattern applies to the App Router.

## Environment and security

- Follow [`environment-and-secrets.md`](./references/environment-and-secrets.md).
- Never commit secrets, print secret values, or expose server-only environment variables to the browser.
- Treat all external and user-provided data as untrusted input.
- Do not add authentication, persistence, or external services without documenting the boundary and validating configuration.

## Definition of done

- The requested behavior is implemented completely and follows existing repository patterns.
- No unrelated files or behavior are changed.
- No secrets or generated build output are committed.
- `npm run lint` passes.
- `npm run build` passes for TypeScript, routing, and configuration changes.
- Tests are added when test infrastructure exists; otherwise, report that automated tests are not configured and describe the manual verification performed.
- UI changes are checked in a browser when practical, including responsive and keyboard behavior.
- Accessibility basics are verified for interactive UI.
- Related documentation is updated when commands, architecture, public behavior, or agent guidance changes.

## Required validation

Use the smallest applicable command set documented in [`commands.md`](./references/commands.md). At minimum, run `npm run lint` for code changes. Run `npm run build` for changes affecting TypeScript, routes, configuration, dependencies, or production behavior.

## Scope discipline

- Inspect the existing implementation before editing.
- Make precise, surgical changes.
- Do not add speculative dependencies, abstractions, or features.
- Do not silently choose between materially different behavioral options; ask for clarification.
- Surface failures explicitly instead of hiding them with broad catches, silent fallbacks, or disabled checks.
