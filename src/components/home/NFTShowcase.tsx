import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function NFTShowcase() {
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
      name: "Cyber Gorilla",
      description: "A fierce cybernetic gorilla from the future",
      image: "/images/cybernetic-gorilla-fierce-futuristic-illustration_477639-6715.avif",
    },
    {
      id: 2,
      name: "Crypto Bear",
      description: "A cool teddy bear with bling",
      image: "/images/crypto-bear-boss-cool-teddy-with-bling_1173476-4666.jpg",
    },
    {
      id: 3,
      name: "Galaxy NFT",
      description: "A beautiful gradient galaxy background",
      image: "/images/gradient-galaxy-background_52683-140335.avif",
    },
    {
      id: 4,
      name: "Ape Art",
      description: "Hand-drawn NFT style ape illustration",
      image: "/images/hand-drawn-nft-style-ape-illustration_23-2149611030.avif",
    },
    {
      id: 5,
      name: "Ape Collection",
      description: "Another hand-drawn NFT style ape",
      image: "/images/hand-drawn-nft-style-ape-illustration_23-2149622024.avif",
    }
  ];

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-24 bg-[#0A0B13] bg-dot-white/[0.05] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#00ffff]/20 via-purple-500/10 to-transparent opacity-20 blur-3xl transform rotate-12" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#00ffff]/20 via-purple-500/10 to-transparent opacity-20 blur-3xl transform -rotate-12" />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold tracking-tight"
          >
            <span className="text-[#00ffff]">NFT</span>{" "}
            <span className="text-white">Collections</span>
          </motion.h2>
        </div>

        {/* NFT Cards Container */}
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Cards Stack */}
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
                      position: 'absolute',
                      willChange: 'transform'
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 30,
                      mass: 0.5,
                      restSpeed: 0.5,
                      restDelta: 0.01
                    }}
                    onClick={() => handleCardClick(index)}
                    whileHover={isActive ? {
                      scale: 1.05,
                      transition: { 
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }
                    } : {}}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900/90 to-black backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#00ffff]/30 transition-all duration-300 group">
                      <div className="aspect-[2/3] relative overflow-hidden">
                        <motion.img
                          src={nft.image}
                          alt={nft.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          initial={false}
                          animate={{ scale: isActive ? 1 : 1.1 }}
                          transition={{ 
                            duration: 0.6,
                            ease: "easeInOut"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                          <motion.h3 
                            className="text-xl font-bold mb-2 bg-gradient-to-r from-[#00ffff] via-[#00ffff] to-purple-500 bg-clip-text text-transparent"
                            initial={false}
                            animate={{ 
                              opacity: isActive ? 1 : 0.8,
                              y: isActive ? 0 : 5
                            }}
                            transition={{ 
                              duration: 0.4,
                              ease: "easeOut"
                            }}
                          >
                            {nft.name}
                          </motion.h3>
                          <motion.p 
                            className="text-gray-300 text-sm leading-relaxed opacity-90"
                            initial={false}
                            animate={{ 
                              opacity: isActive ? 0.9 : 0.7,
                              y: isActive ? 0 : 5
                            }}
                            transition={{ 
                              duration: 0.4,
                              delay: 0.1,
                              ease: "easeOut"
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
              onClick={() => handleCardClick(currentIndex === 0 ? nfts.length - 1 : currentIndex - 1)}
              className="w-10 h-10 rounded-full bg-[#00ffff]/10 hover:bg-[#00ffff]/20 flex items-center justify-center text-[#00ffff] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </motion.button>

            <div className="flex gap-3">
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

            <motion.button
              onClick={() => handleCardClick(currentIndex === nfts.length - 1 ? 0 : currentIndex + 1)}
              className="w-10 h-10 rounded-full bg-[#00ffff]/10 hover:bg-[#00ffff]/20 flex items-center justify-center text-[#00ffff] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00ffff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10" />
    </section>
  );
}
