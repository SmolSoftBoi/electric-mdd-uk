import { isValidMtcLlfcCombination } from './valid-mtc-llfc-combination';

describe('isValidMtcLlfcCombination', () => {
  it('validates a combination', () => {
    expect(
      isValidMtcLlfcCombination({
        meterTimeswitchClassId: 'A',
        meterTimeswitchClassEffectiveFrom: new Date(),
        marketParticipantId: 'P',
        marketParticipantEffectiveFrom: new Date(),
        lineLossFactorClassId: 'L',
        lineLossFactorClassEffectiveFrom: new Date(),
        effectiveTo: null,
      })
    ).toBe(true);
  });
});
