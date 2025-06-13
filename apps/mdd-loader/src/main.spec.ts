import { parseOptions } from './main';

describe('parseOptions', () => {
  it('uses default directory', () => {
    expect(parseOptions([])).toEqual({ dir: 'data' });
  });

  it('parses --dir flag', () => {
    expect(parseOptions(['--dir', 'foo'])).toEqual({ dir: 'foo' });
  });
});
