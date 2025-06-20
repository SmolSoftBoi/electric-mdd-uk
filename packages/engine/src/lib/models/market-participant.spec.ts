import { isMarketParticipant } from './market-participant';

describe('isMarketParticipant', () => {
  it('validates a participant', () => {
    expect(
      isMarketParticipant({ id: 'P1', name: 'Foo', poolMemberId: null })
    ).toBe(true);
  });
});
