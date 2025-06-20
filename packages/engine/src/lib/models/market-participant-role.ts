'use strict';

import type { MarketRole } from './market-role';

/**
 * Role assignment for a market participant.
 */
export interface MarketParticipantRole {
  marketParticipantId: string;
  roleCode: string;
  marketRole: MarketRole;
  effectiveFrom: Date;
  effectiveTo: Date | null;
}

/**
 * Runtime check for {@link MarketParticipantRole}.
 *
 * @param value - Unknown value.
 * @returns `true` if the shape matches.
 */
export function isMarketParticipantRole(
  value: unknown
): value is MarketParticipantRole {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r['marketParticipantId'] === 'string' &&
    typeof r['roleCode'] === 'string' &&
    r['marketRole'] !== undefined &&
    r['effectiveFrom'] instanceof Date &&
    (r['effectiveTo'] instanceof Date || r['effectiveTo'] === null)
  );
}
