import React from 'react';
import { PencilLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="glass-morphism rounded-2xl p-6 mb-8 animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar section */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              src={avatar}
              alt={username} 
              className="w-32 h-32 rounded-full object-cover border-2 border-neftit-purple shadow-lg" 
            />
            <span className="absolute bottom-0 right-0 bg-neftit-purple text-white text-xs font-bold px-2 py-1 rounded-full">
              Lvl {level}
            </span>
          </div>
          
          <button 
            onClick={handleEditProfile}
            className="px-4 py-2 text-sm bg-transparent border border-neftit-purple/50 text-neftit-purple rounded-lg transition-all hover:bg-neftit-purple/10 flex items-center gap-2"
          >
            <PencilLine size={16} />
            Edit Profile
          </button>
        </div>
        
        {/* Progress and activity section */}
        <div className="flex-1">
          <div className="mb-6">
            <div className="flex flex-col mb-4">
              <h2 className="text-2xl font-bold text-white">{username}</h2>
              <p className="text-gray-400 text-sm">{walletAddress}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-neftit-purple font-medium">{xp} XP</span>
                <span className="text-gray-500">|</span>
                <span className="text-neftit-purple font-medium">{coins} NEFT</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-neftit-purple">
                {level} lvl
              </span>
              <span className="text-sm text-neftit-purple">
                {nextLevelXp - xp} more XP for level up
              </span>
            </div>
            
            <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-neftit-blue to-neftit-purple rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
