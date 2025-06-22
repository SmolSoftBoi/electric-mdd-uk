'use strict';

import { initTRPC } from '@trpc/server';

import { useServerContext, type ServerContextValue } from './context';

export type RootContext = ServerContextValue;

const t = initTRPC.context<RootContext>().create();

/**
 * Root tRPC router for all server procedures.
 */
export const rootRouter = t.router({
  /**
   * Simple ping endpoint.
   *
   * @returns Request identifier from context.
   */
  ping: t.procedure.query(() => {
    const { requestId } = useServerContext();
    return { requestId };
  }),
});

export type RootRouter = typeof rootRouter;

export const createCaller = rootRouter.createCaller;
