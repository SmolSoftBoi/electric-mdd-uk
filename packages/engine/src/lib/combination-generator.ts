'use strict';

/**
 * Generate the cartesian product of value groups.
 *
 * @param groups - Arrays of options for each position.
 * @returns Generator producing every combination.
 */
export function* generateCombinations<T>(groups: T[][]): Generator<T[]> {
  if (groups.length === 0) return;
  function* walk(index: number, prefix: T[]): Generator<T[]> {
    if (index === groups.length) {
      yield prefix;
      return;
    }
    for (const item of groups[index]) {
      yield* walk(index + 1, [...prefix, item]);
    }
  }
  yield* walk(0, []);
}
