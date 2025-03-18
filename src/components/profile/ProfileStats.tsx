
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Trophy, 
  Flame, 
  Coins,
  ScrollText
} from "lucide-react";

interface ProfileStatsProps {
  totalNFTs: number;
  upgradableNFTs: number;
  burnedNFTs: number;
  questsCompleted: number;
}

export const ProfileStats = ({ 
  totalNFTs,
  upgradableNFTs,
  burnedNFTs,
  questsCompleted
}: ProfileStatsProps) => {
  const stats = [
    {
      label: "Total NFTs",
      value: totalNFTs,
      icon: <Coins className="w-4 h-4 text-blue-400" />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      label: "Upgradable NFTs",
      value: upgradableNFTs,
      icon: <Trophy className="w-4 h-4 text-purple-400" />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      label: "Burned NFTs",
      value: burnedNFTs,
      icon: <Flame className="w-4 h-4 text-red-400" />,
      color: "from-red-500/20 to-transparent"
    },
    {
      label: "Quests Completed",
      value: questsCompleted,
      icon: <ScrollText className="w-4 h-4 text-green-400" />,
      color: "from-green-500/20 to-transparent"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
          <Card className="p-4 bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
            <div className={`absolute inset-0 bg-gradient-to-b ${stat.color} opacity-20 rounded-lg`} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                {stat.icon}
                <span className="text-sm text-white/60">{stat.label}</span>
              </div>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
