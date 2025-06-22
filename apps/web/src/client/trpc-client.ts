'use strict';

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { DataTransformerOptions } from '@trpc/server';
import type { AppRouter } from '../server/trpc';

const transformer: DataTransformerOptions = {
  input: { serialize: (d) => d, deserialize: (d) => d },
  output: { serialize: (d) => d, deserialize: (d) => d },
};

/**
 * Create a tRPC client for the browser.
 *
 * @param baseUrl - Optional base URL for API requests.
 * @returns Configured tRPC client.
 */
export function createTrpcClient(baseUrl = '') {
  const normalized = baseUrl.replace(/\/$/, '');
  return createTRPCProxyClient<AppRouter>({
    transformer,
    links: [httpBatchLink({ url: `${normalized}/api/trpc` })],
  });
}
