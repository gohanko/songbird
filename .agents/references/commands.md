# Development and verification commands

Run commands from the repository root with the package manager represented by the checked-in lockfile.

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies locally. |
| `npm run dev` | Start the Next.js development server. |
| `npm run lint` | Run ESLint. |
| `npm run lint:fix` | Apply safe ESLint fixes; review the resulting diff. |
| `npm run build` | Create a production build and validate compilation, routes, and configuration. |
| `npm run start` | Serve the production build locally after `npm run build`. |

## Minimum checks

- Documentation-only change: no command is normally required.
- Code change: run `npm run lint`.
- TypeScript, route, dependency, or configuration change: run `npm run lint` and `npm run build`.
- UI change: run lint/build as applicable and verify the affected behavior in a browser when practical.
