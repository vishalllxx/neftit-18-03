
import React from 'react';
import { Trophy, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const questData = [
  {
    id: 1,
    title: 'First Steps in Web3',
    description: 'Complete your first on-chain transaction',
    completedDate: '2023-12-15',
    reward: {
      xp: 50,
      nft: 'Cosmic Explorer #032'
    },
    project: 'NEFTIT Onboarding'
  },
  {
    id: 2,
    title: 'Community Champion',
    description: 'Join the Discord server and introduce yourself',
    completedDate: '2023-12-17',
    reward: {
      xp: 30,
      nft: null
    },
    project: 'Community Engagement'
  },
  {
    id: 3,
    title: 'Social Butterfly',
    description: 'Follow NEFTIT on Twitter and retweet an announcement',
    completedDate: '2023-12-20',
    reward: {
      xp: 25,
      nft: null
    },
    project: 'Social Media Challenge'
  }
];

const QuestCard = ({ quest }: { quest: typeof questData[0] }) => {
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Date(quest.completedDate).toLocaleDateString(undefined, dateOptions);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-morphism rounded-xl p-6 hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="bg-neftit-purple/20 rounded-lg p-3 self-start">
          <Trophy className="h-6 w-6 text-neftit-purple" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-white mb-1">{quest.title}</h3>
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="h-3 w-3 mr-1" />
              {formattedDate}
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-4">{quest.description}</p>
          
          <div className="flex justify-between items-center border-t border-white/10 pt-4">
            <span className="text-sm text-gray-400">{quest.project}</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <Sparkles className="h-4 w-4 text-neftit-purple mr-1" />
                <span className="text-white font-medium">{quest.reward.xp} XP</span>
              </div>
              {quest.reward.nft && (
                <div className="px-2 py-1 bg-neftit-blue/20 rounded-md text-xs font-medium text-neftit-blue">
                  NFT Reward
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CompletedQuests = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Completed Quests</h2>
        <div className="text-sm text-neftit-purple">Total: {questData.length}</div>
      </div>
      
      <div className="space-y-4">
        {questData.map(quest => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
      
      {questData.length === 0 && (
        <div className="glass-morphism rounded-2xl p-10 text-center">
          <Trophy className="h-16 w-16 text-neftit-purple/40 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No Completed Quests Yet</h3>
          <p className="text-white/60">Start completing quests to earn rewards!</p>
        </div>
      )}
    </div>
  );
};

export default CompletedQuests;
