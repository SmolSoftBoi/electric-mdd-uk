import { execFileSync } from 'child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { workspaceRoot } from 'nx/src/utils/workspace-root';

describe('CLI tests', () => {
  const cliPath = join(workspaceRoot, 'dist/apps/mdd-loader/cli.js');

  beforeAll(() => {
    if (!existsSync(cliPath)) {
      execFileSync('yarn', ['nx', 'run', 'mdd-loader:build:production'], {
        cwd: workspaceRoot,
        stdio: 'inherit',
      });
    }
  });

  it('runs the seed script', () => {
    const output = execFileSync('node', [cliPath]).toString();

    expect(output).toMatch(/✅ Seed completed from/);
  });
});
