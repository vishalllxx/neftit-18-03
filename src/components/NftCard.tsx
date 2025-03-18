
import React from "react";
import { ArrowRight } from "lucide-react";

interface NftCardProps {
  tier: string;
  color: "blue" | "purple" | "green" | "gold";
  quantity: number;
  description: string;
  arrowDirection?: "right" | "none";
}

const NftCard: React.FC<NftCardProps> = ({
  tier,
  color,
  quantity,
  description,
  arrowDirection = "none",
}) => {
  const getGradient = () => {
    switch (color) {
      case "blue":
        return "from-neon-blue to-blue-400/70";
      case "purple":
        return "from-neon-purple to-purple-500/70";
      case "green":
        return "from-neon-green to-green-400/70";
      case "gold":
        return "from-yellow-300 to-yellow-600/70";
      default:
        return "from-neon-blue to-blue-400/70";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-sm">
        <div className="nft-card">
          <div className="nft-card-inner">
            <div className="space-y-3">
              <div
                className={`w-full h-32 rounded-lg bg-gradient-to-br ${getGradient()} flex items-center justify-center`}
              >
                <span className="text-2xl font-bold text-white">{tier}</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-center">{tier} NFT</h3>
                <div className="flex justify-center">
                  <span className="px-3 py-1 bg-[#1F2937] rounded-full text-sm">
                    Quantity: {quantity}
                  </span>
                </div>
                <p className="text-sm text-foreground/70 text-center">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {arrowDirection === "right" && (
        <div className="hidden lg:flex items-center justify-center mt-16 mx-4">
          <div className="w-10 h-10 rounded-full bg-[#1F2937] flex items-center justify-center">
            <ArrowRight className="text-neon-blue" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NftCard;
