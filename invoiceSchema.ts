import { z } from 'zod';

const invoiceSchema = z.object({
  compagnieName: z.string(),
  date: z.date(),
  priceTTC: z.number(),
  priceHT: z.number(),
  tps: z.number(),
  tvq: z.number,
});

type invoice = z.infer<typeof invoiceSchema>;

export default invoice;
