'use client';

import { Project } from '@/lib/projects';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center group/card">
      {/* Image Area */}
      <Link
        href={project.links.caseStudy ? `/projects/${project.slug}` : '#'}
        className={`relative aspect-[16/10] bg-bg-warm overflow-hidden cursor-pointer group/image block ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {/* Project Image or Gradient Background */}
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-105"
          />
        ) : (
          <>
            {/* Gradient Background Fallback */}
            <div
              className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-105"
              style={{
                background:
                  'linear-gradient(135deg, #1c1814 0%, #6b7c5c 50%, #1c1814 100%)',
              }}
            />

            {/* Image Label */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-text-muted text-sm md:text-base z-10">
              Project screenshot
            </span>
          </>
        )}

        {/* Border */}
        <div className="absolute inset-0 border border-white/5 pointer-events-none" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#0f0d0a]/80 opacity-0 group-hover/image:opacity-100 transition-opacity duration-400 flex items-center justify-center z-20">
          <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-accent-gold flex items-center gap-3">
            {project.links.caseStudy ? 'View Case Study' : 'View Project'}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>

      {/* Content Area */}
      <div className={`py-4 sm:py-6 lg:py-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        {/* Project Number */}
        <div className="text-xs sm:text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#b85c38] mb-4 sm:mb-6">
          {project.number}
        </div>

        {/* Title */}
        {project.links.caseStudy ? (
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-extrabold tracking-tight mb-3 transition-colors duration-300 group-hover/card:text-accent-gold cursor-pointer hover:text-accent-gold">
              {project.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-[1.5rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-extrabold tracking-tight mb-3 transition-colors duration-300 group-hover/card:text-accent-gold">
            {project.title}
          </h3>
        )}

        {/* Subtitle */}
        <p className="font-crimson text-base sm:text-lg md:text-xl italic text-text-muted mb-4 sm:mb-6">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="font-crimson text-sm sm:text-base md:text-lg leading-[1.7] text-text-muted mb-6 sm:mb-8 max-w-[500px]">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {project.tech.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
          {project.links.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm md:text-base font-bold tracking-[0.15em] uppercase text-text-cream flex items-center gap-2 transition-colors duration-300 hover:text-accent-gold group/link"
            >
              Case Study
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-bold tracking-[0.15em] uppercase text-text-cream flex items-center gap-2 transition-colors duration-300 hover:text-accent-gold group/link"
            >
              Live Site
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="text-sm md:text-base font-bold tracking-[0.15em] uppercase text-text-muted flex items-center gap-2 transition-colors duration-300 hover:text-accent-gold group/link"
            >
              Demo
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              className="text-sm md:text-base font-bold tracking-[0.15em] uppercase text-text-muted flex items-center gap-2 transition-colors duration-300 hover:text-accent-gold group/link"
            >
              GitHub
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

