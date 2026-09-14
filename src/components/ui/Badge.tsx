import React from 'react';
import { PlotStatus } from '../../types';

interface BadgeProps {
  status?: PlotStatus | string;
  variant?: 'emerald' | 'amber' | 'slate' | 'gold' | 'brand';
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, variant, children, className = '' }) => {
  let styleClasses = 'bg-brand-100 text-brand-900 border-brand-200';

  if (status) {
    switch (status) {
      case 'AVAILABLE':
        styleClasses = 'bg-emerald-100/90 text-emerald-900 border-emerald-300 font-semibold';
        break;
      case 'RESERVED':
        styleClasses = 'bg-amber-100/90 text-amber-900 border-amber-300 font-semibold';
        break;
      case 'SOLD':
        styleClasses = 'bg-slate-200 text-slate-700 border-slate-300 font-medium';
        break;
    }
  } else if (variant) {
    switch (variant) {
      case 'emerald':
        styleClasses = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        break;
      case 'amber':
        styleClasses = 'bg-amber-50 text-amber-800 border-amber-200';
        break;
      case 'slate':
        styleClasses = 'bg-slate-100 text-slate-700 border-slate-200';
        break;
      case 'gold':
        styleClasses = 'bg-gold-100 text-gold-700 border-gold-300 font-medium';
        break;
      case 'brand':
        styleClasses = 'bg-brand-900 text-gold-300 border-brand-700 font-medium';
        break;
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs border uppercase tracking-wider ${styleClasses} ${className}`}
    >
      {children || status}
    </span>
  );
};
