import { runServerContext, useServerContext } from './context';

describe('server context', () => {
  it('provides context within run', () => {
    return runServerContext({ requestId: 'abc' }, () => {
      expect(useServerContext().requestId).toBe('abc');
    });
  });

  it('throws without context', () => {
    expect(() => useServerContext()).toThrow('Server context not initialised');
  });
});
