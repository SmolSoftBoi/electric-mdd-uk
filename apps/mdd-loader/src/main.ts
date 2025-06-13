'use strict';

import { parseArgs } from 'node:util';
import path from 'node:path';
import { prisma, seed } from '../../../prisma/seed';

export function parseOptions(argv: string[]): { dir: string } {
  const { values } = parseArgs({
    args: argv,
    options: {
      dir: { type: 'string', short: 'd', default: 'data' },
    },
  });

  return { dir: values.dir };
}

export async function main(argv: string[] = process.argv.slice(2)): Promise<void> {
  const { dir } = parseOptions(argv);
  const dataDir = path.resolve(dir);

  try {
    await seed(dataDir);
    console.log(`✅ Seed completed from ${dataDir}`);
  } catch (err) {
    console.error('❌ Seed failed:', err);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  main();
}
