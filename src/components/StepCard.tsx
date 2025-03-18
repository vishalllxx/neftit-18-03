
import React from "react";

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLeft: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description, isLeft }) => {
  return (
    <div className={`relative initially-hidden opacity-0 ${isLeft ? "md:mr-8" : "md:ml-8"}`}>
      <div className="step-card">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1F2937] flex items-center justify-center">
            {icon}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-foreground/70">{description}</p>
          </div>
        </div>
      </div>
      
      {/* Connector dot for timeline */}
      <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple z-10"
        style={{ 
          left: isLeft ? "auto" : "-12px", 
          right: isLeft ? "-12px" : "auto"
        }}
      ></div>
    </div>
  );
};

export default StepCard;
