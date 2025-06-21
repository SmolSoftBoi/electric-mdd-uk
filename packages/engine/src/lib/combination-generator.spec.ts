import { describe, it, expect } from 'vitest';
import { generateCombinations } from './combination-generator';

describe('generateCombinations', () => {
  it('yields pair combinations', () => {
    const combos = Array.from(
      generateCombinations([
        ['A', 'B'],
        ['1', '2'],
      ])
    );
    expect(combos).toEqual([
      ['A', '1'],
      ['A', '2'],
      ['B', '1'],
      ['B', '2'],
    ]);
  });

  it('returns an empty array when no groups', () => {
    const combos = Array.from(generateCombinations([]));
    expect(combos).toEqual([]);
  });
});
