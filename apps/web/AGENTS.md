# AGENTS.md (Connection Wizard)

## Scope
Guidance here applies only to the UI and its tRPC calls.

## UI/UX Rules
- Composition must use **Engie Fluid Design System** components; wrap in
  `ui-fluid` helpers when extra props are needed.
- Inputs should validate on **blur**, not on **change**, to reduce noise.
- All labels and helper text must pass WCAG 2.1 AA colour-contrast.

## Testing
- Storybook stories live alongside components (`*.stories.tsx`).
- Add Chromatic visual regression tests for every new component state.

## Forbidden Patterns
- Do **not** fetch server data inside React components; use the provided
  `useCombinationSuggest()` hook.
- Avoid `any` in TypeScript; use generics or `unknown` with refinement.
