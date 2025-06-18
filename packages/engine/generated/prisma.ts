/* eslint-disable */
export class PrismaClient {
  async $disconnect(): Promise<void> {}
  async $transaction<T>(
    fn: (tx: Prisma.TransactionClient) => Promise<T>
  ): Promise<T> {
    return fn(new Prisma.TransactionClient());
  }
}
export namespace Prisma {
  export interface MarketRole {
    code: string;
    description: string;
  }

  export interface MarketParticipant {
    id: string;
    name: string;
    poolMemberId: string | null;
  }

  export interface MarketParticipantRole {
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

  export interface ValidMtcLlfcCombination {
    meterTimeswitchClassId: string;
    meterTimeswitchClassEffectiveFrom: Date;
    marketParticipantId: string;
    marketParticipantEffectiveFrom: Date;
    lineLossFactorClassId: string;
    lineLossFactorClassEffectiveFrom: Date;
    effectiveTo: Date | null;
  }

  export interface ValidMtcLlfcSscPcCombination {
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

  export interface Delegate<T> {
    createMany(args: { data: T[]; skipDuplicates?: boolean }): Promise<void>;
  }

  export class TransactionClient {
    marketRole: Delegate<MarketRole> = { createMany: async () => {} };
    marketParticipant: Delegate<MarketParticipant> = {
      createMany: async () => {},
    };
    marketParticipantRole: Delegate<MarketParticipantRole> = {
      createMany: async () => {},
    };
    validMtcLlfcCombination: Delegate<ValidMtcLlfcCombination> = {
      createMany: async () => {},
    };
    validMtcLlfcSscPcCombination: Delegate<ValidMtcLlfcSscPcCombination> = {
      createMany: async () => {},
    };
  }
}
