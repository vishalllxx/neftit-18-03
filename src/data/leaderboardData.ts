
export type User = {
  id: string;
  username: string;
  profileImage: string;
  neftBalance: number;
  nftCount: number;
  rank: number;
  previousRank: number;
};

export const topUsers: User[] = [
  {
    id: '1',
    username: 'CryptoWhale',
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 1250000,
    nftCount: 342,
    rank: 1,
    previousRank: 1,
  },
  {
    id: '2',
    username: 'NFTCollector',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 980000,
    nftCount: 286,
    rank: 2,
    previousRank: 3,
  },
  {
    id: '3',
    username: 'BlockchainDev',
    profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 920000,
    nftCount: 257,
    rank: 3,
    previousRank: 2,
  },
];

export const neftLeaderboard: User[] = [
  ...topUsers,
  {
    id: '4',
    username: 'TokenMaster',
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 850000,
    nftCount: 187,
    rank: 4,
    previousRank: 5,
  },
  {
    id: '5',
    username: 'CryptoPunk',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 790000,
    nftCount: 156,
    rank: 5,
    previousRank: 4,
  },
  {
    id: '6',
    username: 'MetaMask',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 670000,
    nftCount: 142,
    rank: 6,
    previousRank: 7,
  },
  {
    id: '7',
    username: 'DeFiKing',
    profileImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 640000,
    nftCount: 128,
    rank: 7,
    previousRank: 6,
  },
  {
    id: '8',
    username: 'EtherMiner',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 590000,
    nftCount: 112,
    rank: 8,
    previousRank: 8,
  },
  {
    id: '9',
    username: 'TokenTrader',
    profileImage: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 540000,
    nftCount: 97,
    rank: 9,
    previousRank: 11,
  },
  {
    id: '10',
    username: 'CryptoQueen',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 520000,
    nftCount: 89,
    rank: 10,
    previousRank: 9,
  },
];

export const nftLeaderboard: User[] = [
  topUsers[0],
  topUsers[1],
  topUsers[2],
  {
    id: '11',
    username: 'NFTGuru',
    profileImage: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 450000,
    nftCount: 231,
    rank: 4,
    previousRank: 5,
  },
  {
    id: '12',
    username: 'ArtCollector',
    profileImage: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 380000,
    nftCount: 218,
    rank: 5,
    previousRank: 4,
  },
  {
    id: '13',
    username: 'PixelMaster',
    profileImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 320000,
    nftCount: 195,
    rank: 6,
    previousRank: 8,
  },
  {
    id: '14',
    username: 'CryptoArtist',
    profileImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 290000,
    nftCount: 176,
    rank: 7,
    previousRank: 6,
  },
  {
    id: '15',
    username: 'RarityHunter',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 260000,
    nftCount: 158,
    rank: 8,
    previousRank: 7,
  },
  {
    id: '16',
    username: 'DigitalOwner',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 240000,
    nftCount: 143,
    rank: 9,
    previousRank: 10,
  },
  {
    id: '17',
    username: 'MetaVerse',
    profileImage: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
    neftBalance: 210000,
    nftCount: 134,
    rank: 10,
    previousRank: 9,
  },
];

// Current user (outside top 10)
export const currentUser: User = {
  id: '42',
  username: 'You',
  profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
  neftBalance: 120000,
  nftCount: 42,
  rank: 24,
  previousRank: 27,
};

// Generate more users for pagination demo
export const generateMoreUsers = (startRank: number, count: number): User[] => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    const rank = startRank + i;
    users.push({
      id: `gen-${rank}`,
      username: `User${rank}`,
      profileImage: `https://source.unsplash.com/random/300x300?user=${rank}`,
      neftBalance: Math.floor(500000 / rank + Math.random() * 10000),
      nftCount: Math.floor(250 / (rank / 5) + Math.random() * 10),
      rank,
      previousRank: rank + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3),
    });
  }
  return users;
};
