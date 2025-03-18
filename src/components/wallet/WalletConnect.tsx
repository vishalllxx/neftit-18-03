import { useWallet } from "./WalletProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Wallet, WalletCards, ChevronDown, Network } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export function WalletConnect() {
  const { isConnected, connect, disconnect, address, walletType, currentChain, switchChain, supportedChains } = useWallet();
  const [open, setOpen] = useState(false);

  const mockWallets = [
    { id: 'metamask', name: 'MetaMask', icon: '🦊' },
    { id: 'phantom', name: 'Phantom', icon: '👻' },
    { id: 'walletconnect', name: 'WalletConnect', icon: '🔗' },
  ];

  const handleConnect = async (walletId: string) => {
    try {
      await connect(walletId);
      setOpen(false);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const handleSwitchChain = async (chain: string) => {
    await switchChain(chain);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {!isConnected ? (
          <Button 
            variant="outline" 
            className="gap-2"
          >
            <WalletCards className="h-4 w-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1 px-2">
                  <Network className="h-3.5 w-3.5" />
                  <span className="text-xs">{currentChain}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Switch Network</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {supportedChains.map((chain) => (
                  <DropdownMenuItem 
                    key={chain}
                    onClick={() => handleSwitchChain(chain)}
                    className="cursor-pointer"
                  >
                    {chain === currentChain && (
                      <Badge variant="outline" className="mr-2 h-5 w-1.5 bg-green-500/20 border-0"></Badge>
                    )}
                    {chain}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="outline" 
              size="sm"
              className="gap-2 h-8"
              onClick={handleDisconnect}
            >
              <Wallet className="h-3.5 w-3.5" />
              <span className="hidden sm:inline text-xs">{address?.slice(0, 4)}...{address?.slice(-4)}</span>
            </Button>
          </div>
        )}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to connect with our platform
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {mockWallets.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => handleConnect(wallet.id)}
            >
              <span>{wallet.icon}</span>
              <span>{wallet.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
