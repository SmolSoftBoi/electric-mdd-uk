'use strict';

import { initTRPC } from '@trpc/server';

import { useServerContext, type ServerContextValue } from './context';

export type TrpcContext = ServerContextValue;

const trpc = initTRPC.context<TrpcContext>().create();

/**
 * Root tRPC router exposing all server procedures.
 */
export const appRouter = trpc.router({
  ping: trpc.procedure.query(() => {
    const { requestId } = useServerContext();
    return { requestId };
  }),
});

export type AppRouter = typeof appRouter;

export { trpc };
