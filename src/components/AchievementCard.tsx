import { Achievement, AchievementType } from "@/lib/achievements";
import { ProgressIndicator } from "./ProgressIndicator";
import { Award, CheckCircle2, Medal, Star, Users, Flame, Calendar, Lock } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useState } from "react";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const [isClaimed, setIsClaimed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const getTypeIcon = (type: AchievementType) => {
    const iconProps = { className: "w-8 h-8" };
    
    switch (type) {
      case 'quest':
        return <Award {...iconProps} />;
      case 'common':
      case 'rare':
      case 'legendary':
      case 'platinum':
      case 'silver':
      case 'gold':
        return <Medal {...iconProps} />;
      case 'referral':
        return <Users {...iconProps} />;
      case 'burn':
        return <Flame {...iconProps} />;
      case 'social':
        return <Star {...iconProps} />;
      case 'checkin':
        return <Calendar {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };
  
  const getTypeColor = (type: AchievementType) => {
    switch (type) {
      case 'common': return 'text-achievement-common';
      case 'rare': return 'text-achievement-rare';
      case 'legendary': return 'text-achievement-legendary';
      case 'platinum': return 'text-achievement-platinum';
      case 'silver': return 'text-achievement-silver';
      case 'gold': return 'text-achievement-gold';
      case 'quest': return 'text-[#00ffff]';
      case 'referral': return 'text-indigo-400';
      case 'burn': return 'text-orange-400';
      case 'social': return 'text-purple-400';
      case 'checkin': return 'text-green-400';
      default: return 'text-[#00ffff]';
    }
  };
  
  const getBadgeStyle = (type: AchievementType) => {
    switch (type) {
      case 'common': return 'from-achievement-common to-achievement-common/50';
      case 'rare': return 'from-achievement-rare to-achievement-rare/50';
      case 'legendary': return 'from-achievement-legendary to-achievement-legendary/50';
      case 'platinum': return 'from-achievement-platinum to-achievement-platinum/50';
      case 'silver': return 'from-achievement-silver to-achievement-silver/50';
      case 'gold': return 'from-achievement-gold to-achievement-gold/50';
      case 'quest': return 'from-[#00ffff] to-purple-500';
      case 'referral': return 'from-indigo-400 to-blue-600';
      case 'burn': return 'from-orange-400 to-red-600';
      case 'social': return 'from-purple-400 to-pink-600';
      case 'checkin': return 'from-green-400 to-emerald-600';
      default: return 'from-[#00ffff] to-purple-500';
    }
  };
  
  const handleClaim = () => {
    if (achievement.status === 'completed' && !isClaimed) {
      toast.success(`Claimed ${achievement.reward} NEFT for "${achievement.title}"`, {
        description: "Tokens have been added to your wallet",
        action: {
          label: "View Wallet",
          onClick: () => console.log("View wallet clicked"),
        },
      });
      setIsClaimed(true);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glowing border effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${getBadgeStyle(achievement.type)} rounded-xl blur opacity-30 transition duration-300`}
        animate={{
          opacity: isHovered ? 0.5 : 0.3,
          scale: isHovered ? 1.02 : 1,
        }}
      />
      
      {/* Card content */}
      <div className="relative bg-black p-6 rounded-xl border border-white/10">
        {/* Achievement Icon & Reward */}
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${getBadgeStyle(achievement.type)} bg-opacity-20`}>
              <div className={getTypeColor(achievement.type)}>
                {getTypeIcon(achievement.type)}
              </div>
            </div>
            {achievement.status === 'locked' && (
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center">
                <Lock className="w-3 h-3 text-gray-400" />
              </div>
            )}
          </div>
          
          {/* Reward Badge */}
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            className="flex items-center bg-black px-4 py-2 rounded-full border border-white/10"
          >
            <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-purple-500">
              +{achievement.reward} NEFT
            </span>
          </motion.div>
        </div>
        
        {/* Title & Description */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-white">
              {achievement.title}
            </h3>
            {achievement.status === 'completed' && isClaimed && (
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            )}
          </div>
          <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
        </div>
        
        {/* Progress Indicator */}
        <ProgressIndicator 
          status={isClaimed ? 'completed' : achievement.status}
          currentValue={Math.min(achievement.currentValue, achievement.targetValue)}
          targetValue={achievement.targetValue}
          onClick={achievement.status === 'completed' && !isClaimed ? handleClaim : undefined}
        />
      </div>
    </motion.div>
  );
}
