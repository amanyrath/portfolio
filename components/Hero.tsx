'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Photo with Archway Frame (45% on desktop, mobile order adjusted) */}
      <div className="w-full lg:w-[45%] relative lg:bg-gradient-to-b from-[#0f0d0a] to-[#252018] flex flex-col items-center pt-8 sm:pt-10 lg:pt-32 pb-8 sm:pb-10 lg:pb-0 gap-5 sm:gap-6 lg:gap-12 order-2 lg:order-1">
        <div className="relative flex-shrink-0">
          {/* Decorative rotating ring - hidden on mobile to reduce clutter */}
          <div 
            className="hidden lg:block absolute -top-6 -left-6 -right-6 -bottom-6 border-[3px] border-dashed border-[#c9a227] opacity-40 pointer-events-none animate-[spin_30s_linear_infinite]" 
            style={{ borderRadius: '255px 255px 45px 45px' }} 
          />
          
          {/* Photo frame with archway shape - smaller on mobile */}
          <div 
            className="relative w-[200px] h-[250px] sm:w-[240px] sm:h-[300px] lg:w-[400px] lg:h-[500px] overflow-hidden bg-[#252018] shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)] hover:scale-105"
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

        {/* Social Links - vertical on mobile with proper touch targets, horizontal on desktop */}
        <nav className="flex flex-col lg:flex-row gap-3 lg:gap-10" aria-label="Social media links">
          <a 
            href="https://github.com/amanyrath" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8a7e70] text-base md:text-lg font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#c9a227] py-2 lg:py-0 text-center"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/alexis-manyrath/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8a7e70] text-base md:text-lg font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#c9a227] py-2 lg:py-0 text-center"
          >
            LinkedIn
          </a>
          <a 
            href="https://x.com/wow_pal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#8a7e70] text-base md:text-lg font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#c9a227] py-2 lg:py-0 text-center"
          >
            Twitter
          </a>
        </nav>
      </div>

      {/* Right side - Content (55% on desktop, appears first on mobile) */}
      <AnimatedSection className="w-full lg:w-[55%] px-6 sm:px-8 lg:px-20 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-40 flex flex-col lg:justify-center relative order-1 lg:order-2" delay={0.2}>
        {/* Decorative spinning circles - hidden on mobile, adjusted position for tablet */}
        <div className="hidden lg:block absolute top-[15%] right-[10%] w-[150px] h-[150px] border border-[#c9a227] rounded-full opacity-30 animate-[spin_20s_linear_infinite]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-[#b85c38] rounded-full" />
        </div>

        {/* Role tag with decorative line */}
        <span className="inline-block text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#c9a227] mb-6 sm:mb-8 pl-10 sm:pl-12 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-6 sm:before:w-8 before:h-[1px] before:bg-[#c9a227]">
          AI Engineer
        </span>

        {/* Headline with mixed typography - responsive sizing */}
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[0.95] tracking-tight mb-6 sm:mb-8">
          <span className="block">Raw paths create</span>
          <span className="block font-serif font-normal italic text-[#d4c4a8]">spiky</span>
          <span className="block">perspectives</span>
        </h1>

        {/* Journey line with hover underline animations - wraps on mobile */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-[#8a7e70]">
          <a 
            href="#timeline-physics"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left py-1"
          >
            Physics
          </a>
          <span className="text-[#c96147] font-light">/</span>
          <a 
            href="#timeline-economics"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left py-1"
          >
            Economics
          </a>
          <span className="text-[#c96147] font-light">/</span>
          <a 
            href="#timeline-datascience"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left whitespace-nowrap py-1"
          >
            Data Science
          </a>
          <span className="text-[#c96147] font-light">/</span>
          <a 
            href="#timeline-ai"
            className="relative cursor-pointer transition-colors hover:text-[#f2ebe0] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#c96147] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left py-1"
          >
            AI
          </a>
        </div>

        {/* Tagline */}
        <p className="font-serif text-sm sm:text-base md:text-lg italic text-[#8a7e70] max-w-[450px] leading-relaxed mb-10 sm:mb-12">
          I solve problems and ship AI-powered products. The unconventional path is the art.
        </p>

        {/* CTA Buttons with hover effects - stack on very small screens */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 mb-0 sm:mb-24">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-3 sm:gap-4 bg-[#b85c38] text-[#f2ebe0] px-8 sm:px-10 py-4 sm:py-5 font-bold text-sm md:text-base tracking-[0.1em] uppercase transition-all duration-[400ms] relative overflow-hidden group before:absolute before:inset-0 before:bg-[#c9a227] before:-translate-x-full before:transition-transform before:duration-[400ms] hover:before:translate-x-0 min-h-[44px]"
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
            className="text-[#8a7e70] text-sm md:text-base font-semibold tracking-[0.1em] uppercase transition-colors hover:text-[#f2ebe0] min-h-[44px] flex items-center justify-center sm:justify-start py-3 sm:py-0"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Bottom bar with scroll indicator - hidden on mobile to prevent overlap */}
        <div className="hidden lg:flex absolute bottom-0 left-0 right-0 px-20 py-8 items-center justify-end border-t border-white/5">
          <div className="flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] uppercase text-[#8a7e70]">
            <span>Scroll to explore</span>
            <span className="w-[50px] h-[1px] bg-[#c96147] animate-[scrollPulse_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

