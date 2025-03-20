import React from 'react';
import { PencilLine, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProfileHeaderProps {
  username: string;
  walletAddress: string;
  xp: number;
  coins: number;
  level: number;
  avatar: string;
  nextLevelXp: number;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  walletAddress,
  xp,
  coins,
  level,
  avatar,
  nextLevelXp,
}) => {
  const navigate = useNavigate();
  const progressPercentage = (xp / nextLevelXp) * 100;

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast.success('Wallet address copied to clipboard');
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Avatar section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-4 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative">
              <img 
                src={avatar}
                alt={username} 
                className="w-32 h-32 rounded-full object-cover border-2 border-black/20" 
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Lvl {level}
            </div>
          </div>
          
          <Button
            onClick={handleEditProfile}
            variant="outline"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 flex items-center gap-2 transition-all duration-200"
          >
            <PencilLine className="w-4 h-4" />
            Edit Profile
          </Button>
        </motion.div>

        {/* Info section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{username}</h1>
            <button 
              onClick={copyWalletAddress}
              className="flex items-center gap-2 text-white/80 hover:text-white mx-auto md:mx-0 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-all duration-200 group border border-white/10"
            >
              <span className="font-mono text-sm">{walletAddress}</span>
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="flex items-center gap-6 max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <div>
              <div className="text-3xl font-bold text-white">{coins}</div>
              <div className="text-sm text-white/80">NEFT</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">{xp}</div>
              <div className="text-sm text-white/80">XP</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white/80">Level Progress</span>
              <span className="text-white font-medium">{xp}/{nextLevelXp} XP</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileHeader;
