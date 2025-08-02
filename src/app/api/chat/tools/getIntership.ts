import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of Job opportunity  I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my job search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇
- 💼 **Role**: Full-stack developer, Front-end Developer, AI engineer, or similar
- 🌍 **Location**: Preferably **London** or anywhere in the **United Kingdom**
- 🧑‍💻 **Focus**: AI development, full-stack web apps, SaaS, agentic AI
- 🛠️ **Stack**: Python, React/Next.js, Angular, Tailwind CSS, TypeScript, Gen AI, RAG, Computer Vision etc.
- ✅ **What I bring**: Reallife experience in building full-stack web applications, AI projects, and a passion for innovation
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: 'me@visakhsr.com'
- LinkedIn: www.linkedin.com/in/visakhnair2792
- GitHub: https://github.com/rvishakhs

Let's build cool shit together ✌️
    `;
  },
});
