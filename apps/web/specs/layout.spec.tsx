import React from 'react';
import { render } from '@testing-library/react';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
}));
jest.mock('next/font/google', () => ({
  Lato: jest.fn(() => ({ className: 'lato' })),
}));

import { lato } from '../src/app/layout';
import RootLayout from '../src/app/layout';

describe('RootLayout', () => {
  it('renders children', () => {
    document.documentElement.innerHTML = '';
    const { baseElement } = render(
      <RootLayout>
        <p>Test Child</p>
      </RootLayout>,
      { container: document.documentElement }
    );
    expect(baseElement.textContent).toContain('Test Child');
  });

  it('includes the navigation header', () => {
    document.documentElement.innerHTML = '';
    const { container } = render(<RootLayout></RootLayout>, {
      container: document.documentElement,
    });
    expect(container.querySelector('header.nj-header')).toBeTruthy();
  });

  it('applies Lato class and links Material Icons', () => {
    document.documentElement.innerHTML = '';
    const { container } = render(<RootLayout />, {
      container: document.documentElement,
    });
    const links = Array.from(container.querySelectorAll('link'));
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain(
      'https://fonts.googleapis.com/icon?family=Material+Icons'
    );
    expect(document.querySelector('html')?.className).toContain(lato.className);
  });
});
