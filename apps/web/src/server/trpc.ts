'use strict';

import { initTRPC } from '@trpc/server';
import {
  fetchRequestHandler,
  FetchCreateContextFnOptions,
} from '@trpc/server/adapters/fetch';
import { randomUUID } from 'node:crypto';

import {
  runServerContext,
  useServerContext,
  type ServerContextValue,
} from './context';

export type TrpcContext = ServerContextValue;

export async function createContext({
  req,
}: FetchCreateContextFnOptions): Promise<TrpcContext> {
  return { requestId: req.headers.get('x-request-id') ?? randomUUID() };
}

const t = initTRPC.context<TrpcContext>().create();

export const appRouter = t.router({
  ping: t.procedure.query(() => {
    const { requestId } = useServerContext();
    return { requestId };
  }),
});

export type AppRouter = typeof appRouter;

export async function handleTrpcRequest(request: Request) {
  const ctx = await createContext({ req: request, resHeaders: new Headers() });
  return runServerContext(ctx, () =>
    fetchRequestHandler({
      endpoint: '/api/trpc',
      req: request,
      router: appRouter,
      createContext: () => ctx,
    })
  );
}
