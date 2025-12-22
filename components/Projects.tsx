'use client';

import { projects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  return (
    <section
      className="py-32 px-20 relative"
      id="work"
    >
      {/* Section Header */}
      <AnimatedSection>
        <div className="flex justify-between items-end mb-20 pb-8 border-b border-white/5">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] uppercase text-accent-gold mb-4">
              Selected Work
            </div>
            <h2 className="text-[3.5rem] font-extrabold tracking-tight leading-tight">
              Things I've{' '}
              <span className="font-crimson italic font-normal text-accent-sand">
                built
              </span>
            </h2>
          </div>
          <div className="text-[0.85rem] text-text-muted tracking-wider">
            01 — 04
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <AnimatedSection key={project.slug} delay={index * 0.15}>
            <ProjectCard
              project={project}
              index={index}
            />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

