import type { Meta, StoryObj } from '@storybook/react';
import SuggestionsTableStep from './SuggestionsTableStep';

const meta: Meta<typeof SuggestionsTableStep> = {
  title: 'Connection Wizard/SuggestionsTableStep',
  component: SuggestionsTableStep,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof SuggestionsTableStep>;

export const Default: Story = {};
