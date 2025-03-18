
import React from 'react';
import { Award, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const nftData = [
  {
    id: 1,
    name: 'Cosmic Explorer #032',
    image: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=1000',
    rarity: 'Common',
    project: 'Cosmic Explorers'
  },
  {
    id: 2,
    name: 'Stellar Guardian #105',
    image: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?fit=max&w=350',
    rarity: 'Platinum',
    project: 'Stellar Guardians'
  },
  {
    id: 3,
    name: 'Neon Drifter #077',
    image: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oT4ka0eSb-G2v_3q9Hoeq0PypqOV1O1wKQu5J-OMolOS7gBm6Sj1Q-L4GzHbKQ-v8mj3bKHuZYdB4z?auto=format&dpr=1&w=1000',
    rarity: 'Silver',
    project: 'Neon Drifters'
  },
  {
    id: 4,
    name: 'Empty Slot',
    image: '',
    rarity: '',
    project: ''
  }
];

const rarityColors = {
  'Common': 'border-neftit-common bg-neftit-common/20',
  'Platinum': 'border-neftit-platinum bg-neftit-platinum/20',
  'Silver': 'border-neftit-silver bg-neftit-silver/20',
  'Gold': 'border-neftit-gold bg-neftit-gold/20'
};

const NFTCard = ({ nft }: { nft: typeof nftData[0] }) => {
  if (nft.name === 'Empty Slot') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-morphism rounded-2xl flex flex-col items-center justify-center h-96 border border-dashed border-white/20 hover:border-neftit-purple/50 transition-all cursor-pointer group"
      >
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-neftit-purple/20 transition-all">
          <Plus className="w-8 h-8 text-white/50 group-hover:text-neftit-purple transition-all" />
        </div>
        <p className="text-white/50 group-hover:text-white transition-all">Add New NFT</p>
      </motion.div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-morphism rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:translate-y-[-5px]"
    >
      <div className="relative h-64">
        <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium ${rarityColors[nft.rarity as keyof typeof rarityColors]}`}>
          {nft.rarity}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-white mb-1">{nft.name}</h3>
        <p className="text-sm text-gray-400">{nft.project}</p>
      </div>
    </motion.div>
  );
};

const MyNFTs = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">My NFT Collection</h2>
        <button className="text-sm text-neftit-purple hover:text-neftit-indigo transition-colors">View All</button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nftData.map(nft => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
      
      {nftData.length === 0 && (
        <div className="glass-morphism rounded-2xl p-10 text-center">
          <Award className="h-16 w-16 text-neftit-purple/40 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No NFTs Yet</h3>
          <p className="text-white/60">Complete quests to earn your first NFT!</p>
        </div>
      )}
    </div>
  );
};

export default MyNFTs;
