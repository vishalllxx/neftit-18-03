import React, { useState } from 'react';
import { Share2, Twitter, MessageSquare, Award, RefreshCw, Trophy, Gift, Crown } from 'lucide-react';
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { topUsers, neftLeaderboard, nftLeaderboard, currentUser } from '@/data/leaderboardData';
import TopUserCard from '@/components/leaderboard/TopUserCard';
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable';

const Leaderboard = () => {
  const [timeFilter, setTimeFilter] = useState<'allTime' | 'thisMonth'>('allTime');
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleTimeFilterChange = (value: 'allTime' | 'thisMonth') => {
    setTimeFilter(value);
  };
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("Leaderboard Updated: The latest rankings have been loaded.");
    }, 1000);
  };
  
  const handleShare = (platform: 'twitter' | 'discord') => {
    const message = `🏆 Ranked #${currentUser.rank} on NEFTIT! Join the competition and climb the ranks! 🚀`;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      navigator.clipboard.writeText(message);
      toast.success("Message Copied: Share your achievement on Discord!");
    }
  };
  
  const handleBoostRank = () => {
    toast.success("Boost Your Rank: Buy more NEFT tokens or NFTs to climb up the leaderboard!");
  };
  
  return (
    <Layout className="bg-gradient-to-b from-[#0A0A0F] to-[#1A1A1F] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20">
      {/* Header */}
      <div className="container max-w-6xl mx-auto px-4 py-6">
        <div className="relative w-full mb-4 text-center">
          <div className="absolute -top-8 -left-2 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -top-8 left-16 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -top-8 left-32 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent relative leading-tight">
            <Crown className="inline-block w-8 h-8 mr-2 mb-1 text-yellow-500" />
            Leaderboard
          </h1>
          <p className="text-white/60 text-lg mt-2 relative">
            Compete with the best in the NEFTIT ecosystem
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-6 relative">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-purple-500" />
            <span className="text-white/60 text-sm">Your Rank: #{currentUser.rank}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-blue-500" />
            <span className="text-white/60 text-sm">Total Players: {neftLeaderboard.length}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4">
        <div className="pb-8">
          <div className="space-y-8">
            {/* Top users showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topUsers.map(user => (
                <TopUserCard 
                  key={user.id} 
                  user={user} 
                  displayType="neft" 
                />
              ))}
            </div>
            
            {/* Controls and filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="bg-black/40 border-white/10 hover:bg-white/5"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </Button>
                
                <div className="flex p-1 bg-black/40 rounded-lg border border-white/5">
                  <button
                    className={`px-3 py-1 text-sm rounded-md transition-all ${
                      timeFilter === 'allTime' 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'text-white/60 hover:text-white'
                    }`}
                    onClick={() => handleTimeFilterChange('allTime')}
                  >
                    All Time
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded-md transition-all ${
                      timeFilter === 'thisMonth' 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'text-white/60 hover:text-white'
                    }`}
                    onClick={() => handleTimeFilterChange('thisMonth')}
                  >
                    This Month
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="bg-black/40 border-white/10 hover:bg-white/5"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('discord')}
                  className="bg-black/40 border-white/10 hover:bg-white/5"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discord
                </Button>
                <Button 
                  onClick={handleBoostRank}
                  className="bg-purple-500 hover:bg-purple-600 text-white border-none"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Boost Rank
                </Button>
              </div>
            </div>
            
            {/* Leaderboard tabs */}
            <Tabs defaultValue="neft" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/40 border border-white/5">
                <TabsTrigger value="neft" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  NEFT Token Holders
                </TabsTrigger>
                <TabsTrigger value="nft" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                  NFT Holders
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="neft" className="mt-0">
                <LeaderboardTable 
                  users={neftLeaderboard} 
                  displayType="neft" 
                  currentUser={currentUser} 
                />
              </TabsContent>
              
              <TabsContent value="nft" className="mt-0">
                <LeaderboardTable 
                  users={nftLeaderboard} 
                  displayType="nft" 
                  currentUser={currentUser} 
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leaderboard;
