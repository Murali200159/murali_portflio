import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  ArrowDown,
  Github,
  Linkedin,
  Code2,
  Box,
  Image as ImageIcon,
} from 'lucide-react';
import { content } from '../../data/content';
import { Button } from '../ui/Button';
import { Hero3DCanvas } from '../3d/Hero3DCanvas';
import { Card3D } from '../3d/Card3D';

export const Hero: React.FC = () => {
  const [heroVisualMode, setHeroVisualMode] = useState<'photo' | '3d'>('photo');

  const { greeting, name, roles, tagline, location, availability, ctas, photo, socials } =
    content.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-cream bg-grain border-b border-beige/60"
    >
      {/* Decorative ambient background accents */}
      <div
        className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-forest-sage/50 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-beige-light/70 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Interactive 3D Ambient Background Canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 lg:opacity-55 z-0 overflow-hidden">
        <Hero3DCanvas />
      </div>

      <div className="w-full max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center"
        >
          {/* Left Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Meta Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 mb-6 text-xs font-mono"
            >
              {availability.status && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/20 text-forest font-semibold shadow-2xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-forest-secondary" />
                  </span>
                  <span>{availability.text}</span>
                </div>
              )}

              <div className="inline-flex items-center gap-1.5 text-forest font-medium px-3 py-1.5 rounded-full bg-white border border-beige/80 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                <span>{location}</span>
              </div>
            </motion.div>

            {/* Sub-label */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
                {greeting}
              </span>
              <span className="h-px w-8 bg-terracotta/40" aria-hidden="true" />
            </motion.div>

            {/* Main Name Heading: Large, Bold Modern Typography */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[5.5rem] font-extrabold tracking-tight text-forest leading-[1.05]">
                {name}
              </h1>
            </motion.div>

            {/* Dynamic Role Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2 mb-6"
              aria-label="Professional roles"
            >
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-4 py-1.5 text-xs font-mono font-semibold rounded-full bg-white border border-beige text-forest hover:border-terracotta hover:text-terracotta transition-colors shadow-2xs"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Tagline Quote with Terracotta Accent */}
            <motion.blockquote
              variants={itemVariants}
              className="font-sans text-lg sm:text-xl text-ink/80 leading-relaxed max-w-xl xl:max-w-2xl mb-8 border-l-4 border-terracotta pl-4 py-1 font-medium bg-cream-surface/60 rounded-r-xl"
            >
              &ldquo;{tagline}&rdquo;
            </motion.blockquote>

            {/* Interactive 3-Tier CTA Buttons: Primary Forest, Secondary Transparent Forest, Outline */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary: Forest green with white text */}
              <Button
                variant="primary"
                href={ctas.primary.href}
                icon={<ArrowDownRight className="w-4 h-4" />}
                iconPosition="right"
                enableMagnetic={true}
              >
                {ctas.primary.label}
              </Button>

              {/* Secondary: Transparent with forest green border */}
              <Button
                variant="secondary"
                href={ctas.secondary.href}
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
                enableMagnetic={true}
              >
                {ctas.secondary.label}
              </Button>

              {/* Tertiary: Download Resume */}
              <Button
                variant="secondary"
                href={ctas.resume.href}
                target="_blank"
                download="Murali_Krishna_Resume.pdf"
                icon={<Download className="w-4 h-4 text-terracotta" />}
                iconPosition="left"
                className="bg-white border border-beige/90 text-forest hover:border-terracotta hover:text-terracotta shadow-2xs font-semibold"
                enableMagnetic={true}
              >
                {ctas.resume.label}
              </Button>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 pt-6 text-sm"
            >
              <span className="text-xs font-mono text-forest-secondary font-semibold uppercase tracking-wider mr-1">
                Profiles:
              </span>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-beige/80 text-forest hover:text-terracotta hover:border-terracotta transition-colors shadow-2xs text-xs font-semibold"
                aria-label="GitHub profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-beige/80 text-forest hover:text-terracotta hover:border-terracotta transition-colors shadow-2xs text-xs font-semibold"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-beige/80 text-forest hover:text-terracotta hover:border-terracotta transition-colors shadow-2xs text-xs font-semibold"
                aria-label="CodeChef profile"
              >
                <Code2 className="w-3.5 h-3.5 text-terracotta" />
                <span>CodeChef</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: 5 cols (Visually Rich 3D Interactive Frame) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center lg:items-end z-10"
          >
            {/* Visual Mode Selector: Portrait vs Interactive 3D Core */}
            <div className="flex items-center gap-2 mb-3 self-end">
              <button
                type="button"
                onClick={(): void => setHeroVisualMode('photo')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  heroVisualMode === 'photo'
                    ? 'bg-forest text-white font-bold shadow-soft'
                    : 'bg-white border border-beige text-forest/70 hover:text-forest'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-terracotta" />
                <span>Portrait</span>
              </button>
              <button
                type="button"
                onClick={(): void => setHeroVisualMode('3d')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  heroVisualMode === '3d'
                    ? 'bg-forest text-white font-bold shadow-soft'
                    : 'bg-white border border-beige text-forest/70 hover:text-forest'
                }`}
              >
                <Box className="w-3.5 h-3.5 text-terracotta" />
                <span>Interactive 3D Core</span>
              </button>
            </div>

            <Card3D maxTilt={10} className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl group">
              <div className="relative w-full">
                
                {/* Corner Registration Crosshairs in Terracotta */}
                <span className="absolute -top-3 -left-3 text-terracotta font-mono text-base select-none z-20 pointer-events-none">
                  +
                </span>
                <span className="absolute -top-3 -right-3 text-terracotta font-mono text-base select-none z-20 pointer-events-none">
                  +
                </span>
                <span className="absolute -bottom-3 -left-3 text-terracotta font-mono text-base select-none z-20 pointer-events-none">
                  +
                </span>
                <span className="absolute -bottom-3 -right-3 text-terracotta font-mono text-base select-none z-20 pointer-events-none">
                  +
                </span>

                {/* Floating Architectural Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{ transform: 'translateZ(30px)' }}
                  className="absolute -top-4 -right-4 z-20 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#24372F] text-white text-[11px] font-mono shadow-soft border border-forest-secondary/30"
                >
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>AI · 3D Engine · 2026</span>
                </motion.div>

                {/* Framed Visual Box */}
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-forest-dark rounded-3xl overflow-hidden border-2 border-forest shadow-soft-lg group-hover:shadow-[0_25px_50px_rgba(36,55,47,0.2)] transition-all duration-500">
                  {heroVisualMode === 'photo' ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={1024}
                      height={980}
                      loading="eager"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-cream-surface/90 flex flex-col items-center justify-center p-4 relative">
                      <Hero3DCanvas className="w-full h-full" />
                      <span className="absolute bottom-4 font-mono text-[11px] text-forest/70 font-bold bg-white/90 px-3 py-1 rounded-full border border-beige shadow-xs">
                        Move mouse to interact in 3D
                      </span>
                    </div>
                  )}
                </div>

                {/* External caption */}
                {photo.caption && (
                  <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-ink/60 px-2 font-medium">
                    <span>{heroVisualMode === 'photo' ? photo.caption : 'Interactive 3D Neural Architecture'}</span>
                    <span className="text-terracotta font-bold">3D EDITION</span>
                  </div>
                )}
              </div>
            </Card3D>
          </motion.div>

        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-full max-w-[1780px] 2xl:max-w-[1880px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 w-full pt-12 flex items-center justify-between text-xs font-mono text-ink/50"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-forest font-semibold hover:text-terracotta transition-colors group cursor-pointer"
        >
          <span className="w-5 h-8 rounded-full border-2 border-forest flex items-start justify-center p-1">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-terracotta"
            />
          </span>
          <span className="uppercase tracking-widest text-[11px]">Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <div className="hidden sm:flex items-center gap-4 text-[11px] tracking-wider uppercase font-semibold text-forest">
          <span>Python 3.x</span>
          <span className="text-terracotta">•</span>
          <span>FastAPI</span>
          <span className="text-terracotta">•</span>
          <span>React.js</span>
          <span className="text-terracotta">•</span>
          <span>LangChain</span>
        </div>
      </motion.div>
    </section>
  );
};
