import { useState } from "react";
import { motion } from "framer-motion";
import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { FooterNew } from "@/components/footer/FooterNew";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Flame, 
  ArrowRight,
  Check,
  Crown,
} from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

type NFTRarity = 'Common' | 'Rare' | 'Legendary';
type NFTTier = 'Project' | 'Platinum' | 'Silver' | 'Gold';

interface NFT {
  id: string;
  image: string;
  name: string;
  rarity: NFTRarity;
  tier: NFTTier;
  claimed: boolean;
}

const burnRules = {
  Common: { required: 5, result: { tier: 'Platinum' } },
  PlatinumCommon: { required: 5, result: { tier: 'Silver' } },
  SilverCommon: { required: 5, result: { tier: 'Gold' } },
  Rare: { required: 4, result: { tier: 'Platinum' } },
  PlatinumRare: { required: 4, result: { tier: 'Silver' } },
  SilverRare: { required: 4, result: { tier: 'Gold' } },
  Legendary: { required: 3, result: { tier: 'Platinum' } },
  PlatinumLegendary: { required: 3, result: { tier: 'Silver' } },
  SilverLegendary: { required: 3, result: { tier: 'Gold' } }
};

// Mock NFTs using local images
const mockNFTs: NFT[] = [
  { id: "1", image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149611030.avif", name: "Common NFT #1", rarity: 'Common', tier: 'Project', claimed: false },
  { id: "2", image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149611036.avif", name: "Common NFT #2", rarity: 'Common', tier: 'Project', claimed: false },
  { id: "3", image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149611054.avif", name: "Common NFT #3", rarity: 'Common', tier: 'Project', claimed: false },
  { id: "4", image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149619505.avif", name: "Common NFT #4", rarity: 'Common', tier: 'Project', claimed: false },
  { id: "5", image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149622021.avif", name: "Common NFT #5", rarity: 'Common', tier: 'Project', claimed: false },
  { id: "6", image: "/nft sample images/crypto-bear-boss-cool-teddy-with-bling_1173476-4666.jpg", name: "Rare NFT #1", rarity: 'Rare', tier: 'Project', claimed: false },
  { id: "7", image: "/nft sample images/cybernetic-gorilla-fierce-futuristic-illustration_477639-6715.avif", name: "Rare NFT #2", rarity: 'Rare', tier: 'Project', claimed: false },
  { id: "8", image: "/nft sample images/monkey-monster-cartoon-hat_545023-627.avif", name: "Rare NFT #3", rarity: 'Rare', tier: 'Project', claimed: false },
  { id: "9", image: "/nft sample images/hand-drawn-nft-style-ape-illustration_23-2149622024.avif", name: "Rare NFT #4", rarity: 'Rare', tier: 'Project', claimed: false },
  { id: "10", image: "/nft sample images/3d-rendering-holographic-layering_23-2150491112.avif", name: "Legendary NFT #1", rarity: 'Legendary', tier: 'Project', claimed: false },
  { id: "11", image: "/nft sample images/crypto-currency-token-like-bitcoin-visual-design-artwork_796368-21708.avif", name: "Legendary NFT #2", rarity: 'Legendary', tier: 'Project', claimed: false },
  { id: "12", image: "/nft sample images/hidden-mining-concept-illustration_114360-29618.avif", name: "Legendary NFT #3", rarity: 'Legendary', tier: 'Project', claimed: false },
];

const BurnPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | NFTRarity | NFTTier>('All');
  const [selectedNFTs, setSelectedNFTs] = useState<NFT[]>([]);
  const [burnStep, setBurnStep] = useState<'select' | 'confirm' | 'success'>('select');
  const [resultNFT, setResultNFT] = useState<{ rarity: NFTRarity; tier: NFTTier } | null>(null);

  // Filter NFTs based on selection
  const filteredNFTs = mockNFTs.filter(nft => {
    if (!nft.claimed) {
      if (selectedFilter === 'All') return true;
      if (['Common', 'Rare', 'Legendary'].includes(selectedFilter as NFTRarity)) {
        return nft.rarity === selectedFilter;
      }
      return nft.tier === selectedFilter;
    }
    return false;
  });

  const handleSelectNFT = (nft: NFT) => {
    if (selectedNFTs.length === 0) {
      setSelectedNFTs([nft]);
    } else {
      if (nft.rarity === selectedNFTs[0].rarity && nft.tier === selectedNFTs[0].tier) {
        const isAlreadySelected = selectedNFTs.find(selected => selected.id === nft.id);
        if (isAlreadySelected) {
          setSelectedNFTs(selectedNFTs.filter(selected => selected.id !== nft.id));
        } else {
          const rule = getRuleForNFT(selectedNFTs[0]);
          if (selectedNFTs.length < rule.required) {
            setSelectedNFTs([...selectedNFTs, nft]);
          } else {
            toast.error(`You can only select ${rule.required} NFTs for burning`);
          }
        }
      } else {
        toast.error("You can only select NFTs of the same type and tier");
      }
    }
  };

  const getRuleForNFT = (nft: NFT) => {
    const key = nft.tier === 'Project' 
      ? nft.rarity 
      : `${nft.tier}${nft.rarity}` as keyof typeof burnRules;
    return burnRules[key];
  };

  const canBurn = () => {
    if (selectedNFTs.length === 0) return false;
    const rule = getRuleForNFT(selectedNFTs[0]);
    return selectedNFTs.length === rule.required;
  };

  const getResultNFT = () => {
    if (selectedNFTs.length === 0) return null;
    const nft = selectedNFTs[0];
    const rule = getRuleForNFT(nft);
    return {
      rarity: nft.rarity,
      tier: rule.result.tier
    };
  };

  const handleBurn = () => {
    const result = getResultNFT();
    if (result) {
      setResultNFT(result);
      setBurnStep('success');
      setTimeout(() => {
        setSelectedNFTs([]);
        setBurnStep('select');
        setResultNFT(null);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <StarryBackground />
      <MainNav />

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="pt-12 pb-8 text-center space-y-4 max-w-2xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-white"
              >
                NFT Burning System
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-400"
              >
                Burn your NFTs to receive exclusive higher-tier NFTs
              </motion.p>
            </div>

            {/* Filter Bar */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-1">
              <Tabs defaultValue="All" className="w-full" onValueChange={(value) => setSelectedFilter(value as any)}>
                <TabsList className="w-full bg-transparent grid grid-cols-7 gap-1">
                  <TabsTrigger value="All" className="data-[state=active]:bg-white/10 text-white">All</TabsTrigger>
                  <TabsTrigger value="Common" className="data-[state=active]:bg-white/10 text-white">Common</TabsTrigger>
                  <TabsTrigger value="Rare" className="data-[state=active]:bg-white/10 text-white">Rare</TabsTrigger>
                  <TabsTrigger value="Legendary" className="data-[state=active]:bg-white/10 text-white">Legendary</TabsTrigger>
                  <TabsTrigger value="Platinum" className="data-[state=active]:bg-white/10 text-white">Platinum</TabsTrigger>
                  <TabsTrigger value="Silver" className="data-[state=active]:bg-white/10 text-white">Silver</TabsTrigger>
                  <TabsTrigger value="Gold" className="data-[state=active]:bg-white/10 text-white">Gold</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {burnStep === 'select' && (
              <div className="space-y-8">
                {/* NFT Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredNFTs.map((nft) => (
                    <motion.div
                      key={nft.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={cn(
                        "relative group cursor-pointer",
                        selectedNFTs.find(selected => selected.id === nft.id) 
                          ? "ring-2 ring-white/40 scale-[0.98] transition-all duration-200" 
                          : "hover:scale-[1.02] transition-all duration-200"
                      )}
                      onClick={() => handleSelectNFT(nft)}
                    >
                      <Card className="bg-white/5 border-white/10 overflow-hidden">
                        <CardContent className="p-4">
                          <div className="aspect-square rounded-lg overflow-hidden mb-3 relative group-hover:shadow-lg transition-all duration-200">
                            <img 
                              src={nft.image} 
                              alt={nft.name} 
                              className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                            />
                            {selectedNFTs.find(selected => selected.id === nft.id) && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Check className="h-8 w-8 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-sm font-medium text-white truncate">{nft.name}</h3>
                            <Badge 
                              variant="outline" 
                              className={cn(
                                "bg-white/5 border-white/10 text-white",
                                selectedNFTs.find(selected => selected.id === nft.id) && "bg-white/10"
                              )}
                            >
                              {nft.rarity}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Burn Button */}
                {selectedNFTs.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-4"
                  >
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="w-full bg-white/10 hover:bg-white/20 text-white border-white/10 h-14 text-lg"
                          disabled={!canBurn()}
                        >
                          <Flame className="mr-2 h-6 w-6" />
                          Burn {selectedNFTs.length} NFTs
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-[#0A0A0F] border-white/10 text-white">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Confirm NFT Burn</AlertDialogTitle>
                          <AlertDialogDescription className="text-gray-400">
                            You're about to burn {selectedNFTs.length} {selectedNFTs[0]?.rarity} NFTs to receive:
                            <div className="mt-4 p-4 bg-white/5 rounded-lg">
                              <div className="text-white text-lg font-medium flex items-center gap-2">
                                <Crown className="h-5 w-5" />
                                1 {getResultNFT()?.tier} {selectedNFTs[0]?.rarity} NFT
                              </div>
                            </div>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="bg-white/5 text-white hover:bg-white/10 border-white/10">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-white/10 hover:bg-white/20 text-white border-white/10"
                            onClick={handleBurn}
                          >
                            Confirm Burn
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </motion.div>
                )}
              </div>
            )}

            {burnStep === 'success' && resultNFT && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-16"
              >
                <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <Check className="h-16 w-16 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Congratulations!</h2>
                <p className="text-gray-400">
                  You have successfully received 1 {resultNFT.tier} {resultNFT.rarity} NFT
                </p>
                <Button
                  className="bg-white/10 hover:bg-white/20 text-white border-white/10"
                  onClick={() => setBurnStep('select')}
                >
                  Burn More NFTs
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <FooterNew />
    </div>
  );
};

export default BurnPage;
