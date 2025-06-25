import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ConnectionWizardPage from '../src/app/connection-wizard/page';

describe('ConnectionWizardPage', () => {
  it('renders heading', () => {
    render(<ConnectionWizardPage />);
    const heading = screen.getByRole('heading', {
      name: /connection wizard/i,
    });
    expect(heading).toBeTruthy();
  });

  it('includes review step', () => {
    render(<ConnectionWizardPage />);
    const next = screen.getByText('Next');
    fireEvent.click(next);
    fireEvent.click(next);
    fireEvent.click(next);
    expect(screen.getByRole('button', { name: /export/i })).toBeTruthy();
  });
});
