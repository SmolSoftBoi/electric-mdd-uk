'use client';

import { useEffect, type PropsWithChildren } from 'react';

/**
 * Enables the Engie Fluid Design System in the browser.
 * Loads the auto-init script once after the component mounts.
 */
export default function FluidProvider({ children }: PropsWithChildren) {
  // Auto-init attaches behaviour to DOM nodes outside test runs.
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'test') {
      // This dynamic import runs after the first render to keep the bundle lean.
      void import('@engie-group/fluid-design-system/lib/auto-init.js');
    }
  }, []);

  return <>{children}</>;
}
