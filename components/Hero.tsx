'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex">
      {/* Left side - Photo with Archway Frame (45%) */}
      <div className="w-[45%] relative bg-gradient-to-b from-[#0f0d0a] to-[#252018] flex flex-col items-center pt-32 gap-12">
        <div className="relative flex-shrink-0">
          {/* Decorative rotating ring */}
          <div 
            className="absolute -top-6 -left-6 -right-6 -bottom-6 border-[3px] border-dashed border-[#c9a227] opacity-40 pointer-events-none animate-[spin_30s_linear_infinite]" 
            style={{ borderRadius: '255px 255px 45px 45px' }} 
          />
          
          {/* Photo frame with archway shape */}
          <div 
            className="relative w-[400px] h-[500px] overflow-hidden bg-[#252018] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)] hover:scale-105"
            style={{ borderRadius: '250px 250px 35px 35px' }}
          >
            <Image
              src="/Alexis_Manyrath.jpg"
              alt="Alexis Manyrath"
              fill
              className="object-cover object-[40%_center]"
              priority
            />
            {/* Bottom gradient overlay (50% height) */}
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#0f0d0a] to-transparent pointer-events-none z-10" />
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-10">
          <a 
            href="https://github.com/amanyrath" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8a7e70] text-base md:text-lg font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#c9a227]"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/alexis-manyrath/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8a7e70] text-base md:text-lg font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#c9a227]"
          >
            LinkedIn
          </a>
          <a 
            href="https://x.com/wow_pal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8a7e70] text-base md:text-lg font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#c9a227]"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Right side - Content (55%) */}
      <AnimatedSection className="w-[55%] px-20 pt-28 pb-40 flex flex-col justify-center relative" delay={0.2}>
        {/* Decorative spinning circles */}
        <div className="absolute top-[15%] right-[10%] w-[150px] h-[150px] border border-[#c9a227] rounded-full opacity-30 animate-[spin_20s_linear_infinite]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-[#b85c38] rounded-full" />
        </div>

        {/* Role tag with decorative line */}
        <span className="inline-block text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#c9a227] mb-8 pl-12 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[1px] before:bg-[#c9a227]">
          AI Engineer
        </span>

        {/* Headline with mixed typography */}
        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[0.95] tracking-tight mb-8">
          <span className="block">Raw paths create</span>
          <span className="block font-serif font-normal italic text-[#d4c4a8]">spiky</span>
          <span className="block">perspectives</span>
        </h1>

        {/* Journey line with hover underline animations */}
        <div className="flex items-center gap-4 mb-10 text-base md:text-lg text-[#8a7e70]">
          <a 
            href="#timeline-physics"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            Physics
          </a>
          <span className="text-[#c96147] font-light">/</span>
          <a 
            href="#timeline-economics"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            Economics
          </a>
          <span className="text-[#c96147] font-light">/</span>
          <a 
            href="#timeline-datascience"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            Data Science
          </a>
          <span className="text-[#c96147] font-light">/</span>
          <a 
            href="#timeline-ai"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
          >
            AI
          </a>
        </div>

        {/* Tagline */}
        <p className="font-serif text-base md:text-lg italic text-[#8a7e70] max-w-[450px] leading-relaxed mb-12">
          I solve problems and ship AI-powered products. The unconventional path is the art.
        </p>

        {/* CTA Buttons with hover effects */}
        <div className="flex items-center gap-8 mb-24">
          <a
            href="#work"
            className="inline-flex items-center gap-4 bg-[#b85c38] text-[#f2ebe0] px-10 py-5 font-bold text-sm md:text-base tracking-[0.1em] uppercase transition-all duration-[400ms] relative overflow-hidden group before:absolute before:inset-0 before:bg-[#c9a227] before:-translate-x-full before:transition-transform before:duration-[400ms] hover:before:translate-x-0"
          >
            <span className="relative z-10">View Work</span>
            <svg 
              className="relative z-10 w-[18px] h-[18px] transition-transform group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="text-[#8a7e70] text-sm md:text-base font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#f2ebe0]"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Bottom bar with scroll indicator */}
        <div className="absolute bottom-0 left-0 right-0 px-20 py-8 flex items-center justify-end border-t border-white/5">
          <div className="flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] uppercase text-[#8a7e70]">
            <span>Scroll to explore</span>
            <span className="w-[50px] h-[1px] bg-[#c96147] animate-[scrollPulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

