import { z } from 'zod';
import { messageSchema, messageSenderSchema } from './message';
import { extendZod } from '@zodyac/zod-mongoose';

extendZod(z);

export const chatSchema = z.object({
  id: z.string().nonempty(),
  participants: z.array(z.string()),
  messages: messageSchema.array(),
  title: z.string().nonempty(),
});

export type Chat = z.infer<typeof chatSchema>;
