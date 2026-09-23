# Environment variables and secrets

The repository ignores `.env*` files. Treat every environment value as sensitive by default unless it is intentionally public.

## Rules

- Never commit `.env` files, credentials, tokens, private keys, or production configuration.
- Never print secret values in logs, command output, screenshots, tests, or agent responses.
- Use the `NEXT_PUBLIC_` prefix only for values that are explicitly safe to expose in browser JavaScript.
- Keep server-only values in Server Components, route handlers, or other server-side code.
- Validate required environment variables at the boundary where they are consumed.
- Use placeholders such as `example-value` in documentation and examples.
- Do not make a server-only value public merely to avoid passing it through a server boundary.

## Local development

If local configuration is needed, create an untracked `.env.local` file and document variable names and safe example values without documenting real secrets.

## Changes involving configuration

When adding or renaming a variable:

1. Update the consuming code and the relevant documentation together.
2. Explain whether it is server-only or public.
3. Validate missing or malformed values explicitly.
4. Run `npm run lint` and `npm run build`.

## CI

CI should provide secrets through its secret manager, not committed files or command-line arguments that may appear in logs. CI logs must redact secret values.
