#!/usr/bin/env bash
set -euo pipefail

# Install dependencies and validate project

yarn install

yarn lint --fix

yarn format

yarn ts:check
