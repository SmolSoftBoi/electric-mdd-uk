'use strict';

import { PrismaClient, Prisma } from '../generated/prisma';
import fs from 'node:fs/promises';
import path from 'node:path';

const prisma = new PrismaClient();

/**
 * Seed the database with Market Domain Data from CSV files.
 */
export async function seed(): Promise<void> {
  const dataDir = path.join(__dirname, '..', 'data');

  await prisma.$transaction(async (tx) => {
    await seedMarketRoles(tx, dataDir);
    await seedMarketParticipants(tx, dataDir);
    await seedMarketParticipantRoles(tx, dataDir);
  });
}

export async function seedMarketRoles(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Market_Role.csv'));
  rows.shift();
  await tx.marketRole.createMany({
    data: rows.map(([code, description]) => ({ code, description })),
    skipDuplicates: true,
  });
}

export async function seedMarketParticipants(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Market_Participant.csv'));
  rows.shift();
  await tx.marketParticipant.createMany({
    data: rows.map(([id, name, poolMemberId]) => ({
      id,
      name,
      poolMemberId: poolMemberId || null,
    })),
    skipDuplicates: true,
  });
}

export async function seedMarketParticipantRoles(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Market_Participant_Role.csv'));
  rows.shift();
  await tx.marketParticipantRole.createMany({
    data: rows.map((r) => ({
      marketParticipantId: r[0],
      roleCode: r[1],
      effectiveFrom: parseDate(r[2])!,
      effectiveTo: parseDate(r[3]),
      address1: r[4] || null,
      address2: r[5] || null,
      address3: r[6] || null,
      address4: r[7] || null,
      address5: r[8] || null,
      address6: r[9] || null,
      address7: r[10] || null,
      address8: r[11] || null,
      address9: r[12] || null,
      postCode: r[13] || null,
      distributorShortCode: r[14] || null,
    })),
    skipDuplicates: true,
  });
}

export async function readCsv(file: string): Promise<string[][]> {
  const content = await fs.readFile(file, 'utf8');
  return content
    .trim()
    .split(/\r?\n/)
    .map((line) => line.replace(/^"|"$/g, '').split('","'));
}

/**
 * Parse a date in dd/MM/yyyy format.
 */
export function parseDate(value: string | undefined): Date | null {
  if (!value) return null;
  const [d, m, y] = value.split('/');
  return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
}

if (require.main === module) {
  seed().finally(() => prisma.$disconnect());
}
