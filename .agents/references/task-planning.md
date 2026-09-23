# Task planning workflow

Implementation breakdowns derived from specifications belong in `docs/tasks/`. Use task plans for multi-step work that another developer or agent may need to resume, review, or verify.

## Task plan contents

- Link to the authoritative specification
- Ordered implementation tasks
- Dependencies between tasks
- Expected files, modules, or boundaries affected
- Verification command or acceptance check for each task
- Migration, rollout, or documentation steps when relevant
- Explicit assumptions and unresolved questions

Each task should be small enough to complete and verify independently where practical. Describe the outcome, not just an activity. Prefer:

```text
Add server-side validation for the checkout payload and cover invalid input cases.
```

over:

```text
Work on checkout validation.
```

## Planning rules

- Derive scope from the specification; do not invent unrequested features.
- Order tasks so prerequisites come first.
- Identify tasks that can be parallelized without creating conflicting edits.
- Include tests or manual verification as first-class tasks.
- Update the plan when implementation reveals a requirement or dependency change.
- Keep temporary scratch notes in the session workspace rather than committing them.

## Completion

When all tasks are complete, link the resulting changes or pull request from the task plan if useful. Retain plans that explain a substantial change; remove or avoid committing plans that were only disposable working notes.
