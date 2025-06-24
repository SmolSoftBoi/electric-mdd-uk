'use client';

import { ReactNode, useEffect } from 'react';

/**
 * Wraps children and lazily initialises the Fluid Design System.
 */
export default function FluidProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'test') {
      void import('@engie-group/fluid-design-system/lib/auto-init.js');
    }
  }, []);

  return <>{children}</>;
}
