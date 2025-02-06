import { Button } from '@frontend-monorepo/ui';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@frontend-monorepo/ui';
import { Input } from '@frontend-monorepo/ui';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const personalInfoSchema = z
  .object({
    firstName: z.string().min(1, { message: 'Please enter your first name' }),
    lastName: z.string().min(1, { message: 'Please enter your last name' }),
    age: z
      .number({ invalid_type_error: 'Age must be a number' })
      .int({ message: 'Age must be an integer' })
      .min(18, { message: 'Must be at least 18 years old' }),
  })
  .superRefine((data, ctx) => {
    if (data.firstName === 'L') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Admin cannot be L',
        path: ['global'],
      });
    }
  });

export type PersonalInfo = z.infer<typeof personalInfoSchema>;

interface PersonalInfoSectionProps {
  onBack?: () => void;
  onNext?: () => void;
}

export function PersonalInfoSection({ onBack, onNext }: PersonalInfoSectionProps) {
  const form = useFormContext<{ personalInfo: PersonalInfo }>();
  const {
    trigger,
    formState: { errors },
    control,
  } = form;

  const handleNext = async () => {
    const valid = await trigger('personalInfo');
    if (!valid) {
      console.error('Personal info validation failed', errors['personalInfo']);
      return;
    }
    console.log('Personal info validation passed');
    onNext?.();
  };

  const handleBack = async () => {
    const valid = await trigger('personalInfo');
    if (!valid) {
      console.error('Personal info validation failed', errors['personalInfo']);
      return;
    }
    console.log('Personal info validation passed');
    onBack?.();
  };

  return (
    <fieldset>
      <FormField
        control={control}
        name="personalInfo.firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your first name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="personalInfo.lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your last name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="personalInfo.age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Age</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter your age" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="mt-2 flex gap-2">
        {onBack && (
          <Button type="button" onClick={handleBack}>
            Back
          </Button>
        )}
        {onNext && (
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
    </fieldset>
  );
}
