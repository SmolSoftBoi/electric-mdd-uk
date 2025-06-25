'use client';

import WizardShell from './WizardShell';
import BasicsStep from './BasicsStep';
import SuggestionsTableStep from './SuggestionsTableStep';

/**
 * Show the connection wizard entry page.
 */
export default function ConnectionWizardPage() {
  return (
    <WizardShell
      steps={[
        <section key="intro">
          <h1>Connection wizard ⚡️</h1>
          <p>Follow the steps to set up your new connection.</p>
        </section>,
        <BasicsStep key="basics" />,
        <SuggestionsTableStep key="suggestions" />,
        <section key="confirm">
          <h1>All done 🎉</h1>
          <p>You completed the wizard.</p>
        </section>,
      ]}
    />
  );
}
