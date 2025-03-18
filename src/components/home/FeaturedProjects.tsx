import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NeftitBackground } from "@/components/shared/NeftitBackground";

export function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === nfts.length - 1 ? 0 : prevIndex + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nfts = [
    {
      id: 1,
      name: "Fierce Euphoria",
      description: "Bold Energy, Dopamine Rush, Unmatched Spark",
      image: "/nft sample images/cybernetic-gorilla-fierce-futuristic-illustration_477639-6715.avif",
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

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <NeftitBackground variant="gradient" showParticles={false}>
      {/* Title */}
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold tracking-tight"
        >
          <span className="text-[#00ffff]">Featured</span>{" "}
          <span className="text-white">Projects</span>
        </motion.h2>
      </div>

      {/* Projects Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center">
          {/* Cards Stack */}
          <div className="relative h-[500px] w-full max-w-[600px]">
            {nfts.map((nft, index) => {
              const isActive = index === currentIndex;
              const offset = index - currentIndex;

              return (
                <motion.div
                  key={nft.id}
                  className="absolute top-0 left-0 right-0 w-full mx-auto cursor-pointer"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.93,
                    opacity: isActive ? 1 : offset === 1 ? 0.7 : offset === -1 ? 0.5 : 0,
                    y: isActive ? 0 : offset > 0 ? '52%' : '-52%',
                    zIndex: isActive ? 30 : 10 - Math.abs(offset),
                    rotateX: isActive ? 0 : offset > 0 ? 6 : -6
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 20,
                    mass: 1
                  }}
                  onClick={() => handleCardClick(index)}
                  whileHover={{
                    scale: isActive ? 1.02 : 0.95,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900/90 to-black backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#00ffff]/30 transition-all duration-300 group">
                    <div className="aspect-[2/1] relative overflow-hidden">
                      <motion.img
                        src={nft.image}
                        alt={nft.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        initial={false}
                        animate={{ scale: isActive ? 1 : 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
                    </div>
                    <div className="p-8 relative">
                      <div className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent" />
                      <motion.h3 
                        className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#00ffff] via-[#00ffff] to-purple-500 bg-clip-text text-transparent"
                        initial={false}
                        animate={{ 
                          opacity: isActive ? 1 : 0.8,
                          y: isActive ? 0 : 5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {nft.name}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-300 text-lg leading-relaxed opacity-90"
                        initial={false}
                        animate={{ 
                          opacity: isActive ? 0.9 : 0.7,
                          y: isActive ? 0 : 5
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {nft.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex flex-col items-center gap-3 absolute -right-16 top-1/2 -translate-y-1/2">
          {nfts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                index === currentIndex 
                ? "w-8 bg-[#00ffff]" 
                : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </NeftitBackground>
  );
}
