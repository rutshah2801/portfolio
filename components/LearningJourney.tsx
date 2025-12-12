import React from 'react';
import { LEARNING_JOURNEY } from '../constants';
import { motion } from 'framer-motion';

const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Learning Journey</h2>
          <p className="mt-4 text-lg text-slate-600">Reflection on my evolution from finance to project management.</p>
        </div>

        {/* Narrative Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/60 shadow-sm mb-20"
        >
          <h3 className="text-3xl font-bold font-heading text-slate-900 mb-8 text-center">{LEARNING_JOURNEY.title}</h3>
          <div className="prose prose-lg text-slate-700 font-sans leading-relaxed space-y-6">
            {LEARNING_JOURNEY.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Visual Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 rounded-full"></div>

          <div className="space-y-12">
            {LEARNING_JOURNEY.milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}
              >
                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-500 z-10 items-center justify-center shadow-md">
                   <milestone.icon size={20} className="text-brand-600" />
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full md:w-[calc(50%-3rem)]">
                  <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <div className="md:hidden w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
                      <milestone.icon size={24} />
                    </div>
                    <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h4 className="text-xl font-bold font-heading text-slate-900 mb-1">{milestone.title}</h4>
                    <p className="text-brand-600 font-semibold text-sm mb-3">{milestone.subtitle}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;