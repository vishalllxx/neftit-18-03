
import { achievementCategories } from "@/lib/achievements";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export function FilterTabs({ activeCategory, setActiveCategory }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 pb-6">
      {achievementCategories.map((category) => (
        <button
          key={category.value}
          onClick={() => setActiveCategory(category.value)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-all",
            activeCategory === category.value 
              ? "text-white" 
              : "text-muted-foreground hover:text-white/90"
          )}
        >
          {activeCategory === category.value && (
            <motion.span
              layoutId="activeTab"
              className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
