import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Server,
  Code2,
  Database,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Cpu,
  Layers,
} from 'lucide-react';
import { content } from '../../data/content';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const { sectionIndex, title } = content.about;

  const capabilities = [
    {
      icon: <Brain className="w-5 h-5 text-terracotta" />,
      title: 'Conversational AI & LLMs',
      desc: 'Retrieval-Augmented Generation (RAG), LangChain, LangGraph, NLP pipelines, and speech-to-text integrations.',
      tag: 'AI/ML Focus',
    },
    {
      icon: <Server className="w-5 h-5 text-forest" />,
      title: 'High-Performance Backends',
      desc: 'Scalable FastAPI microservices, secure authentication, structured RESTful APIs, and asynchronous workflows.',
      tag: 'Python & FastAPI',
    },
    {
      icon: <Code2 className="w-5 h-5 text-forest-secondary" />,
      title: 'Modern Frontend Engineering',
      desc: 'Component-driven user interfaces in React.js, responsive layouts, accessible navigation, and interactive dashboards.',
      tag: 'React.js',
    },
    {
      icon: <Database className="w-5 h-5 text-forest-dark" />,
      title: 'Database Architecture',
      desc: 'NoSQL collections with MongoDB, relational SQL schemas, query optimization, and reliable persistence.',
      tag: 'MongoDB & SQL',
    },
  ];

  const highlights = [
    { label: 'Industry Experience', value: '1 Year Prof.' },
    { label: 'Core Stack', value: 'Python · FastAPI · React' },
    { label: 'Specialization', value: 'LLMs · RAG · Full Stack' },
    { label: 'Location', value: 'Visakhapatnam, AP, India' },
  ];

  return (
    <Section id="about" className="bg-beige-light/40 border-b border-beige">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column (7 cols): Editorial Narrative & Experience Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-7 flex flex-col space-y-7"
        >
          <SectionHeading
            index={sectionIndex}
            title={title}
            description="Python Developer & AI/ML Engineer dedicated to engineering practical, intelligent digital solutions."
            className="mb-2"
          />

          {/* Editorial Lead Quote / Statement */}
          <div className="relative pl-6 py-2 border-l-2 border-terracotta">
            <p className="font-heading text-xl sm:text-2xl font-bold text-forest leading-snug">
              Results-driven Python Developer with 1 year of experience building production AI-powered applications, including LLM-based chatbots and voice assistants.
            </p>
          </div>

          {/* Narrative Body Prose */}
          <div className="space-y-4 text-base sm:text-lg text-ink/80 leading-relaxed font-sans">
            <p>
              I specialize in bridging the gap between cutting-edge Artificial Intelligence and robust backend systems. My core engineering toolkit spans Machine Learning, Retrieval-Augmented Generation (RAG), and Natural Language Processing (NLP), supported by strong fundamentals in data structures, algorithms, and scalable service design.
            </p>
            <p className="text-sm sm:text-base text-ink/75">
              At Dilshaj Infotech, I engineered key AI and full-stack modules for EduProva—improving retrieval response accuracy by 30–40% and optimizing database workflows by 20%. I bring a pragmatic, problem-focused mindset to every codebase I touch.
            </p>
          </div>

          {/* Core Highlights Pills: Refined, elegant pill layout */}
          <div className="pt-2">
            <span className="block font-mono text-xs text-forest-secondary font-bold uppercase tracking-wider mb-3">
              Core Competencies:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {content.about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-beige/90 text-xs font-mono font-medium text-forest shadow-2xs hover:border-forest/50 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics Matrix: Crisp, refined cards with subtle elevation */}
          <div className="pt-4 border-t border-beige/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white border border-beige/90 shadow-soft flex flex-col justify-between"
              >
                <span className="block font-mono text-[10px] text-forest-secondary font-bold uppercase tracking-wider mb-1">
                  {h.label}
                </span>
                <span className="font-heading font-extrabold text-sm sm:text-base text-forest">
                  {h.value}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right Column (5 cols): Architectural Capabilities Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-5"
        >
          <div className="bg-white border border-beige rounded-3xl p-6 sm:p-8 shadow-soft-lg relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-beige/70 mb-5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-terracotta" />
                <span className="uppercase tracking-widest text-forest font-bold">
                  Core Engineering Pillars
                </span>
              </div>
              <span className="text-forest-secondary font-semibold">2026</span>
            </div>

            {/* 4 Interactive Domain Cards */}
            <div className="space-y-3.5">
              {capabilities.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * idx, duration: 0.35 }}
                  className="p-4 rounded-2xl bg-cream/70 border border-beige/70 hover:border-forest/40 hover:bg-white hover:shadow-soft transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white border border-beige/80 shrink-0 text-forest group-hover:scale-105 group-hover:border-terracotta/40 transition-all shadow-2xs">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-heading font-bold text-sm sm:text-base text-forest group-hover:text-terracotta transition-colors">
                          {item.title}
                        </h3>
                        <span className="font-mono text-[10px] text-terracotta font-semibold px-2 py-0.5 rounded-full bg-terracotta/10 border border-terracotta/20 shrink-0">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-ink/75 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Architectural Footer Note */}
            <div className="mt-5 pt-4 border-t border-beige/70 flex items-center justify-between text-xs font-mono text-ink/60">
              <span className="inline-flex items-center gap-1.5 text-forest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-secondary" />
                <span>Clean Architecture</span>
              </span>
              <span className="text-terracotta font-semibold">
                Problem-Focused
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </Section>
  );
};
