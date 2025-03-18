import { useParams, useNavigate } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { NFTProject } from "@/types/nft";
import { ArrowLeft, Globe, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { NFTInfo } from "@/components/nft/NFTInfo";
import { NFTTaskList } from "@/components/nft/NFTTaskList";
import { featuredProjects } from "@/data/nftProjects";
import { motion } from "framer-motion";
import { FooterNew } from "@/components/footer/FooterNew";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<NFTProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const foundProject = featuredProjects.find(p => p.id === id);
    console.log("Found project:", foundProject);
    
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[#0A0A0F]">
        <StarryBackground />
        <MainNav />
        <main className="container relative mx-auto px-4 pt-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
              <div className="text-lg text-gray-400">Loading Project Details...</div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="relative min-h-screen bg-[#0A0A0F]">
        <StarryBackground />
        <MainNav />
        <main className="container relative mx-auto px-4 pt-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="space-y-4 text-center">
              <div className="text-4xl text-gray-400">😢</div>
              <div className="text-2xl font-bold text-white">Project Not Found</div>
              <div className="text-gray-400">The project you're looking for doesn't exist or has been removed.</div>
              <Button
                variant="outline"
                onClick={() => navigate('/discover')}
                className="mt-4 border-white/10 hover:bg-white/5 text-white"
              >
                Back to Discover
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000000] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('/dots.png')] opacity-20"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/30 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full filter blur-[100px]"></div>
      <div className="relative">
        <MainNav />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                className="border-white/10 hover:bg-white/5 text-white"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Discover
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 hover:bg-white/5 text-white"
                  onClick={() => window.open(project.website, '_blank')}
                >
                  <Globe className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 hover:bg-white/5 text-white"
                  onClick={() => window.open(project.twitter, '_blank')}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 hover:bg-white/5 text-white"
                  onClick={() => window.open(project.discord, '_blank')}
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Project Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Side - NFT Image */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-4"
              >
                <div className="sticky top-24 space-y-6">
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.nftName}
                      className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl relative transition-transform duration-300 group-hover:scale-[1.02]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e";
                      }}
                    />
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">Campaign Status</div>
                      <div className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                        Active
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Side - Project Info */}
              <div className="lg:col-span-8">
                <NFTInfo
                  projectName={project.projectName}
                  nftName={project.nftName}
                  xpReward={project.xpReward}
                  neftReward={project.neftReward}
                  startTime={project.startTime}
                  endTime={project.endTime}
                  description={project.description}
                  rarityDistribution={project.rarityDistribution}
                />
              </div>
            </div>

            {/* Tasks and Rewards Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <div className="max-w-4xl mx-auto">
                  <NFTTaskList tasks={project.tasks} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>
        <FooterNew />
      </div>
    </div>
  );
};

export default ProjectDetails;
