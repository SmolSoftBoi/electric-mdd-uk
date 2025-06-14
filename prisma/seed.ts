'use strict';

import path from 'node:path';
import { PrismaClient, Prisma } from '../generated/prisma';
import {
  seedMarketParticipantRoles,
  seedMarketParticipants,
  seedMarketRoles,
  seedValidMtcLlfcCombinations,
  seedValidMtcLlfcSscPcCombinations,
} from 'engine';

export const prisma = new PrismaClient();

/**
 * Seed the database with Market Domain Data from CSV files.
 */
export async function seed(
  dir: string = path.join(__dirname, '..', 'data')
): Promise<void> {
  const dataDir = dir;

  try {
    await prisma.$transaction(async (tx) => {
      await seedMarketRoles(tx, dataDir);
      await seedMarketParticipants(tx, dataDir);
      await seedMarketParticipantRoles(tx, dataDir);
      await seedValidMtcLlfcCombinations(tx, dataDir);
      await seedValidMtcLlfcSscPcCombinations(tx, dataDir);
    });
  } catch (err) {
    console.error('❌ Seed failed:', err);
    throw err;
  }
}

if (require.main === module) {
  seed().finally(() => prisma.$disconnect());
}
