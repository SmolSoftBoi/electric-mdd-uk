import { act, renderHook } from '@testing-library/react';
import { useWizardState } from './useWizardState';

describe('useWizardState', () => {
  it('navigates steps', () => {
    const { result } = renderHook(() => useWizardState(3));

    act(() => {
      result.current.next();
    });
    expect(result.current.step).toBe(1);

    act(() => {
      result.current.goTo(2);
    });
    expect(result.current.isLastStep).toBe(true);

    act(() => {
      result.current.back();
    });
    expect(result.current.step).toBe(1);

    act(() => {
      result.current.reset();
    });
    expect(result.current.step).toBe(0);
  });
});
