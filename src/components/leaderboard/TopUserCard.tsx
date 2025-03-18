import React from 'react';
import { cn } from '@/lib/utils';
import { User } from '@/data/leaderboardData';
import UserAvatar from './UserAvatar';
import RankBadge from './RankBadge';
import RankChange from './RankChange';
import { Trophy, Crown, Medal } from 'lucide-react';

interface TopUserCardProps {
  user: User;
  displayType: 'neft' | 'nft';
  className?: string;
}

const TopUserCard = ({ user, displayType, className }: TopUserCardProps) => {
  const statValue = displayType === 'neft'
    ? `${user.neftBalance.toLocaleString()} NEFT`
    : `${user.nftCount} NFTs`;
  
  // Get rank icon and color based on position
  const getRankDetails = () => {
    switch (user.rank) {
      case 1:
        return {
          icon: <Crown className="w-6 h-6 text-yellow-500" />,
          color: 'from-yellow-500/30 via-yellow-500/5 to-transparent',
          borderColor: 'border-yellow-500/20',
          textColor: 'text-yellow-500'
        };
      case 2:
        return {
          icon: <Trophy className="w-6 h-6 text-slate-400" />,
          color: 'from-slate-400/30 via-slate-400/5 to-transparent',
          borderColor: 'border-slate-400/20',
          textColor: 'text-slate-400'
        };
      case 3:
        return {
          icon: <Medal className="w-6 h-6 text-amber-700" />,
          color: 'from-amber-700/30 via-amber-700/5 to-transparent',
          borderColor: 'border-amber-700/20',
          textColor: 'text-amber-700'
        };
      default:
        return {
          icon: null,
          color: '',
          borderColor: '',
          textColor: ''
        };
    }
  };
  
  const rankDetails = getRankDetails();
  
  return (
    <div
      className={cn(
        'bg-black/40 border border-white/5 p-6 rounded-xl flex flex-col items-center relative overflow-hidden group',
        'before:absolute before:inset-0 before:bg-gradient-radial before:from-white/5 before:to-transparent before:opacity-0',
        'hover:before:opacity-100 hover:border-white/10',
        'transform hover:-translate-y-1 transition-all duration-300',
        rankDetails.borderColor,
        className
      )}
    >
      {/* Background gradient effect */}
      <div className={cn(
        'absolute top-0 left-0 w-full h-full bg-gradient-to-b opacity-20',
        rankDetails.color
      )}/>
      
      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col items-center">
        <RankBadge rank={user.rank} size="lg" className="mb-4" />
        
        <UserAvatar
          imageSrc={user.profileImage}
          username={user.username}
          size="xl"
          className="mb-4 ring-2 ring-white/10 ring-offset-2 ring-offset-black"
          isHighlighted={true}
        />
        
        <div className="flex items-center gap-2 mb-1">
          {rankDetails.icon}
          <h3 className={cn("text-xl font-bold", rankDetails.textColor)}>
            {user.username}
          </h3>
        </div>
        
        <RankChange
          currentRank={user.rank}
          previousRank={user.previousRank}
          className="mb-3"
        />
        
        <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full font-mono text-sm font-medium border border-white/5">
          {statValue}
        </div>
      </div>
    </div>
  );
};

export default TopUserCard;
