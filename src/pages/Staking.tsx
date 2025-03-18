import { MainNav } from "@/components/layout/MainNav";
import StarryBackground from "@/components/layout/StarryBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { useWallet } from "@/components/wallet/WalletProvider";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Flame,
  ImageIcon, 
  History,
  ArrowRight,
  AlertTriangle,
  Info,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { BurnHistory, BurnRule, NFTRarity } from "@/types/nft";

interface NFT {
  id: string;
  image: string;
  name: string;
  rarity: NFTRarity;
}

const burnRules: BurnRule[] = [
  { from: { rarity: 'Common', count: 5 }, to: { rarity: 'Platinum', count: 1 } },
  { from: { rarity: 'Platinum', count: 5 }, to: { rarity: 'Silver', count: 1 } },
  { from: { rarity: 'Silver', count: 5 }, to: { rarity: 'Gold', count: 1 } },
];

const BurningPage = () => {
  const { address } = useWallet();
  const [selectedNFTs, setSelectedNFTs] = useState<NFT[]>([]);
  const [previewNFT, setPreviewNFT] = useState<NFT | null>(null);
  const [isBurning, setIsBurning] = useState(false);

  // Mock data
  const mockNFTs: NFT[] = [
    { id: "1", image: "https://picsum.photos/200/200?1", name: "Common NFT #1", rarity: 'Common' },
    { id: "2", image: "https://picsum.photos/200/200?2", name: "Common NFT #2", rarity: 'Common' },
    { id: "3", image: "https://picsum.photos/200/200?3", name: "Common NFT #3", rarity: 'Common' },
    { id: "4", image: "https://picsum.photos/200/200?4", name: "Platinum NFT #1", rarity: 'Platinum' },
    { id: "5", image: "https://picsum.photos/200/200?5", name: "Silver NFT #1", rarity: 'Silver' },
  ];

  const mockBurnHistory: BurnHistory[] = [
    {
      id: "burn1",
      timestamp: "2024-03-15T12:00:00Z",
      burnedNFTs: [
        { id: "nft1", rarity: 'Common' },
        { id: "nft2", rarity: 'Common' },
        { id: "nft3", rarity: 'Common' },
        { id: "nft4", rarity: 'Common' },
        { id: "nft5", rarity: 'Common' },
      ],
      receivedNFT: { id: "platinum1", rarity: 'Platinum' },
    }
  ];

  const handleSelectNFT = (nft: NFT) => {
    if (selectedNFTs.find(selected => selected.id === nft.id)) {
      setSelectedNFTs(selectedNFTs.filter(selected => selected.id !== nft.id));
    } else {
      // Only allow selecting NFTs of the same rarity
      if (selectedNFTs.length === 0 || selectedNFTs[0].rarity === nft.rarity) {
        setSelectedNFTs([...selectedNFTs, nft]);
      } else {
        toast.error("You can only select NFTs of the same rarity");
      }
    }

    // Update preview if we have enough NFTs selected
    updateBurnPreview([...selectedNFTs, nft]);
  };

  const updateBurnPreview = (selected: NFT[]) => {
    if (selected.length === 0) {
      setPreviewNFT(null);
      return;
    }

    const rule = burnRules.find(rule => 
      rule.from.rarity === selected[0].rarity && 
      selected.length === rule.from.count
    );

    if (rule) {
      setPreviewNFT({
        id: "preview",
        image: "https://picsum.photos/200/200?preview",
        name: `${rule.to.rarity} NFT Preview`,
        rarity: rule.to.rarity,
      });
    } else {
      setPreviewNFT(null);
    }
  };

  const handleBurn = () => {
    setIsBurning(true);
    // Simulate burning process
    setTimeout(() => {
      toast.success("NFTs successfully burned!");
      setSelectedNFTs([]);
      setPreviewNFT(null);
      setIsBurning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      <StarryBackground />
      <MainNav />
      
      <main className="container mx-auto px-4 pt-24 pb-12 space-y-8 relative">
        {/* Header & Wallet */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 text-transparent bg-clip-text">
            NFT Burning
          </h1>
          <div className="flex items-center gap-3 glass backdrop-blur-xl bg-white/5 border-white/10 px-4 py-2 rounded-lg">
            <Flame className="w-4 h-4 text-red-400" />
            <span className="text-white/80">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          </div>
        </div>

        {/* Burning Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {burnRules.map((rule, index) => (
            <Card key={index} className="glass backdrop-blur-xl bg-white/5 border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">{rule.from.count}x</span>
                  <span className="text-white/80">{rule.from.rarity}</span>
                </div>
                <ArrowRight className="text-white/40" />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">{rule.to.count}x</span>
                  <span className="text-white/80">{rule.to.rarity}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* NFT Selection Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Your NFTs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockNFTs.map((nft) => (
              <Card 
                key={nft.id} 
                className={`glass backdrop-blur-xl bg-white/5 border-2 transition-all duration-200 overflow-hidden hover:scale-105 ${
                  selectedNFTs.find(selected => selected.id === nft.id)
                    ? "border-red-500"
                    : "border-white/10 hover:border-white/20"
                }`}
                onClick={() => handleSelectNFT(nft)}
                role="button"
              >
                <div className="p-3">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="aspect-square w-full rounded-lg object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
                  <span className="text-sm text-white/60">{nft.rarity}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Preview and Burn Section */}
        {selectedNFTs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Preview</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-5 gap-2">
                  {selectedNFTs.map((nft) => (
                    <img
                      key={nft.id}
                      src={nft.image}
                      alt={nft.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
              
              {previewNFT && (
                <div className="flex-1">
                  <Card className="glass backdrop-blur-xl bg-white/5 border-white/10 p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">You will receive:</h3>
                    <img
                      src={previewNFT.image}
                      alt={previewNFT.name}
                      className="w-40 h-40 rounded-lg object-cover mx-auto"
                    />
                    <p className="text-center mt-4 text-white/80">{previewNFT.name}</p>
                  </Card>
                </div>
              )}

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 shadow-lg hover:shadow-red-500/25"
                    disabled={!previewNFT || isBurning}
                  >
                    <Flame className="mr-2 h-4 w-4" />
                    {isBurning ? "Burning..." : "Burn NFTs"}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You are about to burn {selectedNFTs.length} {selectedNFTs[0]?.rarity} NFTs.
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-500 hover:bg-red-600"
                      onClick={handleBurn}
                    >
                      Confirm Burn
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        )}

        {/* Burn History */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <History className="h-6 w-6" />
            Burn History
          </h2>
          <div className="space-y-4">
            {mockBurnHistory.map((history) => (
              <Card key={history.id} className="glass backdrop-blur-xl bg-white/5 border-white/10 p-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-white/60">
                        {new Date(history.timestamp).toLocaleString()}
                      </p>
                      <p className="text-white">
                        Burned {history.burnedNFTs.length}x {history.burnedNFTs[0].rarity} NFTs
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="text-white/40" />
                  <div className="flex items-center gap-2">
                    <p className="text-white">
                      Received 1x {history.receivedNFT.rarity} NFT
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BurningPage;
