import { z } from 'zod';

export const messageSenderSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
});

export const messageSchema = z.object({
  id: z.string().nonempty(),
  sender: messageSenderSchema,
  sendTime: z.date(),
  content: z.string(),
});

export type MessageSender = z.infer<typeof messageSenderSchema>;
export type Message = z.infer<typeof messageSchema>;
