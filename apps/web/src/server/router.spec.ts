import { rootRouter } from './router';
import { runServerContext } from './context';

describe('rootRouter', () => {
  it('resolves ping using context', async () => {
    const res = await runServerContext({ requestId: 'abc' }, () =>
      rootRouter.createCaller({ requestId: 'abc' }).ping()
    );
    expect(res).toEqual({ requestId: 'abc' });
  });
});
