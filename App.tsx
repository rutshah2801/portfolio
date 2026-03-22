import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LearningJourney from './components/LearningJourney';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Goals from './components/Goals';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-hex-pattern font-sans text-slate-900 relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LearningJourney />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Goals />
      </main>
      <Contact />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-brand-600/70 backdrop-blur-md border border-white/30 text-white rounded-full shadow-lg hover:bg-brand-600/90 transition-all hover:shadow-brand-500/50 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;