import React from 'react';
import { render } from '@testing-library/react';
import Head from './head';

describe('Head', () => {
  it('links to Material Icons stylesheet', () => {
    const { container } = render(<Head />);
    const link = container.querySelector('link[rel="stylesheet"]');
    expect(link?.getAttribute('href')).toBe(
      'https://fonts.googleapis.com/icon?family=Material+Icons'
    );
  });
});
