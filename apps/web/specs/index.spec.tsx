import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('shows a link to the connection wizard', () => {
    render(<Page />);
    expect(
      screen.getByRole('link', { name: /connection wizard/i })
    ).toBeTruthy();
  });
});
