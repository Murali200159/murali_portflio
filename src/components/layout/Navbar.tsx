import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ArrowUpRight, Download } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { content } from '../../data/content';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const sectionIds = useMemo<string[]>(
    () => content.navigation.links.map((link) => link.href.replace('#', '')),
    []
  );
  const activeSection = useActiveSection(sectionIds, 120);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-cream/90 backdrop-blur-md border-b border-beige/60 shadow-[0_4px_25px_rgba(36,55,47,0.05)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <motion.a
            href="#hero"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>): void => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus-visible:outline-terracotta cursor-pointer"
            aria-label="Back to top"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="w-10 h-10 rounded-xl bg-[#24372F] text-white flex items-center justify-center font-heading font-extrabold text-sm tracking-tight group-hover:bg-terracotta transition-colors shadow-soft">
              {content.navigation.monogram}
            </span>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-extrabold text-sm tracking-tight text-forest leading-none">
                Murali Krishna
              </span>
              <span className="font-mono text-[10px] text-forest-secondary font-semibold uppercase tracking-wider mt-0.5">
                Full Stack & AI
              </span>
            </div>
          </motion.a>

          {/* Desktop Floating Navigation Capsule */}
          <nav
            className="hidden md:flex items-center gap-1 bg-white/95 border border-beige/80 p-1.5 rounded-full shadow-soft backdrop-blur-sm isolate"
            aria-label="Main navigation"
          >
            {content.navigation.links.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>): void =>
                    handleLinkClick(e, link.href)
                  }
                  className={`relative px-2.5 lg:px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 select-none ${
                    isActive ? 'text-white font-bold' : 'text-ink/80 hover:text-forest'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-forest rounded-full z-0 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right CTA Pill & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Quick Resume Download Pill */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Murali_Krishna_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-white border border-beige/90 text-forest hover:border-terracotta hover:text-terracotta transition-colors shadow-2xs font-mono"
              aria-label="Download resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-terracotta" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>): void =>
                handleLinkClick(e, '#contact')
              }
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-[#24372F] text-white hover:bg-terracotta transition-colors shadow-soft"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={(): void => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2.5 rounded-xl bg-white border border-beige/80 text-forest hover:text-terracotta hover:border-terracotta md:hidden transition-colors shadow-2xs"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={(): void => setIsMobileMenuOpen(false)}
            links={content.navigation.links}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  );
};
