
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Above is a photo of Me On my North coast 500 Journey,  I drove 500 miles around the Scottish Highlands, camping in the wild, hiking to remote locations, and experiencing breathtaking landscapes. It was an unforgettable adventure that pushed my limits and connected me with nature.";
  },
});