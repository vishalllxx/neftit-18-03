
import { motion, useScroll, useTransform } from "framer-motion";
import { GitMerge, GitBranch, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

export const NFTSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const tiers = [
    {
      name: "Common",
      description: "Start your journey with Common NFTs",
      icon: <GitBranch className="w-6 h-6 text-blue-400" />,
      details: "Complete quests to earn Common NFTs",
      color: "from-blue-500/20 to-transparent"
    },
    {
      name: "Platinum & Silver",
      description: "Burn & upgrade to higher tiers",
      icon: <GitMerge className="w-6 h-6 text-purple-400" />,
      details: "5 Commons → 1 Platinum, 5 Platinum → 1 Silver",
      color: "from-purple-500/20 to-transparent"
    },
    {
      name: "Gold",
      description: "Reach the exclusive Gold tier",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      details: "5 Silver → 1 Gold (Super rare & exclusive)",
      color: "from-yellow-500/20 to-transparent"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-30" />
      
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto max-w-7xl relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            The NEFTIT NFT System
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Upgrade your NFTs for maximum rarity & exclusivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${tier.color} opacity-20`} />
                  <div className="relative z-10">
                    <div className="mb-4 p-3 rounded-xl bg-white/5 inline-block transform transition-transform hover:rotate-12 duration-300">
                      {tier.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {tier.name}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {tier.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {tier.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating orbs background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-72 h-72 rounded-full"
              style={{
                background: `radial-gradient(circle, ${
                  i === 0 ? 'rgba(139, 92, 246, 0.1)' : 
                  i === 1 ? 'rgba(236, 72, 153, 0.1)' : 
                  'rgba(59, 130, 246, 0.1)'
                }, transparent)`,
                left: `${i * 30}%`,
                top: `${i * 20}%`,
              }}
              animate={{
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
