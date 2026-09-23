# Testing strategy

## Current state

The repository currently has no `test` script and no configured unit, component, or end-to-end test runner. `npm run lint` and `npm run build` are the current automated quality gates.

Agents must not claim test coverage or passing tests until a test runner is configured and the corresponding command has actually run.

## Intended direction

- Use Vitest for pure functions, utilities, and other fast unit tests.
- Use React Testing Library for component behavior and accessibility-oriented interaction tests.
- Use Playwright for critical user journeys and browser-only behavior.

When these tools are introduced, add scripts such as:

```json
{
  "test": "vitest run",
  "test:e2e": "playwright test"
}
```

Keep browser tests focused on critical flows rather than duplicating every unit test. Mock external services at boundaries and keep tests deterministic.

## What to cover

- User-visible behavior and important state transitions.
- Validation, error, empty, and loading states.
- Keyboard interaction and accessible names for interactive controls.
- Regression cases for fixed bugs.
- Server/client boundary behavior when route behavior depends on it.
