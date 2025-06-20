import { describe, expect, it, vi } from 'vitest';
import type { PrismaClient } from '../../../generated/prisma';
import { PrismaMddRepo } from './mddRepo';

describe('PrismaMddRepo', () => {
  it('caches GSP groups', async () => {
    const prisma = {
      gspGroup: {
        findMany: vi.fn().mockResolvedValue([{ id: '_A', name: 'Eastern' }]),
      },
      marketRole: {
        findMany: vi.fn().mockResolvedValue([]),
      },
    } as unknown as PrismaClient;
    const repo = new PrismaMddRepo(prisma);
    const first = await repo.listGspGroups();
    const second = await repo.listGspGroups();
    expect(first).toEqual([{ id: '_A', name: 'Eastern' }]);
    expect(prisma.gspGroup.findMany).toHaveBeenCalledTimes(1);
    expect(second).toBe(first);
  });

  it('caches market roles', async () => {
    const prisma = {
      gspGroup: {
        findMany: vi.fn().mockResolvedValue([]),
      },
      marketRole: {
        findMany: vi.fn().mockResolvedValue([
          {
            code: 'X',
            description: 'Role X',
          },
        ]),
      },
    } as unknown as PrismaClient;
    const repo = new PrismaMddRepo(prisma);
    const first = await repo.listMarketRoles();
    const second = await repo.listMarketRoles();
    expect(first).toEqual([{ code: 'X', description: 'Role X' }]);
    expect(prisma.marketRole.findMany).toHaveBeenCalledTimes(1);
    expect(second).toBe(first);
  });
});
