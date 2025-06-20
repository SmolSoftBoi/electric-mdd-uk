import { isValidMtcLlfcSscPcCombination } from './valid-mtc-llfc-ssc-pc-combination';

describe('isValidMtcLlfcSscPcCombination', () => {
  it('validates a combination', () => {
    expect(
      isValidMtcLlfcSscPcCombination({
        meterTimeswitchClassId: 'A',
        meterTimeswitchClassEffectiveFrom: new Date(),
        marketParticipantId: 'P',
        marketParticipantEffectiveFrom: new Date(),
        standardSettlementConfigurationId: 'S',
        standardSettlementConfigurationEffectiveFrom: new Date(),
        lineLossFactorClassId: 'L',
        lineLossFactorClassEffectiveFrom: new Date(),
        profileClassId: 1,
        profileClassEffectiveFrom: new Date(),
        effectiveTo: null,
        preservedTariffIndicator: 'Y',
      })
    ).toBe(true);
  });
});
