import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { NeftitBackground } from "@/components/shared/NeftitBackground";
import Image from "next/image";

export function Hero() {
  return (
    <NeftitBackground>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-black border border-white/10 px-6 py-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-[#00ffff] mr-2" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#00ffff] to-purple-500 bg-clip-text text-transparent">
              The Next Generation of NFT Engagement
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00ffff] to-white/70">
              Transform Your NFT
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-purple-500 to-[#00ffff]">
              Portfolio Experience
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-[700px] text-lg text-gray-400 md:text-xl dark:text-gray-400"
          >
            Join the elite community of NFT collectors and creators. Experience gamified quests,
            exclusive rewards, and innovative features that redefine digital asset interaction.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            <div className="space-y-2">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-purple-500 to-[#00ffff] animate-gradient">50K+</h3>
              <p className="text-gray-400 text-sm font-medium tracking-wide">Active Users</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-purple-500 to-[#00ffff] animate-gradient">100K+</h3>
              <p className="text-gray-400 text-sm font-medium tracking-wide">NFTs Listed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-purple-500 to-[#00ffff] animate-gradient">1M+</h3>
              <p className="text-gray-400 text-sm font-medium tracking-wide">Tasks Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-purple-500 to-[#00ffff] animate-gradient">5M+</h3>
              <p className="text-gray-400 text-sm font-medium tracking-wide">NEFT Rewards</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 min-[400px]:items-center justify-center"
          >
            <Button
              size="lg"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffff_0%,#E0E7FF_50%,#00ffff_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 bg-black border-white/10 hover:bg-white/5"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Chain Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-4 mt-8"
          >
            <p className="text-sm text-gray-400 w-full text-center mb-2">Supported Chains</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "bnb",
                "polygon",
                "solana",
                "sui",
                "aptos",
                "base",
                "op",
                "avax",
                "arbitrum",
                "zksync"
              ].map((chain) => (
                <motion.div
                  key={chain}
                  className="relative w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={`/chain-logos/${chain}.svg`}
                    alt={`${chain} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ffff] rounded-full"
            initial={{
              opacity: Math.random(),
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [Math.random(), 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </NeftitBackground>
  );
}
