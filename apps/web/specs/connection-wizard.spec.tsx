import React from 'react';
import { render, screen } from '@testing-library/react';
import ConnectionWizardPage from '../src/app/connection-wizard/page';

describe('ConnectionWizardPage', () => {
  it('renders heading', () => {
    render(<ConnectionWizardPage />);
    const heading = screen.getByRole('heading', {
      name: /connection wizard/i,
    });
    expect(heading).toBeTruthy();
  });
});
