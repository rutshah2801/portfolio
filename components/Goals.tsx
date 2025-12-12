import React from 'react';
import { GOALS } from '../constants';
import { motion } from 'framer-motion';
import { Target, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

const Goals: React.FC = () => {
  return (
    <section id="goals" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Goals & Aspirations</h2>
          <p className="mt-4 text-lg text-slate-600">The roadmap for my future growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Short Term Goal */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-100 rounded-xl text-brand-600">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">Short-Term (1-2 Years)</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              {GOALS.shortTerm}
            </p>
          </motion.div>

          {/* Long Term Goal */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10">
               <Rocket size={150} />
             </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-white/20 rounded-xl text-white backdrop-blur-sm">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">Long-Term Vision (5+ Years)</h3>
            </div>
            <p className="text-brand-50 leading-relaxed text-lg relative z-10">
              {GOALS.longTerm}
            </p>
          </motion.div>
        </div>

        {/* Developing Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <TrendingUp className="text-brand-600" />
            <h3 className="text-2xl font-bold font-heading text-slate-900">Skills I'm Actively Developing</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOALS.developingSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-slate-100">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-slate-700 font-medium text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Goals;