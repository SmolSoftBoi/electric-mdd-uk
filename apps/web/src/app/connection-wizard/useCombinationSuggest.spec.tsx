import { renderHook } from '@testing-library/react';
import { useCombinationSuggest } from './useCombinationSuggest';

describe('useCombinationSuggest', () => {
  it('returns suggestions', () => {
    const { result } = renderHook(() => useCombinationSuggest());
    expect(result.current.length).toBeGreaterThan(0);
  });
});
