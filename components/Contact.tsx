'use client';

import AnimatedSection from './AnimatedSection';
import Button from './ui/Button';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

// Helper to find social link by name
const getSocialUrl = (name: string) => 
  SOCIAL_LINKS.find((link) => link.name === name)?.url || '#';

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
            <Button 
              href={`mailto:${SITE_CONFIG.email}`}
              variant="primary"
            >
              Email Me
            </Button>
            
            {/* GitHub Button - Bordered */}
            <Button 
              href={getSocialUrl('GitHub')}
              variant="outline"
              external
            >
              GitHub
            </Button>
            
            {/* LinkedIn Button - Bordered */}
            <Button 
              href={getSocialUrl('LinkedIn')}
              variant="outline"
              external
            >
              LinkedIn
            </Button>
            
            {/* Resume Button - Bordered */}
            <Button 
              href={SITE_CONFIG.resumePath}
              variant="outline"
              external
            >
              Resume
            </Button>
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
