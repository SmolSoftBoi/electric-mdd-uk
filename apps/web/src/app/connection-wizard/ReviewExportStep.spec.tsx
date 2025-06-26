import { render, screen } from '@testing-library/react';
import ReviewExportStep from './ReviewExportStep';

describe('ReviewExportStep', () => {
  it('shows export button', async () => {
    render(<ReviewExportStep />);
    expect(await screen.findByRole('button', { name: /export/i })).toBeTruthy();
  });
});
