import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import { User } from '@/data/leaderboardData';
import UserAvatar from './UserAvatar';
import RankBadge from './RankBadge';
import RankChange from './RankChange';
import { Trophy, Crown, Medal } from 'lucide-react';

interface LeaderboardItemProps {
  user: User;
  displayType: 'neft' | 'nft';
  isCurrentUser?: boolean;
  className?: string;
}

const LeaderboardItem = memo(({
  user,
  displayType,
  isCurrentUser = false,
  className
}: LeaderboardItemProps) => {
  const statValue = displayType === 'neft' 
    ? `${user.neftBalance.toLocaleString()} NEFT` 
    : `${user.nftCount} NFTs`;

  // Get rank icon and color based on position
  const getRankDetails = () => {
    switch (user.rank) {
      case 1:
        return {
          icon: <Crown className="w-4 h-4 text-yellow-500" />,
          color: 'from-yellow-500/20 via-yellow-500/5 to-transparent',
          textColor: 'text-yellow-500'
        };
      case 2:
        return {
          icon: <Trophy className="w-4 h-4 text-slate-400" />,
          color: 'from-slate-400/20 via-slate-400/5 to-transparent',
          textColor: 'text-slate-400'
        };
      case 3:
        return {
          icon: <Medal className="w-4 h-4 text-amber-700" />,
          color: 'from-amber-700/20 via-amber-700/5 to-transparent',
          textColor: 'text-amber-700'
        };
      default:
        return {
          icon: null,
          color: '',
          textColor: ''
        };
    }
  };

  const rankDetails = getRankDetails();
  
  return (
    <div
      className={cn(
        'grid grid-cols-[auto_1fr_auto] items-center p-3 gap-3 rounded-lg',
        'hover:bg-white/5 group cursor-pointer will-change-transform',
        'transform-gpu transition-[background-color,border-color] duration-200 ease-out',
        isCurrentUser ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-black/20 border border-white/5',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <RankBadge 
          rank={user.rank} 
          size={user.rank <= 3 ? 'md' : 'sm'} 
        />
        {rankDetails.icon}
      </div>
      
      <div className="flex items-center gap-3 min-w-0">
        <UserAvatar 
          imageSrc={user.profileImage} 
          username={user.username} 
          size="sm" 
          isHighlighted={isCurrentUser}
          className={cn(
            "ring-2 ring-offset-1 ring-offset-black will-change-transform",
            "transform-gpu transition-[ring-color] duration-200 ease-out",
            isCurrentUser ? "ring-purple-500/50" : "ring-white/10 group-hover:ring-white/20"
          )}
        />
        
        <div className="text-left min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className={cn(
              'font-bold truncate will-change-transform', 
              'transform-gpu transition-colors duration-200 ease-out',
              isCurrentUser ? 'text-purple-400' : 'text-white group-hover:text-white/90',
              rankDetails.textColor
            )}>
              {user.username}
            </h3>
            {isCurrentUser && (
              <span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400">
                You
              </span>
            )}
          </div>
          
          <RankChange 
            currentRank={user.rank} 
            previousRank={user.previousRank}
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-200 ease-out" 
          />
        </div>
      </div>
      
      <div className={cn(
        "font-mono text-sm px-2.5 py-1 rounded-full will-change-transform",
        "transform-gpu transition-[background-color,border-color] duration-200 ease-out",
        "bg-black/40 border border-white/5 group-hover:border-white/10",
        isCurrentUser ? "text-purple-400" : "text-white/80"
      )}>
        {statValue}
      </div>
    </div>
  );
});

LeaderboardItem.displayName = 'LeaderboardItem';

export default LeaderboardItem;
