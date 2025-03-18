
import { NFTProject } from "@/types/nft";
import { Calendar } from "lucide-react";

interface NFTHeaderProps {
  project: NFTProject;
  timeLeft: string;
}

export const NFTHeader = ({ project, timeLeft }: NFTHeaderProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-br from-[#F5F5F5] to-[#EAEAEA] bg-clip-text text-transparent">
          {project?.nftName}
        </h1>
        <p className="text-lg text-white/70">
          {project?.projectName}
        </p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Calendar className="h-4 w-4 text-[#F5F5F5]" />
        <span className="font-medium text-white/80">{timeLeft} remaining</span>
      </div>
    </div>
  );
};
