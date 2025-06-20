'use strict';

/**
 * Valid meter timeswitch class and line loss factor class combination.
 */
export interface ValidMtcLlfcCombination {
  meterTimeswitchClassId: string;
  meterTimeswitchClassEffectiveFrom: Date;
  marketParticipantId: string;
  marketParticipantEffectiveFrom: Date;
  lineLossFactorClassId: string;
  lineLossFactorClassEffectiveFrom: Date;
  effectiveTo: Date | null;
}

/**
 * Check if a value is a {@link ValidMtcLlfcCombination}.
 *
 * @param value - Value to validate.
 * @returns `true` when valid.
 */
export function isValidMtcLlfcCombination(
  value: unknown
): value is ValidMtcLlfcCombination {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r['meterTimeswitchClassId'] === 'string' &&
    r['meterTimeswitchClassEffectiveFrom'] instanceof Date &&
    typeof r['marketParticipantId'] === 'string' &&
    r['marketParticipantEffectiveFrom'] instanceof Date &&
    typeof r['lineLossFactorClassId'] === 'string' &&
    r['lineLossFactorClassEffectiveFrom'] instanceof Date &&
    (r['effectiveTo'] instanceof Date || r['effectiveTo'] === null)
  );
}
