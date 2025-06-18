'use strict';

import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'date-fns';
import { parse as parseCsv } from 'csv-parse/sync';
import { Prisma } from '../../generated/prisma';

/**
 * Read a CSV file and return rows.
 *
 * @param file - Path to the CSV file.
 * @returns Array of rows as string arrays.
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
 *
 * @param value - Date string.
 * @returns Parsed Date or null if invalid.
 */
export function parseDate(value: string | undefined): Date | null {
  if (!value) return null;
  try {
    const date = parse(value, 'dd/MM/yyyy', new Date());
    if (isNaN(date.getTime())) return null;
    return new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
  } catch {
    return null;
  }
}

/**
 * Seed Market Roles.
 */
export async function seedMarketRoles(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Market_Role.csv'));
  rows.shift();
  await tx['marketRole'].createMany({
    data: rows.map(([code, description]) => ({ code, description })),
    skipDuplicates: true,
  });
}

/**
 * Seed Market Participants.
 */
export async function seedMarketParticipants(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Market_Participant.csv'));
  rows.shift();
  await tx['marketParticipant'].createMany({
    data: rows.map(([id, name, poolMemberId]) => ({
      id,
      name,
      poolMemberId: poolMemberId || null,
    })),
    skipDuplicates: true,
  });
}

/**
 * Seed Market Participant Roles.
 */
export async function seedMarketParticipantRoles(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Market_Participant_Role.csv'));
  rows.shift();
  await tx['marketParticipantRole'].createMany({
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
 * Seed valid MTC/LLFC combinations.
 */
export async function seedValidMtcLlfcCombinations(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(path.join(dir, 'Valid_MTC_LLFC_Combination.csv'));
  rows.shift();
  await tx['validMtcLlfcCombination'].createMany({
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
 * Seed valid MTC/LLFC/SSC/PC combinations.
 */
export async function seedValidMtcLlfcSscPcCombinations(
  tx: Prisma.TransactionClient,
  dir: string
): Promise<void> {
  const rows = await readCsv(
    path.join(dir, 'Valid_MTC_LLFC_SSC_PC_Combination.csv')
  );
  rows.shift();
  await tx['validMtcLlfcSscPcCombination'].createMany({
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
