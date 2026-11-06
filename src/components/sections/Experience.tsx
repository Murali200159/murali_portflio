import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { content } from '../../data/content';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { ExperienceItem } from '../../types';

interface TimelineItemProps {
  item: ExperienceItem;
  isLast?: boolean;
}

export const TimelineItemComponent: React.FC<TimelineItemProps> = ({ item, isLast = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative pl-8 sm:pl-12 group"
    >
      {/* Forest Green Timeline Vertical Line */}
      {!isLast && (
        <div
          className="absolute left-[15px] sm:left-[19px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-forest via-forest-secondary to-forest/20 group-hover:from-terracotta group-hover:to-terracotta transition-colors duration-500"
          aria-hidden="true"
        />
      )}

      {/* Terracotta Highlighted Glowing Node */}
      <div
        className="absolute left-1.5 sm:left-2 top-2.5 w-7 h-7 rounded-full bg-white border-2 border-forest group-hover:border-terracotta flex items-center justify-center transition-all duration-300 shadow-soft"
        aria-hidden="true"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-terracotta group-hover:scale-125 transition-transform" />
      </div>

      {/* Experience Details Card in Crisp White */}
      <div className="bg-white border border-beige p-6 sm:p-9 rounded-3xl shadow-soft group-hover:shadow-soft-lg group-hover:border-forest/40 transition-all duration-300 mb-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-beige/60 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase className="w-4 h-4 text-terracotta" />
              <h3 className="font-heading text-2xl font-extrabold text-forest">
                {item.company}
              </h3>
            </div>
            <p className="font-sans text-base font-semibold text-forest-secondary">
              {item.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-ink/70">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream border border-beige text-terracotta font-bold shadow-2xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>{item.period}</span>
            </span>
            {item.location && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream border border-beige/60">
                <MapPin className="w-3 h-3 text-forest-secondary" />
                <span>{item.location}</span>
              </span>
            )}
          </div>
        </div>

        {/* Performance Impact Metrics */}
        {item.metrics && item.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6 p-4 rounded-2xl bg-cream/70 border border-beige/80">
            {item.metrics.map((m, mIdx) => (
              <div key={mIdx} className="text-center p-3 bg-white rounded-xl border border-beige/60 shadow-2xs">
                <span className="block font-heading text-xl sm:text-2xl font-extrabold text-forest">
                  {m.value}
                </span>
                <span className="block font-mono text-[11px] text-forest-secondary font-semibold mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Highlights List */}
        <ul className="space-y-3.5" role="list">
          {item.highlights.map((highlight, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx, duration: 0.3 }}
              className="flex items-start gap-3.5 text-sm sm:text-base text-ink/80 leading-relaxed font-sans"
            >
              <CheckCircle2 className="w-4 h-4 text-forest-secondary shrink-0 mt-1" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>

        {/* Technology Badges Footer */}
        {item.technologies && item.technologies.length > 0 && (
          <div className="mt-8 pt-5 border-t border-beige/60 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-forest-secondary uppercase tracking-wider mr-2">
              Key Stack:
            </span>
            {item.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-cream border border-beige/70 text-forest shadow-2xs"
              >
                {t}
              </span>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const { sectionIndex, title, items } = content.experience;

  return (
    <Section id="experience" className="bg-cream border-b border-beige">
      <SectionHeading
        index={sectionIndex}
        title={title}
        description="Professional software engineering timeline developing scalable APIs, full-stack applications, and AI assistant systems."
      />

      <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        {items.map((item, index) => (
          <TimelineItemComponent
            key={item.company + index}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};
