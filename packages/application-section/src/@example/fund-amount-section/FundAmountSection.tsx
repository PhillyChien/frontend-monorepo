import { Button } from '@frontend-monorepo/ui';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@frontend-monorepo/ui';
import { Input } from '@frontend-monorepo/ui';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

export const fundAmountSchema = z.object({
  amount: z.coerce
    .number({ invalid_type_error: 'Amount must be a number' })
    .min(1, { message: 'Amount must be greater than 0' })
    .int({ message: 'Amount must be an integer' }),
});

export type FundAmount = z.infer<typeof fundAmountSchema>;

interface FundAmountSectionProps {
  onBack?: () => void;
  onNext?: () => void;
}

export function FundAmountSection({ onBack, onNext }: FundAmountSectionProps) {
  const form = useFormContext<{ fundAmount: FundAmount }>();
  const {
    trigger,
    formState: { errors },
    control,
  } = form;

  const handleNext = async () => {
    const valid = await trigger('fundAmount');
    if (!valid) {
      console.error('Fund amount validation failed', errors['fundAmount']);
      return;
    }
    console.log('Fund amount validation passed');
    onNext?.();
  };

  const handleBack = async () => {
    const valid = await trigger('fundAmount');
    if (!valid) {
      console.error('Fund amount validation failed', errors['fundAmount']);
      return;
    }
    console.log('Fund amount validation passed');
    onBack?.();
  };

  return (
    <fieldset>
      <FormField
        control={control}
        name="fundAmount.amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter your amount" {...field} />
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
