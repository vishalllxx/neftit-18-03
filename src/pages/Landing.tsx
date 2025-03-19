import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Shield, Trophy, Users, Sparkles, Rocket } from "lucide-react";
import "@/styles/fonts.css"; // Make sure to create this file for font imports

// Features data
const features = [
  {
    title: "Daily Rewards",
    description: "Complete daily quests and earn exclusive rewards instantly",
    icon: Sparkles,
    gradient: "from-purple-400 to-cyan-400"
  },
  {
    title: "Fast Earnings",
    description: "Quick completion bonuses and instant reward distribution",
    icon: Zap,
    gradient: "from-cyan-400 to-emerald-400"
  },
  {
    title: "Secure Platform",
    description: "Advanced security measures to protect your digital assets",
    icon: Shield,
    gradient: "from-emerald-400 to-blue-400"
  },
  {
    title: "Global Community",
    description: "Join thousands of collectors from around the world",
    icon: Users,
    gradient: "from-blue-400 to-purple-400"
  }
];

// NFT data
const nfts = [
  {
    id: 1,
    name: "Fierce Euphoria",
    description: "Bold Energy, Dopamine Rush, Unmatched Spark",
    image: "nft sample images/cybernetic-gorilla-fierce-futuristic-illustration_477639-6715.avif",
  },
  {
    id: 2,
    name: "Digital Apex",
    description: "Supreme Power, Digital Dominance, Future Elite",
    image: "/nft sample images/crypto-bear-boss-cool-teddy-with-bling_1173476-4666.jpg",
  },
  {
    id: 3,
    name: "Cosmic Flow",
    description: "Celestial Energy, Infinite Potential, Star Power",
    image: "/nft sample images/gradient-galaxy-background_52683-140335.avif",
  },
  {
    id: 4,
    name: "Neon Dynasty",
    description: "Electric Aura, Cyber Supremacy, Digital Legacy",
    image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149611030.avif",
  },
  {
    id: 5,
    name: "Meta Sovereign",
    description: "Virtual Royalty, Web3 Pioneer, Digital Immortality",
    image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149622024.avif",
  }
];

// Add new data arrays after existing features and nfts arrays
const lovableFeatures = [
  {
    title: "Free to Join",
    description: "No hidden fees, just complete quests and earn rewards",
    icon: Rocket,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Fun & Interactive",
    description: "Engage with Web3 in a fresh, exciting way",
    icon: Sparkles,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Upgrade System",
    description: "Keep progressing and leveling up your collection",
    icon: Trophy,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Anti-Bot Protection",
    description: "We ensure a fair system for all users",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Global Access",
    description: "Anyone can participate, anytime, anywhere",
    icon: Users,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Verified Projects",
    description: "Only authentic Web3 projects in our ecosystem",
    icon: Zap,
    gradient: "from-violet-500 to-purple-500"
  }
];

const howItWorks = [
  {
    step: 1,
    title: "Complete Quests & Challenges",
    description: "Participate in social & interactive quests",
    bullets: [
      "Engage with the community",
      "Complete interactive tasks",
      "Solve exciting puzzles"
    ],
    icon: "🎯"
  },
  {
    step: 2,
    title: "Earn & Collect NFTs",
    description: "Every completed quest rewards you with a unique NFT",
    bullets: [
      "Earn unique NFTs",
      "Build your collection",
      "Get guaranteed rewards"
    ],
    icon: "🏆"
  },
  {
    step: 3,
    title: "Upgrade Your NFTs",
    description: "Start with Common NFTs and burn them to upgrade",
    bullets: [
      "5 Commons → 1 Platinum",
      "5 Platinum → 1 Silver",
      "5 Silver → 1 Gold"
    ],
    icon: "⭐"
  },
  {
    step: 4,
    title: "Showcase, Trade & Hold",
    description: "Trade your NFTs on leading marketplaces",
    bullets: [
      "Trade on marketplaces",
      "Display your collection",
      "Access exclusive perks"
    ],
    icon: "💎"
  }
];

const nftTiers = [
  {
    symbol: "C",
    tier: "Common",
    description: "Start your journey with Common NFTs",
    detail: "Complete quests to earn Common NFTs",
    gradient: "from-slate-400 to-zinc-400"
  },
  {
    symbol: "P",
    tier: "Platinum & Silver",
    description: "Burn & upgrade to higher tiers",
    detail: "5 Commons → 1 Platinum, 5 Platinum → 1 Silver",
    gradient: "from-purple-400 to-blue-400"
  },
  {
    symbol: "G",
    tier: "Gold",
    description: "Reach the exclusive Gold tier",
    detail: "5 Silver → 1 Gold (Super rare & exclusive)",
    gradient: "from-yellow-400 to-amber-400"
  }
];

