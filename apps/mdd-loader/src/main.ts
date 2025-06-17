'use strict';
 

import { parseArgs } from 'node:util';
import path from 'node:path';
import { prisma, seed } from 'prisma';

/**
 * Parse CLI arguments into options used by the seeder.
 *
 * @param argv - Arguments from the command line.
 * @returns Object containing the directory path for seed files.
 */
export function parseOptions(argv: string[]): { dir: string } {
  const { values } = parseArgs({
    args: argv,
    options: {
      dir: { type: 'string', short: 'd', default: 'data' },
    },
  });

  return { dir: values.dir };
}

/**
 * Execute the seeding process from CLI arguments.
 *
 * @param argv - Arguments from the command line; defaults to `process.argv`.
 * @returns Resolves when the seed completes or rejects on error.
 */
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
   
  main();
}
