# Code conventions

These conventions apply across a codebase, adapted to the language and tooling used by the repository.

## Types and interfaces

- Use the language's strictest practical type-checking settings.
- Prefer explicit types for public boundaries, component props, and reusable helpers.
- Do not suppress type errors to bypass a required fix without documenting the reason.
- Prefer small, focused functions and components with clear names.

## Structure

- Keep feature-specific code close to the feature that owns it.
- Place shared UI according to the repository's documented component hierarchy when one exists.
- Use dedicated directories for constants, hooks, integrations, utilities, styles, and tests when those conventions exist.
- Do not move code into a shared directory without a clear reuse case.
- Do not introduce a dependency or framework without an explicit requirement.

## Formatting and comments

- Follow the repository's formatter, linter, and naming patterns.
- Preserve existing formatting conventions.
- Do not add comments that merely restate code.
- Document non-obvious decisions, constraints, and gotchas.

## UI quality

- Prefer accessible semantic HTML.
- Provide keyboard support, visible focus states, and labels for controls.
- Preserve existing styling patterns and responsive behavior.
