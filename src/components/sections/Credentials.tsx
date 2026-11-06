import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, ExternalLink, Heart, CheckCircle2, Dumbbell, Activity } from 'lucide-react';
import { content } from '../../data/content';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const Credentials: React.FC = () => {
  const { certifications, achievements, hobbies } = content;

  return (
    <Section id="credentials" className="bg-beige-light/60 border-b border-beige">
      <SectionHeading
        index={certifications.sectionIndex}
        title="Certifications & Achievements"
        description="Verified technical credentials, competitive programming milestones, and personal pursuits."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Certifications */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-terracotta" />
            <h3 className="font-heading font-extrabold text-xl text-forest">
              {certifications.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.items.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white border border-beige/90 shadow-soft hover:shadow-soft-lg hover:border-terracotta/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-bold text-forest-secondary uppercase tracking-wider px-3 py-1 bg-cream-surface rounded-full border border-beige/70">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-forest">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-secondary" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base sm:text-lg text-forest group-hover:text-terracotta transition-colors leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-4 mt-4 border-t border-beige/50 flex items-center justify-between text-xs font-mono text-forest-secondary">
                  <span>Authorized Curriculum</span>
                  <Award className="w-4 h-4 text-terracotta/70" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (5 cols): Achievements & Hobbies */}
        <div className="lg:col-span-5 space-y-6">
          {/* Coding & Problem Solving Card */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-terracotta" />
              <h3 className="font-heading font-extrabold text-xl text-forest">
                {achievements.title}
              </h3>
            </div>

            {achievements.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-forest text-cream border border-forest-secondary/40 shadow-dark-soft group relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono text-xs font-bold text-terracotta tracking-wider uppercase px-3 py-1 rounded-full bg-terracotta/20 border border-terracotta/40">
                    Competitive Programming
                  </span>
                  <Trophy className="w-5 h-5 text-terracotta" />
                </div>

                <h4 className="font-heading text-lg font-bold text-cream mb-1">
                  {item.title}
                </h4>

                <p className="font-sans text-sm text-cream/80 mb-5 leading-relaxed">
                  {item.achievement}
                </p>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta text-white text-xs font-semibold hover:bg-terracotta-dark transition-colors shadow-soft"
                  >
                    <span>{item.urlLabel || 'View Profile'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Hobbies & Pursuits */}
          <div className="p-6 rounded-2xl bg-white border border-beige/90 shadow-soft">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-terracotta" />
              <h3 className="font-heading font-bold text-base text-forest">
                {hobbies.title}
              </h3>
            </div>

            <p className="text-xs text-ink/70 mb-4 font-sans leading-relaxed">
              Balanced lifestyle disciplines supporting cognitive stamina and daily focus:
            </p>

            <div className="flex flex-wrap gap-2.5">
              {hobbies.items.map((hobby, hIdx) => (
                <div
                  key={hIdx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cream-surface border border-beige/80 text-xs font-mono font-semibold text-forest shadow-2xs hover:border-terracotta transition-colors"
                >
                  {hobby.toLowerCase().includes('fitness') ? (
                    <Dumbbell className="w-4 h-4 text-terracotta" />
                  ) : (
                    <Activity className="w-4 h-4 text-forest-secondary" />
                  )}
                  <span>{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

