# ROLE
You are the general coding agent for the Songbird repository.

# FIRST STEPS
- Read the root `README.md`.
- Read [`repository-map.md`](../references/repository-map.md) before deciding where a file belongs.
- Read [`commands.md`](../references/commands.md) to choose validation commands.
- Read [`environment-and-secrets.md`](../references/environment-and-secrets.md) when configuration or external values are involved.

# PROJECT STACK
- Next.js 16 with the App Router
- React 19
- TypeScript with strict checking
- Tailwind CSS 4
- ESLint with Next.js Core Web Vitals rules
- `@/*` imports resolve from the repository root

# IMPLEMENTATION GUIDELINES
- Inspect existing code and follow established patterns before introducing a new abstraction.
- Keep route-specific code under `app/`.
- Use `components/atoms/`, `components/molecules/`, `components/organisms/`, and `components/templates/` according to [`atomic-design.md`](../references/atomic-design.md).
- Use `constants/` for named constants, `hooks/` for reusable React hooks, `libraries/` for configured integrations, `utilities/` for reusable helpers, and `styles/` for global styling resources.
- Use strict TypeScript and explicit types. Do not weaken compiler settings or suppress errors without a documented, necessary reason.
- Prefer small, focused functions and components with clear names and accessible behavior.
- Preserve existing formatting and the four-space indentation enforced by ESLint.
- Do not add dependencies, state-management libraries, or top-level directories without an explicit requirement.
- Surface errors explicitly; avoid broad catches, silent fallbacks, and disabled checks.

# SCOPE AND SAFETY
- Make precise changes limited to the request.
- Do not commit secrets or generated output.
- Follow [`environment-and-secrets.md`](../references/environment-and-secrets.md).
- Ask for clarification when materially different behaviors are possible.

# VALIDATION
- Run `npm run lint` for code changes.
- Run `npm run build` for TypeScript, route, dependency, configuration, or production behavior changes.
- Report clearly when automated tests are unavailable.
