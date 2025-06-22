import { appRouter } from './root-router';
import { runServerContext } from './context';

describe('appRouter', () => {
  it('resolves ping with context id', async () => {
    const caller = appRouter.createCaller({ requestId: 'abc' });
    const result = await runServerContext({ requestId: 'abc' }, () =>
      caller.ping()
    );
    expect(result).toEqual({ requestId: 'abc' });
  });
});
