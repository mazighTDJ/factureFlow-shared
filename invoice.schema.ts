import { z } from 'zod';

export const invoiceSchema = z.object({
  id: z.string().uuid().optional(),
  companyName: z.string().min(1),
  date: z.coerce.date(),
  amountTTC: z.number().nonnegative(),
  amountHT: z.number().nonnegative(),
  tps: z.number().nonnegative(),
  tvq: z.number().nonnegative(),
  imagePath: z.string().optional(),
  pdfPath: z.string().optional(),
  createdAt: z.coerce.date().optional(),
});

export type Invoice = z.infer<typeof invoiceSchema>;
