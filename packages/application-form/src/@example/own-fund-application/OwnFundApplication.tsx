import {
  ContactInfo,
  contactInfoSchema,
  ContactInfoSection,
  FinancialInfo,
  financialInfoSchema,
  FundAmountSection,
  PersonalInfo,
  personalInfoSchema,
  PersonalInfoSection,
} from '@frontend-monorepo/application-section';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Route, Routes, useNavigate } from 'react-router';
import { z } from 'zod';

import { UserRole, userRoleSchema } from '..';
import { OwnFundApplicationLayout } from './OwnFundApplication.layout';

export type OwnFundApplicationData = {
  userRole: UserRole;
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  financialInfo: FinancialInfo;
};

const ownFundApplicationSchema = z
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
      });
    }
  });

const initialValues: OwnFundApplicationData = {
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

export function OwnFundApplication() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const form = useForm<OwnFundApplicationData>({
    defaultValues: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = initialValues;
      setReady(true);
      return data;
    },
    resolver: zodResolver(ownFundApplicationSchema),
    mode: 'onBlur',
  });
  const onSubmit = (data: OwnFundApplicationData) => {
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
          onNext={() => navigate('../fund-amount', { relative: 'path' })}
        />
      ),
    },
    {
      path: 'fund-amount',
      element: (
        <FundAmountSection
          onBack={() => navigate('../contact-info', { relative: 'path' })}
          onNext={() => navigate('../submit', { relative: 'path' })}
        />
      ),
    },
  ];

  return (
    <Routes>
      <Route element={<OwnFundApplicationLayout form={form} onSubmit={onSubmit} ready={ready} />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
