import React from 'react';

interface SectionHeadingProps {
  index: string; // e.g. "01"
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  description,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {/* Index Pill with hairline rule */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`font-mono text-xs uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full ${
            dark
              ? 'text-terracotta bg-terracotta/15 border border-terracotta/30'
              : 'text-terracotta bg-terracotta/10 border border-terracotta/20'
          }`}
        >
          {index} — {title}
        </span>
        <span
          className={`h-px w-10 ${dark ? 'bg-cream/20' : 'bg-beige/80'}`}
          aria-hidden="true"
        />
      </div>

      {/* Main Heading */}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-3 text-base sm:text-lg max-w-prose font-sans leading-relaxed ${
            dark ? 'text-cream/70' : 'text-ink-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
