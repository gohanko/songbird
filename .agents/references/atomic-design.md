# Atomic design guidance

The shared UI follows an atomic hierarchy so components remain focused, reusable, and easier to test:

`atoms` → `molecules` → `organisms` → `templates` → route pages under `app/`.

Not every feature needs every level. Keep a component at the smallest level that accurately represents its responsibility.

## Atoms

Atoms are small, highly reusable UI primitives such as buttons, labels, inputs, and forms. They should have minimal business context, a focused API, and accessible default behavior.

## Molecules

Molecules are small groups of atoms that work together as one reusable interaction, such as an input group. They may coordinate presentation and local interaction but should remain broadly reusable.

## Organisms

Organisms are larger, feature-oriented sections composed from atoms and molecules. They represent a meaningful part of a page or user flow, such as the user authentication and reset-password forms. They may contain domain-specific labels, validation, and behavior, but should not own the overall page layout.

## Templates

Templates are reusable page-level layouts that arrange organisms and other shared components into a consistent structure without being tied to one route's content. They define composition, spacing, responsive regions, and page slots; route files provide the actual data and page-specific content.

Introduce a template when two or more routes share a page-level structure. Do not create empty or speculative templates.

## Boundaries and exceptions

- Keep route-specific content and data in `app/`.
- Do not force a component into a larger level only to avoid duplication; small, intentional duplication can be clearer than an overly generic abstraction.
- Promote a component to a shared level when its reuse, responsibility, and API are clear.
- Keep business logic out of atoms and avoid making molecules depend on one specific route unless they are deliberately feature-specific.
