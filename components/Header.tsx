'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/amanyrath', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/alexis-manyrath/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/wow_pal', label: 'Twitter' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0d0a]/95 backdrop-blur-[10px] py-5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-full px-16">
        <div className="flex items-center justify-between relative">
          {/* Social Icons - Left */}
          <div className="hidden md:flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a7e70] transition-colors duration-300 hover:text-[#c9a227]"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <Link
            href="/#home"
            className="absolute left-1/2 -translate-x-1/2 text-base md:text-lg font-[800] tracking-[0.3em] uppercase text-[#f2ebe0] transition-opacity duration-300 hover:opacity-60"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Alexis Manyrath
          </Link>

          {/* Navigation - Right (Desktop) */}
          <nav className="hidden md:flex items-center gap-12 ml-auto">
            {[
              { name: 'Work', href: '#work' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-[#f2ebe0] transition-opacity duration-300 hover:opacity-60"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#f2ebe0] transition-opacity duration-300 hover:opacity-60 ml-auto"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-[#0f0d0a]/95 backdrop-blur-[10px] z-40 md:hidden"
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {[
            { name: 'Work', href: '#work' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' }
          ].map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-xl md:text-2xl font-semibold tracking-[0.1em] uppercase text-[#f2ebe0] transition-opacity duration-300 hover:opacity-60"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const element = document.querySelector(link.href);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          
          {/* Social Icons in Mobile Menu */}
          <div className="flex items-center gap-8 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a7e70] transition-colors duration-300 hover:text-[#c9a227]"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      </motion.div>
    </header>
  );
}

