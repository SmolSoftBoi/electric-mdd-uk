import { execFileSync } from 'child_process';
import { join } from 'node:path';
import { workspaceRoot } from 'nx/src/utils/workspace-root';

describe('CLI tests', () => {
  it('runs the seed script', () => {
    const cliPath = join(workspaceRoot, 'dist/apps/mdd-loader/cli.js');

    const output = execFileSync('node', [cliPath]).toString();

    expect(output).toMatch(/✅ Seed completed from/);
  });
});
