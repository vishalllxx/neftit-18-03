
import { NFTProject } from "@/types/nft";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface NFTDetailsProps {
  project: NFTProject;
}

export const NFTDetails = ({ project }: NFTDetailsProps) => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=Check out ${project.nftName} on Neftit!&url=${url}`);
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${url}&text=Check out ${project.nftName} on Neftit!`);
        break;
      default:
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 border-0 bg-gradient-to-br from-[#222222]/50 via-background/20 to-background/10 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
        <div className="space-y-4 text-white/80">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-white/60">Network</p>
              <p className="font-medium">{project.network}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Total Supply</p>
              <p className="font-medium">{project.totalSupply}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Category</p>
              <p className="font-medium">{project.category} → {project.subcategory}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Rarity</p>
              <p className="font-medium">{project.rarity}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">Level Required</p>
              <p className="font-medium">Level {project.levelRequirement}</p>
            </div>
            <div>
              <p className="text-sm text-white/60">USD Value</p>
              <p className="font-medium">${project.usdValue}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-0 bg-gradient-to-br from-[#222222]/50 via-background/20 to-background/10 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Share</h3>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-white/10"
              onClick={() => handleShare('twitter')}
            >
              Twitter
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-white/10"
              onClick={() => handleShare('telegram')}
            >
              Telegram
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-white/10"
              onClick={() => handleShare('copy')}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 border-0 bg-gradient-to-br from-[#222222]/50 via-background/20 to-background/10 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white mb-4">Creator</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10"></div>
            <div>
              <p className="font-medium text-white">{project.owner}</p>
              <p className="text-sm text-white/60">Creator</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-white/10"
            onClick={() => {
              window.open(`https://etherscan.io/address/${project.owner}`);
            }}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
