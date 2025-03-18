
import React from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isNegative?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  icon, 
  title, 
  description,
  isNegative = false
}) => {
  return (
    <div className="benefit-card">
      <div className="flex flex-col items-center text-center">
        <div 
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
            isNegative 
              ? "bg-red-500/20 text-red-400" 
              : "bg-neon-blue/20 text-neon-blue"
          }`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
