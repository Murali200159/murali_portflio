import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Server,
  Layers,
  CheckSquare,
  BarChart3,
  Compass,
} from 'lucide-react';

interface ProjectSchematicProps {
  id: string;
  number: string;
  category: string;
}

export const ProjectSchematic: React.FC<ProjectSchematicProps> = ({ id, number, category }) => {
  // Project 01: EduProva LMS
  if (id === 'eduprova-platform') {
    return (
      <div className="w-full h-full min-h-[320px] bg-cream-surface/90 text-forest rounded-2xl p-6 sm:p-8 flex flex-col justify-between font-mono select-none relative overflow-hidden border border-beige shadow-sm group">
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-beige/80 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-secondary" />
            </span>
            <span className="text-forest font-bold tracking-wider uppercase">
              LMS PLATFORM // {number}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-forest-secondary">FULL STACK · AI POWERED</span>
        </div>

        <div className="my-6 space-y-3 text-xs relative z-10">
          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-forest" />
              <span className="font-semibold text-forest">01. REACT.JS PORTAL</span>
            </div>
            <span className="text-ink/60 text-[11px]">Auth · Attendance · Tasks</span>
          </motion.div>

          <div className="flex justify-center text-terracotta text-xs font-bold leading-none">
            ↕ REST API
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-3.5 rounded-xl bg-forest/8 border border-forest/25 flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Server className="w-4 h-4 text-forest-secondary" />
              <span className="font-bold text-forest">02. FASTAPI MICROSERVICES</span>
            </div>
            <span className="text-forest-secondary font-medium text-[11px]">Python Core · Business Logic</span>
          </motion.div>

          <div className="flex justify-center text-terracotta text-xs font-bold leading-none">
            ↕
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Database className="w-4 h-4 text-terracotta" />
              <span className="font-semibold text-forest">03. MONGODB STORAGE</span>
            </div>
            <span className="text-ink/60 text-[11px]">Optimized Student Collections</span>
          </motion.div>
        </div>

        <div className="pt-3 border-t border-beige/80 flex items-center justify-between text-[11px] text-forest-secondary font-medium relative z-10">
          <span>REACT · FASTAPI · MONGO</span>
          <span className="uppercase text-terracotta font-semibold tracking-wider">AI LEARNING SYSTEM</span>
        </div>
      </div>
    );
  }

  // Project 02: LLM Chatbot & Voice Assistant
  if (id === 'ai-chatbot-voice-assistant') {
    return (
      <div className="w-full h-full min-h-[320px] bg-cream-surface/90 text-forest rounded-2xl p-6 sm:p-8 flex flex-col justify-between font-mono select-none relative overflow-hidden border border-beige shadow-sm group">
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-beige/80 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
            </span>
            <span className="text-forest font-bold tracking-wider uppercase">
              RAG & VOICE PIPELINE // {number}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-terracotta">LANGCHAIN · LANGGRAPH</span>
        </div>

        <div className="my-6 space-y-3 text-xs relative z-10">
          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-forest-secondary" />
              <span className="font-semibold text-forest">01. SPEECH-TO-TEXT & NLP</span>
            </div>
            <span className="text-ink/60 text-[11px]">Audio Stream Ingestion</span>
          </motion.div>

          <div className="flex justify-center text-terracotta text-xs font-bold leading-none">
            ↓
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-3.5 rounded-xl bg-terracotta/10 border border-terracotta/30 flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-terracotta" />
              <span className="font-bold text-forest">02. RAG RETRIEVAL & LLM</span>
            </div>
            <span className="text-terracotta font-semibold text-[11px]">Context Graph · 30-40% Acc</span>
          </motion.div>

          <div className="flex justify-center text-terracotta text-xs font-bold leading-none">
            ↓
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Database className="w-4 h-4 text-forest" />
              <span className="font-semibold text-forest">03. FASTAPI BACKEND</span>
            </div>
            <span className="text-ink/60 text-[11px]">Low-Latency Synthesis</span>
          </motion.div>
        </div>

        <div className="pt-3 border-t border-beige/80 flex items-center justify-between text-[11px] text-forest-secondary font-medium relative z-10">
          <span>FASTAPI · PYTHON · LLM</span>
          <span className="uppercase text-terracotta font-semibold tracking-wider">CONVERSATIONAL AI</span>
        </div>
      </div>
    );
  }

  // Project 03: Task Management Application
  if (id === 'task-management-app') {
    return (
      <div className="w-full h-full min-h-[320px] bg-cream-surface/90 text-forest rounded-2xl p-6 sm:p-8 flex flex-col justify-between font-mono select-none relative overflow-hidden border border-beige shadow-sm group">
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-beige/80 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forest" />
            </span>
            <span className="text-forest font-bold tracking-wider uppercase">
              WORKFLOW ENGINE // {number}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-forest-secondary">REAL-TIME TASKS</span>
        </div>

        <div className="my-6 space-y-3 text-xs relative z-10">
          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <CheckSquare className="w-4 h-4 text-terracotta" />
              <span className="font-semibold text-forest">01. REACT DASHBOARD</span>
            </div>
            <span className="text-ink/60 text-[11px]">Task Boards & Filters</span>
          </motion.div>

          <div className="flex justify-center text-forest-secondary text-xs font-bold leading-none">
            ↕
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-3.5 rounded-xl bg-forest/8 border border-forest/25 flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Server className="w-4 h-4 text-forest" />
              <span className="font-bold text-forest">02. FASTAPI TASK ROUTING</span>
            </div>
            <span className="text-forest-secondary font-medium text-[11px]">Role RBAC & Audit Trails</span>
          </motion.div>

          <div className="flex justify-center text-forest-secondary text-xs font-bold leading-none">
            ↕
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-forest-secondary" />
              <span className="font-semibold text-forest">03. REAL-TIME DISPATCH</span>
            </div>
            <span className="text-ink/60 text-[11px]">Instant Status Synchronization</span>
          </motion.div>
        </div>

        <div className="pt-3 border-t border-beige/80 flex items-center justify-between text-[11px] text-forest-secondary font-medium relative z-10">
          <span>REACT.JS · FASTAPI</span>
          <span className="uppercase text-forest font-semibold tracking-wider">ENTERPRISE AUTOMATION</span>
        </div>
      </div>
    );
  }

  // Project 04: Web Service Classification
  if (id === 'web-service-classification') {
    return (
      <div className="w-full h-full min-h-[320px] bg-cream-surface/90 text-forest rounded-2xl p-6 sm:p-8 flex flex-col justify-between font-mono select-none relative overflow-hidden border border-beige shadow-sm group">
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-beige/80 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-secondary" />
            </span>
            <span className="text-forest font-bold tracking-wider uppercase">
              ML PIPELINE // {number}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-forest-secondary">SEMI-SUPERVISED QOS</span>
        </div>

        <div className="my-6 space-y-3 text-xs relative z-10">
          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-forest" />
              <span className="font-semibold text-forest">01. UNLABELLED QoS DATA</span>
            </div>
            <span className="text-ink/60 text-[11px]">Dynamic Thresholding</span>
          </motion.div>

          <div className="flex justify-center text-forest-secondary text-xs font-bold leading-none">
            ↓
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-3.5 rounded-xl bg-forest/8 border border-forest/25 flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Cpu className="w-4 h-4 text-forest-secondary" />
              <span className="font-bold text-forest">02. ENSEMBLE CLASSIFIERS</span>
            </div>
            <span className="text-forest-secondary font-medium text-[11px]">CatBoost · XGBoost · RF</span>
          </motion.div>

          <div className="flex justify-center text-forest-secondary text-xs font-bold leading-none">
            ↓
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <BarChart3 className="w-4 h-4 text-terracotta" />
              <span className="font-semibold text-forest">03. QUALITY CLASSIFICATION</span>
            </div>
            <span className="text-ink/60 text-[11px]">Latency & Throughput Bounds</span>
          </motion.div>
        </div>

        <div className="pt-3 border-t border-beige/80 flex items-center justify-between text-[11px] text-forest-secondary font-medium relative z-10">
          <span>SCIKIT-LEARN · PYTHON</span>
          <span className="uppercase text-forest font-semibold tracking-wider">SEMI-SUPERVISED AI</span>
        </div>
      </div>
    );
  }

  // Project 05: NRK Travels
  if (id === 'nrk-travels') {
    return (
      <div className="w-full h-full min-h-[320px] bg-cream-surface/90 text-forest rounded-2xl p-6 sm:p-8 flex flex-col justify-between font-mono select-none relative overflow-hidden border border-beige shadow-sm group">
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-beige/80 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta" />
            </span>
            <span className="text-forest font-bold tracking-wider uppercase">
              TRAVEL & CAB // {number}
            </span>
          </div>
          <span className="text-[11px] font-semibold text-terracotta">FREELANCE CLIENT</span>
        </div>

        <div className="my-6 space-y-3 text-xs relative z-10">
          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-forest" />
              <span className="font-semibold text-forest">01. EDITORIAL UI</span>
            </div>
            <span className="text-ink/60 text-[11px]">React.js · Responsive CSS</span>
          </motion.div>

          <div className="flex justify-center text-terracotta text-xs font-bold leading-none">
            ↕
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-3.5 rounded-xl bg-terracotta/10 border border-terracotta/30 flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-terracotta" />
              <span className="font-bold text-forest">02. TOUR PACKAGES</span>
            </div>
            <span className="text-terracotta font-medium text-[11px]">Dynamic Itineraries</span>
          </motion.div>

          <div className="flex justify-center text-terracotta text-xs font-bold leading-none">
            ↕
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <Smartphone className="w-4 h-4 text-forest-secondary" />
              <span className="font-semibold text-forest">03. INSTANT BOOKING</span>
            </div>
            <span className="text-ink/60 text-[11px]">Mobile Optimized Booking</span>
          </motion.div>
        </div>

        <div className="pt-3 border-t border-beige/80 flex items-center justify-between text-[11px] text-forest-secondary font-medium relative z-10">
          <span>REACT.JS · CSS</span>
          <span className="uppercase text-terracotta font-semibold tracking-wider">FREELANCE & PRODUCTION</span>
        </div>
      </div>
    );
  }

  // Project 06: Seedha Properties (Real Estate Mobile)
  return (
    <div className="w-full h-full min-h-[320px] bg-cream-surface/90 text-forest rounded-2xl p-6 sm:p-8 flex flex-col justify-between font-mono select-none relative overflow-hidden border border-beige shadow-sm group">
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="flex items-center justify-between pb-3 border-b border-beige/80 text-xs relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-secondary" />
          </span>
          <span className="text-forest font-bold tracking-wider uppercase">
            MOBILE ARCHITECTURE // {number}
          </span>
        </div>
        <span className="text-[11px] font-semibold text-forest-secondary">REACT NATIVE & NESTJS</span>
      </div>

      <div className="my-6 space-y-3 text-xs relative z-10">
        <motion.div
          whileHover={{ x: 4 }}
          className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
        >
          <div className="flex items-center gap-2.5">
            <Smartphone className="w-4 h-4 text-terracotta" />
            <span className="font-semibold text-forest">01. REACT NATIVE CLIENT</span>
          </div>
          <span className="text-ink/60 text-[11px]">Property Search & Rent UI</span>
        </motion.div>

        <div className="flex justify-center text-forest-secondary text-xs font-bold leading-none">
          ↕ HTTP / WebSocket
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-3.5 rounded-xl bg-forest/8 border border-forest/25 flex items-center justify-between shadow-2xs"
        >
          <div className="flex items-center gap-2.5">
            <Server className="w-4 h-4 text-forest" />
            <span className="font-bold text-forest">02. NESTJS BACKEND</span>
          </div>
          <span className="text-forest-secondary font-medium text-[11px]">Listing & Management APIs</span>
        </motion.div>

        <div className="flex justify-center text-forest-secondary text-xs font-bold leading-none">
          ↕
        </div>

        <motion.div
          whileHover={{ x: 4 }}
          className="p-3 rounded-xl bg-white border border-beige flex items-center justify-between shadow-2xs"
        >
          <div className="flex items-center gap-2.5">
            <Database className="w-4 h-4 text-forest-secondary" />
            <span className="font-semibold text-forest">03. PROPERTY DATA ENGINE</span>
          </div>
          <span className="text-ink/60 text-[11px]">Listings, Inquiries & Leases</span>
        </motion.div>
      </div>

      <div className="pt-3 border-t border-beige/80 flex items-center justify-between text-[11px] text-forest-secondary font-medium relative z-10">
        <span>REACT NATIVE · NESTJS</span>
        <span className="uppercase text-forest font-semibold tracking-wider">{category}</span>
      </div>
    </div>
  );
};
