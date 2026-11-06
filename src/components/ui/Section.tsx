import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  hasDivider?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  hasDivider = true,
}) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${hasDivider ? 'border-b border-beige/60' : ''} ${className}`}
    >
      <div className="w-full max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24">
        {children}
      </div>
    </section>
  );
};
