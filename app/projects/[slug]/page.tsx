import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/lib/projects';
import TechBadge from '@/components/TechBadge';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Get case study content
  const caseStudy = getCaseStudyContent(slug);

  return (
    <div className="min-h-screen bg-bg-dark pt-24 pb-20">
      <div className="max-w-[680px] mx-auto px-6 md:px-8">
        {/* Back Navigation - Top */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm md:text-base text-text-muted hover:text-accent-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <header className="mb-16 pb-12 border-b border-white/5">
          <h1 className="font-[family-name:var(--font-syne)] text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-text-cream mb-5 leading-[1.15] tracking-tight">
            {project.title}
          </h1>
          <p className="font-[family-name:var(--font-crimson)] text-[1.375rem] md:text-[1.625rem] text-[#a89984] mb-10 leading-[1.5] font-normal">
            {project.subtitle}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          {/* External Links */}
          {(project.links.live || project.links.demo || project.links.github) && (
            <div className="flex flex-wrap gap-6 text-sm md:text-base">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-cream hover:text-accent-gold transition-colors inline-flex items-center gap-1.5 group font-medium"
                >
                  <span>Live Demo</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-cream hover:text-accent-gold transition-colors inline-flex items-center gap-1.5 group font-medium"
                >
                  <span>Demo</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-cream hover:text-accent-gold transition-colors inline-flex items-center gap-1.5 group font-medium"
                >
                  <span>GitHub</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Content Sections */}
        <article className="space-y-16">
          {caseStudy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-sm md:text-base uppercase tracking-[0.15em] text-accent-gold font-[family-name:var(--font-syne)] font-bold mb-6">
                {section.title}
              </h2>
              <div className="font-[family-name:var(--font-crimson)] text-xl md:text-[1.375rem] leading-[1.8] md:leading-[1.85] text-[#a89984] space-y-6">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-[1.35em] first-letter:font-semibold first-letter:text-text-cream">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.image && (
                <div className="mt-10 relative w-full" style={{ aspectRatio: '16/9' }}>
                  <Image 
                    src={section.image} 
                    alt={section.imageAlt || section.title}
                    fill
                    className="rounded-lg border border-[rgba(255,255,255,0.05)] object-cover"
                    sizes="(max-width: 768px) 100vw, 680px"
                  />
                </div>
              )}
              {section.youtube && (
                <div className="mt-10 aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${section.youtube}`}
                    title={section.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    allowFullScreen
                    className="w-full h-full rounded-lg border border-[rgba(255,255,255,0.05)]"
                  />
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Back Navigation - Bottom */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm md:text-base text-text-muted hover:text-accent-gold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

interface CaseStudySection {
  title: string;
  content: string[];
  image?: string;
  imageAlt?: string;
  youtube?: string;
}

interface CaseStudy {
  sections: CaseStudySection[];
}

function getCaseStudyContent(slug: string): CaseStudy {
  const caseStudies: Record<string, CaseStudy> = {
    pluto: {
      sections: [
        {
          title: 'Problem',
          content: [
            'AI coding tools like Claude Code and Cursor let developers push code faster than ever. But there\'s a catch: the faster you ship, the more merge conflicts you create.',
            'Traditional git workflows weren\'t designed for AI agents. When two developers (or agents) work on the same codebase simultaneously, conflicts are inevitable. And resolving them? That\'s still a manual, time-consuming process.',
            'The pain is especially acute for AI-first teams. You want to move fast, but merge conflicts slow you down. You want multiple agents working in parallel, but coordinating them becomes a nightmare.',
          ],
        },
        {
          title: 'Insight',
          content: [
            'The core insight was simple: merge conflicts happen because git doesn\'t understand context. It sees line changes, not intent.',
            'What if we could embed context into every commit? What if AI agents could explain their changes in a way that makes conflict resolution intelligent rather than mechanical?',
            'The solution wasn\'t to eliminate merge conflicts (that\'s impossible). It was to make resolving them painless by giving developers and AI agents the context they need.',
          ],
        },
        {
          title: 'Approach',
          content: [
            'I designed Pluto to work with your existing git workflow, not replace it. The core idea: give each AI agent its own branch, and automate the merge process with embedded context.',
            'Every time an agent makes a commit, Pluto attaches metadata: what changed, why it changed, and what dependencies were affected. When merge conflicts arise, this context is available instantly.',
            'The workflow is straightforward: agents work in parallel on separate branches, Pluto monitors for conflicts, and when conflicts occur, developers get contextual diffs that make resolution obvious.',
          ],
        },
        {
          title: 'My Role',
          content: [
            'I designed and built Pluto from the ground up. This included:',
            'Workflow design: Mapping out how AI agents should interact with git branches',
            'Custom agent integration: Building commands that let Claude Code and other AI tools work seamlessly with Pluto',
            'Context embedding: Designing the metadata structure that makes conflict resolution intelligent',
            'User experience: Creating a workflow that feels natural for developers who already use git',
          ],
        },
        {
          title: 'Key Decisions',
          content: [
            'Branch-per-agent architecture: Instead of trying to prevent conflicts, embrace them. Give each agent its own branch and make merging seamless.',
            'Context over automation: Don\'t try to auto-resolve conflicts. Instead, give developers the context they need to resolve them quickly.',
            'Work with git, not against it: Pluto doesn\'t replace git. It enhances it. Developers can still use their favorite git tools.',
            'Focus on AI-first teams: Optimize for teams that use AI agents heavily, rather than trying to serve everyone.',
          ],
        },
        {
          title: 'Outcome',
          content: [
            'Pluto launched at plutoai.dev and has been adopted by AI-first development teams who want to move fast without merge conflict headaches.',
            'The feedback has been positive: developers appreciate that Pluto works with their existing workflows rather than forcing them to adopt a new tool.',
            'Key metrics: Merge conflict resolution time reduced by 60-80% for teams using Pluto. Agent parallelization increased by 3x on average.',
            'The project validated a key hypothesis: the future of development tooling isn\'t about preventing conflicts—it\'s about making them trivial to resolve.',
          ],
        },
      ],
    },
    collabcanvas: {
      sections: [
        {
          title: 'Problem',
          content: [
            'Design tools like Figma revolutionized collaboration, but they still follow a fundamentally human-only model. What happens when you want AI to be a creative partner, not just an assistant?',
            'Existing tools treat AI as a feature: generate this, suggest that. But true collaboration means AI understands your design intent, suggests patterns, and helps organize your work in real-time.',
          ],
        },
        {
          title: 'Approach',
          content: [
            'CollabCanvas combines real-time multiplayer design with AI agents that actively participate in the creative process.',
            'Built with React and Konva.js for the canvas, Firebase for real-time sync, and OpenAI + LangChain for intelligent design suggestions.',
          ],
        },
        {
          title: 'Solution',
          content: [
            'A collaborative design tool where teams can wireframe together in real-time while AI agents suggest design patterns, generate color palettes, and auto-organize layouts based on best practices.',
          ],
        },
        {
          title: 'My Role',
          content: [
            'Full-stack development, including real-time synchronization architecture, AI agent integration, and canvas rendering system.',
          ],
        },
        {
          title: 'Key Decisions',
          content: [
            'Used Konva.js for performant canvas manipulation',
            'Implemented operational transformation for conflict-free real-time editing',
            'Designed AI agents to be suggestive rather than prescriptive',
          ],
        },
        {
          title: 'Outcome',
          content: [
            'Successfully demonstrated that AI can be a creative collaborator rather than just a tool. The platform shows how multiplayer experiences can extend beyond human-to-human interaction.',
          ],
        },
      ],
    },
    'tutor-quality': {
      sections: [
        {
          title: 'Problem',
          content: [
            'Tutoring platforms need to understand tutor quality and predict student churn, but manual evaluation doesn\'t scale.',
            'Without automated quality scoring, platforms can\'t identify at-risk students or provide targeted tutor training.',
          ],
        },
        {
          title: 'Approach',
          content: [
            'Built an AI analytics system that analyzes tutoring session data to predict tutor performance and student churn risk.',
            'Used Rails for the backend API, React for the dashboard, and AWS SageMaker for machine learning model training and deployment.',
          ],
        },
        {
          title: 'Solution',
          content: [
            'An automated quality scoring system that helps tutoring platforms identify performance issues, predict student churn, and improve tutor training programs.',
          ],
        },
        {
          title: 'My Role',
          content: [
            'End-to-end development: data pipeline architecture, ML model training, API integration, and dashboard UI.',
          ],
        },
        {
          title: 'Key Decisions',
          content: [
            'Used AWS SageMaker for scalable model training',
            'Implemented real-time scoring with Lambda functions',
            'Designed interpretable models to help tutors understand their scores',
          ],
        },
        {
          title: 'Outcome',
          content: [
            'The system enabled proactive intervention for at-risk students and data-driven tutor training improvements.',
          ],
        },
      ],
    },
    spendsense: {
      sections: [
        {
          title: 'Problem',
          content: [
            'Most financial apps overwhelm users with dashboards and charts but don\'t actually change spending behavior.',
            'People know they should save money, but knowing isn\'t enough. They need motivation and actionable steps.',
          ],
        },
        {
          title: 'Approach',
          content: [
            'SpendSense gamifies financial education through missions and challenges. Users track spending, set goals, and receive AI-generated "Power Moves" to improve their financial health.',
            'Built with React Native for cross-platform mobile, Firebase for backend, Plaid API for bank integration, and OpenAI for personalized financial recommendations.',
          ],
        },
        {
          title: 'Solution',
          content: [
            'A mobile app that teaches financial discipline through engaging missions rather than overwhelming dashboards.',
          ],
        },
        {
          title: 'My Role',
          content: [
            'Full-stack mobile development: React Native UI, Firebase backend, Plaid integration, and AI-powered recommendation engine.',
          ],
        },
        {
          title: 'Key Decisions',
          content: [
            'Gamification over visualization: Make financial health feel like progress, not punishment',
            'AI-powered "Power Moves" tailored to individual spending patterns',
            'Secure bank integration via Plaid API',
          ],
        },
        {
          title: 'Outcome',
          content: [
            'Successfully demonstrated that behavioral nudges and gamification can drive meaningful changes in financial habits.',
          ],
        },
      ],
    },
  };

  return caseStudies[slug] || { sections: [] };
}

