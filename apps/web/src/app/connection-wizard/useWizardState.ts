'use client';

import { useCallback, useState } from 'react';

/**
 * Manage the current step of the connection wizard.
 *
 * @param totalSteps - Number of steps in the wizard.
 * @returns Wizard state helpers.
 */
export function useWizardState(totalSteps: number) {
  const [step, setStep] = useState(0);

  const next = useCallback(() => {
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }, [totalSteps]);

  const back = useCallback(() => {
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setStep(Math.min(Math.max(index, 0), totalSteps - 1));
    },
    [totalSteps]
  );

  return {
    step,
    isFirstStep: step === 0,
    isLastStep: step === totalSteps - 1,
    next,
    back,
    goTo,
  } as const;
}
