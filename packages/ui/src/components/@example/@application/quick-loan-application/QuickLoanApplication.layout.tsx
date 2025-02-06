import { FormField, FormMessage } from '@components/form/Form';
import { FormControl, FormItem, FormLabel } from '@components/form/Form';
import { SelectGroup, SelectItem } from '@components/select';
import { SelectContent, SelectTrigger } from '@components/select/Select';
import { Skeleton } from '@components/skeleton';
import { SelectLabel, SelectValue } from '@radix-ui/react-select';
import { Select } from '@radix-ui/react-select';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { Outlet } from 'react-router';

import { QuickLoanApplicationData } from './QuickLoanApplication';

interface QuickLoanApplicationLayoutProps {
  form: UseFormReturn<QuickLoanApplicationData>;
  onSubmit: (data: QuickLoanApplicationData) => void;
  ready: boolean;
}

function QuickLoanApplicationSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="my-4 h-4 w-[250px]" />
      <Skeleton className="my-4 h-4 w-[250px]" />
      <Skeleton className="my-4 h-4 w-[200px]" />
      <Skeleton className="my-4 h-4 w-[200px]" />
      <Skeleton className="my-4 h-4 w-[250px]" />
      <Skeleton className="my-4 h-4 w-[200px]" />
      <Skeleton className="my-4 h-4 w-[50px]" />
    </div>
  );
}

export function QuickLoanApplicationLayout({
  form,
  onSubmit,
  ready,
}: QuickLoanApplicationLayoutProps) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-72">
        <h2>Quick Loan Application</h2>
        {!ready ? (
          <QuickLoanApplicationSkeleton />
        ) : (
          <>
            <FormField
              control={form.control}
              name="userRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Role</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Roles</SelectLabel>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="guest">Guest</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Outlet />
          </>
        )}
      </form>
    </FormProvider>
  );
}
