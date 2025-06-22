'use strict';

import { handleTrpcRequest } from '../../../../server/trpc';

export const runtime = 'nodejs';

/**
 * Handle GET requests for tRPC procedures.
 */
export const GET = handleTrpcRequest;

/**
 * Handle POST requests for tRPC procedures.
 */
export const POST = handleTrpcRequest;
