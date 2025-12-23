'use client';

import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <AnimatedSection>
        <section 
          id="contact" 
          className="border-t border-white/5 py-16 sm:py-24 lg:py-32 px-6 sm:px-8 lg:px-20 text-center"
        >
          <div className="section-label text-accent-gold text-xs sm:text-sm md:text-base uppercase tracking-wider mb-3 sm:mb-4">
            Contact
          </div>
          
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-extrabold mb-4 sm:mb-6 px-4">
            Let&apos;s <span className="font-crimson italic font-normal text-accent-sand">build</span> something
          </h2>
          
          <p className="font-crimson text-sm sm:text-base md:text-lg text-text-muted mb-10 sm:mb-12 max-w-2xl mx-auto px-4">
            Currently open to new opportunities and interesting collaborations.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4">
            {/* Email Button - Primary */}
            <a 
              href="mailto:amanyrath@gmail.com"
              className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] px-6 sm:px-8 py-4 bg-accent-rust border border-accent-rust transition-all duration-300 ease-in-out hover:bg-accent-gold hover:border-accent-gold hover:text-bg-dark min-h-[44px] flex items-center justify-center"
            >
              Email Me
            </a>
            
            {/* GitHub Button - Bordered */}
            <a 
              href="https://github.com/amanyrath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] px-6 sm:px-8 py-4 border border-white/10 transition-all duration-300 ease-in-out hover:border-accent-gold hover:text-accent-gold min-h-[44px] flex items-center justify-center"
            >
              GitHub
            </a>
            
            {/* LinkedIn Button - Bordered */}
            <a 
              href="https://www.linkedin.com/in/alexis-manyrath/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] px-6 sm:px-8 py-4 border border-white/10 transition-all duration-300 ease-in-out hover:border-accent-gold hover:text-accent-gold min-h-[44px] flex items-center justify-center"
            >
              LinkedIn
            </a>
            
            {/* Resume Button - Bordered */}
            <a 
              href="/Alexis_Manyrath_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] px-6 sm:px-8 py-4 border border-white/10 transition-all duration-300 ease-in-out hover:border-accent-gold hover:text-accent-gold min-h-[44px] flex items-center justify-center"
            >
              Resume
            </a>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 px-6 sm:px-8 lg:px-20 py-8 sm:py-12 border-t border-white/5">
        <span className="text-xs md:text-sm text-text-muted">© 2025 Alexis</span>
        <span className="text-xs md:text-sm text-text-muted">Built with intention</span>
      </footer>
    </>
  );
}

