
import { Trophy, Gamepad, Gem } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Gem className="h-6 w-6 text-purple-400" />,
    title: "Turn NFTs into Passive Income",
    description: "Why just collect when you can earn? Our platform lets you stake, rent, and trade NFTs to generate ongoing rewards.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    icon: <Gamepad className="h-6 w-6 text-blue-400" />,
    title: "Gaming That Pays You to Play",
    description: "Imagine a world where every game you play fills your wallet! Complete challenges, climb the leaderboards, and earn real NEFT tokens.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: <Trophy className="h-6 w-6 text-pink-400" />,
    title: "No More Blockchain Hassles",
    description: "Tired of gas fees and complicated swaps? Our platform ensures zero headaches when moving assets across chains.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  }
];

export const WhatIsNeftit = () => {
  return (
    <div className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
      
      <motion.div 
        className="text-center mb-20 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
          What is NEFTIT?
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Join the future of digital assets where collecting meets earning
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative mb-32 last:mb-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  <FeatureImage image={feature.image} />
                  <FeatureContent feature={feature} />
                </>
              ) : (
                <>
                  <FeatureContent feature={feature} />
                  <FeatureImage image={feature.image} />
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FeatureImage = ({ image }: { image: string }) => (
  <div className="relative group">
    <div className="absolute inset-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
    <div className="relative h-[400px] rounded-2xl overflow-hidden">
      <img 
        src={image} 
        alt="Feature"
        className="w-full h-full object-cover transform transition-transform duration-500 scale-105 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
    </div>
  </div>
);

const FeatureContent = ({ feature }: { feature: typeof features[0] }) => (
  <div className="relative space-y-6 p-6">
    <div className="h-14 w-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
      {feature.icon}
    </div>
    
    <h3 className="text-3xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
      {feature.title}
    </h3>
    
    <p className="text-white/60 text-lg leading-relaxed">
      {feature.description}
    </p>
  </div>
);
