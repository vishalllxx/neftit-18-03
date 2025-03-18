
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home,
  Award,
  Flame,
  Activity,
  Trophy,
  UserCircle,
  Settings,
  LogOut,
  Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useWallet } from "@/components/wallet/WalletProvider";

const menuItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Award, label: 'Discover', path: '/discover' },
  { icon: Flame, label: 'Burn', path: '/burn' },
  { icon: Activity, label: 'Activity', path: '/activity' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: UserCircle, label: 'Profile', path: '/profile', active: true },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: Info, label: 'How NEFTIT Works', path: '/how-it-works' }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { disconnect } = useWallet();

  const handleLogout = () => {
    disconnect();
    localStorage.setItem("isAuthenticated", "false");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <div className="w-20 md:w-64 h-screen bg-transparent glass-morphism fixed left-0 overflow-y-auto flex flex-col border-r border-white/10 shadow-lg">
      {/* Logo */}
      <div className="flex justify-center md:justify-start items-center h-20 px-4 border-b border-white/10">
        <div className="font-bold text-xl md:block hidden">
          <span className="text-2xl font-bold text-white">
            NEFT<span className="text-neon-blue">IT</span>
          </span>
        </div>
      </div>
      
      {/* Menu Items */}
      <div className="flex-1 py-8">
        <ul className="space-y-2 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${item.active 
                  ? 'bg-neftit-purple/20 text-white neon-glow' 
                  : 'text-gray-300 hover:bg-white/5'}`}
              >
                <item.icon className="h-5 w-5 md:mr-4" />
                <span className="hidden md:block">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Logout */}
      <div className="px-3 pb-6">
        <button 
          onClick={handleLogout}
          className="flex items-center px-4 py-3 rounded-xl w-full text-red-400 hover:bg-red-400/10 transition-colors"
        >
          <LogOut className="h-5 w-5 md:mr-4" />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
