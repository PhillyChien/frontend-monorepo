import { Button } from '@components/button';
import { FormField } from '@components/form';
import { FormControl, FormItem, FormLabel, FormMessage } from '@components/form/Form';
import { Input } from '@components/input/Input';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { PersonalInfo } from '../personal-info-section/PersonalInfoSection';

// eslint-disable-next-line react-refresh/only-export-components
export const financialInfoSchema = z
  .object({
    salary: z.coerce.number().min(0, { message: 'Salary must be greater than 0' }),
    expenses: z.coerce.number().min(0, { message: 'Expenses must be greater than 0' }),
  })
  .superRefine((data, ctx) => {
    if (data.salary - data.expenses < 10000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'Total income must be more than 10000. Current total: ' + (data.salary - data.expenses),
        path: ['salary'],
      });
    }
  });

export type FinancialInfo = z.infer<typeof financialInfoSchema>;

interface FinancialInfoSectionProps {
  personalInfo: PersonalInfo;
  onBack?: () => void;
  onNext?: () => void;
}

export function FinancialInfoSection({ personalInfo, onBack, onNext }: FinancialInfoSectionProps) {
  const form = useFormContext<{ financialInfo: FinancialInfo }>();
  const {
    control,
    trigger,
    formState: { errors },
  } = form;

  const handleBack = async () => {
    const valid = await trigger('financialInfo');
    if (!valid) {
      console.error('Financial info validation failed', errors['financialInfo']);
      return;
    }
    console.log('Financial info validation passed');
    onBack?.();
  };

  const handleNext = async () => {
    const valid = await trigger('financialInfo');
    if (!valid) {
      console.error('Financial info validation failed', errors['financialInfo']);
      return;
    }
    console.log('Financial info validation passed');
    onNext?.();
  };

  return (
    <fieldset>
      <h2 className="text-lg font-semibold">
        {personalInfo?.firstName} {personalInfo?.lastName}
      </h2>
      <FormField
        control={control}
        name="financialInfo.salary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Salary</FormLabel>
            <FormControl>
              <Input placeholder="Enter your salary" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="financialInfo.expenses"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expenses</FormLabel>
            <FormControl>
              <Input placeholder="Enter your expenses" type="number" {...field} />
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
