'use strict';

/**
 * Group of Grid Supply Points.
 */
export interface GspGroup {
  id: string;
  name: string;
}

/**
 * Check if a value is a {@link GspGroup}.
 *
 * @param value - Unknown value.
 * @returns `true` when valid.
 */
export function isGspGroup(value: unknown): value is GspGroup {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return typeof r['id'] === 'string' && typeof r['name'] === 'string';
}
