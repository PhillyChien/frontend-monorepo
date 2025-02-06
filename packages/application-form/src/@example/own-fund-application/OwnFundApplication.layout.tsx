import { FormField, FormMessage } from '@frontend-monorepo/ui';
import { FormControl, FormItem, FormLabel } from '@frontend-monorepo/ui';
import { SelectGroup, SelectItem } from '@frontend-monorepo/ui';
import { SelectContent, SelectTrigger } from '@frontend-monorepo/ui';
import { Skeleton } from '@frontend-monorepo/ui';
import { SelectLabel, SelectValue } from '@radix-ui/react-select';
import { Select } from '@radix-ui/react-select';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { Outlet } from 'react-router';

import { OwnFundApplicationData } from './OwnFundApplication';

interface OwnFundApplicationLayoutProps {
  form: UseFormReturn<OwnFundApplicationData>;
  onSubmit: (data: OwnFundApplicationData) => void;
  ready: boolean;
}

function OwnFundApplicationSkeleton() {
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

export function OwnFundApplicationLayout({ form, onSubmit, ready }: OwnFundApplicationLayoutProps) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-72">
        <h2 className="my-4 text-2xl font-bold">Own Fund Application</h2>
        {!ready ? (
          <OwnFundApplicationSkeleton />
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
