import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Configure worker to load from public root
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

// Cache rendered image data URLs across component re-renders
const renderedCache = new Map();

export default function PdfViewer({
  url,
  className = '',
  scale = 2,
  alt = 'Official Certificate',
}) {
  const cacheKey = `${url}@${scale}`;
  const [dataUrl, setDataUrl] = useState(() => renderedCache.get(cacheKey) || null);
  const [loading, setLoading] = useState(!renderedCache.has(cacheKey));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (renderedCache.has(cacheKey)) {
      setDataUrl(renderedCache.get(cacheKey));
      setLoading(false);
      return;
    }

    let isCancelled = false;
    let renderTask = null;

    async function renderPdf() {
      try {
        setLoading(true);
        setError(null);

        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        if (isCancelled) return;

        const page = await pdf.getPage(1);
        if (isCancelled) return;

        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        renderTask = page.render({
          canvasContext: context,
          viewport: viewport,
        });

        await renderTask.promise;
        if (isCancelled) return;

        const imageUri = canvas.toDataURL('image/png');
        renderedCache.set(cacheKey, imageUri);
        setDataUrl(imageUri);
        setLoading(false);
      } catch (err) {
        if (!isCancelled) {
          console.error('Error rendering PDF certificate:', err);
          setError(err.message || 'Failed to render certificate preview.');
          setLoading(false);
        }
      }
    }

    renderPdf();

    return () => {
      isCancelled = true;
      if (renderTask) {
        try {
          renderTask.cancel();
        } catch (_) {}
      }
    };
  }, [url, scale, cacheKey]);

  return (
    <div
      className={`relative w-full aspect-[1.414/1] bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-neutral-200/90 dark:border-neutral-800 shadow-inner ${className}`}
    >
      {loading && !dataUrl && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-800 text-neutral-400 space-y-2 p-4">
          <div className="w-8 h-8 border-2 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Loading official certificate...
          </span>
        </div>
      )}

      {error && !dataUrl && (
        <div className="p-4 text-xs text-red-500 text-center">
          <p>Could not preview certificate document.</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 font-semibold text-indigo-600 underline"
          >
            Open PDF directly
          </a>
        </div>
      )}

      {dataUrl && (
        <img
          src={dataUrl}
          alt={alt}
          className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-[1.01]"
          loading="lazy"
        />
      )}
    </div>
  );
}
