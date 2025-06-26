import { fireEvent, render, screen } from '@testing-library/react';
import WizardShell from './WizardShell';

function Step({ label }: { label: string }) {
  return <p>{label}</p>;
}

describe('WizardShell', () => {
  it('navigates through steps', async () => {
    render(
      <WizardShell
        steps={[<Step key="one" label="one" />, <Step key="two" label="two" />]}
      />
    );

    expect(screen.getByText('one')).toBeTruthy();
    fireEvent.click(await screen.findByText('Next'));
    expect(screen.getByText('two')).toBeTruthy();
    fireEvent.click(await screen.findByText('Back'));
    expect(screen.getByText('one')).toBeTruthy();
  });
});
