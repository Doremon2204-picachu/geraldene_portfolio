import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { Award, ShieldCheck, ExternalLink, Calendar, Check, Copy, UserCheck, Sparkles, FileText } from 'lucide-react';

export default function Certificates() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCertId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="certificates" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
            <span>Official Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Certifications & Technical Training.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Professional certifications in Cybersecurity, Network Defense, and Infrastructure Configuration completed through the{' '}
            <strong className="text-neutral-900 dark:text-white font-semibold">Cisco Networking Academy</strong> program under the{' '}
            <strong className="text-neutral-900 dark:text-white font-semibold">DICT-ITU DTC Initiative</strong>.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header Banner badge */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold tracking-tight text-neutral-700 dark:text-neutral-300">
                      Cisco Networking Academy
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
                    <Check className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Certificate Title */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Offered by <span className="font-semibold text-neutral-700 dark:text-neutral-300">{cert.initiative}</span>
                  </p>
                </div>

                {/* Details Meta */}
                <div className="py-2 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>Instructor: <strong className="font-semibold text-neutral-800 dark:text-neutral-200">{cert.instructor}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>Completed: <strong className="font-semibold text-neutral-800 dark:text-neutral-200">{cert.date}</strong></span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: Cert ID & PDF View Action */}
              <div className="pt-5 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                
                {/* Cert ID copy row */}
                <div className="flex items-center justify-between text-[11px] font-mono p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/50 dark:border-neutral-700/50">
                  <span className="text-neutral-400 truncate max-w-[200px]" title={cert.certId}>
                    ID: {cert.certId.slice(0, 16)}...
                  </span>
                  <button
                    onClick={() => copyCertId(cert.certId)}
                    className="p-1 hover:text-indigo-600 dark:hover:text-indigo-400 text-neutral-400 transition-colors cursor-pointer"
                    title="Copy full Certificate ID"
                  >
                    {copiedId === cert.certId ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* View Official Certificate Link */}
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-xs cursor-pointer group/btn"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Official Certificate PDF</span>
                  <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
