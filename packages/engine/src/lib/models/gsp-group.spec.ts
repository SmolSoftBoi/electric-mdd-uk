import { describe, it, expect } from 'vitest';
import { isGspGroup } from './gsp-group';

describe('isGspGroup', () => {
  it('validates a GSP group', () => {
    expect(isGspGroup({ id: '_A', name: 'Eastern' })).toBe(true);
  });
});
