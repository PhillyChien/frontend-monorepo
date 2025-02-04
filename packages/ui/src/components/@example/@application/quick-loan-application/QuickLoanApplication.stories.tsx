import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router';

import { QuickLoanApplication } from './QuickLoanApplication';

const meta = {
  title: 'Example/Application/QuickLoanApplication',
  component: QuickLoanApplication,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
} satisfies Meta<typeof QuickLoanApplication>;

export default meta;
type Story = StoryObj<typeof QuickLoanApplication>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/application/personal-info']}>
      <Routes>
        <Route path="application/*" element={<QuickLoanApplication />} />
      </Routes>
    </MemoryRouter>
  ),
};
