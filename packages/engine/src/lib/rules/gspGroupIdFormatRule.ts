'use strict';

import type { GspGroup } from '../models/gsp-group';
import type { Rule, ValidationError } from './types';

/**
 * Ensure GSP group identifiers follow the pattern "_X".
 */
export const gspGroupIdFormatRule: Rule<GspGroup> = {
  name: 'gspGroupIdFormat',
  validate({ id }): ValidationError[] {
    return /^_[A-Z]$/.test(id)
      ? []
      : [
          {
            code: 'INVALID_GSP_GROUP_ID_FORMAT',
            message: 'GSP group id must match pattern "_A".',
          },
        ];
  },
};
