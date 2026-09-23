# Testing rules

Test observable behavior and protect important user and system contracts.

## Principles

- Prefer focused tests that reproduce bugs or protect user-visible behavior.
- Include important success, error, empty, loading, boundary, keyboard, and responsive states.
- Keep tests deterministic and avoid real external services.
- Test at the narrowest useful level.
- Do not claim tests passed unless the command actually ran.

## Tooling

Use the repository's existing test runner. If no runner exists, document the gap and report manual verification instead of inventing coverage.
