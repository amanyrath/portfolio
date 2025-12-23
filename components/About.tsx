'use client';

import AnimatedSection from './AnimatedSection';
import TimelineItem from './TimelineItem';
import { timelineItems } from '@/lib/timeline';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-16 px-8 md:py-24 md:px-12 lg:py-[8rem] lg:px-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-[6rem] border-t border-white/5"
    >
      {/* Left Column - Story Content */}
      <AnimatedSection className="pt-4 md:pt-6 lg:pt-8" delay={0.2}>
        {/* Section label */}
        <div className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-accent-gold mb-3 md:mb-4">
          About
        </div>
        
        {/* Section title */}
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold mb-6 md:mb-7 lg:mb-8">
          The <span className="font-serif italic text-accent-sand">path</span>
        </h2>
        
        {/* Story paragraphs */}
        <p className="font-serif text-base md:text-lg leading-[1.7] md:leading-[1.75] lg:leading-[1.8] text-text-muted mb-6 md:mb-7 lg:mb-8">
          <strong className="text-text-cream font-medium">I wasn&apos;t a software developer.</strong> I studied physics, worked as an economist, 
          built models as a data scientist. Then I started shipping AI products.
        </p>
        
        <p className="font-serif text-base md:text-lg leading-[1.7] md:leading-[1.75] lg:leading-[1.8] text-text-muted mb-6 md:mb-7 lg:mb-8">
          That crooked path? That&apos;s my art. The perspective no one else brings. 
          I think in systems, decide with data, and ship with urgency.
        </p>
        
        {/* Philosophy box */}
        <div className="p-6 md:p-7 lg:p-8 bg-bg-card border-l-[3px] border-accent-rust mt-8 md:mt-10 lg:mt-12">
          <p className="font-serif text-base md:text-lg italic text-accent-sand leading-[1.6]">
            &quot;Build it ugly first, then beautiful. The ugly MVP becomes the beautiful product. I always build.&quot;
          </p>
        </div>
      </AnimatedSection>
      
      {/* Right Column - Timeline */}
      <AnimatedSection className="relative pl-10 md:pl-11 lg:pl-12" delay={0.4}>
        {/* Vertical gradient line */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[1px]"
          style={{
            background: 'linear-gradient(to bottom, var(--color-accent-rust), var(--color-accent-gold), var(--color-accent-sage))'
          }}
        />
        
        {/* Timeline items */}
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          {timelineItems.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
