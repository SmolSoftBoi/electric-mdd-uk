/**
 * @jest-environment node
 */
import { GET } from './route';

describe('tRPC ping API', () => {
  it('returns request id from context', async () => {
    const req = new Request(
      'http://localhost/api/trpc/ping?path=ping&input={} ',
      {
        headers: { 'x-request-id': 'test-123' },
      }
    );
    const res = await GET(req);
    const data = await res.json();
    expect(data.result.data).toEqual({ requestId: 'test-123' });
  });
});
