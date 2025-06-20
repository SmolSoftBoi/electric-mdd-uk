import { describe, it, expect } from 'vitest';
import { gspGroupIdFormatRule } from '../gspGroupIdFormatRule';

describe('gspGroupIdFormatRule', () => {
  it('accepts valid id', () => {
    const result = gspGroupIdFormatRule.validate({ id: '_A', name: 'Eastern' });
    expect(result).toEqual([]);
  });

  it('rejects invalid id', () => {
    const result = gspGroupIdFormatRule.validate({ id: 'AA', name: 'Eastern' });
    expect(result).toEqual([
      {
        code: 'INVALID_GSP_GROUP_ID_FORMAT',
        message: 'GSP group id must match pattern "_A".',
      },
    ]);
  });
});
