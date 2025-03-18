import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History } from "lucide-react";
import { Achievement } from "@/lib/achievements";
import { motion } from "framer-motion";

interface HistoryModalProps {
  achievements: Achievement[];
}

export function HistoryModal({ achievements }: HistoryModalProps) {
  const completedAchievements = achievements.filter(
    (achievement) => achievement.status === 'completed'
  ).sort((a, b) => {
    if (!a.completedAt || !b.completedAt) return 0;
    return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-black border-white/10 hover:bg-white/5"
        >
          <History className="w-5 h-5 mr-2" />
          History
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-black border-white/10">
        <DialogTitle className="text-xl font-bold text-white mb-4">
          Achievement History
        </DialogTitle>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {completedAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {achievement.description}
                  </p>
                  {achievement.completedAt && (
                    <p className="text-xs text-gray-500 mt-2">
                      Completed on{" "}
                      {new Date(achievement.completedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>
                <div className="flex items-center bg-black px-3 py-1.5 rounded-full border border-white/10">
                  <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-purple-500">
                    +{achievement.reward} NEFT
                  </span>
                </div>
              </motion.div>
            ))}

            {completedAchievements.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400">No achievements completed yet.</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
