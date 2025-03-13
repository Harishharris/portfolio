'use client';

import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/5 bg-[#0A0A0B]/30 backdrop-blur-sm transition-all duration-300',
        'hover:border-white/10 hover:bg-white/5',
        'group/card relative overflow-hidden',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-5" />
      {children}
    </div>
  );
};
