
import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className }) => {
  return (
    <div
      className={`relative group bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/20 hover:-translate-y-1 ${className}`}
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side_at_50%_50%,_rgba(0,255,255,0.08)_0%,_rgba(0,255,255,0)_50%)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 h-full">
            {children}
        </div>
    </div>
  );
};
