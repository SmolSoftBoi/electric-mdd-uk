'use client';

import { useEffect, useState } from 'react';

/**
 * Review entered details and export them.
 */
export default function ReviewExportStep() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const handleExport = () => {
    // TODO: wire PDF export once API is available
    alert('Exported!');
  };

  return (
    <section>
      <h2>Review your details</h2>
      <p>Everything looks good. Click export to download a PDF.</p>
      <button
        type="button"
        className="nj-btn"
        onClick={handleExport}
        disabled={!ready}
      >
        Export
      </button>
    </section>
  );
}
