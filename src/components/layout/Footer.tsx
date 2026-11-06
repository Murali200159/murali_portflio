import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { content } from '../../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-cream-surface text-ink py-14 border-t border-beige/80 relative overflow-hidden">
      <div className="w-full max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-ink/75">
        
        {/* Monogram / Brand */}
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-[#24372F] text-white flex items-center justify-center font-heading font-extrabold text-xs shadow-2xs">
            MK
          </span>
          <span className="font-heading font-bold text-forest">
            {content.footer.name}
          </span>
          <span className="text-forest/30" aria-hidden="true">|</span>
          <span className="font-mono text-xs text-ink/60">
            © {content.footer.year} All Rights Reserved
          </span>
        </div>

        <div className="text-xs text-ink/60 font-mono text-center">
          Handcrafted with React, Motion & Tailwind CSS
        </div>

        {/* Back to top with hover spring */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-forest hover:text-terracotta hover:border-terracotta transition-colors focus-visible:outline-terracotta px-4 py-2 rounded-full bg-white border border-beige/90 shadow-2xs cursor-pointer font-semibold"
          aria-label="Scroll back to top of page"
        >
          <span>{content.footer.backToTopText}</span>
          <ArrowUp className="w-3.5 h-3.5 text-terracotta" />
        </motion.button>

      </div>
    </footer>
  );
};
