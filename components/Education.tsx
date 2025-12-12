import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Education</h2>
          <p className="mt-4 text-lg text-slate-600">Academic background and qualifications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-md overflow-hidden shadow-lg rounded-2xl flex flex-col h-full hover:shadow-2xl transition-all duration-300 border border-white/50"
            >
              <div className="bg-gradient-to-r from-brand-500 to-purple-500 h-2"></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl mb-6 mx-auto transform rotate-3 hover:rotate-6 transition-transform">
                  <GraduationCap className="text-brand-600 w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold font-heading text-slate-900 text-center mb-3">{edu.institution}</h3>
                <div className="flex items-center justify-center text-slate-500 text-sm mb-6 font-medium">
                  <MapPin size={16} className="mr-1" />
                  {edu.location}
                </div>
                
                <div className="border-t border-slate-100 mb-6"></div>
                
                <p className="text-brand-700 font-bold text-center mb-2 text-lg">{edu.degree}</p>
                <p className="text-slate-500 text-center text-sm mb-5 font-medium">{edu.date}</p>
                
                {edu.gpa && (
                  <div className="mt-auto text-center">
                    <span className="inline-block bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full font-bold border border-green-100 tracking-wide">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                )}
                
                {edu.details && (
                  <div className="mt-3 text-center text-xs text-slate-400">
                    {edu.details.map((d, i) => <div key={i}>{d}</div>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;