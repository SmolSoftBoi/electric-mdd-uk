import { execFileSync } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  it('runs the seed script', () => {
    const cliPath = join(process.cwd(), 'dist/apps/mdd-loader/cli.js');

    const output = execFileSync('node', [cliPath]).toString();

    expect(output).toMatch(/✅ Seed completed from/);
  });
});
