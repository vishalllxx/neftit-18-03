
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

interface BurnProgressProps {
  commonCount: number;
  platinumCount: number;
  silverCount: number;
  goldCount: number;
}

export const BurnProgress = ({
  commonCount,
  platinumCount,
  silverCount,
  goldCount
}: BurnProgressProps) => {
  return (
    <Card className="bg-black/40 backdrop-blur-xl border-white/10">
      <CardContent className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Burn Progress</h3>
          <Link to="/burn">
            <Button 
              variant="outline" 
              className="gap-2 border-purple-500/50 hover:border-purple-500"
            >
              <Flame className="w-4 h-4 text-purple-400" />
              Burn & Upgrade
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {[
            { label: "Common → Platinum", current: commonCount, required: 5, color: "bg-blue-500" },
            { label: "Platinum → Silver", current: platinumCount, required: 5, color: "bg-purple-500" },
            { label: "Silver → Gold", current: silverCount, required: 5, color: "bg-yellow-500" }
          ].map((tier, index) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span className="text-white/80">{tier.label}</span>
                <span className="text-white/60">
                  {tier.current}/{tier.required} NFTs
                </span>
              </div>
              <Progress 
                value={(tier.current / tier.required) * 100} 
                className={`h-2 ${tier.color}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex justify-between items-center text-sm text-white/60">
            <span>Current Gold NFTs:</span>
            <span className="text-yellow-400 font-semibold">{goldCount}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
