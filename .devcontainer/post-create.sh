#!/usr/bin/env bash
set -euo pipefail

# Install dependencies and validate project

yarn install

# Install Nx so commands can run without extra config
yarn dlx nx@latest --install || true

yarn lint --fix

yarn format

yarn ts:check
