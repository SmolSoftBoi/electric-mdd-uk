import { describe, expect, it } from 'vitest';
import { parseDate } from './seed';

describe('parseDate', () => {
  it('parses dd/MM/yyyy', () => {
    const date = parseDate('01/02/2024');
    expect(date?.toISOString()).toBe('2024-02-01T00:00:00.000Z');
  });

  it('handles empty string', () => {
    expect(parseDate('')).toBeNull();
  });

  it('returns null on invalid format', () => {
    expect(parseDate('32/13/2024')).toBeNull();
  });
});
