import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Building2, Layers } from 'lucide-react';
import { content } from '../../data/content';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Tag } from '../ui/Tag';
import { Button } from '../ui/Button';
import { ProjectSchematic } from '../ui/ProjectSchematic';
import { ProjectItem } from '../../types';
import { Card3D } from '../3d/Card3D';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const isValidLink = (url?: string): boolean => {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed === '' || trimmed === '#' || trimmed.startsWith('TODO')) return false;
  return true;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven: boolean = index % 2 === 1;
  const hasDemo: boolean = isValidLink(project.demoUrl);
  const hasGithub: boolean = isValidLink(project.githubUrl);

  return (
    <Card3D maxTilt={5} className="mb-14 last:mb-0">
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="bg-white border border-beige/90 rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 shadow-soft hover:shadow-soft-lg hover:border-forest/40 transition-all duration-500 group relative"
        aria-labelledby={`project-title-${project.id}`}
      >
      {/* Corner crosshairs in Terracotta */}
      <span className="absolute top-4 left-4 text-terracotta/40 font-mono text-sm select-none pointer-events-none">
        +
      </span>
      <span className="absolute top-4 right-4 text-terracotta/40 font-mono text-sm select-none pointer-events-none">
        +
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Project Preview Area (5 cols) */}
        <div
          className={`lg:col-span-5 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-soft border border-beige/80"
          >
            {project.image ? (
              <div className="aspect-[16/11] bg-cream-surface rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            ) : (
              <ProjectSchematic
                id={project.id}
                number={project.number}
                category={project.category}
              />
            )}
          </motion.div>
        </div>

        {/* Structured Details Area (7 cols) */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Top index & category badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="font-mono text-xs font-bold text-terracotta tracking-wider uppercase px-3 py-1 rounded-full bg-terracotta/10 border border-terracotta/30">
              Project {project.number}
            </span>
            <span className="text-forest/30" aria-hidden="true">•</span>
            <span className="font-mono text-xs text-forest-secondary font-semibold">
              {project.category}
            </span>
            {project.isOngoing && (
              <>
                <span className="text-forest/30" aria-hidden="true">•</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-terracotta bg-terracotta/10 border border-terracotta/30 px-2.5 py-0.5 rounded-full shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
                  </span>
                  <span>Currently Ongoing</span>
                </span>
              </>
            )}
            {project.demoUrl?.includes('dilshajinfotech.tech') && (
              <>
                <span className="text-forest/30" aria-hidden="true">•</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-forest bg-forest/5 border border-forest/20 px-2.5 py-0.5 rounded-full shadow-2xs">
                  <Building2 className="w-3 h-3 text-terracotta" />
                  <span>Dilshaj Infotech</span>
                </span>
              </>
            )}
          </div>

          {/* Title in Forest Green */}
          <h3
            id={`project-title-${project.id}`}
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest mb-4 leading-tight group-hover:text-terracotta transition-colors"
          >
            {project.title}
          </h3>

          {/* Overview */}
          <div className="mb-5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-forest-secondary font-bold mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span>Overview</span>
            </h4>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-sans">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-forest-secondary font-bold mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                <span>Key Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feature: string, fIdx: number) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 text-xs text-ink/85 bg-cream/80 border border-beige/80 px-3 py-1.5 rounded-xl"
                  >
                    <span className="text-terracotta font-bold text-xs">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem Statement (if present) */}
          {project.problemStatement && !project.problemStatement.startsWith('TODO') && (
            <div className="mb-5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-forest-secondary font-bold mb-1.5">
                Problem Statement
              </h4>
              <p className="text-sm sm:text-base text-ink/75 leading-relaxed font-sans">
                {project.problemStatement}
              </p>
            </div>
          )}

          {/* Key Contributions / Architecture Details */}
          <div className="mb-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-forest-secondary font-bold mb-2">
              Engineering & Architecture
            </h4>
            <ul className="space-y-1.5 text-sm text-ink/80">
              {project.contributions.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-terracotta text-sm shrink-0 leading-5" aria-hidden="true">—</span>
                  <span className={item.startsWith('TODO') ? 'font-mono text-xs text-ink/50 italic' : ''}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Tag Group in Light Theme */}
          <div className="mb-8">
            <h4 className="font-mono text-xs uppercase tracking-wider text-forest-secondary font-bold mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Tag key={tech} variant="forest" size="sm">
                  {tech}
                </Tag>
              ))}
            </div>
          </div>

          {/* Action Links */}
          {(hasDemo || hasGithub) && (
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {hasDemo && (
                <Button
                  variant="terracotta"
                  href={project.demoUrl}
                  target="_blank"
                  icon={<ExternalLink className="w-4 h-4" />}
                  enableMagnetic={true}
                >
                  Live Demo
                </Button>
              )}
              {hasGithub && (
                <Button
                  variant="secondary"
                  href={project.githubUrl}
                  target="_blank"
                  icon={<Github className="w-4 h-4" />}
                >
                  Source Code
                </Button>
              )}
            </div>
          )}

        </div>

      </div>
    </motion.article>
    </Card3D>
  );
};

export const Projects: React.FC = () => {
  const { sectionIndex, title, items } = content.projects;
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: items.length },
    {
      id: 'live',
      label: 'Live Deployed Platforms',
      count: items.filter((p) => Boolean(p.demoUrl && p.demoUrl.startsWith('http'))).length,
    },
    {
      id: 'ai',
      label: 'AI / ML & NLP',
      count: items.filter((p) =>
        p.category.toLowerCase().includes('ai') ||
        p.technologies.some((t) => ['LLM', 'RAG', 'NLP', 'CatBoost', 'Scikit-learn'].includes(t))
      ).length,
    },
    {
      id: 'web',
      label: 'Web & Full Stack',
      count: items.filter((p) =>
        p.technologies.includes('React.js') ||
        p.technologies.includes('FastAPI') ||
        p.technologies.includes('HTML5')
      ).length,
    },
    {
      id: 'ongoing',
      label: 'Ongoing Projects',
      count: items.filter((p) => Boolean(p.isOngoing)).length,
    },
  ];

  const filteredProjects = items.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'live') {
      return Boolean(project.demoUrl && project.demoUrl.startsWith('http'));
    }
    if (selectedFilter === 'ai') {
      return (
        project.category.toLowerCase().includes('ai') ||
        project.technologies.some((t) => ['LLM', 'RAG', 'NLP', 'CatBoost', 'Scikit-learn'].includes(t))
      );
    }
    if (selectedFilter === 'web') {
      return (
        project.technologies.includes('React.js') ||
        project.technologies.includes('FastAPI') ||
        project.technologies.includes('HTML5')
      );
    }
    if (selectedFilter === 'ongoing') {
      return Boolean(project.isOngoing);
    }
    return true;
  });

  return (
    <Section id="projects" className="bg-forest-sage/30 bg-grain border-b border-beige/80 relative">
      <SectionHeading
        index={sectionIndex}
        title={title}
        description="Featured technical projects highlighting production AI systems, full-stack microservices, conversational assistants, and mobile architectures."
        dark={false}
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {filterTabs.map((tab) => {
          const isActive = selectedFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={(): void => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer shadow-xs flex items-center gap-2 ${
                isActive
                  ? 'bg-forest text-white font-bold shadow-soft'
                  : 'bg-white border border-beige/80 text-forest/80 hover:border-forest/50 hover:text-forest'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-cream text-forest-secondary font-bold'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="space-y-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};
