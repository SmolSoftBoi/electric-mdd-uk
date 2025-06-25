import type { Meta, StoryObj } from '@storybook/react';
import BasicsStep from './BasicsStep';

const meta: Meta<typeof BasicsStep> = {
  title: 'Connection Wizard/BasicsStep',
  component: BasicsStep,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof BasicsStep>;
export const Default: Story = {};
