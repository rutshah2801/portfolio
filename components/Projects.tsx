import React from 'react';
import { PROFESSIONAL_PROJECTS, ACADEMIC_PROJECTS, CERTIFICATIONS } from '../constants';
import { Award, Briefcase, ExternalLink, GraduationCap, Quote, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-full flex flex-col"
  >
    <div className="flex flex-col md:flex-row items-start relative z-10 flex-1">
      <div className="p-4 bg-brand-100/50 rounded-2xl mr-6 mb-6 md:mb-0 hidden md:block">
        {project.category === 'academic' ? (
          <GraduationCap className="text-brand-600 w-8 h-8" />
        ) : (
          <Briefcase className="text-brand-600 w-8 h-8" />
        )}
      </div>
      <div className="flex-1 w-full">
        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-brand-100/50 rounded-xl md:hidden">
                {project.category === 'academic' ? <GraduationCap size={20} className="text-brand-600" /> : <Briefcase size={20} className="text-brand-600" />}
             </div>
             <div>
               <h3 className="text-xl md:text-2xl font-bold font-heading text-slate-900">{project.title}</h3>
               {project.course && <span className="text-brand-600 font-medium text-sm block mt-1">{project.course}</span>}
             </div>
           </div>
        </div>
        
        <ul className="space-y-3 mb-6 list-disc pl-5">
          {project.description.map((desc, i) => (
            <li key={i} className="text-slate-600 leading-relaxed text-sm md:text-base marker:text-brand-500">{desc}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool, i) => (
            <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-white border border-slate-200 text-brand-700 shadow-sm">
              {tool}
            </span>
          ))}
        </div>

        {/* Reflection Section */}
        {project.reflection && (
           <div className="bg-brand-50/50 rounded-xl p-6 border border-brand-100 mt-auto">
             <div className="flex gap-3">
               <Quote className="text-brand-400 flex-shrink-0 fill-current" size={20} />
               <p className="text-slate-700 text-sm italic leading-relaxed">
                 {project.reflection}
               </p>
             </div>
           </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Project Portfolio</h2>
          <p className="mt-4 text-lg text-slate-600">Bridging academic theory and professional practice.</p>
        </div>

        {/* Academic Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-500 rounded-full"></div>
            <h3 className="text-2xl font-bold font-heading text-slate-800">Academic Projects</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ACADEMIC_PROJECTS.map((project, index) => (
              <ProjectCard key={`academic-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Professional Projects */}
        <div className="mb-24">
           <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 bg-brand-500 rounded-full"></div>
            <h3 className="text-2xl font-bold font-heading text-slate-800">Professional Projects</h3>
          </div>
          <div className="grid grid-cols-1 gap-10">
            {PROFESSIONAL_PROJECTS.map((project, index) => (
              <ProjectCard key={`prof-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 font-heading">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.a 
                key={index}
                href={cert.link}
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="block bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm flex flex-col items-center text-center group hover:border-brand-200 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} className="text-slate-400" />
                </div>

                <div className="p-4 bg-yellow-50 rounded-full mb-6 group-hover:bg-yellow-100 transition-colors">
                  <Award className="text-yellow-500 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">{cert.name}</h4>
                <p className="text-brand-600 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-slate-400 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full inline-block">{cert.date}</p>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;