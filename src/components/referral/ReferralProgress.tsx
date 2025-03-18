import React from 'react';
import { Users, Gift, Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReferralProgressProps {
  currentCount: number;
  nextTier: number;
  className?: string;
}

const ReferralProgress: React.FC<ReferralProgressProps> = ({
  currentCount,
  nextTier,
  className
}) => {
  // Calculate progress percentage
  const progressPercentage = Math.min((currentCount / nextTier) * 100, 100);
  
  // Define tier milestones with icons and rewards
  const tiers = [
    { count: 0, icon: <Users size={14} className="text-gray-400" />, reward: 0 },
    { count: 10, icon: <Gift size={14} className="text-purple-400" />, reward: 10 },
    { count: 50, icon: <Star size={14} className="text-blue-400" />, reward: 50 },
    { count: 100, icon: <Crown size={14} className="text-yellow-400" />, reward: 100 }
  ];
  
  // Find current tier
  const currentTier = tiers.reduce((prev, curr) => 
    currentCount >= curr.count ? curr : prev
  );
  
  // Find next tier
  const nextTierInfo = tiers.find(tier => tier.count > currentCount) || tiers[tiers.length - 1];
  const isMaxTier = currentTier === tiers[tiers.length - 1];
  
  return (
    <div className={cn("space-y-4", className)}>
      {/* Progress Header */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          {currentTier.icon}
          <span className="text-white/90 font-medium">
            {currentCount} Friends Invited
          </span>
        </div>
        <div>
          {!isMaxTier ? (
            <span className="font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {nextTierInfo.count - currentCount} more to {nextTierInfo.icon}
            </span>
          ) : (
            <span className="font-medium text-yellow-400">
              Maximum Tier Achieved! 🎉
            </span>
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="relative">
        <div className="h-3 w-full overflow-hidden rounded-full bg-black/40 border border-white/5">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 animate-shimmer" />
          
          {/* Progress Fill */}
          <div 
            className="relative h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shine" />
          </div>
        </div>

        {/* Tier Markers */}
        <div className="absolute -top-2 left-0 right-0 flex justify-between">
          {tiers.map((tier, index) => (
            <div
              key={tier.count}
              className="relative flex flex-col items-center"
              style={{ left: `${(tier.count / 100) * 100}%`, marginLeft: index === 0 ? '0' : '-8px' }}
            >
              <div className={cn(
                "h-7 w-7 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                currentCount >= tier.count 
                  ? "bg-gradient-to-br from-purple-500 to-blue-500 border-white/20 shadow-lg shadow-purple-500/20"
                  : "bg-black/40 border-white/10"
              )}>
                {tier.icon}
              </div>
              <span className={cn(
                "mt-2 text-xs font-medium transition-colors duration-300",
                currentCount >= tier.count ? "text-white" : "text-gray-500"
              )}>
                {tier.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Reward Card */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative rounded-xl bg-gradient-to-r from-black/60 to-black/40 border border-white/10 p-4 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative flex items-center gap-3">
            <div className={cn(
              "flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center",
              "bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10"
            )}>
              {!isMaxTier ? nextTierInfo.icon : currentTier.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">
                {!isMaxTier 
                  ? `Invite ${nextTierInfo.count - currentCount} more friends to earn ${nextTierInfo.reward} NEFT!`
                  : "You've reached the highest tier! Keep inviting friends to earn more rewards."}
              </p>
              <p className="text-xs text-white/60 mt-1">
                Share your referral link to start earning rewards
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgress;
