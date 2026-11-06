import React from 'react';
import { motion } from 'framer-motion';
import { Magnetic } from './Magnetic';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'terracotta' | 'outline' | 'text';
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  enableMagnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  download,
  target,
  rel,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  enableMagnetic = false,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden select-none cursor-pointer shadow-xs';

  const variants = {
    // Primary: Forest green background with white text
    primary:
      'bg-[#24372F] text-white hover:bg-[#1B2A24] active:bg-[#24372F] shadow-soft hover:shadow-soft-lg border border-[#24372F]',
    // Secondary: Transparent background with forest green border
    secondary:
      'bg-transparent text-[#24372F] border-2 border-[#24372F] hover:bg-[#24372F]/10 active:bg-[#24372F]/15',
    // Terracotta: For high-priority conversion (Contact, important CTAs)
    terracotta:
      'bg-[#C96F4F] text-white hover:bg-[#B0593B] active:bg-[#C96F4F] border border-[#C96F4F]/40 shadow-soft hover:shadow-soft-lg',
    // Outline light on dark backgrounds (e.g. inside dark project section)
    outline:
      'bg-transparent text-cream border-2 border-cream/60 hover:border-cream hover:bg-cream/10',
    // Plain text
    text:
      'bg-transparent text-[#24372F] hover:text-[#C96F4F] px-0 py-1 underline-offset-4 hover:underline rounded-none shadow-none',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const contentElement = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="tracking-tight">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const inner = href ? (
    <motion.a
      href={href}
      download={download}
      target={target}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {contentElement}
    </motion.a>
  ) : (
    <motion.button
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {contentElement}
    </motion.button>
  );

  if (enableMagnetic) {
    return <Magnetic strength={0.25}>{inner}</Magnetic>;
  }

  return inner;
};
