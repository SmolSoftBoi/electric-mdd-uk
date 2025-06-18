## Code Style

- Lint and fix before every commit: `yarn lint --fix`. Use `yarn nx run prisma:lint` for the Prisma package.
- Format code via `yarn format` (Prettier).
- Type-check with `yarn ts:check`.

## Monorepo Commands

| Task        | Command                          |
| ----------- | -------------------------------- |
| Dev server  | `yarn nx run web:dev`            |
| Unit tests  | `yarn nx run-many --target=test` |
| E2E tests   | `yarn e2e`                       |
| Build image | `docker build .`                 |

Codex **must** call these rather than raw `npm` equivalents.

## Architectural Guard-rails

- Use **Next.js 15 App Router** for all new routes (avoid `/pages`).
- All shared business logic lives in `packages/engine`.
- Fetch MDD data only via the read-only Prisma client; no ad-hoc file reads.

## Testing & Coverage

- Unit tests in `*.spec.ts`; strive for ≥ 90 % line coverage.
- E2E tests (Playwright) reside in `/tests/e2e` and must run headless.

## Pull-request Conventions

- Title pattern: `feat(scope): summary`.
- Include a **“Why”** section explaining the value.
- Add the label `release:patch|minor|major` to trigger semantic-release.

## Security

- Disallow `eval`, `Function`, or dynamic `import()` from untrusted input.
- Sanitise any string that hits a shell or SQL query.

## Release Checklist

1. `yarn nx affected --target=test,lint,build`
2. `docker run --rm <image> yarn prisma validate`

Codex should **refuse** a merge if any step fails.
