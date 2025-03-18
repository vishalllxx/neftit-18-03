
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Gift, Flame, ArrowUpRight } from "lucide-react";

const stats = [
  {
    title: "Tasks Completed",
    value: "12",
    change: "+2 this week",
    icon: <Trophy className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "NFTs Claimed",
    value: "8",
    change: "+1 today",
    icon: <Gift className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "NFTs Burned",
    value: "5",
    change: "+0 this month",
    icon: <Flame className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "Upgrades",
    value: "3",
    change: "+1 this week",
    icon: <ArrowUpRight className="h-5 w-5 text-green-500" />,
  },
];

export const ActivityStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-black/50 border-gray-800">
          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
                <div className="p-2 bg-gray-800/50 rounded-full">{stat.icon}</div>
              </div>
              <div className="mt-1">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
