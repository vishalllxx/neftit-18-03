
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  features = [],
  className 
}: ProcessStepProps) => {
  return (
    <div className={cn(
      'step-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20', 
      className
    )}>
      <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
        <span className="text-white text-xl font-medium">{number}</span>
      </div>
      <h3 className="text-xl font-medium mb-3 text-gradient">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <CheckCircle size={16} className="text-neftit-purple mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProcessStep;
