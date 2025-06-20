import { isMarketParticipant } from './market-participant';

describe('isMarketParticipant', () => {
  it('validates a participant', () => {
    expect(
      isMarketParticipant({
        id: 'PADD',
        name: 'Fuse Energy Supply Limited',
        poolMemberId: 'PADD',
      })
    ).toBe(true);
  });
});
