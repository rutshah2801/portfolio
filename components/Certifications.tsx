import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { CertificationItem } from '../types';

const parseDate = (dateValue: string): Date | null => {
  const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
  const parsed = isoDatePattern.test(dateValue)
    ? new Date(`${dateValue}T00:00:00Z`)
    : new Date(dateValue);

  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatMonthYear = (isoDate: string): string => {
  const parsedDate = parseDate(isoDate);
  if (!parsedDate) {
    return 'Date TBD';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsedDate);
};

const getStatusPill = (status?: CertificationItem['status']) => {
  if (status === 'in-progress') {
    return {
      label: 'In Progress',
      className: 'bg-amber-50 text-amber-700 border border-amber-200',
    };
  }

  if (status === 'expected') {
    return {
      label: 'Expected',
      className: 'bg-purple-50 text-purple-700 border border-purple-200',
    };
  }

  return {
    label: 'Completed',
    className: 'bg-green-50 text-green-700 border border-green-200',
  };
};

const Certifications: React.FC = () => {
  const sortedCertifications = [...CERTIFICATIONS].sort((a, b) => {
    const dateA = parseDate(a.completedAt)?.getTime() ?? 0;
    const dateB = parseDate(b.completedAt)?.getTime() ?? 0;
    return dateB - dateA;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">Certifications</h2>
          <p className="mt-4 text-lg text-slate-600">Professional courses and credentials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sortedCertifications.map((cert, index) => {
            const statusPill = getStatusPill(cert.status);
            return (
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
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-brand-700 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-brand-600 font-semibold mb-2">{cert.issuer}</p>
                <p className={`text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2 ${statusPill.className}`}>
                  {statusPill.label}
                </p>
                <p className="text-slate-400 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full inline-block">
                  {formatMonthYear(cert.completedAt)}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
