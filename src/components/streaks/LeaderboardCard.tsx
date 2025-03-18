
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface LeaderboardEntry {
  username: string;
  avatar: string;
  streakCount: number;
  position: number;
}

export function LeaderboardCard({ leaders }: { leaders: LeaderboardEntry[] }) {
  return (
    <Card className="glass backdrop-blur-xl bg-white/5 border-white/10">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-semibold text-white">Streak Leaderboard</h2>
        </div>
        
        <div className="space-y-4">
          {leaders.map((leader) => (
            <div
              key={leader.username}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium text-white/60 w-6">
                  #{leader.position}
                </span>
                <Avatar>
                  <AvatarImage src={leader.avatar} />
                  <AvatarFallback>{leader.username[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-white">{leader.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/80">{leader.streakCount}</span>
                <span className="text-orange-500">🔥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
