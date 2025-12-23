import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { projects } from '@/lib/projects';
import { getCaseStudyContent } from '@/lib/case-studies';
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
          <p className="font-[family-name:var(--font-crimson)] text-[1.375rem] md:text-[1.625rem] text-text-muted mb-10 leading-[1.5] font-normal">
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
                  <span className="group-hover:translate-x-0.5 transition-transform">-&gt;</span>
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
                  <span className="group-hover:translate-x-0.5 transition-transform">-&gt;</span>
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
                  <span className="group-hover:translate-x-0.5 transition-transform">-&gt;</span>
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
              <div className="font-[family-name:var(--font-crimson)] text-xl md:text-[1.375rem] leading-[1.8] md:leading-[1.85] text-text-muted space-y-6">
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
                    className="rounded-lg border border-white/5 object-cover"
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
                    className="w-full h-full rounded-lg border border-white/5"
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
