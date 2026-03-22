import React, { useState } from 'react';
import { PROFESSIONAL_PROJECTS, ACADEMIC_PROJECTS } from '../constants';
import { Briefcase, ExternalLink, GraduationCap, Quote, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';

type ActiveProjectPdf = {
  path: string;
  label: string;
};

type PreviewConfig = {
  url: string;
  canEmbedInIframe: boolean;
  isPowerPoint: boolean;
  fallbackMessage?: string;
};

const resolvePublicAssetPath = (assetPath: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedAsset = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${normalizedBase}${normalizedAsset}`;
};

const getPreviewConfig = (assetPath: string): PreviewConfig => {
  const resolvedPath = resolvePublicAssetPath(assetPath);
  const isPowerPoint = /\.(ppt|pptx)$/i.test(assetPath);

  if (!isPowerPoint) {
    return {
      url: resolvedPath,
      canEmbedInIframe: true,
      isPowerPoint: false,
    };
  }

  const host = window.location.hostname;
  const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host === '::1';

  if (isLocalHost) {
    return {
      url: resolvedPath,
      canEmbedInIframe: false,
      isPowerPoint: true,
      fallbackMessage: 'PowerPoint preview is not available in the popup while running locally. Open the file in a new tab or download it.',
    };
  }

  const absoluteUrl = new URL(resolvedPath, window.location.origin).toString();
  return {
    url: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`,
    canEmbedInIframe: true,
    isPowerPoint: true,
  };
};

const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  onOpenPdf: (pdfAsset: ActiveProjectPdf) => void;
}> = ({ project, index, onOpenPdf }) => (
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

        {project.pdfAssets && project.pdfAssets.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {project.pdfAssets.map((asset, assetIndex) => (
              <button
                key={assetIndex}
                type="button"
                onClick={() => onOpenPdf({ path: asset.path, label: asset.label })}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
              >
                <ExternalLink size={16} className="mr-2" />
                {asset.label}
              </button>
            ))}
          </div>
        )}

        {(!project.pdfAssets || project.pdfAssets.length === 0) && project.pdfAsset && (
          <button
            type="button"
            onClick={() => onOpenPdf({ path: project.pdfAsset!, label: 'Project PDF' })}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors w-fit"
          >
            <ExternalLink size={16} className="mr-2" />
            View PDF
          </button>
        )}

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
  const [activePdfAsset, setActivePdfAsset] = useState<ActiveProjectPdf | null>(null);
  const activePreviewConfig = activePdfAsset ? getPreviewConfig(activePdfAsset.path) : null;

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
              <ProjectCard
                key={`academic-${index}`}
                project={project}
                index={index}
                onOpenPdf={setActivePdfAsset}
              />
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
              <ProjectCard
                key={`prof-${index}`}
                project={project}
                index={index}
                onOpenPdf={setActivePdfAsset}
              />
            ))}
          </div>
        </div>

      </div>

      {activePdfAsset && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] shadow-2xl overflow-hidden border border-slate-200">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
              <h3 className="font-heading text-lg font-bold text-slate-900">{activePdfAsset.label}</h3>
              <button
                type="button"
                onClick={() => setActivePdfAsset(null)}
                className="p-2 rounded-md text-slate-600 hover:bg-slate-200 transition-colors"
                aria-label="Close PDF preview"
              >
                <X size={18} />
              </button>
            </div>
            {activePreviewConfig?.canEmbedInIframe ? (
              <iframe
                src={activePreviewConfig.url}
                title="Project Document Preview"
                className="w-full h-[calc(85vh-57px)]"
              />
            ) : (
              <div className="h-[calc(85vh-57px)] flex flex-col items-center justify-center text-center p-6 bg-slate-50">
                <p className="text-slate-700 max-w-xl leading-relaxed mb-4">
                  {activePreviewConfig?.fallbackMessage || 'This file type cannot be previewed in the popup. Open it in a new tab.'}
                </p>
                <a
                  href={activePreviewConfig?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
                >
                  {activePreviewConfig?.isPowerPoint ? 'Open PowerPoint File' : 'Open File'}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;