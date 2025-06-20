import { isMarketParticipantRole } from './market-participant-role';
import type { MarketRole } from './market-role';

describe('isMarketParticipantRole', () => {
  it('validates a role assignment', () => {
    const role: MarketRole = { code: 'A', description: 'HH Data Aggregator' };
    expect(
      isMarketParticipantRole({
        marketParticipantId: 'PADD',
        roleCode: 'A',
        marketRole: role,
        effectiveFrom: new Date('2024-03-20'),
        effectiveTo: null,
      })
    ).toBe(true);
  });
});
