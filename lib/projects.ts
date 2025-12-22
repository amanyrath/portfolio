// Project data structure for portfolio

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
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
    subtitle: 'Real-Time Collaborative Design with AI',
    description: 'A multiplayer design tool where teams create wireframes together in real-time. AI suggests design patterns, generates color palettes, and auto-organizes layouts based on best practices.',
    tech: ['React', 'Konva.js', 'Firebase', 'OpenAI', 'LangChain'],
    links: {
      demo: '#',
      github: '#',
      caseStudy: false,
    },
  },
  {
    slug: 'tutor-quality',
    number: '03',
    title: 'Tutor Quality Scoring',
    subtitle: 'AI Analytics for Performance and Churn',
    description: 'Built an AI system that analyzes tutoring sessions to predict tutor performance and student churn risk. Automated quality scoring helped the team identify at-risk students and improve tutor training.',
    tech: ['Rails', 'React', 'AWS', 'SageMaker', 'Python'],
    links: {
      caseStudy: false,
    },
  },
  {
    slug: 'spendsense',
    number: '04',
    title: 'SpendSense',
    subtitle: 'Financial Education That Drives Action',
    description: 'A mobile app that teaches financial discipline through missions and challenges. Users track spending, set goals, and get AI-suggested "Power Moves" to improve their financial health.',
    tech: ['React Native', 'Firebase', 'Plaid API', 'OpenAI'],
    links: {
      demo: '#',
      github: '#',
      caseStudy: false,
    },
  },
];


