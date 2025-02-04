import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { FinancialInfo, financialInfoSchema, FinancialInfoSection } from './FinancialInfoSection';

const meta = {
  title: 'Example/Section/FinancialInfoSection',
  component: FinancialInfoSection,
  tags: ['autodocs'],
} satisfies Meta<typeof FinancialInfoSection>;

export default meta;
type Story = StoryObj<typeof FinancialInfoSection>;

export const Empty: Story = {
  args: {
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
  },
  render: function Render(args) {
    const form = useForm<{ financialInfo: FinancialInfo }>({
      defaultValues: {
        financialInfo: { salary: 0, expenses: 0 },
      },
      resolver: zodResolver(z.object({ financialInfo: financialInfoSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <FinancialInfoSection {...args} />
      </FormProvider>
    );
  },
};

export const Filled: Story = {
  args: {
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
  },
  render: function Render(args) {
    const form = useForm<{ financialInfo: FinancialInfo }>({
      defaultValues: {
        financialInfo: { salary: 100000, expenses: 50000 },
      },
      resolver: zodResolver(z.object({ financialInfo: financialInfoSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <FinancialInfoSection {...args} />
      </FormProvider>
    );
  },
};
