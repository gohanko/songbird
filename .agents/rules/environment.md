# Environment configuration

Treat environment configuration as an explicit interface between the application and its runtime.

## Rules

- Use the repository's documented local environment-file convention.
- Keep environment-specific configuration out of source code when it varies by deployment.
- Distinguish server-only values from values intentionally exposed to clients.
- Validate required variables at the boundary where they are consumed.
- Document variable names, purpose, scope, and safe example values.
- Update consuming code and documentation together when variables are added or renamed.
