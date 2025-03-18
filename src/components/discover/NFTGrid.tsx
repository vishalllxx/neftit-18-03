
import { NFTCard } from "@/components/nft/NFTCard";
import { NFTProject } from "@/types/nft";

interface NFTGridProps {
  projects: NFTProject[];
  isLoading: boolean;
}

export const NFTGrid = ({ projects, isLoading }: NFTGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array(8).fill(0).map((_, index) => (
          <div key={index} className="aspect-square animate-pulse rounded-xl bg-white/5" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {projects.map((project) => (
        <NFTCard
          key={project.id}
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
      ))}
    </div>
  );
};
