import { createCaller } from './root';
import { runServerContext } from './context';

describe('root router', () => {
  it('exposes ping procedure', async () => {
    const ctx = { requestId: 'xyz' };
    const caller = createCaller(ctx);
    await expect(runServerContext(ctx, () => caller.ping())).resolves.toEqual({
      requestId: 'xyz',
    });
  });
});
