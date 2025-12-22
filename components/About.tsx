'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-16 px-8 md:py-24 md:px-12 lg:py-[8rem] lg:px-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-[6rem] border-t border-white/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Left Column - Story Content */}
      <motion.div 
        className="pt-4 md:pt-6 lg:pt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        {/* Section label */}
        <div className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#c9a227] mb-3 md:mb-4">
          About
        </div>
        
        {/* Section title */}
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold mb-6 md:mb-7 lg:mb-8">
          The <span className="font-serif italic text-[#d4c4a8]">path</span>
        </h2>
        
        {/* Story paragraphs */}
        <p className="font-serif text-base md:text-lg leading-[1.7] md:leading-[1.75] lg:leading-[1.8] text-[#8a7e70] mb-6 md:mb-7 lg:mb-8">
          <strong className="text-[#f2ebe0] font-medium">I wasn&apos;t a software developer.</strong> I studied physics, worked as an economist, 
          built models as a data scientist. Then I started shipping AI products.
        </p>
        
        <p className="font-serif text-base md:text-lg leading-[1.7] md:leading-[1.75] lg:leading-[1.8] text-[#8a7e70] mb-6 md:mb-7 lg:mb-8">
          That crooked path? That&apos;s my art. The perspective no one else brings. 
          I think in systems, decide with data, and ship with urgency.
        </p>
        
        {/* Philosophy box */}
        <div className="p-6 md:p-7 lg:p-8 bg-[#252018] border-l-[3px] border-[#c96147] mt-8 md:mt-10 lg:mt-12">
          <p className="font-serif text-base md:text-lg italic text-[#d4c4a8] leading-[1.6]">
            &quot;Build it ugly first, then beautiful. The ugly MVP becomes the beautiful product. I always build.&quot;
          </p>
        </div>
      </motion.div>
      
      {/* Right Column - Timeline */}
      <motion.div 
        className="relative pl-10 md:pl-11 lg:pl-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        {/* Vertical gradient line */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[1px]"
          style={{
            background: 'linear-gradient(to bottom, #c96147, #c9a227, #6b7c5c)'
          }}
        />
        
        {/* Timeline items */}
        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute left-[-2.5rem] md:left-[-2.75rem] lg:left-[-3rem] top-2 w-3 h-3 bg-[#0f0d0a] border-2 border-[#c96147] rounded-full -translate-x-1/2" />
            <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#c9a227] mb-1.5 md:mb-2">
              2016 — 2018
            </div>
            <h4 className="text-base md:text-lg font-bold mb-1.5 md:mb-2">Physics</h4>
            <p className="font-serif text-sm md:text-base text-[#8a7e70] leading-[1.6]">
              Learned to model complex systems and think in first principles.
            </p>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute left-[-2.5rem] md:left-[-2.75rem] lg:left-[-3rem] top-2 w-3 h-3 bg-[#0f0d0a] border-2 border-[#c96147] rounded-full -translate-x-1/2" />
            <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#c9a227] mb-1.5 md:mb-2">
              2018 — 2020
            </div>
            <h4 className="text-base md:text-lg font-bold mb-1.5 md:mb-2">Economics</h4>
            <p className="font-serif text-sm md:text-base text-[#8a7e70] leading-[1.6]">
              Understood incentives, markets, and how people actually make decisions.
            </p>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="relative">
            <div className="absolute left-[-2.5rem] md:left-[-2.75rem] lg:left-[-3rem] top-2 w-3 h-3 bg-[#0f0d0a] border-2 border-[#c96147] rounded-full -translate-x-1/2" />
            <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#c9a227] mb-1.5 md:mb-2">
              2020 — 2023
            </div>
            <h4 className="text-base md:text-lg font-bold mb-1.5 md:mb-2">Data Science</h4>
            <p className="font-serif text-sm md:text-base text-[#8a7e70] leading-[1.6]">
              Built models, found patterns, learned to let data tell the story. MS from UT Austin.
            </p>
          </div>
          
          {/* Timeline Item 4 - Last item with filled gold dot */}
          <div className="relative">
            <div className="absolute left-[-2.5rem] md:left-[-2.75rem] lg:left-[-3rem] top-2 w-3 h-3 bg-[#c9a227] border-2 border-[#c9a227] rounded-full -translate-x-1/2" />
            <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#c9a227] mb-1.5 md:mb-2">
              2023 — Now
            </div>
            <h4 className="text-base md:text-lg font-bold mb-1.5 md:mb-2">AI Engineering</h4>
            <p className="font-serif text-sm md:text-base text-[#8a7e70] leading-[1.6]">
              Shipping AI-powered products. The path led here.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

