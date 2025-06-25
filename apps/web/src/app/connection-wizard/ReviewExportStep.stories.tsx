import type { Meta, StoryObj } from '@storybook/react';
import ReviewExportStep from './ReviewExportStep';

const meta: Meta<typeof ReviewExportStep> = {
  title: 'Connection Wizard/ReviewExportStep',
  component: ReviewExportStep,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof ReviewExportStep>;

export const Default: Story = {};
