import React from 'react';
import { render } from '@testing-library/react';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
}));
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

  it('links Material Icons and Lato fonts', () => {
    document.documentElement.innerHTML = '';
    const { container } = render(<RootLayout />, {
      container: document.documentElement,
    });
    const links = Array.from(container.querySelectorAll('link'));
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain(
      'https://fonts.googleapis.com/icon?family=Material+Icons'
    );
    expect(hrefs).toContain(
      'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
    );
  });
});
