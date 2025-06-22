'use strict';

import { handleTrpcRequest } from '../../../../server/trpc';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

/**
 * Handle GET requests for tRPC procedures.
 *
 * @param request - Incoming HTTP request.
 * @returns tRPC response.
 */
export function GET(request: Request) {
  return handleTrpcRequest(request);
}

/**
 * Handle POST requests for tRPC procedures.
 *
 * @param request - Incoming HTTP request.
 * @returns tRPC response.
 */
export function POST(request: Request) {
  return handleTrpcRequest(request);
}
