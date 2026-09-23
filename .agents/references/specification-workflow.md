# Specification workflow

Feature specifications belong in `docs/specs/`. A specification defines what should be built and how its behavior will be accepted; it is not an implementation checklist.

## Recommended specification contents

- Problem statement and motivation
- Goals and non-goals
- Users or actors affected
- User stories or use cases
- Functional requirements
- Acceptance criteria
- UX, loading, empty, and error states
- Accessibility requirements
- Security and data-handling constraints
- Performance constraints, when relevant
- Open questions and assumptions
- Links to related architecture decisions

## Writing rules

- Use observable, testable language.
- Separate required behavior from implementation suggestions.
- State exclusions explicitly so scope does not expand silently.
- Resolve materially different behavioral options before implementation.
- Keep the specification current when requirements change.

## Lifecycle

```text
idea → specification → task breakdown → implementation → verification → documentation update
```

Create a new specification for a new feature or a change with multiple independently testable behaviors. For a small bug fix, a focused issue or task may be sufficient when the expected behavior is already clear.

## Relationship to other documents

- Architecture documents explain the current system structure.
- ADRs explain why significant technical choices were made.
- Specifications explain what a feature must do.
- Task plans explain how the specification will be implemented.
