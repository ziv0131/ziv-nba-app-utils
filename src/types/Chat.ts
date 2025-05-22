import { z } from 'zod';
import { messageSchema, messageSenderSchema } from './message';

export const chatSchema = z.object({
  id: z.string().nonempty(),
  participants: z.array(z.string()),
  messages: messageSchema.array(),
  title: z.string().nonempty(),
});

export type Chat = z.infer<typeof chatSchema>;
