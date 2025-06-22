'use strict';

import { handleTrpcRequest } from '../../../../server/trpc';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

/**
 * Handle GET requests for tRPC procedures.
 */
export function GET(request: Request) {
  return handleTrpcRequest(request);
}

/**
 * Handle POST requests for tRPC procedures.
 */
export { GET as POST };
