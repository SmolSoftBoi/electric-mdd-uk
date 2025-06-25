'use client';

import { useState } from 'react';

/**
 * Suggested combination option.
 */
export interface Suggestion {
  /** Unique identifier */
  id: string;
  /** Human friendly description */
  description: string;
}

/**
 * Provide combination suggestions for new connections.
 * Returns a static list until the API is implemented.
 */
export function useCombinationSuggest(): Suggestion[] {
  const [items] = useState<Suggestion[]>([
    { id: 'S1', description: 'Standard 240V connection' },
    { id: 'S2', description: 'High voltage connection' },
  ]);
  return items;
}
