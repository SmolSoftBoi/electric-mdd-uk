import { GET, POST } from './route';
import { handleTrpcRequest } from '../../../../server/trpc';

jest.mock('../../../../server/trpc', () => ({
  handleTrpcRequest: jest.fn(async () => ({} as Response)),
}));

describe('tRPC route handlers', () => {
  it('forwards GET requests to handleTrpcRequest', async () => {
    const req = {} as unknown as Request;
    await GET(req);
    expect(handleTrpcRequest).toHaveBeenCalledWith(req);
  });

  it('forwards POST requests to handleTrpcRequest', async () => {
    const req = { method: 'POST' } as unknown as Request;
    await POST(req);
    expect(handleTrpcRequest).toHaveBeenCalledWith(req);
  });
});
