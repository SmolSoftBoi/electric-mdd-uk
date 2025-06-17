import { Request, Response } from 'node-fetch';
import { waitFor } from '@testing-library/react';
import { GET } from './route';

if (typeof globalThis.Response === 'undefined') {
  // Polyfill for Node.js test environment
  (globalThis as any).Response = Response;
}
if (typeof globalThis.Request === 'undefined') {
  (globalThis as any).Request = Request;
}

describe('hello API', () => {
  it('returns greeting text', async () => {
    const res = await GET(new Request('http://localhost'));
    await waitFor(async () => {
      await expect(res.text()).resolves.toBe(
        'Hello, from electric MDD UK API!'
      );
    });
  });
});
