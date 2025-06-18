/**
 * @jest-environment node
 */
import { GET } from './route';

describe('hello API', () => {
  it('returns greeting text', async () => {
    const res = await GET(new Request('http://localhost'));
    await expect(res.text()).resolves.toBe('Hello, from electric MDD UK API!');
  });
});
