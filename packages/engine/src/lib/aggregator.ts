'use strict';

import type { GspGroup } from './models/gsp-group';
import type { ValidationError } from './rules/types';
import { validateGspGroup } from './validator';

/**
 * Validation result for a single GSP group.
 */
export interface AggregatedResult {
  /** Group identifier */
  id: string;
  /** Errors associated with the group */
  errors: ValidationError[];
}

/**
 * Validate multiple GSP groups and aggregate their errors.
 *
 * @param groups - Array of groups to validate.
 * @returns List of aggregated results.
 */
export function validateGspGroups(groups: GspGroup[]): AggregatedResult[] {
  return groups.map((g) => ({ id: g.id, errors: validateGspGroup(g) }));
}
