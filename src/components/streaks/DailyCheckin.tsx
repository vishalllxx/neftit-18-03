
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Trophy, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function DailyCheckin() {
  const { toast } = useToast();
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem("streak");
    return saved ? JSON.parse(saved) : { count: 0, lastCheckin: null };
  });
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    localStorage.setItem("streak", JSON.stringify(streak));
  }, [streak]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (streak.lastCheckin) {
        const nextCheckin = new Date(streak.lastCheckin).getTime() + 24 * 60 * 60 * 1000;
        const now = new Date().getTime();
        const distance = nextCheckin - now;

        if (distance < 0) {
          setTimeLeft("");
        } else {
          const hours = Math.floor(distance / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          setTimeLeft(`${hours}h ${minutes}m`);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [streak.lastCheckin]);

  const handleCheckin = () => {
    const now = new Date();
    const lastCheckin = streak.lastCheckin ? new Date(streak.lastCheckin) : null;
    
    if (!lastCheckin || (now.getTime() - lastCheckin.getTime()) >= 24 * 60 * 60 * 1000) {
      setStreak(prev => ({
        count: prev.count + 1,
        lastCheckin: now.toISOString()
      }));
      toast({
        title: "Daily Check-in Successful! 🎉",
        description: `You've maintained a streak of ${streak.count + 1} days!`,
      });
    } else {
      toast({
        title: "Already Checked In ⏰",
        description: "Please wait 24 hours before your next check-in.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="glass p-6 rounded-lg space-y-4 animate-scale-in hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary animate-pulse" />
          Daily Streaks
        </h2>
        <span className="text-sm text-muted-foreground">
          {timeLeft && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Next check-in in: {timeLeft}
            </div>
          )}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Calendar className="h-5 w-5 text-primary" />
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Current Streak</span>
              <span className="text-sm font-medium">{streak.count} days</span>
            </div>
            <Progress 
              value={(streak.count % 7) * (100/7)} 
              className="h-2 bg-primary/20" 
            />
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          onClick={handleCheckin}
          disabled={!!timeLeft}
        >
          {timeLeft ? "Come back tomorrow!" : "Check in Today"}
        </Button>
      </div>
    </div>
  );
}
