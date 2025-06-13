# Electric MDD UK

## Development Container

1. Open the repository in VS Code, and select **Reopen in Container**.
2. Wait for dependencies to install with Yarn.
3. Ports `3000` and `6006` are forwarded.
4. Formatting, linting, and type checks run automatically after creation.
5. The Nx CLI is installed globally with Yarn so you can run `nx` directly.

## Project Goals

A self-service web and API tool that ensures ≥ 99.5% of new-connection quotes use
valid top-line combinations, slashing average quote time and saving on
rejection fees and rework, while meeting engineering, compliance and
observability standards. The project exposes the underlying medical device
dataset through a Next.js and Nx stack, sourced read-only via Prisma to keep
records consistent.

