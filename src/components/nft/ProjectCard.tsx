
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Clock, Award, Coins, User, Database, Trophy, Grid, CheckSquare } from "lucide-react";
import { NFTProject } from "@/types/nft";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ProjectCardProps {
  project: NFTProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState("");

  const calculateTimeLeft = () => {
    const end = new Date(project.endTime).getTime();
    const now = new Date().getTime();
    const distance = end - now;
    
    if (distance < 0) {
      return "Ended";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${days}d ${hours}h ${minutes}m`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [project.endTime]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-500/50';
      case 'Rare': return 'bg-blue-500/50';
      case 'Epic': return 'bg-purple-500/50';
      case 'Legendary': return 'bg-yellow-500/50';
      default: return 'bg-gray-500/50';
    }
  };

  return (
    <Card 
      className="group overflow-hidden rounded-xl border border-[#333333] bg-[#222222] hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="relative aspect-square">
        <img
          src={project.image}
          alt={project.nftName}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-[#F5F5F5] bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{timeLeft}</span>
          </div>
          <div className={`flex items-center gap-2 text-sm text-[#F5F5F5] backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 ${getRarityColor(project.rarity)}`}>
            <Trophy className="h-4 w-4" />
            <span className="font-medium">{project.rarity}</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-2 text-sm text-[#F5F5F5] bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            <Grid className="h-4 w-4" />
            <span className="font-medium">{project.category} → {project.subcategory}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 p-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-[#F5F5F5]">{project.nftName}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#B0B0B0] font-medium">{project.projectName}</p>
            {project.taskStatus && (
              <span className={`text-xs px-2 py-1 rounded-full ${
                project.taskStatus === 'Completed' ? 'bg-green-500/20 text-green-400' :
                project.taskStatus === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {project.taskStatus}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 bg-[#333333] px-3 py-2 rounded-lg border border-[#444444]">
                <User className="h-4 w-4 text-[#F5F5F5]" />
                <div className="truncate">
                  <span className="text-sm font-medium text-[#B0B0B0]">Owner</span>
                  <p className="text-sm font-bold text-[#F5F5F5] truncate">{project.owner}</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>Created by {project.owner}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 bg-[#333333] px-3 py-2 rounded-lg border border-[#444444]">
                <Database className="h-4 w-4 text-[#F5F5F5]" />
                <div>
                  <span className="text-sm font-medium text-[#B0B0B0]">Supply</span>
                  <p className="text-sm font-bold text-[#F5F5F5]">{project.totalSupply}</p>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>Total Supply: {project.totalSupply}</TooltipContent>
          </Tooltip>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-[#B0B0B0]">Complete tasks to earn:</p>
          <div className="flex gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 bg-[#333333] px-3 py-2 rounded-lg border border-[#444444]">
                  <Award className="h-5 w-5 text-[#F5F5F5]" />
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-[#F5F5F5]">{project.xpReward}</span>
                    <span className="text-sm font-medium text-[#B0B0B0]">XP</span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>Level Requirement: {project.levelRequirement} XP</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 bg-[#333333] px-3 py-2 rounded-lg border border-[#444444]">
                  <Coins className="h-5 w-5 text-[#F5F5F5]" />
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-[#F5F5F5]">{project.neftReward}</span>
                    <span className="text-sm font-medium text-[#B0B0B0]">NEFT</span>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>{project.usdValue ? `≈ $${project.usdValue.toFixed(2)} USD` : 'USD value not available'}</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </Card>
  );
}
