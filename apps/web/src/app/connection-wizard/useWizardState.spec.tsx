import { act, renderHook } from '@testing-library/react';
import { useWizardState } from './useWizardState';

describe('useWizardState', () => {
  it('navigates steps', () => {
    const { result } = renderHook(() => useWizardState(3));

    act(() => {
      result.current.goTo(1);
    });
    expect(result.current.step).toBe(1);

    act(() => {
      result.current.next();
    });
    expect(result.current.isLastStep).toBe(true);

    act(() => {
      result.current.goTo(-2);
    });
    expect(result.current.isFirstStep).toBe(true);
  });
});
