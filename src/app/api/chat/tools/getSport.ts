
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Raphael doing exploring",
  parameters: z.object({}),
  execute: async () => {
    return "Here my best pictures";
  },
});