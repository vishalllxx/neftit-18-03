import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainNav } from "@/components/layout/MainNav";
import ProfileHeader from "@/components/profile/ProfileHeader";
import MyNFTs from "@/components/profile/MyNFTs";
import CompletedQuests from "@/components/profile/CompletedQuests";
import StarryBackground from "@/components/layout/StarryBackground";

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
    <div className="min-h-screen bg-[#000000]">
      <StarryBackground />
      <MainNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex-1 p-8 overflow-y-auto scrollbar-thin">
          <ProfileHeader {...profileData} />
          
          <Tabs defaultValue="nfts" className="w-full animate-fade-in">
            <div className="flex justify-center mb-6">
              <TabsList className="glass-morphism bg-transparent border border-white/10">
                <TabsTrigger 
                  value="nfts" 
                  className="data-[state=active]:bg-neftit-purple/30 data-[state=active]:text-white data-[state=active]:shadow-none px-6"
                >
                  My NFTs
                </TabsTrigger>
                <TabsTrigger 
                  value="quests" 
                  className="data-[state=active]:bg-neftit-purple/30 data-[state=active]:text-white data-[state=active]:shadow-none px-6"
                >
                  Completed Quests
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="nfts" className="mt-0">
              <MyNFTs />
            </TabsContent>
            
            <TabsContent value="quests" className="mt-0">
              <CompletedQuests />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
