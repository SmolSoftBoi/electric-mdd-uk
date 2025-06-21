'use strict';

import { AsyncLocalStorage } from 'node:async_hooks';

/**
 * Data available to server components during a request.
 */
export interface ServerContextValue {
  /** Unique request identifier */
  requestId: string;
}

const storage = new AsyncLocalStorage<ServerContextValue>();

/**
 * Execute a function within a server context.
 *
 * @param value - Context values for this run.
 * @param fn - Function to execute.
 * @returns Result of the function.
 */
export function runServerContext<T>(
  value: ServerContextValue,
  fn: () => Promise<T> | T
): Promise<T> | T {
  return storage.run(value, fn);
}

/**
 * Retrieve the current server context.
 *
 * @returns Context values.
 * @throws If called outside of a context.
 */
export function useServerContext(): ServerContextValue {
  const ctx = storage.getStore();
  if (!ctx) throw new Error('Server context not initialised');
  return ctx;
}
