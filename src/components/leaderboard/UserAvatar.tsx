
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface UserAvatarProps {
  imageSrc: string;
  username: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isHighlighted?: boolean;
}

const UserAvatar = ({
  imageSrc,
  username,
  size = 'md',
  className,
  isHighlighted = false,
}: UserAvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Size classes
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const borderClasses = isHighlighted
    ? 'border-2 border-neon-blue shadow-[0_0_10px_rgba(54,249,246,0.6)]'
    : 'border border-white/10';

  return (
    <div className={cn('relative rounded-full overflow-hidden', sizeClasses[size], borderClasses, className)}>
      {!isLoaded && (
        <div className="absolute inset-0 shimmer" />
      )}
      <img
        src={imageSrc}
        alt={`${username}'s avatar`}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default UserAvatar;
