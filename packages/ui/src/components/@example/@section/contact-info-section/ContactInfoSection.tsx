// ContactInfoSection.tsx
import { Button } from '@components/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/form';
import { Input } from '@components/input';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

// eslint-disable-next-line react-refresh/only-export-components
export const contactInfoSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().optional(),
});
export type ContactInfo = z.infer<typeof contactInfoSchema>;

interface ContactInfoSectionProps {
  onBack?: () => void;
  onNext?: () => void;
}

export const ContactInfoSection = ({ onBack, onNext }: ContactInfoSectionProps) => {
  const form = useFormContext<{ contactInfo: ContactInfo }>();
  const {
    control,
    trigger,
    formState: { errors },
  } = form;

  const handleSubmitStep = async () => {
    const valid = await trigger('contactInfo');
    if (!valid) {
      console.error('Contact info validation failed', errors['contactInfo']);
      return;
    }
    console.log('Contact info validation passed');
    onNext?.();
  };

  const handleBack = async () => {
    const valid = await trigger('contactInfo');
    if (!valid) {
      console.error('Contact info validation failed', errors['contactInfo']);
      return;
    }
    console.log('Contact info validation passed');
    onBack?.();
  };

  return (
    <fieldset>
      <FormField
        control={control}
        name="contactInfo.email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="contactInfo.phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone</FormLabel>
            <FormControl>
              <Input placeholder="Enter your phone number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="mt-4 flex gap-2">
        {onBack && (
          <Button type="button" onClick={handleBack}>
            Back
          </Button>
        )}
        {onNext && (
          <Button type="button" onClick={handleSubmitStep}>
            Next
          </Button>
        )}
      </div>
    </fieldset>
  );
};
