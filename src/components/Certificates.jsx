import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/certificates';
import { Award, ExternalLink, Check, Copy, X, FileText, Image as ImageIcon } from 'lucide-react';

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
              {/* Actual Official Certificate Visual Image */}
              <div className="relative w-full aspect-[1.414/1] rounded-2xl overflow-hidden bg-white border border-neutral-200/90 dark:border-neutral-800 shadow-inner flex items-center justify-center">
                <img
                  src={cert.imageUrl}
                  alt={`${cert.title} Official Certificate`}
                  className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Card Meta & Actions Below Certificate */}
              <div className="pt-4 mt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-sm">
                  <Award className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1">
                    {cert.title}
                  </span>
                </div>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Official PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Certificate Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
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
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-y-auto flex flex-col z-10 p-5 sm:p-7 space-y-5"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-500 shrink-0" />
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 dark:text-white leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-neutral-500">Official Verified Cisco Credential</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Certificate Document */}
              <div className="relative w-full aspect-[1.414/1] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800 bg-white">
                <img
                  src={selectedCert.imageUrl}
                  alt={`${selectedCert.title} Official Certificate Full View`}
                  className="w-full h-full object-contain select-none"
                />
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => copyCertId(e, selectedCert.certId)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    {copiedId === selectedCert.certId ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Copied ID: {selectedCert.certId}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Certificate ID</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>View PNG Image</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

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
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
