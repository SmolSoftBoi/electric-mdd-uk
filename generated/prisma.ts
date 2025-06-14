export class PrismaClient {
  async $disconnect(): Promise<void> {}
  async $transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> {
    return fn(new Prisma.TransactionClient());
  }
}
export namespace Prisma {
  export class TransactionClient {
    [key: string]: any;
  }
}
