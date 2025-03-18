
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';

interface WalletContextType {
  isConnected: boolean;
  connect: (walletType: string) => Promise<void>;
  disconnect: () => void;
  address: string | null;
  walletType: string | null;
  currentChain: string | null;
  switchChain: (chainId: string) => Promise<boolean>;
  supportedChains: string[];
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  connect: async () => {},
  disconnect: () => {},
  address: null,
  walletType: null,
  currentChain: null,
  switchChain: async () => false,
  supportedChains: [],
});

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<string | null>(null);
  const [currentChain, setCurrentChain] = useState<string | null>(null);
  
  // Supported chains - would come from a configuration in a real app
  const supportedChains = ['Polygon', 'Ethereum', 'Arbitrum', 'Optimism', 'Base'];

  // Check for existing wallet connection on mount
  useEffect(() => {
    const savedWallet = localStorage.getItem('walletType');
    const savedAddress = localStorage.getItem('walletAddress');
    const savedChain = localStorage.getItem('currentChain');
    
    if (savedWallet && savedAddress) {
      setIsConnected(true);
      setWalletType(savedWallet);
      setAddress(savedAddress);
      setCurrentChain(savedChain || 'Polygon'); // Default to Polygon if not specified
    }
  }, []);

  const connect = async (type: string) => {
    try {
      // Mock wallet connection - in a real app, you would implement actual wallet connection logic
      console.log(`Connecting to ${type}...`);
      const mockAddress = `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 10)}`;
      
      setIsConnected(true);
      setAddress(mockAddress);
      setWalletType(type);
      setCurrentChain('Polygon'); // Default to Polygon
      
      // Save wallet info
      localStorage.setItem('walletType', type);
      localStorage.setItem('walletAddress', mockAddress);
      localStorage.setItem('currentChain', 'Polygon');
      
      toast.success('Wallet connected successfully!');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setIsConnected(false);
      setAddress(null);
      setWalletType(null);
      setCurrentChain(null);
      toast.error('Failed to connect wallet');
    }
  };

  const switchChain = async (chainId: string) => {
    try {
      // Mock chain switching - in a real app, you would implement actual chain switching logic
      console.log(`Switching to ${chainId}...`);
      
      if (!supportedChains.includes(chainId)) {
        toast.error(`Chain ${chainId} is not supported`);
        return false;
      }
      
      setCurrentChain(chainId);
      localStorage.setItem('currentChain', chainId);
      
      toast.success(`Switched to ${chainId}`);
      return true;
    } catch (error) {
      console.error('Failed to switch chain:', error);
      toast.error('Failed to switch chain');
      return false;
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setWalletType(null);
    setCurrentChain(null);
    localStorage.removeItem('walletType');
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('currentChain');
    toast.success('Wallet disconnected');
  };

  return (
    <WalletContext.Provider value={{ 
      isConnected, 
      connect, 
      disconnect, 
      address, 
      walletType,
      currentChain,
      switchChain,
      supportedChains
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);
