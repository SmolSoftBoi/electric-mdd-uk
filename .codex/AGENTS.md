## Code Style
- Always use **2-space indentation**; no tabs.
- Prefer single quotes in TypeScript.

## Git Hygiene
- Never commit secrets; add `.env*, *.pem` to `.gitignore` if missing.
- Rebase interactive (`git rebase -i`) before pushing a feature branch.

## Testing
- Run tests with `yarn test` and ensure 100 % pass rate.
- If a test is flaky, mark it `test.skip()` and open an issue.

## Editorial Tone
- Write commit messages as **imperative**: “Add API route for combos”.
