'use client';

import { startTransition } from 'react';
import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<
  typeof import('@engie-group/fluid-design-system-react').NJButton
>;

const NJButton = dynamic<ButtonProps>(
  () =>
    import('@engie-group/fluid-design-system-react').then((m) => m.NJButton),
  { ssr: false }
);

/**
 * Review entered details and export them.
 */
export default function ReviewExportStep() {
  const handleExport = () => {
    // Trigger the browser's print dialog so the user can export as PDF
    startTransition(() => {
      window.print();
    });
  };

  return (
    <section>
      <h2>Review your details</h2>
      <p>Everything looks good. Click export to download a PDF.</p>
      <NJButton
        onClick={handleExport}
        label="Export"
        aria-label="Export details as PDF"
      />
    </section>
  );
}
