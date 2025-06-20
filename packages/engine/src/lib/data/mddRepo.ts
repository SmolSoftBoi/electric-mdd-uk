'use strict';

import { PrismaClient } from '../../../generated/prisma';
import type { GspGroup, MarketRole } from '../models';

interface PrismaMddClient {
  gspGroup: {
    findMany(args: { select: { id: true; name: true } }): Promise<GspGroup[]>;
  };
  marketRole: {
    findMany(args: {
      select: { code: true; description: true };
    }): Promise<MarketRole[]>;
  };
}

/**
 * Read-only repository for Market Domain Data.
 */
export class PrismaMddRepo {
  private readonly cache = new Map<string, unknown>();
  constructor(
    private readonly prisma: PrismaMddClient &
      PrismaClient = new PrismaClient() as unknown as PrismaMddClient &
      PrismaClient
  ) {}

  /**
   * List all GSP groups.
   *
   * @returns Array of groups.
   */
  async listGspGroups(): Promise<GspGroup[]> {
    if (!this.cache.has('gspGroups')) {
      const groups = await this.prisma.gspGroup.findMany({
        select: { id: true, name: true },
      });
      this.cache.set('gspGroups', groups);
    }
    return this.cache.get('gspGroups') as GspGroup[];
  }

  /**
   * List all market roles.
   *
   * @returns Array of roles.
   */
  async listMarketRoles(): Promise<MarketRole[]> {
    if (!this.cache.has('marketRoles')) {
      const roles = await this.prisma.marketRole.findMany({
        select: { code: true, description: true },
      });
      this.cache.set('marketRoles', roles);
    }
    return this.cache.get('marketRoles') as MarketRole[];
  }
}

/** Default repository instance. */
export const mddRepo = new PrismaMddRepo();
