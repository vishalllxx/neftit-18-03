import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RankChangeProps {
  currentRank: number;
  previousRank: number;
  className?: string;
}

const RankChange = ({ currentRank, previousRank, className }: RankChangeProps) => {
  const rankDiff = previousRank - currentRank;
  
  const getRankDetails = () => {
    if (rankDiff > 0) {
      return {
        icon: ArrowUp,
        text: `+${rankDiff}`,
        bgColor: 'bg-emerald-500/10',
        textColor: 'text-emerald-400',
        borderColor: 'border-emerald-500/20',
        animation: 'animate-float-slow'
      };
    }
    if (rankDiff < 0) {
      return {
        icon: ArrowDown,
        text: `-${Math.abs(rankDiff)}`,
        bgColor: 'bg-rose-500/10',
        textColor: 'text-rose-400',
        borderColor: 'border-rose-500/20',
        animation: 'animate-sink-slow'
      };
    }
    return {
      icon: Minus,
      text: '0',
      bgColor: 'bg-white/5',
      textColor: 'text-white/40',
      borderColor: 'border-white/10',
      animation: ''
    };
  };

  const details = getRankDetails();
  const Icon = details.icon;
  
  return (
    <div 
      className={cn(
        'flex items-center gap-1.5 px-2 py-1 rounded-full border',
        'transition-all duration-200',
        details.bgColor,
        details.textColor,
        details.borderColor,
        details.animation,
        className
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      <span className="text-xs font-medium leading-none">{details.text}</span>
    </div>
  );
};

export default RankChange;
