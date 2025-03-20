import { MainNav } from "@/components/layout/MainNav";
import { useState, useEffect } from "react";
import { SearchSection } from "@/components/discover/SearchSection";
import { NFTGrid } from "@/components/discover/NFTGrid";
import { DiscoverHeader } from "@/components/discover/DiscoverHeader";
import { featuredProjects } from "@/data/nftProjects";
import { Sparkles, Clock, TrendingUp, Gem, Filter, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/styles/fonts.css";

const Discover = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "trending", label: "Trending" },
    { id: "new", label: "New" },
    { id: "ending-soon", label: "Ending Soon" }
  ];

  const stats = [
    {
      icon: TrendingUp,
      label: "Active Projects",
      value: "50+",
      description: "Live quests available"
    },
    {
      icon: Clock,
      label: "Ending Soon",
      value: "12",
      description: "Limited time opportunities"
    },
    {
      icon: Sparkles,
      label: "Total XP Available",
      value: "25,000",
      description: "Experience points to earn"
    },
    {
      icon: Gem,
      label: "Total NEFT Rewards",
      value: "100,000",
      description: "Tokens available to claim"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030407] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-[#030407] to-[#030407]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <MainNav />
      <main className="container relative mx-auto px-4 pt-24 pb-12 space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-maat">
            Discover Web3 Projects
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore and engage with the most innovative Web3 projects. Complete tasks, earn rewards, and build your NFT collection.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 mt-1">{stat.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <SearchSection onSearch={handleSearch} />
            <div className="flex items-center gap-4">
              <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
                <TabsList className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  {categories.map(category => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="text-white data-[state=active]:bg-white/10"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
                <Filter className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Featured Projects</h2>
            <Button 
              variant="outline" 
              className="border-white/10 hover:bg-white/5 text-white"
            >
              View All
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
            <NFTGrid projects={featuredProjects} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discover;
