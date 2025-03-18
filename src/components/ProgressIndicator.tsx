
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { AchievementStatus } from '@/lib/achievements';

interface ProgressIndicatorProps {
  status: AchievementStatus;
  currentValue: number;
  targetValue: number;
  onClick?: () => void;
  className?: string;
}

export const getStatusColor = (status: AchievementStatus) => {
  switch (status) {
    case 'not-started':
      return 'bg-achievement-notStarted';
    case 'in-progress':
      return 'bg-achievement-inProgress';
    case 'completed':
      return 'bg-achievement-completed';
    default:
      return 'bg-achievement-notStarted';
  }
};

export function ProgressIndicator({ 
  status, 
  currentValue, 
  targetValue, 
  onClick,
  className 
}: ProgressIndicatorProps) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Set a timeout to allow the animation to trigger after the initial render
    const timer = setTimeout(() => {
      const calculatedProgress = Math.min(100, Math.max(0, (currentValue / targetValue) * 100));
      setProgress(calculatedProgress);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentValue, targetValue]);
  
  const getStatusText = () => {
    if (status === 'completed') return 'Claim Reward';
    if (status === 'in-progress') return 'In Progress';
    return 'Not Started';
  };
  
  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{currentValue} / {targetValue}</span>
        <span>{Math.floor(progress)}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className={cn("progress-fill", getStatusColor(status))}
          style={{ 
            '--progress-width': `${progress}%`,
          } as React.CSSProperties}
        />
      </div>
      {onClick ? (
        <button
          onClick={onClick}
          className={cn(
            "mt-3 px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
            status === 'completed' 
              ? "bg-achievement-completed text-white hover:bg-achievement-completed/90" 
              : "bg-card border border-border hover:bg-card/80"
          )}
        >
          {getStatusText()}
        </button>
      ) : (
        <div className={cn(
          "mt-3 px-4 py-1.5 rounded-md text-sm font-medium text-center",
          status === 'in-progress' 
            ? "bg-achievement-inProgress/20 text-achievement-inProgress" 
            : status === 'completed'
            ? "bg-achievement-completed/20 text-achievement-completed"
            : "bg-achievement-notStarted/20 text-muted-foreground"
        )}>
          {getStatusText()}
        </div>
      )}
    </div>
  );
}
