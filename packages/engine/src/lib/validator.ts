'use strict';

import type { GspGroup } from './models/gsp-group';
import type { Rule, ValidationError } from './rules/types';
import { gspGroupIdFormatRule } from './rules/gspGroupIdFormatRule';

/**
 * List of all validation rules.
 */
export const RULES: Rule<GspGroup>[] = [gspGroupIdFormatRule];

/**
 * Validate a GSP group using all rules.
 *
 * @param group - GSP group to validate.
 * @returns Array of validation errors.
 */
export function validateGspGroup(group: GspGroup): ValidationError[] {
  return RULES.flatMap((rule) => rule.validate(group));
}
