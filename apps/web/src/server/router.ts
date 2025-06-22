'use strict';

import { initTRPC } from '@trpc/server';

import { useServerContext, type ServerContextValue } from './context';

const t = initTRPC.context<ServerContextValue>().create();

/**
 * Root router for all server procedures.
 */
export const rootRouter = t.router({
  /** Check server context propagation. */
  ping: t.procedure.query(() => {
    const { requestId } = useServerContext();
    return { requestId };
  }),
});

export type RootRouter = typeof rootRouter;
