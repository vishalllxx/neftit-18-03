export type AchievementType = 
  | 'quest' 
  | 'common' 
  | 'rare' 
  | 'legendary' 
  | 'platinum' 
  | 'silver' 
  | 'gold' 
  | 'referral' 
  | 'burn' 
  | 'social' 
  | 'checkin';

export type AchievementStatus = 'not-started' | 'in-progress' | 'completed' | 'locked';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  type: AchievementType;
  tier: number;
  maxTier: number;
  reward: number;
  targetValue: number;
  currentValue: number;
  status: AchievementStatus;
  completedAt?: string;
  icon?: string;
}

// Groups of achievements for display purposes
export const achievementCategories = [
  { value: 'all', label: 'All' },
  { value: 'quest', label: 'Quests' },
  { value: 'nft', label: 'NFT Holdings' },
  { value: 'social', label: 'Social' },
  { value: 'referral', label: 'Referrals' },
  { value: 'burn', label: 'NFT Burning' },
  { value: 'checkin', label: 'Check-ins' },
];

// Function to generate NFT holder achievements
const generateNftHolderAchievements = (type: AchievementType, label: string): Achievement[] => {
  const tiers = [
    { tier: 1, target: 1, reward: 5 },
    { tier: 2, target: 10, reward: 10 },
    { tier: 3, target: 50, reward: 20 },
    { tier: 4, target: 100, reward: 50 }
  ];
  
  return tiers.map(({ tier, target, reward }) => ({
    id: `${type}-holder-${tier}`,
    title: `${label} NFT Holder ${tier}`,
    description: `Hold ${target} ${label} NFTs`,
    type,
    tier,
    maxTier: 4,
    reward,
    targetValue: target,
    currentValue: Math.floor(Math.random() * (target + 10)),
    status: 'not-started',
  }));
};

