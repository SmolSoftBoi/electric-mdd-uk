import { describe, it, expect } from 'vitest';
import { engine } from './engine';

describe('engine', () => {
  it('should work', () => {
    expect(engine()).toEqual('engine');
  });
});
