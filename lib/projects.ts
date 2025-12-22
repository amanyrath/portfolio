// Project data structure for portfolio

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tech: string[];
  links: {
    live?: string;
    demo?: string;
    github?: string;
    caseStudy: boolean;
  };
}

export const projects: Project[] = [
  {
    slug: 'pluto',
    number: '01',
    title: 'Pluto',
    subtitle: 'Git Workflow for AI-First Teams',
    description: 'AI coding tools like Claude Code and Cursor are incredible but they create merge conflicts that slow down teams. Pluto solves this by giving AI agents their own git branches and automating the merge workflow.',
    image: '/projects/pluto-hero.png',
    tech: ['Claude Code', 'Custom Agents', 'Git'],
    links: {
      live: 'https://www.plutoai.dev/',
      caseStudy: true,
    },
  },
  {
    slug: 'collabcanvas',
    number: '02',
    title: 'CollabCanvas',
    subtitle: 'Real-Time Design Collaboration with AI',
    description: 'A Christmas-themed multiplayer design tool built in 1 week where teams create and manipulate shapes together in real-time. Features natural language AI commands, multiplayer cursors, smart shape locking, and sub-100ms sync latency.',
    image: '/projects/collabcanvas-demo.png',
    tech: ['React', 'Konva', 'Firebase', 'OpenAI', 'TypeScript', 'Tailwind'],
    links: {
      live: 'https://collab-canvas-ivory.vercel.app/',
      demo: 'https://www.loom.com/share/544b711712cf44f9bc6dda486e2fec11',
      github: 'https://github.com/amanyrath/collab-canvas',
      caseStudy: true,
    },
  },
  {
    slug: 'tutor-quality',
    number: '03',
    title: 'Tutor Mission Control',
    subtitle: 'AI-Powered Tutor Quality Scoring Dashboard',
    description: 'Built in 24 hours during Gauntlet AI Week 4. A comprehensive dashboard that monitors tutor performance across behavioral metrics, feedback sentiment, and lesson quality. Features automated pattern detection to identify at-risk tutors 2 weeks earlier than manual review, with AI-powered interventions that scale to 1000+ tutors.',
    image: '/projects/tutor-dashboard.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python', 'OpenAI API', 'Tailwind CSS'],
    links: {
      live: 'https://tutor-psi-teal.vercel.app/',
      demo: 'https://www.loom.com/share/f09cfaa9c37640cca3414a83d6bb8735',
      github: 'https://github.com/amanyrath/tutor',
      caseStudy: true,
    },
  },
];


