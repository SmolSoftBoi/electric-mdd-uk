export class PrismaClient {
  $disconnect(): Promise<void>;
  $transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T>;
}
export namespace Prisma {
  interface MarketRole {
    code: string;
    description: string;
  }

  interface MarketParticipant {
    id: string;
    name: string;
    poolMemberId: string | null;
  }

  interface MarketParticipantRole {
    marketParticipantId: string;
    roleCode: string;
    effectiveFrom: Date;
    effectiveTo: Date | null;
    address1: string | null;
    address2: string | null;
    address3: string | null;
    address4: string | null;
    address5: string | null;
    address6: string | null;
    address7: string | null;
    address8: string | null;
    address9: string | null;
    postCode: string | null;
    distributorShortCode: string | null;
  }

  interface ValidMtcLlfcCombination {
    meterTimeswitchClassId: string;
    meterTimeswitchClassEffectiveFrom: Date;
    marketParticipantId: string;
    marketParticipantEffectiveFrom: Date;
    lineLossFactorClassId: string;
    lineLossFactorClassEffectiveFrom: Date;
    effectiveTo: Date | null;
  }

  interface ValidMtcLlfcSscPcCombination {
    meterTimeswitchClassId: string;
    meterTimeswitchClassEffectiveFrom: Date;
    marketParticipantId: string;
    marketParticipantEffectiveFrom: Date;
    standardSettlementConfigurationId: string;
    standardSettlementConfigurationEffectiveFrom: Date;
    lineLossFactorClassId: string;
    lineLossFactorClassEffectiveFrom: Date;
    profileClassId: number;
    profileClassEffectiveFrom: Date;
    effectiveTo: Date | null;
    preservedTariffIndicator: string;
  }

  interface Delegate<T> {
    createMany(args: { data: T[]; skipDuplicates?: boolean }): Promise<void>;
  }

  class TransactionClient {
    marketRole: Delegate<MarketRole>;
    marketParticipant: Delegate<MarketParticipant>;
    marketParticipantRole: Delegate<MarketParticipantRole>;
    validMtcLlfcCombination: Delegate<ValidMtcLlfcCombination>;
    validMtcLlfcSscPcCombination: Delegate<ValidMtcLlfcSscPcCombination>;
  }
}
