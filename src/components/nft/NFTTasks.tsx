
import { NFTProject } from "@/types/nft";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface NFTTasksProps {
  project: NFTProject;
  onTaskComplete: (taskId: string) => void;
}

export const NFTTasks = ({ project, onTaskComplete }: NFTTasksProps) => {
  const completedTasks = project.tasks.filter(task => task.completed).length;
  const totalTasks = project.tasks.length;
  const progress = (completedTasks / totalTasks) * 100;

  return (
    <Card className="p-6 border-0 bg-gradient-to-br from-[#222222]/50 via-background/20 to-background/10 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Required Tasks</h2>
          <span className="text-sm text-white/70">
            {completedTasks} of {totalTasks} completed
          </span>
        </div>
        
        <Progress value={progress} className="h-2 bg-white/10" />
        
        <div className="space-y-4 mt-6">
          {project.tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 rounded-lg border border-[#333333] bg-[#222222]/50 backdrop-blur-sm"
            >
              <span className="font-medium text-white/80">{task.title}</span>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-white/10"
                disabled={task.completed}
                onClick={() => onTaskComplete(task.id)}
              >
                {task.completed ? "Completed" : "Complete"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
