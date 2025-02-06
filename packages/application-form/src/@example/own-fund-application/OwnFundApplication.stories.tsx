import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router';

import { OwnFundApplication } from './OwnFundApplication';

const meta = {
  title: 'Example/Application/OwnFundApplication',
  component: OwnFundApplication,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
} satisfies Meta<typeof OwnFundApplication>;

export default meta;
type Story = StoryObj<typeof OwnFundApplication>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={['/own-fund/personal-info']}>
      <Routes>
        <Route path="own-fund/*" element={<OwnFundApplication />} />
      </Routes>
    </MemoryRouter>
  ),
};
