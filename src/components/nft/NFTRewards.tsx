
import { NFTProject } from "@/types/nft";
import { Award, Coins } from "lucide-react";

interface NFTRewardsProps {
  project: NFTProject;
}

export const NFTRewards = ({ project }: NFTRewardsProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white">Complete tasks to earn:</h3>
      <div className="flex gap-3">
        <div className="flex items-center gap-2 bg-[#222222]/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#333333]">
          <Award className="h-5 w-5 text-[#F5F5F5]" />
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-[#F5F5F5]">{project?.xpReward}</span>
            <span className="text-sm font-medium text-white/70">XP</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#222222]/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#333333]">
          <Coins className="h-5 w-5 text-[#F5F5F5]" />
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-[#F5F5F5]">{project?.neftReward}</span>
            <span className="text-sm font-medium text-white/70">NEFT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
