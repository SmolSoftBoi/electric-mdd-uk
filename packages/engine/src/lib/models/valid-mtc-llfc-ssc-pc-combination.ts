'use strict';

/**
 * Valid MTC, LLFC, SSC and Profile Class combination.
 */
export interface ValidMtcLlfcSscPcCombination {
  meterTimeswitchClassId: string;
  meterTimeswitchClassEffectiveFrom: Date;
  marketParticipantId: string;
  marketParticipantEffectiveFrom: Date;
  standardSettlementConfigurationId: string;
  standardSettlementConfigurationEffectiveFrom: Date;
  lineLossFactorClassId: string;
  lineLossFactorClassEffectiveFrom: Date;
  profileClassId: number;
  profileClassEffectiveFrom: Date;
  effectiveTo: Date | null;
  preservedTariffIndicator: string;
}

/**
 * Validate a {@link ValidMtcLlfcSscPcCombination} at runtime.
 *
 * @param value - Unknown value.
 * @returns `true` when the value matches the interface.
 */
export function isValidMtcLlfcSscPcCombination(
  value: unknown
): value is ValidMtcLlfcSscPcCombination {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r['meterTimeswitchClassId'] === 'string' &&
    r['meterTimeswitchClassEffectiveFrom'] instanceof Date &&
    typeof r['marketParticipantId'] === 'string' &&
    r['marketParticipantEffectiveFrom'] instanceof Date &&
    typeof r['standardSettlementConfigurationId'] === 'string' &&
    r['standardSettlementConfigurationEffectiveFrom'] instanceof Date &&
    typeof r['lineLossFactorClassId'] === 'string' &&
    r['lineLossFactorClassEffectiveFrom'] instanceof Date &&
    typeof r['profileClassId'] === 'number' &&
    r['profileClassEffectiveFrom'] instanceof Date &&
    (r['effectiveTo'] instanceof Date || r['effectiveTo'] === null) &&
    typeof r['preservedTariffIndicator'] === 'string'
  );
}
