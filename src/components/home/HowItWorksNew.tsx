import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function HowItWorksNew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      title: "Connect & Engage",
      description: "Join our vibrant community and start engaging with Web3 projects",
      icon: "/icons/connect.svg",
      delay: 0.1
    },
    {
      title: "Complete Tasks",
      description: "Participate in social quests and interactive challenges",
      icon: "/icons/tasks.svg",
      delay: 0.2
    },
    {
      title: "Earn Rewards",
      description: "Get rewarded with unique NFTs and exclusive perks",
      icon: "/icons/rewards.svg",
      delay: 0.3
    },
    {
      title: "Level Up",
      description: "Upgrade your NFTs and unlock higher tier rewards",
      icon: "/icons/level-up.svg",
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,255,255,0.05)_2px,_transparent_0)] bg-[size:24px_24px]" />
      </div>
      
      {/* Gradient Effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00ffff] to-purple-500 opacity-10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00ffff] to-purple-500 opacity-10 blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
          >
            How It{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] to-purple-500">
              Works
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[700px] text-gray-300 text-lg md:text-xl"
          >
            Start earning rewards in just a few simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 max-w-7xl mx-auto relative">
          {/* Curved Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0">
            <svg width="100%" height="50" className="absolute top-1/2 left-0 -translate-y-1/2">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00ffff" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 50,25 C 150,25 200,25 300,25 C 400,25 450,25 550,25 C 650,25 700,25 800,25"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="0 1"
                style={{
                  pathLength: pathProgress,
                  opacity: 0.5
                }}
                className="glow-line"
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="hover-card-glow rounded-2xl transition-all duration-300">
                <motion.div 
                  className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 h-full min-h-[240px] relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="relative z-10">
                    <div className="mb-6 relative group-hover:scale-110 transition-transform duration-300">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00ffff]/10 to-purple-500/10 flex items-center justify-center">
                        <img src={step.icon} alt={step.title} className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00ffff] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-md leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Card Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Button 
            className="btn-glow bg-black/40 backdrop-blur-xl border border-white/10 text-white px-8 py-6 text-lg hover:scale-105 transition-transform duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
