import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Technical & Professional Skills</h2>
          <p className="mt-4 text-lg text-slate-600">Tools and methodologies I use to drive results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-6 border border-white/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-6 pb-3 border-b border-slate-100">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;