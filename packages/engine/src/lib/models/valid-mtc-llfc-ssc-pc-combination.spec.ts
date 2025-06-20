import { isValidMtcLlfcSscPcCombination } from './valid-mtc-llfc-ssc-pc-combination';

describe('isValidMtcLlfcSscPcCombination', () => {
  it('validates a combination', () => {
    expect(
      isValidMtcLlfcSscPcCombination({
        meterTimeswitchClassId: '1',
        meterTimeswitchClassEffectiveFrom: new Date('1996-04-01'),
        marketParticipantId: 'EDFI',
        marketParticipantEffectiveFrom: new Date('2009-04-16'),
        standardSettlementConfigurationId: '349',
        standardSettlementConfigurationEffectiveFrom: new Date('2009-04-16'),
        lineLossFactorClassId: '906',
        lineLossFactorClassEffectiveFrom: new Date('2009-04-16'),
        profileClassId: 2,
        profileClassEffectiveFrom: new Date('2010-03-17'),
        effectiveTo: new Date('2014-08-20'),
        preservedTariffIndicator: false,
      })
    ).toBe(true);
  });
});
