
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animate?: 'fade' | 'left' | 'right' | 'bottom' | 'none';
}

const Section = ({ 
  id, 
  className, 
  children,
  animate = 'none'
}: SectionProps) => {
  const animationClass = cn(
    {
      'hidden-element': animate !== 'none',
      'slide-from-left': animate === 'left',
      'slide-from-right': animate === 'right',
      'slide-from-bottom': animate === 'bottom',
    }
  );

  return (
    <section 
      id={id} 
      className={cn("py-16 md:py-24 relative", className)}
    >
      <div className={cn(animationClass)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