export const mockAchievements: Achievement[] = [
  // Quest Completion Achievements
  {
    id: 'quest-1',
    title: 'Quest Novice',
    description: 'Complete 1 Quest',
    type: 'quest',
    tier: 1,
    maxTier: 4,
    reward: 5,
    targetValue: 1,
    currentValue: 1,
    status: 'completed',
    completedAt: '2023-05-15T14:30:00Z',
  },
  {
    id: 'quest-2',
    title: 'Quest Explorer',
    description: 'Complete 10 Quests',
    type: 'quest',
    tier: 2,
    maxTier: 4,
    reward: 10,
    targetValue: 10,
    currentValue: 7,
    status: 'in-progress',
  },
  {
    id: 'quest-3',
    title: 'Quest Master',
    description: 'Complete 50 Quests',
    type: 'quest',
    tier: 3,
    maxTier: 4,
    reward: 20,
    targetValue: 50,
    currentValue: 0,
    status: 'not-started',
  },
  {
    id: 'quest-4',
    title: 'Quest Legend',
    description: 'Complete 100 Quests',
    type: 'quest',
    tier: 4,
    maxTier: 4,
    reward: 50,
    targetValue: 100,
    currentValue: 0,
    status: 'not-started',
  },
  
  // NFT Holder Achievements - add all types
  ...generateNftHolderAchievements('common', 'Common'),
  ...generateNftHolderAchievements('rare', 'Rare'),
  ...generateNftHolderAchievements('legendary', 'Legendary'),
  ...generateNftHolderAchievements('platinum', 'Platinum'),
  ...generateNftHolderAchievements('silver', 'Silver'),
  ...generateNftHolderAchievements('gold', 'Gold'),
  
  // Legendary Gold NFT Holder (Special Achievement)
  {
    id: 'legendary-gold-special',
    title: 'Legendary Gold NFT Holder',
    description: 'Hold a Legendary Gold NFT',
    type: 'gold',
    tier: 1,
    maxTier: 1,
    reward: 100,
    targetValue: 1,
    currentValue: 0,
    status: 'not-started',
  },
  
  // Referral Achievements
  {
    id: 'referral-1',
    title: 'Referral Starter',
    description: 'Refer 10 Friends',
    type: 'referral',
    tier: 1,
    maxTier: 3,
    reward: 10,
    targetValue: 10,
    currentValue: 3,
    status: 'in-progress',
  },
  {
    id: 'referral-2',
    title: 'Referral Pro',
    description: 'Refer 50 Friends',
    type: 'referral',
    tier: 2,
    maxTier: 3,
    reward: 25,
    targetValue: 50,
    currentValue: 0,
    status: 'not-started',
  },
  {
    id: 'referral-3',
    title: 'Referral Master',
    description: 'Refer 100 Friends',
    type: 'referral',
    tier: 3,
    maxTier: 3,
    reward: 50,
    targetValue: 100,
    currentValue: 0,
    status: 'not-started',
  },
  
  // Burn NFT Achievements
  {
    id: 'burn-1',
    title: 'NFT Burner',
    description: 'Burn 1 NFT',
    type: 'burn',
    tier: 1,
    maxTier: 4,
    reward: 5,
    targetValue: 1,
    currentValue: 1,
    status: 'completed',
    completedAt: '2023-06-10T09:15:00Z',
  },
  {
    id: 'burn-2',
    title: 'NFT Incinerator',
    description: 'Burn 5 NFTs',
    type: 'burn',
    tier: 2,
    maxTier: 4,
    reward: 10,
    targetValue: 5,
    currentValue: 4,
    status: 'in-progress',
  },
  {
    id: 'burn-3',
    title: 'NFT Demolisher',
    description: 'Burn 10 NFTs',
    type: 'burn',
    tier: 3,
    maxTier: 4,
    reward: 20,
    targetValue: 10,
    currentValue: 0,
    status: 'not-started',
  },
  {
    id: 'burn-4',
    title: 'NFT Obliterator',
    description: 'Burn 50 NFTs',
    type: 'burn',
    tier: 4,
    maxTier: 4,
    reward: 50,
    targetValue: 50,
    currentValue: 0,
    status: 'not-started',
  },
  
  // Social Achievements
  {
    id: 'social-twitter',
    title: 'Twitter Follower',
    description: 'Follow us on Twitter',
    type: 'social',
    tier: 1,
    maxTier: 1,
    reward: 5,
    targetValue: 1,
    currentValue: 1,
    status: 'completed',
    completedAt: '2023-04-20T11:30:00Z',
  },
  {
    id: 'social-discord',
    title: 'Discord Member',
    description: 'Join our Discord community',
    type: 'social',
    tier: 1,
    maxTier: 1,
    reward: 5,
    targetValue: 1,
    currentValue: 0,
    status: 'not-started',
  },
  {
    id: 'social-telegram',
    title: 'Telegram Member',
    description: 'Join our Telegram group',
    type: 'social',
    tier: 1,
    maxTier: 1,
    reward: 5,
    targetValue: 1,
    currentValue: 0,
    status: 'not-started',
  },
  
  // Daily Check-in Streaks
  {
    id: 'checkin-3days',
    title: '3-Day Streak',
    description: 'Check in for 3 consecutive days',
    type: 'checkin',
    tier: 1,
    maxTier: 4,
    reward: 5,
    targetValue: 3,
    currentValue: 3,
    status: 'completed',
    completedAt: '2023-05-25T10:00:00Z',
  },
  {
    id: 'checkin-7days',
    title: '7-Day Streak',
    description: 'Check in for 7 consecutive days',
    type: 'checkin',
    tier: 2,
    maxTier: 4,
    reward: 10,
    targetValue: 7,
    currentValue: 5,
    status: 'in-progress',
  },
  {
    id: 'checkin-30days',
    title: '30-Day Streak',
    description: 'Check in for 30 consecutive days',
    type: 'checkin',
    tier: 3,
    maxTier: 4,
    reward: 30,
    targetValue: 30,
    currentValue: 0,
    status: 'not-started',
  },
  {
    id: 'checkin-90days',
    title: '90-Day Streak',
    description: 'Check in for 90 consecutive days',
    type: 'checkin',
    tier: 4,
    maxTier: 4,
    reward: 100,
    targetValue: 90,
    currentValue: 0,
    status: 'not-started',
  },
];

// Helper functions for filtering
export const filterAchievements = (achievements: Achievement[], category: string): Achievement[] => {
  if (category === 'all') return achievements;
  
  if (category === 'nft') {
    return achievements.filter(achievement => 
      ['common', 'rare', 'legendary', 'platinum', 'silver', 'gold'].includes(achievement.type)
    );
  }
  
  return achievements.filter(achievement => achievement.type === category);
};

export const getCompletedAchievements = (achievements: Achievement[]): Achievement[] => {
  return achievements.filter(achievement => achievement.status === 'completed');
};

export const getAchievementCount = (achievements: Achievement[]): { 
  total: number; 
  completed: number; 
  inProgress: number; 
} => {
  const total = achievements.length;
  const completed = achievements.filter(a => a.status === 'completed').length;
  const inProgress = achievements.filter(a => a.status === 'in-progress').length;
  
  return { total, completed, inProgress };
};
