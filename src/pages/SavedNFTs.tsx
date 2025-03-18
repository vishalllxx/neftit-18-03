import { MainNav } from "@/components/layout/MainNav";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Filter, ArrowUpRight } from "lucide-react";

const SavedNFTs = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000]">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-white">Saved NFTs</h1>
            <p className="text-gray-300">Your curated collection of favorite NFT projects</p>
          </div>

          {/* Filter Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                All Projects
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                Recent
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                Favorited
              </Button>
            </div>
            <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
              <Filter className="h-4 w-4 text-white" />
            </Button>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-white/5 border-white/10 overflow-hidden">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-white hover:bg-white/10"
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">NFT Project {i + 1}</h3>
                  <p className="text-sm text-gray-300 mt-1">Description of NFT project {i + 1}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-300">Floor: 0.5 ETH</div>
                    <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/5">
                      View Details
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-white/10 text-white hover:bg-white/5"
              disabled={isLoading}
            >
              Load More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SavedNFTs;
