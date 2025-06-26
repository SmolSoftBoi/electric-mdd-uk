'use client';

import { PropsWithChildren } from 'react';
import { NJButton } from '@engie-group/fluid-design-system-react';
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
          <NJButton variant="inverse" onClick={back} label="Back" />
        )}
        <NJButton onClick={handleNext} label={isLastStep ? 'Finish' : 'Next'} />
      </nav>
    </section>
  );
}
