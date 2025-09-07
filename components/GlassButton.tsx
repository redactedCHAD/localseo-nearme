
import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  Icon?: React.ElementType;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ children, Icon, className, ...props }) => {
  return (
    <button
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:bg-white/20 hover:shadow-lg hover:shadow-cyan-500/20 ${className}`}
      {...props}
    >
      <span className="absolute top-0 left-0 w-[400%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
      {Icon && <Icon className="w-5 h-5 relative z-10" />}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
