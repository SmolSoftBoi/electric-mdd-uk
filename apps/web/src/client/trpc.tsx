'use client';

import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { QueryClient } from '@tanstack/react-query';
import { useState, type ReactNode } from 'react';

import type { AppRouter } from '../server/trpc';

/**
 * tRPC React context and helpers.
 */
export const trpc = createTRPCReact<AppRouter>();

/**
 * Create a tRPC client bound to `/api/trpc`.
 *
 * @returns Configured client instance.
 */
export function createTrpcClient() {
  return trpc.createClient({
    links: [httpBatchLink({ url: '/api/trpc' })],
  } as unknown as Parameters<typeof trpc.createClient>[0]);
}

export interface TrpcProviderProps {
  /** Elements to render inside the provider */
  children: ReactNode;
}

/**
 * Provide tRPC and React Query context.
 *
 * @param props - Component properties.
 * @returns Wrapped elements.
 */
export function TrpcProvider({ children }: TrpcProviderProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [client] = useState(createTrpcClient);

  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  );
}
