jest.mock('../../../prisma/seed', () => ({
  prisma: { $disconnect: jest.fn() },
  seed: jest.fn(),
}));

import { parseOptions } from './main';

describe('parseOptions', () => {
  it('uses default directory', () => {
    expect(parseOptions([])).toEqual({ dir: 'data' });
  });

  it('parses --dir flag', () => {
    expect(parseOptions(['--dir', 'foo'])).toEqual({ dir: 'foo' });
  });

  it('parses -d flag', () => {
    expect(parseOptions(['-d', 'bar'])).toEqual({ dir: 'bar' });
  });
});
