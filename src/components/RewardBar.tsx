
import React from "react";
import { Coins } from "lucide-react";

interface RewardBarProps {
  action: string;
  points: number;
  percentage: number;
  isSpecial?: boolean;
}

const RewardBar: React.FC<RewardBarProps> = ({
  action,
  points,
  percentage,
  isSpecial = false,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-foreground/80">{action}</span>
        <div className="flex items-center">
          <Coins
            size={16}
            className={`mr-1 ${isSpecial ? "text-neon-yellow" : "text-neon-blue"}`}
          />
          <span
            className={`font-semibold ${
              isSpecial ? "text-neon-yellow" : "text-neon-blue"
            }`}
          >
            +{points} NEFT
          </span>
        </div>
      </div>

      <div className="reward-bar">
        <div
          className="reward-bar-fill"
          style={{
            width: `${percentage}%`,
            background: isSpecial
              ? "linear-gradient(to right, #00f5d4, #fee440)"
              : undefined,
          }}
        ></div>
      </div>
    </div>
  );
};

export default RewardBar;
