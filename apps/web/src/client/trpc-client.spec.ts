import { createTrpcClient } from './trpc-client';

jest.mock('@trpc/client', () => ({
  createTRPCProxyClient: jest.fn(),
  httpBatchLink: jest.fn(() => 'link'),
}));

describe('createTrpcClient', () => {
  it('passes baseUrl to httpBatchLink', () => {
    const { httpBatchLink, createTRPCProxyClient } = require('@trpc/client');
    createTrpcClient('https://api.example.com');
    expect(httpBatchLink).toHaveBeenCalledWith({
      url: 'https://api.example.com/api/trpc',
    });
    expect(createTRPCProxyClient).toHaveBeenCalledWith({
      transformer: expect.any(Object),
      links: ['link'],
    });
  });
});
