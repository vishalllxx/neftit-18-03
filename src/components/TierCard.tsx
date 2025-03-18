
import React from 'react';
import { cn } from '@/lib/utils';

interface TierCardProps {
  title: string;
  description: string;
  details?: string;
  colorClass: string;
  className?: string;
}

const TierCard = ({ 
  title, 
  description, 
  details, 
  colorClass, 
  className 
}: TierCardProps) => {
  return (
    <div className={cn(
      'tier-card p-8 rounded-xl backdrop-blur-xl border border-white/10 bg-white/5 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20', 
      className
    )}>
      <div className={cn('w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg', colorClass)}>
        <span className="text-white text-2xl font-medium">{title[0]}</span>
      </div>
      <h3 className="text-xl font-medium mb-3 text-center text-gradient">{title}</h3>
      <p className="text-center text-muted-foreground mb-4">{description}</p>
      {details && (
        <p className="text-sm text-center text-muted-foreground/70 mt-4 pt-4 border-t border-white/10">{details}</p>
      )}
    </div>
  );
};

export default TierCard;
