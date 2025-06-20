import { isGspGroup } from './gsp-group';

describe('isGspGroup', () => {
  it('validates a GSP group', () => {
    expect(isGspGroup({ id: 'A', name: 'Group' })).toBe(true);
  });
});
