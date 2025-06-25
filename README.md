# Electric MDD UK

## Development Container

1. Open the repository in VS Code, and select **Reopen in Container**.
2. Wait for dependencies to install with Yarn.
3. Browsers install automatically after `yarn install` thanks to the `postinstall` script.
   Run `yarn playwright install --with-deps` if you need to reinstall them manually.
4. Ports `3000` and `6006` are forwarded.
5. Formatting, linting, and type checks run automatically after creation.
6. The Nx CLI is installed globally with Yarn so you can run `nx` directly.
7. Use Node.js 22 or newer.

## Local Development

Run the web app with:

```bash
yarn nx run web:dev
```

Open http://localhost:3000 to view it.

## Project Goals

A self-service web and API tool that ensures ≥ 99.5% of new-connection quotes use valid top-line combinations, slashing average quote time and saving on
rejection fees and rework, while meeting engineering, compliance and
observability standards. The project exposes the underlying Market Domain Data
through a Next.js and Nx stack, sourced read-only via Prisma to keep records
consistent.

## Contributing

Run `yarn lint --fix` and `yarn format` from the repo root (or `yarn nx run prisma:lint` for the Prisma package), then `yarn ts:check` before committing.
Execute `yarn nx run-many --target=test` and `yarn test` to verify behaviour.
Use the PR title pattern `feat(scope): summary` and label your PR with
`release:patch`, `release:minor` or `release:major`.

## MDD Loader

The loader ingests the monthly CSV drop located in `data/`.
Ensure the database connection variables are set before running:

```bash
yarn nx serve mdd-loader -- --dir=./data
```

It runs via the project's read-only Prisma client.
