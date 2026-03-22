import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';
import { Target, BarChart2, Zap, Brain } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Aligning project goals with business objectives through financial forecasting, market research, and KPI development."
    },
    {
      icon: BarChart2,
      title: "Data Analytics",
      description: "Transforming complex datasets into clear insights using SQL, Power BI, and Tableau to drive informed decision-making."
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Streamlining workflows, building robust SOPs, and optimizing supply chains to maximize productivity and minimize error."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/50 shadow-sm text-center"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight mb-8">
              About Me
            </h2>
            <div className="prose prose-lg text-slate-700 font-sans leading-relaxed mx-auto">
              <p className="text-lg md:text-xl">
                {PERSONAL_INFO.summary}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Learning Philosophy Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-purple-50 to-white backdrop-blur-md rounded-2xl p-8 border border-brand-100 shadow-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Brain size={120} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            <div className="p-4 bg-brand-100/50 rounded-full flex-shrink-0">
              <Brain className="text-brand-600 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading text-brand-900 mb-3">My Approach to Learning</h3>
              <p className="text-slate-700 leading-relaxed italic border-l-4 border-brand-300 pl-4 py-1">
                "{PERSONAL_INFO.learningPhilosophy}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
           {highlights.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.15 }}
               className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
             >
               <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:scale-110 transition-all duration-300 border border-slate-100">
                 <item.icon className="text-brand-600 w-7 h-7 group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{item.title}</h3>
               <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.description}</p>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default About;