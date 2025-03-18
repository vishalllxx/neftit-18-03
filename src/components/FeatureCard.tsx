
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      'feature-card p-6 rounded-xl backdrop-blur-xl border border-white/10 bg-white/5 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20', 
      className
    )}>
      <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-medium mb-3 text-center text-gradient">{title}</h3>
      <p className="text-center text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
