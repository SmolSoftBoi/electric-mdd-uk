#!/usr/bin/env bash
set -euo pipefail

# Install dependencies and validate project

yarn install

# Install Nx globally so commands can run without yarn
yarn global add nx

yarn lint --fix

yarn format

yarn ts:check
