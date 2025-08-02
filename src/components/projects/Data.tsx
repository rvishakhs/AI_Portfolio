import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Renee GPT',
    description:
      'Built a custom LLM with RoPE and GQA for improved text generation. Developed a React + Node.js interface with real-time control over generation parameters. Optimized inference with KV caching for fast, low-resource performance.',
    techStack: [
      'React',
      'TailwindCSS',
      'Node.js',
      'Python',
      'PyTorch',
      'Hugging Face',
      'TensorFlow',
      'PostgreSQL',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://renee.ovh/',
      },
      {
        name: 'Code on GitHub',
        url: 'https://github.com/rvishakhs/renee_llama_structure_v1',
      },

    ],
    images: [
      {
        src: '/renee_main.jpeg',
        alt: 'Renee landing page',
      },
    ],
  },
  {
    title: 'Web Miner AI',
    description:
      "This is a simple webscraping tool utilising AI intelligence and capabilities for better web scraping. In this application, we can scrape any website and run multiple scraping jobs simultaneously, which can also be scheduled. This web application tool was developed for my personal use, which can be converted or reshaped for better use cases.",
    techStack: ['Html', 
      'Css', 
      'Javascript',
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'TypeScript',
      'OpenAI API',
      'React',
      'PostgreSQL',],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://webminer.ovh/',
      },
      {
        name: 'github',
        url: 'https://github.com/rvishakhs/webminer',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/visakhnair2792/details/projects/',
      },
    ],
    images: [
      {
        src: '/web_5.png',
        alt: 'Web Miner landing page',
      },
      {
        src: '/web_2.png',
        alt: 'Web Miner extraction page page',
      },
      {
        src: '/web_3.png',
        alt: 'Web Miner credential management page',
      },
      {
        src: '/web_4.png',
        alt: 'Web Miner home page dark mode',
      },
      {
        src: '/web_1.png',
        alt: 'Web Miner workflow page',
      },
    ],
  },
  {
    title: 'Feedback Analyzer Multimodal AI',
    description:
      "Built a full-stack multimodal AI system that analyzes video, audio, and text for sentiment and emotion detection, with real-time SaaS deployment on AWS and full MLOps lifecycle for continuous updates.",
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'Vercel AI SDK',
      'TypeScript',
      'OpenAI',
      'Mistral',
      'Python',
      'OpenCV',],
    date: '2025',
    links: [
      {
        name: 'website',
        url: '',
      },
      {
        name: 'github AI Model',
        url: 'https://github.com/rvishakhs/video_sentiment_model',
      },
      {
        name: 'github Frontend',
        url: 'https://github.com/rvishakhs/feedback-analysis-app',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/visakhnair2792/details/projects/',
      },
    
    ],
    images: [
      {
        src: '/feed_3.jpg',
        alt: 'Feedback login page',
      },
      {
        src: '/Feedback_1.jpg',
        alt: 'Feedback landing page',
      },
      {
        src: '/feedback_2.jpg',
        alt: 'Feedback landing page',
      },
    ],
  },
  {
    title: 'Eshoppers',
    description:
      'Overall, I am proud of my contributions in designing the database schema, leading the MERN project, developing the backend API, and implementing user authentication and authorization features. I developed the backend RESTful API using Express and Node.js. This ensured that data could be transmitted efficiently and accurately.',
    techStack: ['React', 'TailwindCSS', 'MERN', 'REST API', 'MongoDB', 'Express', 'Node.js', 'Responsive Design'],
    date: '2022',
    links: [
      {
        name: 'Github',
        url: 'https://github.com/rvishakhs/Ecommerce-build',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/visakhnair2792/details/projects/?profileId=ACoAACKhgboBRySWiDtTWuy1OUF6Mlz5OjyM3mU',
      },

    ],
    images: [
      {
        src: '/ecommerce.jpeg',
        alt: 'Eshoppers landing page',
      },
      {
        src: '/eshoppers_1.jpeg',
        alt: 'Eshoppers product page',
      },
      {
        src: '/eshoppers_2.jpeg',
        alt: 'Eshoppers cart page',
      },
      {
        src: '/eshoppers_3.jpeg',
        alt: 'Eshoppers checkout page',
      },
    ],
  },
  {
    title: 'Old Portfolio',
    description:
      "This is a personal portfolio website created using three.js and javascript. I look forward to exploring the three.js framework and designing a responsive and eye-catchy website to showcase my skills and projects. This project uses email.js to enable email communication in contact me section",
    techStack: [
      'React',
      'TailwindCSS',
      'shadcn-ui',
      'Three.js',
      'Mongo DB',
      'TypeScript',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/rvishakhs/3d-Portfolio',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/visakhnair2792/details/projects/',
      }
    ],
    images: [
      {
        src: '/port_0.jpg',
        alt: 'Old Portfolio landing page',
      },
      {
        src: '/port_1.jpg',
        alt: 'Old Portfolio contact page',
      },
      {
        src: '/port_2.jpg',
        alt: 'Portfolio summary page',
      },
      {
        src: '/port_3.jpg',
        alt: 'Projects section',
      }
    ],
  },
  {
    title: 'Upcoming',
    description:
      "This is an upcoming project that I am currently working on. It will be a Vision Language Model (VLM) that can understand and generate text based on images. The project is still in the early stages, but I am excited about the potential applications of this technology.",
    techStack: ['PyTorch', 'Python', 'Transformers', 'AWS', 'PostgreSQL', 'Docker'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: '',
      },
    ],
    images: [
      {
        src: '/coming_soon.png',
        alt: 'Transcendance landing page',
      },

    ],
  },
  
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'LLM Project',
    title: 'Renee',
    src: '/renee_main.jpeg',
    content: <ProjectContent project={{ title: 'Renee GPT' }} />,
  },
  {
    category: 'Web scraping',
    title: 'Web Miner AI',
    src: '/web_4.png',
    content: <ProjectContent project={{ title: 'Web Miner AI' }} />,
  },
    {
    category: 'Multimodal AI',
    title: 'Feedback Analyzer  AI',
    src: '/feed_3.jpg',
    content: <ProjectContent project={{ title: 'Feedback Analyzer Multimodal AI' }} />,
  },
  {
    category: 'Ecommerce',
    title: 'Eshoppers',
    src: '/ecommerce.jpeg',
    content: <ProjectContent project={{ title: 'Eshoppers' }} />,
  },
  {
    category: 'Old Portfolio',
    title: 'Portfolio',
    src: '/old_port.jpeg',
    content: <ProjectContent project={{ title: 'Old Portfolio' }} />,
  },
  {
    category: 'upcoming',
    title: 'Vison Language Model',
    src: '/coming_soon.png',
    content: <ProjectContent project={{ title: 'Upcoming' }} />,
  },
];
