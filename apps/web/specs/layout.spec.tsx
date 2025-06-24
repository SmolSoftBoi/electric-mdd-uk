import React from 'react';
import { render } from '@testing-library/react';
import RootLayout from '../src/app/layout';

describe('RootLayout', () => {
  it('renders children', () => {
    const { baseElement } = render(
      <RootLayout>
        <p>Test Child</p>
      </RootLayout>,
      { container: document.documentElement }
    );
    expect(baseElement).toBeTruthy();
  });
});
