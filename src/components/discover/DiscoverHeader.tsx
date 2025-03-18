import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface DiscoverHeaderProps {
  title: string;
  subtitle: string;
}

export const DiscoverHeader = ({ title, subtitle }: DiscoverHeaderProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#36F9F6]/5 via-[#FF2E63]/5 to-transparent rounded-3xl blur-3xl"></div>
      <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A0944] border border-[#36F9F6]/20 text-[#36F9F6] text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                Trending Projects
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A0944] border border-[#FF2E63]/20 text-[#FF2E63] text-sm font-medium">
                <Zap className="w-4 h-4" />
                High Rewards
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A0944] border border-[#4ADE80]/20 text-[#4ADE80] text-sm font-medium">
                <Star className="w-4 h-4" />
                Featured
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              {title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/submit-project">
              <Button size="lg" className="bg-gradient-to-r from-[#36F9F6] to-[#2A0944] hover:from-[#36F9F6]/90 hover:to-[#2A0944]/90 text-white px-8 h-14 rounded-xl text-lg font-medium transition-all duration-300 shadow-[0_0_30px_rgba(54,249,246,0.3)]">
                Submit Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
