'use strict';

import {
  fetchRequestHandler,
  FetchCreateContextFnOptions,
} from '@trpc/server/adapters/fetch';

import { runServerContext } from './context';
import { appRouter, type TrpcContext } from './root-router';

export type { TrpcContext };

export async function createContext({
  req,
}: FetchCreateContextFnOptions): Promise<TrpcContext> {
  return {
    requestId: req.headers.get('x-request-id') ?? crypto.randomUUID(),
  };
}

export type { AppRouter } from './root-router';

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
