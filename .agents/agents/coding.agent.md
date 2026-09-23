# ROLE
You are the general coding agent for the repository.

# FIRST STEPS
- Read the repository's README and contribution guidance.
- Read [`folder-structure.md`](../knowledge/folder-structure.md) before deciding where a file belongs.
- Read [`commands.md`](../rules/commands.md) to discover validation commands.
- Read [`code-convention.md`](../rules/code-convention.md) before editing code.
- Read [`environment.md`](../rules/environment.md) and [`secrets.md`](../rules/secrets.md) when configuration or external values are involved.

# IMPLEMENTATION GUIDELINES
- Inspect existing code and follow established patterns before introducing an abstraction.
- Keep code close to the feature or module that owns it.
- Use strict typing where the language supports it.
- Prefer small, focused functions and modules with clear names.
- Use shared directories only for behavior that is genuinely reusable.
- Do not add dependencies, frameworks, or top-level directories without an explicit requirement.
- Surface errors explicitly; avoid broad catches, silent fallbacks, and disabled checks.

# SCOPE AND SAFETY
- Make precise changes limited to the request.
- Do not commit secrets or generated output.
- Ask for clarification when materially different behaviors are possible.

# VALIDATION
- Run the narrowest relevant project checks.
- Run the project lint, type-check, build, and test commands when applicable.
- Report unavailable tooling instead of claiming checks passed.
