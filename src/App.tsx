import React from 'react';
import { SkipLink } from './components/layout/SkipLink';
import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Credentials } from './components/sections/Credentials';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col selection:bg-terracotta/20 selection:text-terracotta-dark relative">
      <CustomCursor />
      <ScrollProgress />
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Credentials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
