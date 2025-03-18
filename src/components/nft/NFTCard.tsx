import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Clock, ImageIcon, Trophy, Users, Sparkles, Gem } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  creator: string;
  likes: number;
  isLiked?: boolean;
  endTime?: string;
  projectName: string;
  taskStatus?: 'Not Started' | 'In Progress' | 'Completed';
  owner: string;
  supply: number;
  xpReward: number;
  neftReward: number;
  category: string;
  subcategory: string;
  network?: string;
  isOffchain?: boolean;
  targetChain?: string;
  claimStatus?: 'Unclaimed' | 'Claiming' | 'Claimed';
}

export function NFTCard({ 
  id,
  name, 
  image, 
  projectName,
  neftReward,
  xpReward,
  supply,
  endTime = "1d left",
  claimStatus = 'Unclaimed'
}: NFTCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error(`Failed to load image for ${name}`);
  };

  return (
    <Link to={`/project/${id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-200">
          <Card className="overflow-hidden bg-transparent border-0">
            <div className="p-3">
              {imageError ? (
                <div className="aspect-square rounded-xl flex items-center justify-center bg-white/5 text-white/50">
                  <ImageIcon className="w-12 h-12" />
                </div>
              ) : (
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={handleImageError}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
            </div>
          </Card>

          <div className="p-5">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white tracking-wide truncate group-hover:text-white/90 transition-colors duration-200">
                {name}
              </h3>
              <p className="text-sm text-gray-400 font-medium truncate mt-1">
                {projectName}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                <Trophy className="w-4 h-4 text-white" />
                <div>
                  <div className="text-xs text-gray-400">Reward</div>
                  <div className="text-sm font-medium text-white">{neftReward} NEFT</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
                <Sparkles className="w-4 h-4 text-white" />
                <div>
                  <div className="text-xs text-gray-400">XP</div>
                  <div className="text-sm font-medium text-white">+{xpReward} XP</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">
                  {supply} spots
                </span>
              </div>
              <div className="flex items-center gap-2">
                {claimStatus === 'Claimed' ? (
                  <>
                    <Gem className="w-4 h-4" />
                    <span className="text-sm">Claimed</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{endTime}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
