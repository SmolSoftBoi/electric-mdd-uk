'use client';

import { PropsWithChildren } from 'react';
import { useWizardState } from './useWizardState';

/**
 * Render a minimal multi-step wizard shell.
 *
 * @param steps - Ordered list of wizard steps.
 * @param onFinish - Called when the last step completes.
 */
export default function WizardShell({
  steps,
  onFinish,
}: PropsWithChildren<{ steps: React.ReactElement[]; onFinish?: () => void }>) {
  const { step, next, back, isFirstStep, isLastStep } = useWizardState(
    steps.length
  );

  const handleNext = () => {
    if (isLastStep) {
      onFinish?.();
      return;
    }
    next();
  };

  return (
    <section className="p-6">
      {steps[step]}
      <nav className="mt-4 flex gap-2">
        {!isFirstStep && (
          <button
            type="button"
            onClick={back}
            className="nj-btn nj-btn--inverse"
          >
            Back
          </button>
        )}
        <button type="button" onClick={handleNext} className="nj-btn">
          {isLastStep ? 'Finish' : 'Next'}
        </button>
      </nav>
    </section>
  );
}
