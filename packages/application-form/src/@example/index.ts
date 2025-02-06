import { z } from 'zod';

export const userRoleSchema = z.enum(['admin', 'user', 'guest']);
export type UserRole = z.infer<typeof userRoleSchema>;
