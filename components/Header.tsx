'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Twitter, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

// Map social link names to icons
const socialIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

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

    // Prevent body scroll when menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-dark/95 backdrop-blur-[10px] py-4 sm:py-5'
          : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-full px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between relative">
          {/* Social Icons - Left */}
          <div className="hidden md:flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors duration-300 hover:text-accent-gold"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Logo - Center */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-sm sm:text-base md:text-lg font-[800] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-text-cream transition-opacity duration-300 hover:opacity-60 whitespace-nowrap"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <span className="hidden sm:inline">{SITE_CONFIG.name}</span>
            <span className="sm:hidden">{SITE_CONFIG.shortName}</span>
          </Link>

          {/* Navigation - Right (Desktop) */}
          <nav className="hidden md:flex items-center gap-12 ml-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-text-cream transition-opacity duration-300 hover:opacity-60"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname === '/') {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = `/${link.href}`;
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-cream transition-opacity duration-300 hover:opacity-60 ml-auto z-[60] relative"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 bg-bg-dark/95 backdrop-blur-[10px] z-40 md:hidden"
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        onClick={(e) => {
          // Close menu when clicking the backdrop (not the nav content)
          if (e.target === e.currentTarget) {
            setMobileMenuOpen(false);
          }
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8" onClick={(e) => e.stopPropagation()}>
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-xl md:text-2xl font-semibold tracking-[0.1em] uppercase text-text-cream transition-opacity duration-300 hover:opacity-60"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (window.location.pathname === '/') {
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = `/${link.href}`;
                }
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
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors duration-300 hover:text-accent-gold"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
