import { isMarketParticipantRole } from './market-participant-role';
import type { MarketRole } from './market-role';

describe('isMarketParticipantRole', () => {
  it('validates a role assignment', () => {
    const role: MarketRole = { code: 'A', description: 'Role' };
    expect(
      isMarketParticipantRole({
        marketParticipantId: 'P1',
        roleCode: 'A',
        marketRole: role,
        effectiveFrom: new Date(),
        effectiveTo: null,
      })
    ).toBe(true);
  });
});
