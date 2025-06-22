'use strict';

import {
  fetchRequestHandler,
  FetchCreateContextFnOptions,
} from '@trpc/server/adapters/fetch';
import { randomUUID } from 'node:crypto';

import { runServerContext, type ServerContextValue } from './context';
import { rootRouter } from './root';

export type TrpcContext = ServerContextValue;

export async function createContext({
  req,
}: FetchCreateContextFnOptions): Promise<TrpcContext> {
  return { requestId: req.headers.get('x-request-id') ?? randomUUID() };
}

export async function handleTrpcRequest(request: Request) {
  const ctx = await createContext({ req: request, resHeaders: new Headers() });
  return runServerContext(ctx, () =>
    fetchRequestHandler({
      endpoint: '/api/trpc',
      req: request,
      router: rootRouter,
      createContext: () => ctx,
    })
  );
}
