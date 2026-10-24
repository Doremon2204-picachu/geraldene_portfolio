import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/certificates';
import { Award, ShieldCheck, ExternalLink, Calendar, Check, Copy, UserCheck, X, Maximize2, FileText } from 'lucide-react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const copyCertId = (e, id) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="certificates" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Certifications & Technical Training.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Official credentials awarded to <strong className="text-neutral-900 dark:text-white font-semibold">Geraldene Cabiles</strong> by the{' '}
            <strong className="text-neutral-900 dark:text-white font-semibold">Cisco Networking Academy</strong> through the{' '}
            <strong className="text-neutral-900 dark:text-white font-semibold">DICT-ITU DTC Initiative</strong>.
          </p>
        </div>

        {/* Real Visual Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 p-5 sm:p-7 shadow-md hover:shadow-2xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Actual Certificate Document Visual Paper */}
              <div className="relative aspect-[1.42/1] w-full rounded-2xl bg-[#fdfdfd] text-neutral-800 p-5 sm:p-7 border border-neutral-200/90 shadow-inner flex flex-col justify-between overflow-hidden select-none transition-transform duration-300 group-hover:scale-[1.01]">
                
                {/* Subtle wavy vector watermark in background */}
                <div className="absolute top-0 right-0 w-44 h-44 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-indigo-900 w-full h-full">
                    <path d="M0,0 Q50,80 100,20 Q60,100 100,100" strokeWidth="0.8" />
                    <path d="M10,0 Q60,90 100,30 Q70,100 100,100" strokeWidth="0.8" />
                    <path d="M20,0 Q70,100 100,40 Q80,100 100,100" strokeWidth="0.8" />
                  </svg>
                </div>

                {/* Certificate Top Header */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="leading-tight text-left">
                    <span className="text-[10px] sm:text-xs font-bold tracking-tight text-neutral-900 block">Cisco</span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-tight text-neutral-900 block">Networking</span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-tight text-neutral-900 block">Academy</span>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Verified Credential</span>
                  </div>
                </div>

                {/* Certificate Center Body */}
                <div className="relative z-10 text-center my-auto py-2">
                  <div className="text-[10px] sm:text-xs text-neutral-500 font-serif italic">
                    This certificate is awarded to
                  </div>
                  
                  {/* Recipient Name in Bold Blue */}
                  <div className="text-xl sm:text-2xl font-black text-[#005088] tracking-tight mt-1 font-sans">
                    Geraldene Cabiles
                  </div>
                  
                  <div className="text-[10px] sm:text-xs text-neutral-500 mt-1">
                    for successfully completing
                  </div>
                  
                  {/* Course Title in Bold Dark Blue */}
                  <div className="text-base sm:text-xl font-extrabold text-[#002855] tracking-tight mt-0.5">
                    {cert.title}
                  </div>
                  
                  <div className="text-[9px] sm:text-[11px] text-neutral-500 max-w-sm mx-auto mt-1 leading-snug">
                    offered by <strong className="text-neutral-700 font-semibold">{cert.initiative}</strong> through the Cisco Networking Academy program.
                  </div>
                </div>

                {/* Certificate Bottom Row: Signature, Date, Cert ID */}
                <div className="relative z-10 pt-2 border-t border-neutral-200/80">
                  <div className="flex items-end justify-between text-[9px] sm:text-[10px]">
                    <div className="text-left">
                      <div className="font-serif italic text-xs sm:text-sm text-neutral-900 font-bold border-b border-neutral-300 pb-0.5 inline-block">
                        {cert.instructor}
                      </div>
                      <div className="text-neutral-500 text-[8px] sm:text-[9px] mt-0.5">
                        Instructor · {cert.initiative}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-neutral-900 text-[10px] sm:text-xs">{cert.date}</div>
                      <div className="text-neutral-500 text-[8px] sm:text-[9px]">Completion Date</div>
                    </div>
                  </div>

                  {/* Cert ID Line */}
                  <div className="mt-2 pt-1 border-t border-neutral-100 flex items-center justify-between text-[8px] sm:text-[9px] text-neutral-400 font-mono">
                    <span className="truncate max-w-[220px]">Cert ID: {cert.certId}</span>
                    <span className="text-indigo-600 font-medium">Click to inspect</span>
                  </div>
                </div>

              </div>

              {/* Card Meta & Actions Below Certificate */}
              <div className="pt-4 mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                  <Award className="w-4 h-4 text-indigo-500" />
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200">{cert.title}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => copyCertId(e, cert.certId)}
                    className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    title="Copy Certificate ID"
                  >
                    {copiedId === cert.certId ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Official PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Certificate Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col z-10 p-6 sm:p-8 space-y-6"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-500" />
                  <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 dark:text-white">
                    {selectedCert.title} — Official Certificate
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Certificate Document */}
              <div className="relative aspect-[1.42/1] w-full rounded-2xl bg-[#fafafa] text-neutral-800 p-8 sm:p-12 border-2 border-neutral-200 shadow-xl flex flex-col justify-between overflow-hidden select-none">
                
                {/* Wavy lines decorative watermark */}
                <div className="absolute top-0 right-0 w-72 h-72 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-indigo-900 w-full h-full">
                    <path d="M0,0 Q50,80 100,20 Q60,100 100,100" strokeWidth="0.8" />
                    <path d="M10,0 Q60,90 100,30 Q70,100 100,100" strokeWidth="0.8" />
                    <path d="M20,0 Q70,100 100,40 Q80,100 100,100" strokeWidth="0.8" />
                  </svg>
                </div>

                {/* Top Cisco Brand */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="leading-tight text-left">
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-neutral-900 block">Cisco</span>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-neutral-900 block">Networking</span>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-neutral-900 block">Academy</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Verified Certificate</span>
                  </div>
                </div>

                {/* Certificate Core Text */}
                <div className="relative z-10 text-center my-auto py-4 space-y-2">
                  <div className="text-xs sm:text-sm text-neutral-500 font-serif italic">
                    This certificate is awarded to
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#005088] tracking-tight font-sans">
                    Geraldene Cabiles
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500 pt-1">
                    for successfully completing
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#002855] tracking-tight">
                    {selectedCert.title}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed pt-1">
                    offered by <strong className="text-neutral-900 font-semibold">{selectedCert.initiative}</strong> through the Cisco Networking Academy program.
                  </div>
                </div>

                {/* Bottom Signature & Verification Info */}
                <div className="relative z-10 pt-4 border-t border-neutral-300">
                  <div className="flex items-end justify-between">
                    <div className="text-left">
                      <div className="font-serif italic text-base sm:text-lg text-neutral-900 font-bold border-b border-neutral-400 pb-0.5 inline-block">
                        {selectedCert.instructor}
                      </div>
                      <div className="text-neutral-500 text-xs mt-0.5">
                        Instructor · {selectedCert.initiative}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-neutral-900 text-sm sm:text-base">{selectedCert.date}</div>
                      <div className="text-neutral-500 text-xs">Completion Date</div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-neutral-200 text-center text-xs font-mono text-neutral-500">
                    Cert ID: {selectedCert.certId}
                  </div>
                </div>

              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  onClick={(e) => copyCertId(e, selectedCert.certId)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {copiedId === selectedCert.certId ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Copied Certificate ID!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Certificate ID</span>
                    </>
                  )}
                </button>

                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Official Signed PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
