'use client';

import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <AnimatedSection>
        <section 
          id="contact" 
          className="border-t border-white/5 py-32 px-20 text-center"
        >
          <div className="section-label text-accent-gold text-xs uppercase tracking-wider mb-4">
            Contact
          </div>
          
          <h2 className="text-6xl font-extrabold mb-6">
            Let&apos;s <span className="font-crimson italic font-normal text-accent-sand">build</span> something
          </h2>
          
          <p className="font-crimson text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            Currently open to new opportunities and interesting collaborations.
          </p>
          
          <div className="flex justify-center gap-12 mb-16">
            {/* Email Button - Primary */}
            <a 
              href="mailto:amanyrath@gmail.com"
              className="text-[0.85rem] font-bold uppercase tracking-[0.15em] px-8 py-4 bg-accent-rust border border-accent-rust transition-all duration-300 ease-in-out hover:bg-accent-gold hover:border-accent-gold hover:text-bg-dark"
            >
              Email Me
            </a>
            
            {/* GitHub Button - Bordered */}
            <a 
              href="https://github.com/amanyrath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-bold uppercase tracking-[0.15em] px-8 py-4 border border-white/10 transition-all duration-300 ease-in-out hover:border-accent-gold hover:text-accent-gold"
            >
              GitHub
            </a>
            
            {/* LinkedIn Button - Bordered */}
            <a 
              href="https://www.linkedin.com/in/alexis-manyrath/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85rem] font-bold uppercase tracking-[0.15em] px-8 py-4 border border-white/10 transition-all duration-300 ease-in-out hover:border-accent-gold hover:text-accent-gold"
            >
              LinkedIn
            </a>
            
            {/* Resume Button - Bordered */}
            <a 
              href="/resume.pdf"
              download
              className="text-[0.85rem] font-bold uppercase tracking-[0.15em] px-8 py-4 border border-white/10 transition-all duration-300 ease-in-out hover:border-accent-gold hover:text-accent-gold"
            >
              Resume
            </a>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Footer */}
      <footer className="flex justify-between items-center px-20 py-12 border-t border-white/5">
        <span className="text-sm text-text-muted">© 2025 Alexis</span>
        <span className="text-sm text-text-muted">Built with intention</span>
      </footer>
    </>
  );
}

