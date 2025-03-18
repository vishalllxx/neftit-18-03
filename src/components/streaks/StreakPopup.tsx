import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Flame, Gift, X } from "lucide-react";
import confetti from "canvas-confetti";

interface StreakPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StreakPopup({ open, onOpenChange }: StreakPopupProps) {
  const [claimed, setClaimed] = useState(false);
  const [currentStreak] = useState(7); // Mock streak count - replace with actual data

  const launchConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999999,
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleClaim = () => {
    setClaimed(true);
    launchConfetti();
    setTimeout(() => {
      setClaimed(false);
      onOpenChange(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0A0A0F] border-white/10 text-white max-w-md">
        <DialogTitle className="sr-only">Daily Streak Rewards</DialogTitle>
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <AnimatePresence mode="wait">
          {!claimed ? (
            <motion.div
              key="claim"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-6"
            >
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                    <Flame className="h-10 w-10 text-orange-500" />
                  </div>
                  <Badge
                    className="absolute -top-2 -right-2 bg-orange-500/20 text-orange-500 border-orange-500/50"
                    variant="outline"
                  >
                    {currentStreak} Days
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">
                    {currentStreak} Day Streak!
                  </h2>
                  <p className="text-white/60">
                    Keep the momentum going! 
                  </p>
                </div>

                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <CalendarDays className="h-4 w-4" />
                  <span>Last checked in: Today</span>
                </div>

                <div className="space-y-4 w-full">
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Gift className="h-5 w-5 text-orange-500" />
                      <span className="font-medium">Daily Reward</span>
                    </div>
                    <Badge className="bg-orange-500/20 text-orange-500 border-orange-500/50">
                      1 NEFT
                    </Badge>
                  </div>

                  <Button
                    onClick={handleClaim}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Gift className="h-5 w-5 mr-2" />
                    Claim Today's Reward
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="py-12 text-center space-y-6"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 0.6,
                  times: [0, 0.5, 1],
                }}
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto flex items-center justify-center">
                  <Gift className="h-10 w-10 text-green-500" />
                </div>
              </motion.div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">
                  Congratulations! 
                </h2>
                <p className="text-white/60">
                  You've claimed your daily reward
                </p>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/50">
                  +1 NEFT
                </Badge>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
