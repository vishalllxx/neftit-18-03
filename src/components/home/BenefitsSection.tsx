
import { motion } from "framer-motion";
import { Users, Rocket, Target, Gift, Coins, Shield, ChartBar, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefitCategories = [
  {
    title: "For Users",
    icon: <Users className="h-6 w-6 text-purple-400" />,
    benefits: [
      { icon: <Gift />, text: "Earn free NFTs by completing simple tasks" },
      { icon: <Coins />, text: "Stake, trade, or burn NFTs to unlock rare collectibles" },
      { icon: <Zap />, text: "Get exclusive airdrops from top Web3 projects" },
      { icon: <Shield />, text: "Be part of a real Web3 community, not bots" },
    ]
  },
  {
    title: "For Projects",
    icon: <Rocket className="h-6 w-6 text-blue-400" />,
    benefits: [
      { icon: <Users />, text: "Get instant exposure from 50+ partner projects" },
      { icon: <ChartBar />, text: "Gain real, engaged users who interact with your ecosystem" },
      { icon: <Coins />, text: "Run cost-effective campaigns with zero upfront fees" },
      { icon: <Zap />, text: "Utilize our gasless NFT deployment & automatic reward system" },
    ]
  },
  {
    title: "For Chains & Sponsors",
    icon: <Target className="h-6 w-6 text-pink-400" />,
    benefits: [
      { icon: <ChartBar />, text: "Increase on-chain activity and transactions" },
      { icon: <Users />, text: "Bring valuable Web3 users to your ecosystem" },
      { icon: <Rocket />, text: "Get premium visibility across NEFTIT's network" },
    ]
  }
];

export const BenefitsSection = () => {
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
            Why NEFTIT?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join the next generation of Web3 engagement and rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-white/5">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-white/5 mt-0.5">
                          {benefit.icon}
                        </div>
                        <span className="text-gray-300">
                          {benefit.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
