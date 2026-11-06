import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, Download } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  activeSection,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!menuRef.current) return;
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElementRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    onClose();
    document.body.style.overflow = '';

    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }, 80);
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 bg-forest-dark/60 backdrop-blur-sm md:hidden"
      onClick={onClose}
    >
      <motion.div
        ref={menuRef}
        onClick={(e: React.MouseEvent<HTMLDivElement>): void => e.stopPropagation()}
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-cream border-l border-beige/80 p-6 flex flex-col justify-between shadow-2xl"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-beige/60">
            <span className="font-heading font-extrabold text-lg text-forest tracking-tight">
              Navigation<span className="text-terracotta">.</span>
            </span>
            <button
              ref={firstFocusableRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 -mr-2 text-forest/70 hover:text-forest focus-visible:outline-terracotta rounded-full hover:bg-cream-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="mt-8 flex flex-col space-y-2">
            {links.map((link, index) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>): void =>
                    handleLinkClick(e, link.href)
                  }
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-forest text-white font-bold shadow-soft'
                      : 'text-ink/80 hover:bg-white hover:text-forest'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-terracotta' : 'text-forest/40'
                    }`}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Quick Resume Download in Mobile Drawer */}
          <div className="pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Murali_Krishna_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-forest text-white text-sm font-semibold shadow-soft hover:bg-forest/90 transition-colors"
            >
              <Download className="w-4 h-4 text-terracotta" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-beige/60 text-xs font-mono text-ink/60 flex flex-col gap-1">
          <span className="text-forest font-bold">Murali Krishna</span>
          <span>Full Stack & AI/ML Engineer · 2026</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
