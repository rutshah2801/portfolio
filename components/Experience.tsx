import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Work Experience</h2>
          <p className="mt-4 text-lg text-slate-600">A timeline of my professional journey & key learnings.</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-brand-200/50"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-[9px] md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-gradient-to-r from-brand-500 to-purple-500 shadow-lg z-10 mt-6 md:mt-0"></div>

                {/* Content Spacer for Alignment */}
                <div className="hidden md:block w-1/2"></div>

                {/* Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col mb-4">
                        <h3 className="text-xl font-bold font-heading text-slate-900">{job.role}</h3>
                        <p className="text-brand-600 font-semibold text-lg">{job.company}</p>
                      
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="flex items-center bg-slate-50 px-3 py-1 rounded-full border border-slate-100"><Calendar size={14} className="mr-1.5 text-brand-500" /> {job.date}</span>
                        <span className="flex items-center bg-slate-50 px-3 py-1 rounded-full border border-slate-100"><MapPin size={14} className="mr-1.5 text-brand-500" /> {job.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed group">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-brand-300 rounded-full flex-shrink-0 group-hover:bg-brand-500 transition-colors"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Reflection Box */}
                    {job.reflection && (
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-5 mt-4">
                        <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-sm uppercase tracking-wide">
                          <Lightbulb size={16} /> Key Learning
                        </div>
                        <p className="text-slate-700 text-sm italic leading-relaxed">
                          "{job.reflection}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;