import React from 'react';
import { render } from '@testing-library/react';
import { httpBatchLink } from '@trpc/client';

import { createTrpcClient, TrpcProvider } from './trpc';

jest.mock('@trpc/client', () => ({
  httpBatchLink: jest.fn(() => jest.fn()),
}));
jest.mock('@trpc/react-query', () => ({
  createTRPCReact: () => ({
    createClient: jest.fn(() => ({
      foo: 'bar',
    })),
    Provider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  }),
}));

describe('createTrpcClient', () => {
  it('configures httpBatchLink with API path', () => {
    createTrpcClient();
    expect(httpBatchLink).toHaveBeenCalledWith({ url: '/api/trpc' });
  });
});

describe('TrpcProvider', () => {
  it('renders child elements', () => {
    const { getByText } = render(
      <TrpcProvider>
        <span>works</span>
      </TrpcProvider>
    );
    expect(getByText('works')).toBeTruthy();
  });
});
