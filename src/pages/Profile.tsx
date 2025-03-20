import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainNav } from "@/components/layout/MainNav";
import ProfileHeader from "@/components/profile/ProfileHeader";
import MyNFTs from "@/components/profile/MyNFTs";
import CompletedQuests from "@/components/profile/CompletedQuests";
import { motion } from "framer-motion";

const Profile = () => {
  const profileData = {
    username: sessionStorage.getItem("username") || localStorage.getItem("username") || "NeftitWarrior",
    walletAddress: '0x1234...5678',
    xp: 380,
    coins: 3,
    level: 10,
    nextLevelXp: 500,
    avatar: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?fit=max&w=350"
  };

  return (
    <div className="min-h-screen bg-[#030407] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-[#030407] to-[#030407]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Content */}
      <MainNav />
      <main className="container relative mx-auto px-4 pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          <ProfileHeader {...profileData} />
          
          <Tabs defaultValue="nfts" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/5 border border-white/10 p-1 rounded-lg">
                <TabsTrigger 
                  value="nfts" 
                  className="data-[state=active]:bg-white/10 text-white px-8 py-2.5 rounded-md transition-all duration-200"
                >
                  My NFTs
                </TabsTrigger>
                <TabsTrigger 
                  value="quests" 
                  className="data-[state=active]:bg-white/10 text-white px-8 py-2.5 rounded-md transition-all duration-200"
                >
                  Completed Quests
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="nfts" className="mt-0 animate-in fade-in-50">
              <div className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-6">
                <MyNFTs />
              </div>
            </TabsContent>
            
            <TabsContent value="quests" className="mt-0 animate-in fade-in-50">
              <div className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-6">
                <CompletedQuests />
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default Profile;
