import { render, screen } from '@testing-library/react';
import ReviewExportStep from './ReviewExportStep';

describe('ReviewExportStep', () => {
  it('shows export button', () => {
    render(<ReviewExportStep />);
    expect(screen.getByRole('button', { name: /export/i })).toBeTruthy();
  });
});
