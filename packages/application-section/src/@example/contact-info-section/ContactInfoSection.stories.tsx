import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { ContactInfo, contactInfoSchema, ContactInfoSection } from './ContactInfoSection';

const meta: Meta<typeof ContactInfoSection> = {
  title: 'Example/Section/ContactInfoSection',
  component: ContactInfoSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContactInfoSection>;

export const Empty: Story = {
  render: function Render() {
    const form = useForm<{ contactInfo: ContactInfo }>({
      defaultValues: {
        contactInfo: { email: '', phone: '' },
      },
      resolver: zodResolver(z.object({ contactInfo: contactInfoSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <ContactInfoSection />
      </FormProvider>
    );
  },
};

export const Filled: Story = {
  render: function Render() {
    const form = useForm<{ contactInfo: ContactInfo }>({
      defaultValues: {
        contactInfo: { email: 'test@test.com', phone: '1234567890' },
      },
      resolver: zodResolver(z.object({ contactInfo: contactInfoSchema })),
      mode: 'onBlur',
    });
    return (
      <FormProvider {...form}>
        <ContactInfoSection />
      </FormProvider>
    );
  },
};
