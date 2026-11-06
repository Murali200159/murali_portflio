import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Card3D } from '../3d/Card3D';

export const Resume: React.FC = () => {
  const resumeUrl = '/resume.pdf';
  const downloadName = 'Murali_Krishna_Resume.pdf';

  const highlights = [
    {
      icon: <Briefcase className="w-4 h-4 text-terracotta" />,
      title: 'Industry & Freelance Experience',
      desc: 'Dilshaj Infotech (1 Yr) + Independent Client Platforms Started in 2025 during MCA',
    },
    {
      icon: <Layers className="w-4 h-4 text-forest" />,
      title: 'Full Stack & AI/ML Toolkit',
      desc: 'Python, FastAPI, React.js, MongoDB, RAG, LangChain & Speech-to-Text',
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-forest-secondary" />,
      title: 'Academic Background',
      desc: 'MCA (JNTU Kakinada, CGPA: 7.5) & B.Sc (Sri Chaitanya, CGPA: 7.6)',
    },
    {
      icon: <Award className="w-4 h-4 text-terracotta" />,
      title: 'Verified Certifications',
      desc: 'IBM Python for Data Science & AI, Udemy Python, 65+ CodeChef Solved',
    },
  ];

  return (
    <Section id="resume" className="bg-cream-surface/60 border-b border-beige/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-forest-sage/40 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-beige-light/70 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <SectionHeading
        index="07"
        title="Curriculum Vitae"
        description="Official professional resume detailing software engineering experience, AI systems architecture, and academic credentials."
        dark={false}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Summary & Download CTAs (6 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-between space-y-6"
        >
          {/* Document Meta Tag */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-beige/90 text-xs font-mono font-bold text-forest shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-terracotta" />
              <span>Official 2-Page CV</span>
            </span>
            <span className="text-forest/30" aria-hidden="true">•</span>
            <span className="font-mono text-xs text-forest-secondary font-semibold">
              Updated 2026 Edition
            </span>
            <span className="text-forest/30" aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-ink/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-forest-secondary" />
              <span>ATS Optimized</span>
            </span>
          </div>

          {/* Headline & Overview */}
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest mb-3 leading-snug">
              Saripilli Murali Krishna
            </h3>
            <p className="font-sans text-base sm:text-lg text-ink/80 leading-relaxed">
              Results-driven Python Developer, Full Stack Developer, and AI/ML Engineer with 1 year of production experience building intelligent conversational applications, scalable FastAPI services, and reactive React.js interfaces.
            </p>
          </div>

          {/* Key Competency Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-beige/90 shadow-2xs hover:border-terracotta/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-forest/5 border border-forest/15">
                    {item.icon}
                  </div>
                  <h4 className="font-heading text-xs font-bold text-forest">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-ink/70 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action CTAs: Direct Download & In-Browser View */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <Button
              variant="terracotta"
              href={resumeUrl}
              download={downloadName}
              icon={<Download className="w-4 h-4" />}
              iconPosition="left"
              enableMagnetic={true}
            >
              Download PDF Resume
            </Button>

            <Button
              variant="secondary"
              href={resumeUrl}
              target="_blank"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
              enableMagnetic={true}
            >
              Open Fullscreen PDF
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Visual Document Preview Card (6 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6 flex justify-center"
        >
          <Card3D maxTilt={7} className="w-full max-w-lg">
            <div className="relative w-full group">
              {/* Architectural Crosshairs */}
              <span className="absolute -top-3 -left-3 text-terracotta/40 font-mono text-base select-none pointer-events-none">
                +
              </span>
              <span className="absolute -top-3 -right-3 text-terracotta/40 font-mono text-base select-none pointer-events-none">
                +
              </span>
              <span className="absolute -bottom-3 -left-3 text-terracotta/40 font-mono text-base select-none pointer-events-none">
                +
              </span>
              <span className="absolute -bottom-3 -right-3 text-terracotta/40 font-mono text-base select-none pointer-events-none">
                +
              </span>

              {/* Document Frame Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-beige shadow-soft-lg group-hover:shadow-[0_20px_45px_rgba(36,55,47,0.12)] transition-all duration-300">
              
              {/* Document Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-beige/70 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  <span className="font-mono text-xs font-semibold text-ink/60 ml-2">
                    Murali_Krishna_Resume.pdf
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-terracotta px-2.5 py-0.5 rounded-full bg-terracotta/10 border border-terracotta/20">
                  2 Pages · 220 KB
                </span>
              </div>

              {/* Styled Document Representation */}
              <div className="space-y-4 font-sans text-xs bg-cream/50 p-5 rounded-2xl border border-beige/60">
                <div className="text-center pb-3 border-b border-beige/60">
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-forest uppercase tracking-wide">
                    Saripilli Murali Krishna
                  </h4>
                  <p className="font-mono text-[11px] text-ink/70 mt-1">
                    Python Developer | Full Stack Developer | AI/ML Engineer
                  </p>
                  <p className="font-mono text-[10px] text-ink/60 mt-0.5">
                    Visakhapatnam, Andhra Pradesh · muralikrishnasaripilli@gmail.com
                  </p>
                </div>

                <div>
                  <h5 className="font-heading font-bold text-forest text-xs uppercase tracking-wider mb-1">
                    Professional Summary
                  </h5>
                  <p className="text-[11px] text-ink/75 leading-relaxed">
                    Results-driven Python Developer with 1 year experience building AI-powered applications, LLM chatbots, voice assistants, and scalable FastAPI backend systems.
                  </p>
                </div>

                <div>
                  <h5 className="font-heading font-bold text-forest text-xs uppercase tracking-wider mb-1">
                    Experience Highlight
                  </h5>
                  <div className="text-[11px] text-ink/75 flex justify-between font-semibold">
                    <span>Dilshaj Infotech — Python Developer / Full Stack</span>
                    <span className="text-terracotta font-mono text-[10px]">1 Year</span>
                  </div>
                  <p className="text-[10px] text-ink/60 mt-0.5">
                    EduProva LMS · +30-40% response accuracy · +20% database efficiency
                  </p>
                </div>

                <div>
                  <h5 className="font-heading font-bold text-forest text-xs uppercase tracking-wider mb-1">
                    Core Technical Skills
                  </h5>
                  <p className="text-[10px] text-ink/60 font-mono">
                    Python, FastAPI, React.js, Next.js, MongoDB, RAG, LangChain, Scikit-learn
                  </p>
                </div>
              </div>

              {/* Document Card Footer with Direct Action */}
              <div className="mt-5 pt-4 border-t border-beige/60 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ink/60 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>Ready for Recruitment & Interviews</span>
                </span>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-forest hover:text-terracotta transition-colors"
                >
                  <span>View PDF</span>
                  <ExternalLink className="w-3 h-3 text-terracotta" />
                </a>
              </div>

            </div>

          </div>
          </Card3D>
        </motion.div>

      </div>
    </Section>
  );
};

