import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastDrawTime = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.floor(parent.clientWidth * dpr);
        canvas.height = Math.floor(parent.clientHeight * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    const drawHexagon = (x: number, y: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (2 * Math.PI / 6) * i;
        const xPos = x + r * Math.cos(angle);
        const yPos = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(xPos, yPos);
        else ctx.lineTo(xPos, yPos);
      }
      ctx.closePath();
    };

    const draw = (timestamp: number) => {
      if (!canvas || !ctx) return;

      // Cap rendering to ~30fps to reduce CPU/GPU load.
      if (timestamp - lastDrawTime < 33) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastDrawTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.0005; // Speed of the wave
      const r = 40; // Larger cells means fewer draw calls
      const a = 2 * Math.PI / 6;
      const w = r * Math.sqrt(3); // Horizontal distance
      const h = r * 2; // Vertical height
      
      // Grid spacing
      const xSpacing = w;
      const ySpacing = h * 0.75;

      const rows = Math.ceil(canvas.height / ySpacing) + 2;
      const cols = Math.ceil(canvas.width / xSpacing) + 2;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          let x = col * xSpacing;
          let y = row * ySpacing;

          // Offset odd rows
          if (row % 2 !== 0) {
            x += xSpacing / 2;
          }

          // Diagonal Wave Calculation
          // (x + y) creates a diagonal gradient. 
          // We divide by a larger number to spread the wave out.
          const diagonalValue = x + y; 
          const wave = Math.sin(diagonalValue * 0.002 - time);
          
          // Map wave (-1 to 1) to opacity (0.05 to 0.3)
          // We want it mostly subtle with peaks of brightness
          const normalizedWave = (wave + 1) / 2; // 0 to 1
          
          // Monochromatic Purple Styling
          const opacity = 0.03 + (normalizedWave * 0.15);
          
          ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`; // Brand-500 equivalent
          ctx.lineWidth = 1;
          
          drawHexagon(x, y, r);
          ctx.stroke();

          // Occasionally fill hexagons at the peak of the wave for a "glimmer" effect
          if (normalizedWave > 0.92) {
            ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.5})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50 pt-28">
      {/* Dynamic Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      {/* Subtle overlay to fade content at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/10 to-slate-50/90 z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Glass Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-brand-100 text-brand-700 text-sm font-semibold mb-8 shadow-sm">
            <span className="mr-2">📍</span> {PERSONAL_INFO.location}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-slate-900 tracking-tight mb-6 drop-shadow-sm">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800">{PERSONAL_INFO.name}</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-slate-700 font-medium font-heading mb-12">
            {PERSONAL_INFO.title}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold font-heading rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30 transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a 
              href="/Resumes.pdf"
              download="Rutvi_Shah_Resume.pdf"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold font-heading rounded-xl text-slate-700 bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-white/60 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;