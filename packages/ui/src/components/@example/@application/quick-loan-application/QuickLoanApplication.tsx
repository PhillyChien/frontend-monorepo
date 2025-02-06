import {
  ContactInfo,
  contactInfoSchema,
  ContactInfoSection,
} from '@components/@example/@section/contact-info-section/ContactInfoSection';
import {
  FinancialInfo,
  financialInfoSchema,
  FinancialInfoSection,
} from '@components/@example/@section/financial-info-section/FinancialInfoSection';
import {
  PersonalInfo,
  personalInfoSchema,
  PersonalInfoSection,
} from '@components/@example/@section/personal-info-section/PersonalInfoSection';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Route, Routes, useNavigate } from 'react-router';
import { z } from 'zod';

import { QuickLoanApplicationLayout } from './QuickLoanApplication.layout';

const userRoleSchema = z.enum(['admin', 'user', 'guest']);
export type UserRole = z.infer<typeof userRoleSchema>;

export type QuickLoanApplicationData = {
  userRole: UserRole;
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  financialInfo: FinancialInfo;
};

const quickLoanApplicationSchema = z
  .object({
    userRole: userRoleSchema,
    personalInfo: personalInfoSchema,
    contactInfo: contactInfoSchema,
    financialInfo: financialInfoSchema,
  })
  .superRefine((data, ctx) => {
    if (
      data.userRole === 'admin' &&
      (!data.contactInfo.phone || data.contactInfo.phone.trim() === '')
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Admin must provide a phone number',
        path: ['contactInfo', 'phone'],
      });
    }
  })
  .superRefine((data, ctx) => {
    if (data.userRole === 'admin' && data.personalInfo.firstName === 'Philly') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Admin cannot be Philly',
        path: ['personalInfo', 'firstName'],
      });
    }
  });

const initialValues: QuickLoanApplicationData = {
  userRole: 'user',
  personalInfo: {
    firstName: '',
    lastName: '',
    age: 18,
  },
  contactInfo: {
    email: '',
    phone: '',
  },
  financialInfo: {
    salary: 0,
    expenses: 0,
  },
};

export function QuickLoanApplication() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const form = useForm<QuickLoanApplicationData>({
    defaultValues: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = initialValues;
      setReady(true);
      return data;
    },
    resolver: zodResolver(quickLoanApplicationSchema),
    mode: 'onBlur',
  });
  const onSubmit = (data: QuickLoanApplicationData) => {
    console.log('Successfully submitted', data);
  };

  const routes: {
    path: string;
    element: React.ReactNode;
  }[] = [
    {
      path: 'personal-info',
      element: (
        <PersonalInfoSection onNext={() => navigate('../contact-info', { relative: 'path' })} />
      ),
    },
    {
      path: 'contact-info',
      element: (
        <ContactInfoSection
          onBack={() => navigate('../personal-info', { relative: 'path' })}
          onNext={() => navigate('../financial-info', { relative: 'path' })}
        />
      ),
    },
    {
      path: 'financial-info',
      element: (
        <FinancialInfoSection
          personalInfo={form.getValues('personalInfo')}
          onBack={() => navigate('../contact-info', { relative: 'path' })}
          onNext={() => navigate('../submit', { relative: 'path' })}
        />
      ),
    },
  ];

  return (
    <Routes>
      <Route element={<QuickLoanApplicationLayout form={form} onSubmit={onSubmit} ready={ready} />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
