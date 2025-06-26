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

  it('includes review step', async () => {
    render(<ConnectionWizardPage />);
    const next = await screen.findByText('Next');
    fireEvent.click(next);
    fireEvent.click(await screen.findByText('Next'));
    fireEvent.click(await screen.findByText('Next'));
    expect(await screen.findByRole('button', { name: /export/i })).toBeTruthy();
  });
});
