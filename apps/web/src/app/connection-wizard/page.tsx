'use client';

import WizardShell from './WizardShell';

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
        <section key="confirm">
          <h1>All done 🎉</h1>
          <p>You completed the wizard.</p>
        </section>,
      ]}
    />
  );
}
