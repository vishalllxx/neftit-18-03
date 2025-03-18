
import { Achievement, filterAchievements } from "@/lib/achievements";
import { AchievementCard } from "./AchievementCard";
import { motion } from "framer-motion";

interface AchievementGridProps {
  achievements: Achievement[];
  activeCategory: string;
}

export function AchievementGrid({ achievements, activeCategory }: AchievementGridProps) {
  const filteredAchievements = filterAchievements(achievements, activeCategory);
  
  return (
    <motion.div
      layout
      className="card-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {filteredAchievements.map((achievement) => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
      
      {filteredAchievements.length === 0 && (
        <div className="col-span-full flex justify-center items-center py-16">
          <p className="text-muted-foreground">No achievements found in this category.</p>
        </div>
      )}
    </motion.div>
  );
}
