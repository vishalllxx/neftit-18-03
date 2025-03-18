
import { Button } from "@/components/ui/button";

interface WalletConnectionsProps {
  onConnect: (method: string) => void;
}

export function WalletConnections({ onConnect }: WalletConnectionsProps) {
  const wallets = [
    {
      name: "Phantom",
      icon: "https://i.imgur.com/IFgaR1p.png",
      onClick: () => onConnect("Phantom")
    },
    {
      name: "Metamask",
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png",
      onClick: () => onConnect("Metamask")
    },
    {
      name: "Keplr",
      icon: "https://i.imgur.com/sNfJwAh.png",
      onClick: () => onConnect("Keplr")
    },
    {
      name: "Trust Wallet",
      icon: "https://i.imgur.com/FZcJZpF.png",
      onClick: () => onConnect("Trust Wallet")
    },
    {
      name: "All Wallets",
      icon: "https://cdn-icons-png.flaticon.com/128/9329/9329863.png",
      onClick: () => onConnect("Other Wallet")
    }
  ];

  return (
    <div className="space-y-3">
      {wallets.map((wallet) => (
        <Button
          key={wallet.name}
          variant="outline"
          className="w-full bg-white/5 hover:bg-white/10 hover:scale-[1.02] transition-all border-0 text-white justify-between h-12"
          onClick={wallet.onClick}
        >
          <div className="flex items-center gap-2">
            <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
            {wallet.name}
          </div>
        </Button>
      ))}
    </div>
  );
}
