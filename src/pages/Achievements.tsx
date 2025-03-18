import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterTabs } from "@/components/FilterTabs";
import { AchievementGrid } from "@/components/AchievementGrid";
import { HistoryModal } from "@/components/HistoryModal";
import { mockAchievements, getAchievementCount } from "@/lib/achievements";
import { Award, ChevronDown, Trophy, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { MainNav } from "@/components/layout/MainNav";
import { Progress } from "@/components/ui/progress";

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [achievements, setAchievements] = useState(mockAchievements);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  // Stats about achievements
  const { total, completed, inProgress } = getAchievementCount(achievements);
  const completionPercentage = Math.round((completed / total) * 100);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <>
        <MainNav />
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#000] bg-dot-white/[0.1]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <Award className="w-16 h-16 text-[#00ffff] animate-pulse" />
              <motion.div
                className="absolute -inset-2 bg-[#00ffff]/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <h1 className="mt-6 text-2xl font-medium text-white">Loading Achievements...</h1>
          </motion.div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <MainNav />
      <div className="min-h-screen bg-[#000] bg-dot-white/[0.1]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-12 max-w-6xl pt-24"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Award className="w-12 h-12 text-[#00ffff]" />
                  <motion.div
                    className="absolute -inset-2 bg-[#00ffff]/20 rounded-full blur-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-purple-500">
                    Achievements
                  </h1>
                  <p className="text-gray-400 mt-1">
                    Complete tasks and earn exclusive NEFT rewards
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#00ffff]" />
                  <p className="text-2xl font-bold text-white">{completed}<span className="text-gray-400 text-lg"> / {total}</span></p>
                </div>
                <div className="mt-2">
                  <Progress value={completionPercentage} className="h-2 w-32" />
                </div>
              </div>
              <HistoryModal achievements={achievements} />
            </div>
          </div>
          
          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ffff] to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <Trophy className="w-8 h-8 text-[#00ffff]" />
                  <div>
                    <p className="text-3xl font-bold text-white">{total}</p>
                    <p className="text-gray-400">Total Achievements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-3xl font-bold text-white">{completed}</p>
                    <p className="text-gray-400">Completed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-black p-6 rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <Target className="w-8 h-8 text-orange-400" />
                  <div>
                    <p className="text-3xl font-bold text-white">{inProgress}</p>
                    <p className="text-gray-400">In Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <Separator className="my-8 opacity-20" />
          
          {/* Filter Tabs */}
          <FilterTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          
          {/* Achievements Grid */}
          <AnimatePresence mode="wait">
            <AchievementGrid 
              key={activeCategory}
              achievements={achievements} 
              activeCategory={activeCategory} 
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Achievements;
