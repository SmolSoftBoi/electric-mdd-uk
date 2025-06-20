'use strict';

/**
 * An organisation participating in the energy market.
 */
export interface MarketParticipant {
  id: string;
  name: string;
  poolMemberId: string | null;
}

/**
 * Determine whether a value is a {@link MarketParticipant}.
 *
 * @param value - Unknown value to check.
 * @returns `true` if the value matches the interface.
 */
export function isMarketParticipant(
  value: unknown
): value is MarketParticipant {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r['id'] === 'string' &&
    typeof r['name'] === 'string' &&
    (typeof r['poolMemberId'] === 'string' || r['poolMemberId'] === null)
  );
}
