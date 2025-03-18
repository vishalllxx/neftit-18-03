import { MainNav } from "@/components/layout/MainNav";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Trophy, Star, Calendar } from "lucide-react";

const StreaksPage = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [longestStreak, setLongestStreak] = useState(14);
  const [totalXP, setTotalXP] = useState(2500);

  return (
    <div className="min-h-screen bg-[#000000]">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-white">Your Activity Streaks</h1>
            <p className="text-gray-300">Keep completing daily tasks to maintain your streak and earn bonus rewards!</p>
          </div>

          {/* Streak Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Current Streak</p>
                  <p className="text-2xl font-bold text-white">{currentStreak} Days</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Longest Streak</p>
                  <p className="text-2xl font-bold text-white">{longestStreak} Days</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/5 border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Total XP Earned</p>
                  <p className="text-2xl font-bold text-white">{totalXP} XP</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Calendar View */}
          <Card className="p-6 bg-white/5 border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Activity Calendar</h2>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                <Calendar className="w-4 h-4 mr-2" />
                View Full Calendar
              </Button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex items-center justify-center ${
                    i < 20 ? 'bg-white/10' : 'bg-white/5'
                  }`}
                >
                  <div className="text-sm text-white">{i + 1}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 bg-white/5 border-white/10">
            <h2 className="text-xl font-semibold text-white mb-6">Recent Achievements</h2>
            <div className="space-y-4">
              {[
                { title: '7 Day Streak', description: 'Maintained activity for 7 consecutive days', date: '2 days ago' },
                { title: 'Early Bird', description: 'Completed task within first hour', date: '4 days ago' },
                { title: 'Task Master', description: 'Completed all daily tasks', date: '1 week ago' },
              ].map((achievement, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Trophy className="w-5 h-5 text-white" />
                    <div>
                      <p className="font-medium text-white">{achievement.title}</p>
                      <p className="text-sm text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-gray-300 border-white/10">
                    {achievement.date}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StreaksPage;
