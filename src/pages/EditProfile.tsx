import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit2, Check, Wallet, ChevronRight, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { Layout } from "@/components/layout/Layout";

interface ConnectedWallet {
  address: string;
  type: "evm" | "solana";
  isConnected: boolean;
}

interface SocialAccount {
  platform: "discord" | "x" | "google" | "telegram";
  username: string;
  isConnected: boolean;
  icon: string;
}

export default function EditProfile() {
  const [username, setUsername] = useState("neftit ranger");
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?fit=max&w=350");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  
  const [connectedWallets, setConnectedWallets] = useState<ConnectedWallet[]>([
    {
      address: "0x4F942090770B6f4Bb1...",
      type: "evm",
      isConnected: true
    }
  ]);

  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([
    { 
      platform: "discord", 
      username: "neftit#1234", 
      isConnected: true,
      icon: "/icons/discord.svg"
    },
    { 
      platform: "x", 
      username: "neftit", 
      isConnected: false,
      icon: "/icons/twitter.svg"
    },
    { 
      platform: "google", 
      username: "", 
      isConnected: false,
      icon: "/icons/google.svg"
    },
    { 
      platform: "telegram", 
      username: "", 
      isConnected: false,
      icon: "/icons/telegram.svg"
    }
  ]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
        setHasUnsavedChanges(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
    setHasUnsavedChanges(true);
  };

  const handleSaveChanges = () => {
    // Here you would implement the actual save logic
    setHasUnsavedChanges(false);
  };

  return (
    <Layout className="flex-grow bg-gradient-to-b from-[#0A0A0F] to-[#1A1A1F]">
      <div className="container max-w-4xl mx-auto pt-28 pb-12 px-4">
        <div className="flex items-center justify-between mb-8 sticky top-[72px] z-10 py-4 -mx-4 px-4 bg-gradient-to-b from-[#0A0A0F]/95 via-[#0A0A0F]/90 to-transparent backdrop-blur-sm transition-all duration-200">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Edit Profile
          </h1>
          <Button
            onClick={handleSaveChanges}
            disabled={!hasUnsavedChanges}
            className={cn(
              "px-6 gap-2",
              hasUnsavedChanges
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                : "opacity-50 cursor-not-allowed"
            )}
          >
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
        
        <div className="grid gap-6">
          {/* Profile Section */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative">
                  <Avatar className="h-32 w-32 ring-4 ring-black">
                    <AvatarImage src={avatarUrl} alt="Profile" className="object-cover" />
                    <AvatarFallback>NR</AvatarFallback>
                  </Avatar>
                  <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer rounded-full">
                    <Edit2 className="h-8 w-8 text-white" />
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>
              
              <div className="flex-grow space-y-4">
                <div>
                  <label className="text-sm font-medium text-white/60 mb-2 block">Username</label>
                  {isEditingUsername ? (
                    <div className="flex items-center gap-2 max-w-md">
                      <Input
                        value={username}
                        onChange={(e) => handleUsernameChange(e.target.value)}
                        className="bg-white/5 border-white/10 text-white text-lg"
                        placeholder="Enter username"
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setIsEditingUsername(false)}
                        className="text-green-500 hover:text-green-400 hover:bg-green-500/10"
                      >
                        <Check className="h-5 w-5" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-medium text-white">{username}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setIsEditingUsername(true)}
                        className="text-white/60 hover:text-white hover:bg-white/5"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Wallets Section */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Wallet className="h-5 w-5 text-blue-500" />
              Connected Wallets
            </h2>
            
            <div className="space-y-4">
              {connectedWallets.map((wallet, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm group hover:from-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                    <span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">
                      {wallet.address}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/60 hover:text-red-400 hover:bg-red-500/10"
                  >
                    Disconnect
                  </Button>
                </div>
              ))}
              
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20 hover:border-blue-500/40 hover:from-blue-500/20 hover:to-indigo-500/20"
                >
                  <div className="flex items-center justify-between w-full">
                    <span>Connect EVM Wallet</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </div>
                </Button>
                <Button 
                  variant="outline"
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/40 hover:from-purple-500/20 hover:to-pink-500/20"
                >
                  <div className="flex items-center justify-between w-full">
                    <span>Connect Solana Wallet</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Social Accounts Section */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6">Connected Socials</h2>
            <div className="grid grid-cols-2 gap-3">
              {socialAccounts.map((account, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={cn(
                    "h-14 relative group overflow-hidden",
                    account.isConnected
                      ? "bg-gradient-to-r from-white/10 to-white/5 border-white/20"
                      : "bg-black/20 hover:bg-white/5"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      {account.isConnected && (
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                      )}
                      <span className="capitalize font-medium">
                        {account.platform}
                      </span>
                    </div>
                    <span className="text-sm text-white/60">
                      {account.isConnected ? "Connected" : "Connect"}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
