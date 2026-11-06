import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { content } from '../../data/content';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const Education: React.FC = () => {
  const { sectionIndex, title, items } = content.education;

  return (
    <Section id="education" className="bg-forest-sage/40 border-b border-beige/60">
      <SectionHeading
        index={sectionIndex}
        title={title}
        description="Formal academic degrees and university qualifications in computer science and applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className="bg-white border border-beige/90 p-7 sm:p-9 rounded-2xl flex flex-col justify-between shadow-soft hover:shadow-soft-lg hover:border-terracotta/40 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 rounded-xl bg-forest/5 border border-forest/15 text-terracotta group-hover:scale-105 group-hover:bg-terracotta/10 transition-all">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  {item.cgpa && (
                    <span className="font-mono text-xs font-bold text-terracotta px-2.5 py-1 bg-terracotta/10 rounded-full border border-terracotta/30">
                      {item.cgpa}
                    </span>
                  )}
                  <span className="font-mono text-xs text-forest/70 font-semibold px-3 py-1 bg-cream-surface rounded-full border border-beige/80">
                    {item.period}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest mb-2">
                {item.degree}
              </h3>
            </div>

            <div className="pt-6 mt-6 border-t border-beige/60 flex items-center justify-between text-sm">
              <span className="text-ink/80 font-medium font-sans">{item.institution}</span>
              <Award className="w-4 h-4 text-forest-secondary shrink-0" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
