import React from 'react';
import { render } from '@testing-library/react';
jest.mock('next/font/google', () => ({
  Lato: jest.fn(() => ({ className: 'lato' })),
}));

import { lato } from '../src/app/fonts';
import RootLayout, { metadata } from '../src/app/layout';

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

  it('applies Lato class and defines Material Icons', () => {
    document.documentElement.innerHTML = '';
    render(<RootLayout />, { container: document.documentElement });
    expect(document.querySelector('html')?.className).toContain(lato.className);
    const links = metadata.icons?.other ?? [];
    const hrefs = Array.isArray(links) ? links.map((l) => l.url) : [links.url];
    expect(hrefs).toContain(
      'https://fonts.googleapis.com/icon?family=Material+Icons'
    );
  });
});
