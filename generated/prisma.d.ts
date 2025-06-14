export class PrismaClient {
  $disconnect(): Promise<void>;
  $transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T>;
}
export namespace Prisma {
  class TransactionClient {
    [key: string]: any;
  }
}
