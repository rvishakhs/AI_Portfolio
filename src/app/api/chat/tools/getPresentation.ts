import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Visakh Nair. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Visakh Nair, a 28-year-old full-stack developer specializing in AI. I'm passionate about tech, entrepreneurship, and building innovative solutions.",
    };
  },
});
