
import { motion } from "framer-motion";
import { MessagesSquare, Gift, Flame, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "Complete Web3 Quests",
    description: "Follow, Retweet, Join Discord, Solve Puzzles, and more",
    icon: <MessagesSquare className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Earn & Collect NFTs",
    description: "Each completed task grants you a unique NFT from different Web3 projects",
    icon: <Gift className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Upgrade Your NFTs",
    description: "Use our burn-to-upgrade system to evolve your NFTs into higher rarity levels",
    icon: <Flame className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "Trade & Showcase",
    description: "Trade on popular marketplaces or showcase your unique collection",
    icon: <Wallet className="w-6 h-6 text-yellow-400" />,
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your journey to Web3 rewards in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
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
