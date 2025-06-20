import { describe, it, expect } from 'vitest';
import { validateGspGroups } from './aggregator';

describe('validateGspGroups', () => {
  it('aggregates results for valid groups', () => {
    const results = validateGspGroups([{ id: '_A', name: 'Eastern' }]);
    expect(results).toEqual([{ id: '_A', errors: [] }]);
  });

  it('aggregates results with errors', () => {
    const results = validateGspGroups([
      { id: '_A', name: 'Eastern' },
      { id: 'AA', name: 'Eastern' },
    ]);
    expect(results[1].errors).toEqual([
      {
        code: 'INVALID_GSP_GROUP_ID_FORMAT',
        message: 'GSP group id must match pattern "_A".',
      },
    ]);
  });
});
