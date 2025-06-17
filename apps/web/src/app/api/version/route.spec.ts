import { Response } from 'node-fetch';
import { GET } from './route';
import pkg from 'root/pkg';

if (typeof globalThis.Response === 'undefined') {
  // Polyfill for Node.js test environment
  (globalThis as any).Response = Response;
}

describe('version API', () => {
  it('returns package version', async () => {
    const res = await GET();
    expect(res.headers.get('content-type')).toMatch('application/json');
    const data = await res.json();
    expect(data).toEqual({ version: pkg.version });
  });
});
