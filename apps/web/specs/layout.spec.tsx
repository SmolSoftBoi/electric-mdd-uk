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
    expect(baseElement.textContent).toContain('Test Child');
  });

  it('includes the navigation header', () => {
    const { container } = render(<RootLayout></RootLayout>, {
      container: document.documentElement,
    });
    expect(container.querySelector('header.nj-header')).toBeTruthy();
  });
});
