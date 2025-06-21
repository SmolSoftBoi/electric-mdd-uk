import { handleTrpcRequest } from '../../../../server/trpc';

export const runtime = 'nodejs';

export const GET = handleTrpcRequest;
export const POST = handleTrpcRequest;
