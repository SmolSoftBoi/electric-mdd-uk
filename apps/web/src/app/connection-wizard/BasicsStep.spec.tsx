import { fireEvent, render, screen } from '@testing-library/react';
import BasicsStep from './BasicsStep';

describe('BasicsStep', () => {
  it('validates fields on blur', () => {
    render(<BasicsStep />);
    const nameInput = screen.getByLabelText('Connection name');
    fireEvent.blur(nameInput);
    expect(screen.getByText('Name is required')).toBeTruthy();
  });
});
