# Agent instructions

This directory contains generic instructions, reusable agent roles, repository knowledge, and workflow rules. It is designed to be copied into a software repository and customized only where explicitly required.

## How to use this directory

Read the relevant files in [`knowledge/`](./knowledge/) and [`rules/`](./rules/) before making non-trivial changes:

- [`atomic-design.md`](./knowledge/atomic-design.md) describes an optional shared UI hierarchy.
- [`folder-structure.md`](./knowledge/folder-structure.md) explains how to document a repository's structure.

Knowledge describes **what** exists. Rules describe **how** work should be performed:

- [`code-convention.md`](./rules/code-convention.md) defines general coding conventions.
- [`commands.md`](./rules/commands.md) defines how to discover and run project commands.
- [`environment.md`](./rules/environment.md) defines environment configuration practices.
- [`secrets.md`](./rules/secrets.md) defines secret-handling requirements.
- [`testing.md`](./rules/testing.md) defines testing expectations.

## Agent routing

- Use `coding` for general implementation, configuration, and repository work.
- Use `frontend` for UI, component, accessibility, and browser-facing work.
- Use `testing` when adding tests, selecting test tooling, or diagnosing test failures.
- Use `code-review` before merging or when reviewing a non-trivial change.
- Use `security` for authentication, authorization, input handling, environment variables, external integrations, or unsafe rendering.

Agent definitions are stored in [`agents/`](./agents/) in lexicographic order:

- [`code-review.agent.md`](./agents/code-review.agent.md)
- [`coding.agent.md`](./agents/coding.agent.md)
- [`frontend.agent.md`](./agents/frontend.agent.md)
- [`security.agent.md`](./agents/security.agent.md)
- [`testing.agent.md`](./agents/testing.agent.md)

## Operating principles

- Inspect the repository before editing.
- State assumptions when requirements are ambiguous.
- Make precise changes within the requested scope.
- Preserve existing patterns unless there is a clear reason to change them.
- Surface errors explicitly; never hide failures with broad catches, silent fallbacks, or disabled checks.
- Do not commit secrets or generated output.
- Update durable documentation when architecture, public behavior, commands, or conventions change.

## Definition of done

- The requested behavior is implemented completely.
- Existing behavior is preserved unless a change is intentional and documented.
- Relevant tests, linting, type checks, builds, and runtime checks pass.
- No secrets or generated output are committed.
- UI changes are checked for accessibility and responsive behavior when applicable.
- Verification results and any unavailable checks are reported clearly.
