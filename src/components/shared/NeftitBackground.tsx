import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeftitBackgroundProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "minimal";
  className?: string;
  showParticles?: boolean;
  showGradientOrbs?: boolean;
}

export function NeftitBackground({
  children,
  variant = "default",
  className,
  showParticles = true,
  showGradientOrbs = true,
}: NeftitBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000] bg-dot-white/[0.1]",
        className
      )}
    >
      {/* Gradient Orbs */}
      {showGradientOrbs && variant !== "minimal" && (
        <>
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00ffff] to-purple-500 opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00ffff] to-purple-500 opacity-20 blur-3xl" />
        </>
      )}

      {/* Gradient Overlay for gradient variant */}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-black" />
      )}

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Animated Particles */}
      {showParticles && variant !== "minimal" && (
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
      )}
    </div>
  );
}
