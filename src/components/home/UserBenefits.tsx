
import { motion } from "framer-motion";
import { CircleDollarSign, Gamepad2, Flame, Shield, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "Free to Join",
    description: "No hidden fees, just complete quests and earn rewards",
    icon: <CircleDollarSign className="w-6 h-6 text-green-400" />,
    image: "/lovable-uploads/free-to-join.png"
  },
  {
    title: "Fun & Interactive",
    description: "Engage with Web3 in a fresh, exciting way",
    icon: <Gamepad2 className="w-6 h-6 text-blue-400" />,
    image: "/lovable-uploads/interactive.png"
  },
  {
    title: "Upgrade System",
    description: "Keep progressing and leveling up your collection",
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    image: "/lovable-uploads/upgrade.png"
  },
  {
    title: "Anti-Bot Protection",
    description: "We ensure a fair system for all users",
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    image: "/lovable-uploads/protection.png"
  },
  {
    title: "Global Access",
    description: "Anyone can participate, anytime, anywhere",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    image: "/lovable-uploads/global.png"
  }
];

export const UserBenefits = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[#0c0c0e]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e12]/50 via-[#0c0c0e] to-[#0c0c0e]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Why Users Love NEFTIT
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of users already collecting and upgrading NFTs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#16161a] border-0 rounded-xl overflow-hidden shadow-lg shadow-black/20">
                <div className="relative h-[140px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                  {/* Image background with gradient overlay */}
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23252530'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[#252530]">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
