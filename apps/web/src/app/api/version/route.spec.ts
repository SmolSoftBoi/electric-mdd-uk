/**
 * @jest-environment node
 */
import { GET } from './route';
import pkg from 'root/pkg';

describe('version API', () => {
  it('returns package version', async () => {
    const res = await GET();
    expect(res.headers.get('content-type')).toMatch('application/json');
    const data = await res.json();
    expect(data).toEqual({ version: pkg.version });
  });
});
