# Atomic design guidance

Atomic design is an optional UI organization model. It groups shared interface pieces by scope so components remain focused, reusable, and easier to test:

`atoms` → `molecules` → `organisms` → `templates` → pages or screens.

Not every feature needs every level. Use the smallest level that accurately represents a component's responsibility.

## Atoms

Small, reusable UI primitives with minimal business context and a focused, accessible API.

## Molecules

Small groups of atoms that work together as one reusable interaction. They may coordinate presentation and local interaction but should remain broadly reusable.

## Organisms

Larger, feature-oriented sections composed from atoms and molecules. They may contain domain-specific behavior but should not own the overall page layout.

## Templates

Reusable page-level layouts that arrange shared components into consistent structures without being tied to one route's content.

## Boundaries and exceptions

- Keep feature-specific content and data with the feature.
- Do not force a component into a larger level to avoid small, intentional duplication.
- Promote a component only when its reuse, responsibility, and API are clear.
- Do not create speculative component levels or empty abstractions.
