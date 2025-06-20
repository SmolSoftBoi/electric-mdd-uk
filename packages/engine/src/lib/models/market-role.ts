'use strict';

/**
 * Market role such as Supplier or Distributor.
 */
export interface MarketRole {
  code: string;
  description: string;
}

/**
 * Check if a value is a {@link MarketRole}.
 *
 * @param value - Unknown value to validate.
 * @returns `true` when the value conforms to {@link MarketRole}.
 */
export function isMarketRole(value: unknown): value is MarketRole {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return typeof r['code'] === 'string' && typeof r['description'] === 'string';
}
