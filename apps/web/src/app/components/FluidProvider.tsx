'use client';

import { useEffect, type PropsWithChildren } from 'react';

/**
 * Enables the Engie Fluid Design System in the browser.
 */
export default function FluidProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'test') {
      void import('@engie-group/fluid-design-system/lib/auto-init.js');
    }
  }, []);

  return <>{children}</>;
}
