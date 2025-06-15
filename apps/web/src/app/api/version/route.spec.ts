import { Response } from 'node-fetch';
import { GET } from './route';
import pkg from '../../../../../../package.json';

if (typeof globalThis.Response === 'undefined') {
  // Polyfill for Node.js test environment
  // eslint-disable-next-line no-global-assign
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
