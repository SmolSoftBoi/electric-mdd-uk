'use strict';

import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'date-fns';
import { parse as parseCsv } from 'csv-parse/sync';
import { PrismaClient, Prisma } from '../generated/prisma';

export const prisma = new PrismaClient();

/**
 * Seed the database with Market Domain Data from CSV files.
 */
export async function seed(dir: string = path.join(__dirname, '..', 'data')): Promise<void> {
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

/**
 * Load Market Roles from the CSV drop.
 *
 * @param tx - Prisma transaction context
 * @param dir - Directory containing the CSV files
 */
export async function seedMarketRoles(
  tx: Prisma.TransactionClient,
  dir: string,
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Market_Role.csv'));
  rows.shift();
  await tx.marketRole.createMany({
    data: rows.map(([code, description]) => ({ code, description })),
    skipDuplicates: true,
  });
}

/**
 * Load Market Participants from the CSV drop.
 *
 * @param tx - Prisma transaction context
 * @param dir - Directory containing the CSV files
 */
export async function seedMarketParticipants(
  tx: Prisma.TransactionClient,
  dir: string,
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

/**
 * Load Market Participant Roles from the CSV drop.
 *
 * @param tx - Prisma transaction context
 * @param dir - Directory containing the CSV files
 */
export async function seedMarketParticipantRoles(
  tx: Prisma.TransactionClient,
  dir: string,
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

/**
 * Load valid MTC to LLFC combinations from the CSV drop.
 *
 * @param tx - Prisma transaction context
 * @param dir - Directory containing the CSV files
 */
export async function seedValidMtcLlfcCombinations(
  tx: Prisma.TransactionClient,
  dir: string,
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Valid_MTC_LLFC_Combination.csv'));
  rows.shift();
  await tx.validMtcLlfcCombination.createMany({
    data: rows.map((r) => ({
      meterTimeswitchClassId: r[0],
      meterTimeswitchClassEffectiveFrom: parseDate(r[1])!,
      marketParticipantId: r[2],
      marketParticipantEffectiveFrom: parseDate(r[3])!,
      lineLossFactorClassId: r[4],
      lineLossFactorClassEffectiveFrom: parseDate(r[5])!,
      effectiveTo: parseDate(r[6]),
    })),
    skipDuplicates: true,
  });
}

/**
 * Load valid MTC/LLFC/SSC/PC combinations from the CSV drop.
 *
 * @param tx - Prisma transaction context
 * @param dir - Directory containing the CSV files
 */
export async function seedValidMtcLlfcSscPcCombinations(
  tx: Prisma.TransactionClient,
  dir: string,
): Promise<void> {
  const rows = await readCsv(
    path.join(dir, 'Valid_MTC_LLFC_SSC_PC_Combination.csv'),
  );
  rows.shift();
  await tx.validMtcLlfcSscPcCombination.createMany({
    data: rows.map((r) => ({
      meterTimeswitchClassId: r[0],
      meterTimeswitchClassEffectiveFrom: parseDate(r[1])!,
      marketParticipantId: r[2],
      marketParticipantEffectiveFrom: parseDate(r[3])!,
      standardSettlementConfigurationId: r[4],
      standardSettlementConfigurationEffectiveFrom: parseDate(r[5])!,
      lineLossFactorClassId: r[6],
      lineLossFactorClassEffectiveFrom: parseDate(r[7])!,
      profileClassId: Number(r[8]),
      profileClassEffectiveFrom: parseDate(r[9])!,
      effectiveTo: parseDate(r[10]),
      preservedTariffIndicator: r[11],
    })),
    skipDuplicates: true,
  });
}

/**
 * Read a CSV file and return its rows.
 *
 * @param file - Full path to the CSV file
 */
export async function readCsv(file: string): Promise<string[][]> {
  try {
    const content = await fs.readFile(file, 'utf8');
    return parseCsv(content, { relaxQuotes: true });
  } catch (err) {
    console.error('Failed to read CSV:', file, err);
    throw err;
  }
}

/**
 * Parse a date in dd/MM/yyyy format.
 */
export function parseDate(value: string | undefined): Date | null {
  if (!value) return null;
  try {
    const date = parse(value, 'dd/MM/yyyy', new Date());
    if (isNaN(date.getTime())) return null;
    return new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
    );
  } catch {
    return null;
  }
}

if (require.main === module) {
  seed().finally(() => prisma.$disconnect());
}
