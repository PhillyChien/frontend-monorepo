import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { PersonalInfo, personalInfoSchema, PersonalInfoSection } from './PersonalInfoSection';

const meta = {
  title: 'Example/Section/PersonalInfoSection',
  component: PersonalInfoSection,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInfoSection>;

export default meta;
type Story = StoryObj<typeof PersonalInfoSection>;

export const Empty: Story = {
  render: function Render() {
    const form = useForm<{ personalInfo: PersonalInfo }>({
      defaultValues: {
        personalInfo: { firstName: '', lastName: '', age: 0 },
      },
      resolver: zodResolver(z.object({ personalInfo: personalInfoSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <PersonalInfoSection />
      </FormProvider>
    );
  },
};

export const Filled: Story = {
  render: function Render() {
    const form = useForm<{ personalInfo: PersonalInfo }>({
      defaultValues: {
        personalInfo: { firstName: 'John', lastName: 'Doe', age: 30 },
      },
      resolver: zodResolver(z.object({ personalInfo: personalInfoSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <PersonalInfoSection />
      </FormProvider>
    );
  },
};
