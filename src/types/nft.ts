export interface NFTProject {
  id: string;
  projectName: string;
  nftName: string;
  image: string;
  endTime: string;
  startTime?: string;
  xpReward: number;
  neftReward: number;
  description: string;
  owner: string;
  totalSupply: number;
  levelRequirement: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  category: string;
  subcategory: string;
  taskStatus?: 'Not Started' | 'In Progress' | 'Completed';
  usdValue?: number;
  network: string;
  isOffchain: boolean; // Whether NFT is stored offline
  targetChain?: string; // The chain that the NFT will be bridged to when claimed
  claimStatus?: 'Unclaimed' | 'Claiming' | 'Claimed';
  website?: string;
  twitter?: string;
  discord?: string;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
    type?: 'twitter' | 'discord' | 'other';
  }[];
  rarityDistribution?: {
    legendary: number;
    rare: number;
    common: number;
  };
}

export type NFTRarity = 'Common' | 'Rare' | 'Legendary' | 'Platinum' | 'Silver' | 'Gold';

export interface NFTStatus {
  isOffchain: boolean;
  claimStatus: 'Unclaimed' | 'Claiming' | 'Claimed';
  currentChain?: string;
  targetChain?: string;
}

export interface BurnRule {
  from: {
    rarity: NFTRarity;
    count: number;
  };
  to: {
    rarity: NFTRarity;
    count: number;
  };
}

export interface BurnHistory {
  id: string;
  timestamp: string;
  burnedNFTs: {
    id: string;
    rarity: NFTRarity;
    chain?: string;
  }[];
  receivedNFT: {
    id: string;
    rarity: NFTRarity;
    chain?: string;
  };
}

export interface ClaimHistory {
  id: string;
  timestamp: string;
  nftId: string;
  fromChain: string;
  toChain: string;
  status: 'Pending' | 'Completed' | 'Failed';
  transactionHash?: string;
}

export interface Statistic {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
}
