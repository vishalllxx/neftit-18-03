import { Award, Calendar, Trophy, Sparkles, Users, Gem, Clock, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface NFTInfoProps {
  projectName: string;
  nftName: string;
  xpReward: number;
  neftReward: number;
  startTime?: string;
  endTime: string;
  description: string;
  rarityDistribution?: {
    legendary: number;
    rare: number;
    common: number;
  };
}

export const NFTInfo = ({ 
  projectName, 
  nftName, 
  xpReward, 
  neftReward, 
  startTime, 
  endTime,
  description,
  rarityDistribution 
}: NFTInfoProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Badge variant="outline" className="bg-white/5 border-white/10 text-white mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Featured Project
          </Badge>
          <h2 className="text-lg font-medium text-gray-400">{projectName}</h2>
          <h1 className="text-4xl font-bold text-white">
            {nftName}
          </h1>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white/5">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-400">XP Reward</div>
              <div className="text-xl font-bold text-white">{xpReward} XP</div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white/5">
              <Gem className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-400">NEFT Reward</div>
              <div className="text-xl font-bold text-white">{neftReward} NEFT</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 space-y-4"
      >
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-white" />
          <h3 className="text-lg font-semibold text-white">Campaign Period</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {startTime && (
            <div className="space-y-1">
              <div className="text-sm text-gray-400">Start Date</div>
              <div className="text-base font-medium text-white">{formatDate(startTime)}</div>
            </div>
          )}
          <div className="space-y-1">
            <div className="text-sm text-gray-400">End Date</div>
            <div className="text-base font-medium text-white">{formatDate(endTime)}</div>
          </div>
        </div>
      </motion.div>

      {rarityDistribution && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 space-y-4"
        >
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-white" />
            <h3 className="text-lg font-semibold text-white">Rarity Distribution</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Legendary</span>
                <span className="text-sm text-gray-400">{rarityDistribution.legendary}%</span>
              </div>
              <Progress value={rarityDistribution.legendary} className="h-2 [&>[role=progressbar]]:bg-white bg-white/5" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Rare</span>
                <span className="text-sm text-gray-400">{rarityDistribution.rare}%</span>
              </div>
              <Progress value={rarityDistribution.rare} className="h-2 [&>[role=progressbar]]:bg-white bg-white/5" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Common</span>
                <span className="text-sm text-gray-400">{rarityDistribution.common}%</span>
              </div>
              <Progress value={rarityDistribution.common} className="h-2 [&>[role=progressbar]]:bg-white bg-white/5" />
            </div>
          </div>
        </motion.div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 space-y-4"
      >
        <div className="flex items-center gap-2">
          <Info className="h-5 w-5 text-white" />
          <h3 className="text-lg font-semibold text-white">About This Campaign</h3>
        </div>

        <p className="text-base text-gray-400 leading-relaxed whitespace-pre-wrap">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};
