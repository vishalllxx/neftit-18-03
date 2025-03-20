import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Gift, Flame, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "@/styles/fonts.css";

// Types for our activity data
type ActivityType = "task" | "claim" | "burn";

interface ActivityItem {
  id: number;
  type: ActivityType;
  username: string;
  item: string;
  timestamp: string;
}

const Activity = () => {
  // Static activity data for demonstration
  const allActivities: ActivityItem[] = [
    {
      id: 1,
      type: "task",
      username: "You",
      item: "Completed 'Social Media Quest'",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "claim",
      username: "You",
      item: "Claimed Platinum NFT",
      timestamp: "Yesterday",
    },
    {
      id: 3,
      type: "burn",
      username: "You",
      item: "Burned 5 Common NFTs for 1 Rare NFT",
      timestamp: "3 days ago",
    },
    {
      id: 4,
      type: "task",
      username: "You",
      item: "Completed 'Twitter Share Quest'",
      timestamp: "1 week ago",
    },
    {
      id: 5,
      type: "claim",
      username: "You",
      item: "Claimed Silver NFT",
      timestamp: "2 weeks ago",
    },
    {
      id: 6,
      type: "burn",
      username: "You",
      item: "Burned 3 Common NFTs for 500 points",
      timestamp: "3 weeks ago",
    },
    {
      id: 7,
      type: "task",
      username: "You",
      item: "Completed 'Daily Login Streak'",
      timestamp: "1 month ago",
    },
    {
      id: 8,
      type: "claim",
      username: "You",
      item: "Claimed Gold NFT",
      timestamp: "1 month ago",
    },
  ];

  // State for filter
  const [filter, setFilter] = useState<ActivityType | "all">("all");

  // Filter activities based on selected filter
  const filteredActivities = filter === "all" 
    ? allActivities 
    : allActivities.filter(activity => activity.type === filter);

  // Count activities by type
  const taskCount = allActivities.filter(a => a.type === "task").length;
  const claimCount = allActivities.filter(a => a.type === "claim").length;
  const burnCount = allActivities.filter(a => a.type === "burn").length;

  // Get icon for activity type
  const getActivityIcon = (type: ActivityType) => {
    switch (type) {
      case "task":
        return <Trophy className="h-5 w-5 text-white" />;
      case "claim":
        return <Gift className="h-5 w-5 text-white" />;
      case "burn":
        return <Flame className="h-5 w-5 text-white" />;
      default:
        return <ChevronRight className="h-5 w-5 text-white" />;
    }
  };

  return (
    <Layout className="bg-[#030407]">
      <div className="h-full flex flex-col">
        <div className="container max-w-4xl mx-auto px-4 flex flex-col h-full">
          {/* Header */}
          <div className="flex flex-col items-start mb-6 py-4">
            <h1 className="text-5xl font-bold text-white font-maat mb-2">
              Activity Log
            </h1>
            <p className="text-white/70 text-lg mb-4">Track your journey in the NEFTIT ecosystem</p>

            {/* Quick Stats */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-white/60 text-sm">{taskCount} Tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-white/60 text-sm">{claimCount} Claims</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-white/60 text-sm">{burnCount} Burns</span>
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1 pr-4 -mr-4">
            <div className="space-y-6 pb-6">
              {/* Activity Stats Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard 
                  icon={<Trophy className="h-6 w-6 text-white" />}
                  title="Tasks Completed"
                  value={taskCount.toString()}
                  description="Quests and challenges completed"
                />
                <StatCard 
                  icon={<Gift className="h-6 w-6 text-white" />}
                  title="NFTs Claimed"
                  value={claimCount.toString()}
                  description="Unique NFTs in your collection"
                />
                <StatCard 
                  icon={<Flame className="h-6 w-6 text-white" />}
                  title="NFTs Burned"
                  value={burnCount.toString()}
                  description="NFTs burned for upgrades"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center mr-4">
                  <Filter className="h-4 w-4 text-white/60 mr-2" />
                  <span className="text-sm font-medium text-white/80">Filter by:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <FilterButton 
                    active={filter === "all"} 
                    onClick={() => setFilter("all")}
                  >
                    All Activities
                  </FilterButton>
                  <FilterButton 
                    active={filter === "task"} 
                    onClick={() => setFilter("task")}
                    icon={<Trophy className="h-4 w-4" />}
                  >
                    Tasks
                  </FilterButton>
                  <FilterButton 
                    active={filter === "claim"} 
                    onClick={() => setFilter("claim")}
                    icon={<Gift className="h-4 w-4" />}
                  >
                    Claims
                  </FilterButton>
                  <FilterButton 
                    active={filter === "burn"} 
                    onClick={() => setFilter("burn")}
                    icon={<Flame className="h-4 w-4" />}
                  >
                    Burns
                  </FilterButton>
                </div>
              </div>

              {/* Activity List */}
              <div className="space-y-3">
                {filteredActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors group cursor-pointer"
                  >
                    <div className={cn(
                      "flex-shrink-0 p-2 rounded-full transition-colors",
                      "bg-white/10"
                    )}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-medium text-white truncate group-hover:text-white/90 transition-colors">
                        {activity.item}
                      </p>
                      <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                        {activity.timestamp}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-white/20 group-hover:text-white/60 transition-colors">
                      <span className="text-sm">View Details</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </Layout>
  );
};

// Stat card component
const StatCard = ({ 
  icon, 
  title, 
  value,
  description
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string;
  description: string;
}) => {
  return (
    <Card className="border backdrop-blur-xl group hover:border-white/20 transition-colors duration-300 bg-white/5 border-white/10">
      <CardContent className="p-6 bg-gradient-to-br from-white/10 to-white/5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-white/60 mb-1">{title}</p>
            <p className="text-3xl font-bold text-white mb-2">{value}</p>
            <p className="text-sm text-white/40">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Filter button component
const FilterButton = ({ 
  children, 
  active, 
  onClick,
  icon
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
  icon?: React.ReactNode;
}) => {
  const getColorClasses = () => {
    const baseClasses = "px-3 py-1.5 text-sm rounded-lg flex items-center gap-2 transition-all duration-200";
    
    if (active) {
      return cn(baseClasses, "bg-white/10 text-white border-white/20");
    }

    return cn(
      baseClasses,
      "text-white/60 hover:text-white border-transparent",
      "hover:bg-white/5"
    );
  };

  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={getColorClasses()}
    >
      {icon}
      {children}
    </Button>
  );
};

export default Activity;
