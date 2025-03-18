import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Wallet, Check, Trophy, Sparkles, Gem, ArrowRight, Info } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  type?: 'twitter' | 'discord' | 'wallet' | 'other';
}

interface NFTTaskListProps {
  tasks: Task[];
}

export const NFTTaskList = ({ tasks: initialTasks }: NFTTaskListProps) => {
  const [tasks, setTasks] = useState(initialTasks);
  
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = (completedTasks / totalTasks) * 100;
  
  const handleTaskComplete = (taskId: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success("Task status updated!");
  };

  const getTaskIcon = (type?: string) => {
    switch (type) {
      case 'twitter':
        return <Twitter className="h-5 w-5 text-white" />;
      case 'discord':
        return <MessageCircle className="h-5 w-5 text-white" />;
      case 'wallet':
        return <Wallet className="h-5 w-5 text-white" />;
      default:
        return <MessageCircle className="h-5 w-5 text-white" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Campaign Progress */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            Campaign Tasks
          </h2>
          <p className="text-gray-400">Complete tasks to earn exclusive rewards</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right space-y-1">
            <div className="text-sm text-gray-400">Tasks Completed</div>
            <div className="text-2xl font-bold text-white">{completedTasks}/{totalTasks}</div>
          </div>
          <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="text-xl font-bold text-white">{Math.round(completionPercentage)}%</div>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task, index) => (
          <motion.div 
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "bg-white/5 rounded-xl p-6 border",
              task.completed ? "border-white/10" : "border-white/10",
              "transition-all duration-200 hover:bg-white/[0.07] group"
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="p-3 rounded-xl bg-white/5">
                  {getTaskIcon(task.type)}
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors">
                    {task.title}
                  </h3>
                  {task.completed && (
                    <Badge variant="outline" className="bg-white/5 border-white/10 text-white">
                      <Check className="h-4 w-4 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
              </div>
              
              <Button 
                variant="outline"
                size="sm"
                className={cn(
                  "min-w-[120px] transition-all duration-200",
                  task.completed 
                    ? "bg-white/5 hover:bg-white/10 text-white border-white/10" 
                    : "bg-white/5 hover:bg-white/10 text-white border-white/10"
                )}
                onClick={() => handleTaskComplete(task.id)}
              >
                {task.completed ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Completed
                  </>
                ) : (
                  <>
                    Verify Task
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rewards */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Campaign Rewards</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Info className="h-4 w-4" />
                <span>NFTs will be claimable after campaign end</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-white" />
                  <span className="text-gray-400">XP Reward</span>
                </div>
                <div className="text-3xl font-bold text-white">10 XP</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Gem className="h-5 w-5 text-white" />
                  <span className="text-gray-400">NEFT Reward</span>
                </div>
                <div className="text-3xl font-bold text-white">10 NEFT</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Progress value={completionPercentage} className="w-40 h-2 [&>[role=progressbar]]:bg-white bg-white/5" />
            <div className="min-w-[140px] text-right">
              {completedTasks === totalTasks ? (
                <span className="text-white font-medium flex items-center gap-2 justify-end">
                  <Check className="h-5 w-5" />
                  All Tasks Completed
                </span>
              ) : (
                <span className="text-white font-medium">
                  {completionPercentage}% Complete
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
