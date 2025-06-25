import { render, screen } from '@testing-library/react';
import SuggestionsTableStep from './SuggestionsTableStep';

describe('SuggestionsTableStep', () => {
  it('displays suggestion rows', () => {
    render(<SuggestionsTableStep />);
    expect(screen.getByText('Standard 240V connection')).toBeTruthy();
  });
});
