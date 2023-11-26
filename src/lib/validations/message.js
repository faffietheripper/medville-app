import { z } from "zod";

//can change these to customise message length .max(2000)
export const messageValidator = z.object({
  id: z.string(),
  senderId: z.string(),
  text: z.string(),
  timestamp: z.number(),
});

export const messageArrayValidator = z.array(messageValidator);