const Landing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === nfts.length - 1 ? 0 : prevIndex + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-[#030407] relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-[#020203]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-cyan-500/5 to-emerald-500/5 backdrop-blur-3xl" />
      </div>

        <MainNav />

          {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            {/* Decorative Lines */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2">
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>
            <div className="absolute -top-32 left-1/4 -translate-x-1/2">
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>
            <div className="absolute -top-32 left-3/4 -translate-x-1/2">
              <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="text-center space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Collect, Upgrade,
                      </span>
                      <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Earn Rewards
                      </span>
              </motion.h1>

              <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              >
                Join the next generation of NFT collectors. Complete engaging quests, earn unique NFTs, and build your digital portfolio through our gamified platform.
              </motion.p>

                  <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center gap-4 pt-8"
              >
                <Link to="/auth">
                  <Button 
                    size="lg"
                    className="bg-white hover:bg-white/90 text-black font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Start Collecting
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white/10 text-white hover:bg-white/5 font-medium px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Explore More
                  </Button>
                </Link>
                  </motion.div>
            </div>

            {/* Bottom Curve */}
            <div className="absolute -bottom-48 left-0 right-0">
              <div className="w-full h-48 bg-gradient-to-b from-transparent to-black/20 rounded-[100%] blur-xl" />
            </div>
          </div>
        </div>
            </div>

      {/* Features Section */}
      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-maat">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the most innovative and rewarding NFT platform, designed for collectors of all levels.
              </p>
              </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 hover:border-purple-500/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  </motion.div>
                ))}
              </div>
            </div>
        </div>
            </div>

      {/* NFT Showcase Section */}
      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-maat">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most exclusive and sought-after NFT collections.
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex justify-center items-center">
              <div className="relative h-[500px] w-full max-w-[1400px] overflow-hidden">
                {nfts.map((nft, index) => {
                  const isActive = index === currentIndex;
                  const offset = index - currentIndex;

                  return (
                    <motion.div
                      key={nft.id}
                      className="absolute top-0 w-[320px] cursor-pointer"
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : 0.85,
                        opacity: isActive ? 1 : Math.abs(offset) <= 2 ? 0.6 : 0,
                        zIndex: isActive ? 30 : 10 - Math.abs(offset),
                        x: `calc(-50% + ${offset * 220}px)`,
                      }}
                      style={{
                        left: '50%',
                        willChange: 'transform',
                        position: 'absolute'
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        mass: 0.5
                      }}
                      onClick={() => {
                        setCurrentIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      whileHover={isActive ? {
                        scale: 1.05,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 25
                        }
                      } : {}}
                    >
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-xl border border-white/10 hover:border-purple-500/20 transition-all duration-300 group">
                        <div className="aspect-[2/3] relative overflow-hidden">
                          <motion.img
                            src={nft.image}
                            alt={nft.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            initial={false}
                            animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                            <motion.h3 
                              className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                              initial={false}
                              animate={{ 
                                opacity: isActive ? 1 : 0.8,
                                y: isActive ? 0 : 5
                              }}
                            >
                              {nft.name}
                            </motion.h3>
                <motion.p
                              className="text-gray-400 text-sm leading-relaxed"
                              initial={false}
                              animate={{ 
                                opacity: isActive ? 0.9 : 0.7,
                                y: isActive ? 0 : 5
                              }}
                            >
                              {nft.description}
                </motion.p>
              </div>
                      </div>
                      </div>
                  </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <motion.button
                onClick={() => {
                  setCurrentIndex(currentIndex === 0 ? nfts.length - 1 : currentIndex - 1);
                  setIsAutoPlaying(false);
                }}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex gap-3">
                {nfts.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      index === currentIndex 
                      ? "w-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400" 
                      : "w-2 bg-white/20 hover:bg-white/30"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => {
                  setCurrentIndex(currentIndex === nfts.length - 1 ? 0 : currentIndex + 1);
                  setIsAutoPlaying(false);
                }}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Users Love NEFTIT Section */}
      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-maat">
              Why Users Love NEFTIT
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of users already collecting and upgrading NFTs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lovableFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, ${feature.gradient})`
                  }}
                />
                <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 shadow-lg`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-maat">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your journey to rare NFTs in four simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 transform -translate-y-1/2 hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                  <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-purple-500/20 transition-all duration-500">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-6xl opacity-50">{step.icon}</span>
                      <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="flex items-center text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 mr-3" />
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Get Your Favorite Web3 Projects Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-5xl lg:text-6xl font-bold text-white font-maat leading-tight">
                  Get Your Favorite Web3 Projects NFTs
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Collect, trade, and showcase exclusive NFTs from the most innovative Web3 projects in the ecosystem.
                </p>
                <div className="pt-4">
                  <Link to="/explore">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium px-8 py-6 text-lg rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    >
                      Explore NFTs
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-square">
                  <img 
                    src="/nft sample images/cybernetic-gorilla-fierce-futuristic-illustration_477639-6715.avif"
                    alt="Featured NFT"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl" />
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                    animate={{
                      y: [0, 10, 0],
                      x: [0, 10, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* The NEFTIT NFT System Section */}
      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-maat">
              The NEFTIT NFT System
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Upgrade your NFTs for maximum rarity & exclusivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {nftTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, ${tier.gradient})`
                  }}
                />
                <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center mb-6 mx-auto`}>
                    <span className="text-3xl font-bold text-white">{tier.symbol}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                    {tier.tier}
                  </h3>
                  <p className="text-gray-400 text-center mb-4">
                    {tier.description}
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    {tier.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Start Your NFT Journey Section */}
      <div className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-3xl text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 backdrop-blur-xl" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-maat">
                  Start Your NFT Journey Today
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Engage. Collect. Upgrade. Be Part of the Future of NFTs!
                </p>
                <Link to="/auth">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium px-12 py-6 text-xl rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    Join Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
