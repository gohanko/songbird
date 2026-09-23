# Secrets handling

Treat credentials, tokens, private keys, production configuration, and other sensitive values as secrets.

## Rules

- Never commit secrets or real credentials.
- Never print secret values in logs, command output, screenshots, tests, or agent responses.
- Use placeholders in documentation and examples.
- Keep secrets out of client-visible code, responses, and telemetry.
- Provide CI secrets through the platform's secret manager.
- Treat user-provided and external-service data as untrusted.
