
import { motion } from "framer-motion";
import { Shield, Zap, CoinsIcon, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Gasless Transactions",
    description: "Complete tasks and receive NFTs without paying gas fees",
    icon: <Shield className="w-6 h-6 text-green-400" />,
  },
  {
    title: "Multi-Chain Support",
    description: "Access rewards across multiple blockchain networks",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Token Rewards",
    description: "Earn native tokens from participating projects",
    icon: <CoinsIcon className="w-6 h-6 text-yellow-400" />,
  },
  {
    title: "Burn to Upgrade",
    description: "Burn lower-tier NFTs to mint rarer collectibles",
    icon: <Flame className="w-6 h-6 text-red-400" />,
  },
];

export const UniqueFeatures = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Unique Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What sets NEFTIT apart from traditional Web3 platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
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
