import { describe, expect, it } from 'vitest';
import { gspGroupIdFormatRule } from './rules/gspGroupIdFormatRule';
import type { GspGroup } from './models/gsp-group';
import { aggregateValidators } from './validatorAggregator';

const groups: GspGroup[] = [
  { id: '_A', name: 'Eastern' },
  { id: 'AA', name: 'Invalid' },
];

describe('aggregateValidators', () => {
  it('aggregates rule results per input', () => {
    const results = aggregateValidators(groups, [gspGroupIdFormatRule]);

    expect(results).toEqual([
      { input: groups[0], errors: [] },
      {
        input: groups[1],
        errors: [
          {
            code: 'INVALID_GSP_GROUP_ID_FORMAT',
            message: 'GSP group id must match pattern "_A".',
          },
        ],
      },
    ]);
  });
});
