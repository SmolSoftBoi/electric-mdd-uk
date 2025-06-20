import { describe, it, expect } from 'vitest';
import { isMarketRole } from './market-role';

describe('isMarketRole', () => {
  it('validates a market role', () => {
    expect(isMarketRole({ code: 'A', description: 'HH Data Aggregator' })).toBe(
      true
    );
  });
});
