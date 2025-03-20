import { NFTCard } from "@/components/nft/NFTCard";
import { NFTProject } from "@/types/nft";
import { motion } from "framer-motion";

interface NFTGridProps {
  projects: NFTProject[];
  isLoading: boolean;
}

export const NFTGrid = ({ projects, isLoading }: NFTGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array(8).fill(0).map((_, index) => (
          <div 
            key={index} 
            className="relative aspect-square rounded-xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-loading" />
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
              <div className="h-4 bg-white/5 rounded w-3/4" />
              <div className="h-3 bg-white/5 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <NFTCard
            id={project.id}
            name={project.nftName}
            image={project.image}
            projectName={project.projectName}
            creator={project.owner}
            likes={0}
            neftReward={project.neftReward}
            endTime={project.endTime}
            owner={project.owner}
            supply={project.totalSupply}
            xpReward={project.xpReward}
            category={project.category}
            subcategory={project.subcategory}
            network={project.network}
            isOffchain={project.isOffchain || false}
            targetChain={project.targetChain}
            claimStatus={project.claimStatus || 'Unclaimed'}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Add this to your global CSS file (src/index.css or similar)
// @keyframes skeleton-loading {
//   0% {
//     transform: translateX(-100%);
//   }
//   100% {
//     transform: translateX(100%);
//   }
// }
// 
// .skeleton-loading {
//   animation: skeleton-loading 1.5s infinite;
// }
