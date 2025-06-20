import { isValidMtcLlfcCombination } from './valid-mtc-llfc-combination';

describe('isValidMtcLlfcCombination', () => {
  it('validates a combination', () => {
    expect(
      isValidMtcLlfcCombination({
        meterTimeswitchClassId: '70',
        meterTimeswitchClassEffectiveFrom: new Date('1996-04-01'),
        marketParticipantId: 'SOUT',
        marketParticipantEffectiveFrom: new Date('1996-04-01'),
        lineLossFactorClassId: '453',
        lineLossFactorClassEffectiveFrom: new Date('1996-04-01'),
        effectiveTo: new Date('2022-03-31'),
      })
    ).toBe(true);
  });
});
