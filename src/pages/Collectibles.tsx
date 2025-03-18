import { MainNav } from "@/components/layout/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Package, Star } from "lucide-react";

const Collectibles = () => {
  const mockCollectibles = [
    {
      id: 1,
      name: "Digital Art #1",
      rarity: "Rare",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      xpValue: 100,
    },
    {
      id: 2,
      name: "Special Edition",
      rarity: "Epic",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      xpValue: 250,
    },
    {
      id: 3,
      name: "Limited NFT",
      rarity: "Legendary",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      xpValue: 500,
    },
  ];

  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gradient">My Collectibles</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
              <Trophy className="w-5 h-5 text-primary" />
              <span>1,250 XP</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
              <Star className="w-5 h-5 text-accent" />
              <span>450 Points</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCollectibles.map((item) => (
            <Card key={item.id} className="glass overflow-hidden hover:scale-105 transition-transform duration-200">
              <div className="aspect-square relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-sm text-accent">{item.rarity}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span>Collectible #{item.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span>{item.xpValue} XP</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Collectibles;