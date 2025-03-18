
import { Card } from "@/components/ui/card";
import { Lock, Gift } from "lucide-react";

interface Reward {
  days: number;
  description: string;
  isLocked: boolean;
  progress: number;
}

export function RewardCard({ reward }: { reward: Reward }) {
  return (
    <Card className={`glass backdrop-blur-xl bg-white/5 border-white/10 ${reward.isLocked ? 'opacity-50' : ''}`}>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className={`w-5 h-5 ${reward.isLocked ? 'text-gray-500' : 'text-primary'}`} />
            <h3 className="text-lg font-semibold text-white">{reward.days} Day Streak</h3>
          </div>
          {reward.isLocked && <Lock className="w-5 h-5 text-gray-500" />}
        </div>
        
        <p className="text-sm text-white/60">{reward.description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Progress</span>
            <span className="text-white">{reward.progress}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
              style={{ width: `${reward.progress}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
