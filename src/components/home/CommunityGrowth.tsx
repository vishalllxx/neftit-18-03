
import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const strategies = [
  {
    title: "Community First",
    description: "Build genuine connections with fellow Web3 enthusiasts",
    icon: <Users className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Targeted Rewards",
    description: "Receive rewards based on your interests and activity",
    icon: <Target className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Progressive System",
    description: "Level up to unlock exclusive opportunities and rewards",
    icon: <TrendingUp className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Social Sharing",
    description: "Share achievements and invite friends to earn more",
    icon: <Share2 className="w-6 h-6 text-pink-400" />,
  },
];

export const CommunityGrowth = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            Community Growth
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building a thriving Web3 community together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-400">
                    {strategy.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
