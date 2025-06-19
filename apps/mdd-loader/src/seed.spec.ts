import path from 'node:path';

const seed = jest.fn();
const disconnect = jest.fn();

jest.mock('prisma/seed', () => ({
  prisma: { $disconnect: disconnect },
  seed,
}));

describe('main', () => {
  let main: typeof import('./main').main;

  beforeAll(async () => {
    ({ main } = await import('./main'));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('invokes seed with resolved directory', async () => {
    await main(['--dir', 'fixtures']);

    expect(seed).toHaveBeenCalledWith(path.resolve('fixtures'));
    expect(disconnect).toHaveBeenCalled();
  });

  it('uses default data directory', async () => {
    await main([]);

    expect(seed).toHaveBeenCalledWith(path.resolve('data'));
  });
});
