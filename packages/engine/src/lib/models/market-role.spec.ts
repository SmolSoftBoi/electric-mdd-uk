import { isMarketRole } from './market-role';

describe('isMarketRole', () => {
  it('validates a market role', () => {
    expect(isMarketRole({ code: 'A', description: 'Role' })).toBe(true);
  });
});
