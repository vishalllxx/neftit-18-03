import { motion } from "framer-motion";
import { Search, Filter, Boxes, Clock, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const categories = [
    { name: "All Projects", icon: Boxes, color: "border-[#36F9F6]/20 text-[#36F9F6]" },
    { name: "Ending Soon", icon: Clock, color: "border-[#FF2E63]/20 text-[#FF2E63]" },
    { name: "High Rewards", icon: Zap, color: "border-[#4ADE80]/20 text-[#4ADE80]" },
    { name: "Featured", icon: Award, color: "border-purple-500/20 text-purple-400" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
          <Input 
            type="text"
            placeholder="Search projects by name, category, or chain..."
            className="w-full pl-12 pr-4 h-12 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#36F9F6]/50 focus:ring-[#36F9F6]/20"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button 
          variant="outline" 
          size="lg"
          className="h-12 px-6 bg-black/20 border border-white/10 rounded-xl text-white hover:bg-white/5 hover:border-white/20 transition-colors duration-200"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2A0944] border ${category.color} text-sm font-medium transition-colors duration-200`}
          >
            <category.icon className="w-4 h-4" />
            {category.name}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
