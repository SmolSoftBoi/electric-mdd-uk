'use client';

import { ReactNode } from 'react';
import '@engie-group/fluid-design-system/auto-init';

/**
 * Wraps children to initialise Fluid Design System components.
 */
export default function FluidProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
