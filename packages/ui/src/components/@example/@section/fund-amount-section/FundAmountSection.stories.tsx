import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { FundAmount, fundAmountSchema, FundAmountSection } from './FundAmountSection';

const meta = {
  title: 'Example/Section/FundAmountSection',
  component: FundAmountSection,
  tags: ['autodocs'],
} satisfies Meta<typeof FundAmountSection>;

export default meta;
type Story = StoryObj<typeof FundAmountSection>;

export const Empty: Story = {
  render: function Render() {
    const form = useForm<{ fundAmount: FundAmount }>({
      defaultValues: {
        fundAmount: { amount: 0 },
      },
      resolver: zodResolver(z.object({ fundAmount: fundAmountSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <FundAmountSection />
      </FormProvider>
    );
  },
};

export const Filled: Story = {
  render: function Render() {
    const form = useForm<{ fundAmount: FundAmount }>({
      defaultValues: {
        fundAmount: { amount: 1000 },
      },
      resolver: zodResolver(z.object({ fundAmount: fundAmountSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <FundAmountSection />
      </FormProvider>
    );
  },
};
