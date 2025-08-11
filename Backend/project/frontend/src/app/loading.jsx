import React from "react";

// Single-file React component for an e‑commerce preloader using Tailwind CSS
// Drop this component into any React/Next.js project that already has Tailwind set up.

export default function EcommercePreloader({ message = "Loading your shop..." }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Preloader card */}
      <div className="flex flex-col items-center gap-6 p-6 rounded-2xl shadow-xl bg-white/90 backdrop-blur-sm">
        {/* Logo / Icon with bounce */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center ring-1 ring-gray-100 shadow-md bg-gradient-to-br from-pink-50 to-amber-50 transform-gpu"
          aria-hidden="true"
        >
          <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full transform-gpu animate-bounce">
            {/* Simple shopping bag SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-pink-600"
            >
              <path d="M6 2h12l1 2h-14L6 2z" opacity=".15" />
              <path d="M7 7v11a2 2 0 002 2h6a2 2 0 002-2V7H7z" />
              <path d="M9 7V5a3 3 0 116 0v2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Animated dots + text (accessible) */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-end gap-2 h-6" aria-hidden>
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 inline-block animate-bounceDot" style={{ animationDelay: '0ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-bounceDot" style={{ animationDelay: '120ms' }} />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-bounceDot" style={{ animationDelay: '240ms' }} />
          </div>

          <p className="text-sm text-gray-600" aria-live="polite">{message}</p>
        </div>

        {/* Skeleton product thumbnails shimmer */}
        <div className="w-64 grid grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-20 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-200/80 animate-shimmer" style={{ borderRadius: '0.5rem' }} />
            </div>
          ))}
        </div>

        {/* Progress bar (indeterminate) */}
        <div className="w-64 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-pink-500 via-amber-400 to-emerald-400 transform-gpu animate-progress" />
        </div>
      </div>

      {/* Extra styles (Tailwind + a few custom keyframes). If you include these styles in your global CSS,
          you can remove this style tag and place the keyframes in tailwind.config.js or global stylesheet. */}
      <style>{`
        /* Dot bounce (staggered by inline style animation-delay) */
        @keyframes bounceDot {
          0%, 100% { transform: translateY(0); opacity: 0.85; }
          50% { transform: translateY(-8px) scale(1.05); opacity: 1; }
        }
        .animate-bounceDot { animation: bounceDot 900ms cubic-bezier(.2,.9,.2,1) infinite; }

        /* Simple shimmer for skeletons */
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 1.6s linear infinite;
        }

        /* Indeterminate progress bar movement */
        @keyframes progressMove {
          0% { transform: translateX(-60%); width: 30%; }
          50% { transform: translateX(10%); width: 60%; }
          100% { transform: translateX(110%); width: 30%; }
        }
        .animate-progress { animation: progressMove 1.6s cubic-bezier(.2,.8,.2,1) infinite; }
      `}</style>
    </div>
  );
}
