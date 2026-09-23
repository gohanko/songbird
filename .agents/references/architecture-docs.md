# Architecture and decision documentation

Project architecture and durable technical decisions belong in `docs/`. Agent operating instructions belong in `.agents/`. Temporary session planning should remain outside the repository unless it becomes durable project knowledge.

Recommended project documentation structure:

```text
docs/
├── architecture/
├── decisions/
│   ├── README.md
│   └── numbered ADR files
├── decision-log.md
├── specs/
└── tasks/
```

## Architecture documents

Use `docs/architecture/` for the current system design:

- Application and route structure
- Component and data-flow boundaries
- Server/client boundaries
- Integration and runtime architecture
- Deployment or operational architecture

Architecture documents describe how the system is organized today. Update them when the documented structure changes.

## Architecture decision records

Use `docs/decisions/` for decisions that are significant, repository-wide, or expensive to reverse:

- Frameworks, libraries, and build tools
- Public interfaces or API architecture
- Authentication and authorization strategies
- Data models and persistence choices
- Testing, deployment, or integration strategies
- Repository-wide conventions

Use the ADR format recommended by the `documentation-and-adrs` skill. Do not delete old ADRs. When a decision changes, mark the old ADR as superseded and create a new ADR that links to it.

## Lightweight decision log

Use `docs/decision-log.md` for smaller but durable decisions that do not need a full ADR. Include the date, decision, reason, scope, and related documents.

Record decisions that change what the project does, how it is structured, which tools it uses, how developers or agents work, or what quality and security standards apply. Do not record formatting changes, temporary debugging approaches, or trivial local implementation details.
