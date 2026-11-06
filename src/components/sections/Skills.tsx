import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Code, Layout, Cpu, Database, Wrench, Layers, BookOpen } from 'lucide-react';
import { Skills3DOrbit } from '../3d/Skills3DOrbit';

export const Skills: React.FC = () => {
  const { sectionIndex, title, categories } = content.skills;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code className="w-4 h-4 text-forest" />,
    'Web Technologies': <Layout className="w-4 h-4 text-forest-secondary" />,
    'AI/ML & NLP': <Cpu className="w-4 h-4 text-terracotta" />,
    'Libraries & Frameworks': <Layers className="w-4 h-4 text-forest" />,
    'Tools & Platforms': <Wrench className="w-4 h-4 text-terracotta" />,
    'Core Concepts': <BookOpen className="w-4 h-4 text-forest-dark" />,
  };

  return (
    <Section id="skills" className="bg-forest-sage/50 border-b border-forest/15">
      <SectionHeading
        index={sectionIndex}
        title={title}
        description="A structured overview of technical skills, frameworks, and tools applied in my engineering workflows."
      />

      {/* Interactive 3D Orbiting Sphere */}
      <Skills3DOrbit />

      {/* Filter / Category Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          type="button"
          onClick={(): void => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer shadow-xs ${
            selectedCategory === null
              ? 'bg-forest text-white font-bold shadow-soft'
              : 'bg-white border border-beige/80 text-forest hover:border-forest/50'
          }`}
        >
          All Categories ({categories.reduce((acc, c) => acc + c.skills.length, 0)})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.category}
            type="button"
            onClick={(): void =>
              setSelectedCategory(selectedCategory === cat.category ? null : cat.category)
            }
            className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer shadow-2xs ${
              selectedCategory === cat.category
                ? 'bg-forest text-white font-bold shadow-soft'
                : 'bg-white border border-beige/80 text-forest/80 hover:border-forest/50 hover:text-forest'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Interactive Category Grid with White Surfaces on Soft Sage */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {categories
            .filter((cat) => selectedCategory === null || cat.category === selectedCategory)
            .map((cat, idx) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: 0.05 * idx }}
                className="bg-white border border-beige/90 rounded-3xl p-7 flex flex-col justify-between shadow-soft hover:shadow-soft-lg hover:border-forest/40 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-beige/60 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-forest/8 border border-forest/15 group-hover:scale-105 transition-transform shadow-2xs">
                        {categoryIcons[cat.category] || <Code className="w-4 h-4 text-forest" />}
                      </div>
                      <span className="font-mono text-xs text-forest-secondary font-bold uppercase tracking-wider">
                        0{idx + 1}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-terracotta font-bold px-2.5 py-1 rounded-full bg-terracotta/10 border border-terracotta/20">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-forest mb-4">
                    {cat.category}
                  </h3>
                </div>

                {/* Animated Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className={`inline-flex items-center px-3.5 py-1.5 text-xs font-mono font-medium rounded-xl transition-all cursor-default shadow-2xs ${
                        cat.category === 'AI & Machine Learning'
                          ? 'bg-terracotta/10 text-terracotta-dark border border-terracotta/30 font-semibold'
                          : 'bg-cream text-forest border border-beige hover:border-forest/50'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};
