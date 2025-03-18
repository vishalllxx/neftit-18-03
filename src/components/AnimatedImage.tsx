
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  animate?: 'fade' | 'left' | 'right' | 'bottom' | 'float' | 'none';
  delay?: number;
}

const AnimatedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  animate = 'fade',
  delay = 0
}: AnimatedImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('show-element', 'slide-normal');
            }, delay);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = imageRef.current;
    if (currentRef && animate !== 'none' && animate !== 'float') {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && animate !== 'none' && animate !== 'float') {
        observer.unobserve(currentRef);
      }
    };
  }, [animate, delay]);

  const animationClass = cn(
    {
      'hidden-element': animate !== 'none' && animate !== 'float',
      'slide-from-left': animate === 'left',
      'slide-from-right': animate === 'right',
      'slide-from-bottom': animate === 'bottom',
      'animate-float': animate === 'float',
    }
  );

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-1000 opacity-70"></div>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'relative rounded-2xl object-cover transition-all duration-700 border border-white/10 shadow-xl',
          animationClass,
          className
        )}
        loading="lazy"
      />
    </div>
  );
};

export default AnimatedImage;
