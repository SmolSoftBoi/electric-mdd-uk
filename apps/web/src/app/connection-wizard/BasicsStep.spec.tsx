import { fireEvent, render, screen } from '@testing-library/react';
import BasicsStep from './BasicsStep';

describe('BasicsStep', () => {
  it('validates fields on blur', async () => {
    render(<BasicsStep />);
    fireEvent.blur(await screen.findByLabelText('Connection name'));
    fireEvent.blur(await screen.findByLabelText('Voltage'));
    fireEvent.blur(await screen.findByLabelText('MPAN'));
    fireEvent.blur(await screen.findByLabelText('Required energisation date'));
    fireEvent.blur(await screen.findByLabelText('Expected usage (kWh/year)'));
    fireEvent.click(await screen.findByLabelText('Half hourly'));
    fireEvent.click(await screen.findByLabelText('Half hourly')); // blur via click
    expect(screen.getAllByText(/required/i)).toHaveLength(5);
  });
});
