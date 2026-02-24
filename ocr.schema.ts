import { z } from 'zod';

export const ocrResultSchema = z.object({
  companyName: z.string().optional(),
  date: z.string().optional(),
  amountTTC: z.number().optional(),
  amountHT: z.number().optional(),
  tps: z.number().optional(),
  tvq: z.number().optional(),
  confidence: z.number().optional(),
});

export type OcrResult = z.infer<typeof ocrResultSchema>;
