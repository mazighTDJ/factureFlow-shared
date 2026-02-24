import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1),
  storageFolderPath: z.string().min(1),
});

export const updateProfileSchema = z.object({
  name: z.string().min(1).optional(),
  storageFolderPath: z.string().min(1).optional(),
});

export type RegisterDto = z.infer<typeof registerSchema>;
export type UpdateProfileDto = z.infer<typeof updateProfileSchema>;
