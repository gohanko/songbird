# Commands and verification

Use the repository's documented package manager and scripts rather than assuming a particular ecosystem.

## Discover commands

- Read the root README and contribution documentation.
- Inspect the package or build manifest.
- Inspect CI configuration when present.
- Prefer existing scripts over ad hoc command sequences.

## Minimum checks

- Documentation-only changes: no build is normally required.
- Code changes: run the repository's linter and type checker when available.
- Build, configuration, dependency, or release changes: run the production build.
- UI changes: verify the affected behavior in a real browser when practical.
- Test changes: run the narrowest relevant test command.

Report every command that was not available or could not be run.
