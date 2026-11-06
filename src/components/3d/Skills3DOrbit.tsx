import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'AI/ML' | 'Backend' | 'Frontend' | 'Database' | 'DevOps';
  level?: string;
}

const techStack: TechItem[] = [
  { name: 'Python', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'LLMs', category: 'AI/ML' },
  { name: 'RAG', category: 'AI/ML' },
  { name: 'LangChain', category: 'AI/ML' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'React Native', category: 'Frontend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Scikit-learn', category: 'AI/ML' },
  { name: 'NLP', category: 'AI/ML' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Git & GitHub', category: 'DevOps' },
  { name: 'Speech-to-Text', category: 'AI/ML' },
  { name: 'Tailwind CSS', category: 'Frontend' },
];

export const Skills3DOrbit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: 15, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeTech, setActiveTech] = useState<string | null>('Python');
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Continuous auto-rotation when not dragging
  useEffect(() => {
    let animationId: number;
    const autoRotate = (): void => {
      if (!isDragging) {
        setRotation((prev) => ({
          x: prev.x,
          y: (prev.y + 0.35) % 360,
        }));
      }
      animationId = requestAnimationFrame(autoRotate);
    };

    animationId = requestAnimationFrame(autoRotate);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent): void => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent): void => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    setRotation((prev) => ({
      x: Math.max(-60, Math.min(60, prev.x - deltaY * 0.4)),
      y: (prev.y + deltaX * 0.4) % 360,
    }));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const [radius, setRadius] = useState<number>(160);
  const count = techStack.length;

  useEffect(() => {
    const handleResize = (): void => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 420) {
        setRadius(100);
      } else if (window.innerWidth < 640) {
        setRadius(130);
      } else {
        setRadius(175);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full bg-white border border-beige/90 rounded-3xl p-6 sm:p-10 shadow-soft relative overflow-hidden mb-12">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-beige/70 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-forest/5 border border-forest/15">
              <Cpu className="w-4 h-4 text-terracotta" />
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-forest">
              Interactive 3D Tech Cosmos
            </h3>
          </div>
          <p className="font-sans text-xs sm:text-sm text-ink/70">
            Drag to rotate the 3D sphere · Click any node to inspect specialization
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-beige text-xs font-mono font-bold text-terracotta shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Interactive 3D View</span>
          </span>
          {activeTech && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest text-white text-xs font-mono font-semibold shadow-2xs">
              <span>Focused: {activeTech}</span>
            </span>
          )}
        </div>
      </div>

      {/* 3D Sphere Interactive Viewport */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ perspective: 1000 }}
        className="relative h-[380px] sm:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden max-w-full"
      >
        {/* Core Glowing Orb */}
        <div
          className="absolute w-28 h-28 rounded-full bg-radial from-terracotta/20 via-forest/10 to-transparent blur-xl pointer-events-none"
          aria-hidden="true"
        />

        {/* 3D Rotating Container */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: isDragging ? 'none' : 'transform 0.05s linear',
          }}
          className="relative w-0 h-0 flex items-center justify-center"
        >
          {techStack.map((tech, i) => {
            // Fibonacci sphere distribution for uniform points on sphere
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const posX = radius * Math.cos(theta) * Math.sin(phi);
            const posY = radius * Math.sin(theta) * Math.sin(phi);
            const posZ = radius * Math.cos(phi);

            const isActive = activeTech === tech.name;

            return (
              <div
                key={tech.name}
                style={{
                  transform: `translate3d(${posX}px, ${posY}px, ${posZ}px) rotateY(${-rotation.y}deg) rotateX(${-rotation.x}deg)`,
                  transformStyle: 'preserve-3d',
                }}
                className="absolute"
              >
                <button
                  type="button"
                  onClick={(e): void => {
                    e.stopPropagation();
                    setActiveTech(tech.name);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all duration-300 shadow-soft cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-terracotta text-white scale-110 ring-2 ring-terracotta/40 shadow-soft-lg z-20'
                      : tech.category === 'AI/ML'
                      ? 'bg-[#24372F] text-white hover:bg-terracotta'
                      : tech.category === 'Backend'
                      ? 'bg-white text-forest border border-forest/30 hover:border-terracotta hover:text-terracotta'
                      : 'bg-cream text-forest border border-beige/90 hover:bg-white hover:border-forest'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      tech.category === 'AI/ML'
                        ? 'bg-terracotta'
                        : tech.category === 'Backend'
                        ? 'bg-forest-secondary'
                        : 'bg-forest'
                    }`}
                  />
                  <span>{tech.name}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend / Category Chips */}
      <div className="pt-4 border-t border-beige/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ink/70">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-bold text-forest uppercase tracking-wider">Stack Layers:</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span>AI / ML & NLP</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-forest-secondary" />
            <span>Backend & APIs</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-terracotta" />
            <span>Frontend & Mobile</span>
          </span>
        </div>

        <span className="text-[11px] text-ink/50">
          Scroll or drag with mouse to spin in 3D space
        </span>
      </div>
    </div>
  );
};
