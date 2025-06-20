'use strict';

/**
 * Profile class used for settlement.
 */
export interface ProfileClass {
  id: number;
  effectiveFromSettlementDate: Date;
  description: string;
  switchedLoadProfileClassInd: boolean;
  effectiveToSettlementDate: Date | null;
}

/**
 * Check if a value is a {@link ProfileClass}.
 *
 * @param value - Value to examine.
 * @returns `true` when shape matches.
 */
export function isProfileClass(value: unknown): value is ProfileClass {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r['id'] === 'number' &&
    r['effectiveFromSettlementDate'] instanceof Date &&
    typeof r['description'] === 'string' &&
    typeof r['switchedLoadProfileClassInd'] === 'boolean' &&
    (r['effectiveToSettlementDate'] instanceof Date ||
      r['effectiveToSettlementDate'] === null)
  );
}
