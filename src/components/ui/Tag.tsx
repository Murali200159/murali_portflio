import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'forest' | 'sage' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-xs';
  const variantClasses = {
    // Default: White tag on light backgrounds with subtle beige border
    default: 'bg-white text-ink border border-beige/80 hover:border-forest/40 shadow-2xs',
    // Accent: Terracotta tint
    accent: 'bg-terracotta/10 text-terracotta-dark border border-terracotta/30 font-medium',
    // Forest: Subtle forest green pill
    forest: 'bg-forest/10 text-forest border border-forest/20 font-medium',
    // Sage: Secondary green pill
    sage: 'bg-forest-secondary/15 text-forest font-medium border border-forest-secondary/30',
    // Dark: For dark sections like Projects
    dark: 'bg-forest-dark/80 text-cream border border-cream/20 hover:border-terracotta/60',
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-lg tracking-tight transition-all duration-150 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
