import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RankBadgeProps {
  rank: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const RankBadge = ({ rank, className, size = 'md' }: RankBadgeProps) => {
  const isTopThree = rank <= 3;
  
  // Get badge details based on rank
  const getBadgeDetails = () => {
    switch (rank) {
      case 1:
        return {
          icon: <Crown className={cn(
            'transition-transform group-hover:scale-110',
            size === 'lg' ? 'w-7 h-7' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
          )} />,
          bgColor: 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/5',
          borderColor: 'border-yellow-500/20',
          iconColor: 'text-yellow-500',
          glowColor: 'before:shadow-[0_0_15px_rgba(234,179,8,0.3)]'
        };
      case 2:
        return {
          icon: <Trophy className={cn(
            'transition-transform group-hover:scale-110',
            size === 'lg' ? 'w-7 h-7' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
          )} />,
          bgColor: 'bg-gradient-to-br from-slate-400/20 to-slate-400/5',
          borderColor: 'border-slate-400/20',
          iconColor: 'text-slate-400',
          glowColor: 'before:shadow-[0_0_15px_rgba(148,163,184,0.3)]'
        };
      case 3:
        return {
          icon: <Medal className={cn(
            'transition-transform group-hover:scale-110',
            size === 'lg' ? 'w-7 h-7' : size === 'md' ? 'w-5 h-5' : 'w-4 h-4'
          )} />,
          bgColor: 'bg-gradient-to-br from-amber-700/20 to-amber-700/5',
          borderColor: 'border-amber-700/20',
          iconColor: 'text-amber-700',
          glowColor: 'before:shadow-[0_0_15px_rgba(180,83,9,0.3)]'
        };
      default:
        return {
          icon: null,
          bgColor: 'bg-black/40',
          borderColor: 'border-white/10',
          iconColor: 'text-white/80',
          glowColor: ''
        };
    }
  };
  
  const badgeDetails = getBadgeDetails();
  
  // Size classes for the badge container
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-base',
  };
  
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-full border group',
        'before:absolute before:inset-0 before:rounded-full before:blur',
        'transition-all duration-200',
        sizeClasses[size],
        badgeDetails.bgColor,
        badgeDetails.borderColor,
        badgeDetails.iconColor,
        badgeDetails.glowColor,
        className
      )}
    >
      {isTopThree ? badgeDetails.icon : (
        <span className="font-bold group-hover:scale-110 transition-transform">
          {rank}
        </span>
      )}
    </div>
  );
};

export default RankBadge;
