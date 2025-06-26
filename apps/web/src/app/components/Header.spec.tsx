import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('shows navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /home/i })).toBeTruthy();
    expect(
      screen.getByRole('link', { name: /connection wizard/i })
    ).toBeTruthy();
  });
});
