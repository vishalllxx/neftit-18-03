import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Settings,
  LogOut,
  Clock, 
  Award,
  Gift,
  Trophy,
  Info,
  ChevronRight,
} from "lucide-react";
import { useReferral } from "@/hooks/useReferral";
import ReferralModal from "@/components/referral/ReferralModal";
import { Toaster } from "sonner";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NavigationItemType {
  name: string;
  icon: React.ReactElement;
  path?: string;
  onClick?: () => void;
  badge?: string | number;
  description?: string;
  color?: string;
}

export const navigationItems: NavigationItemType[] = [
  {
    name: "Activity",
    icon: <Clock size={20} />,
    path: "/activity",
    description: "View your recent actions",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "Achievements",
    icon: <Award size={20} />,
    path: "/achievements",
    description: "Track your progress",
    badge: "3",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    name: "Refer and Earn",
    icon: <Gift size={20} />,
    description: "Invite friends, earn rewards",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "Leaderboard",
    icon: <Trophy size={20} />,
    path: "/leaderboard",
    description: "See top performers",
    color: "from-yellow-500/20 to-amber-600/20",
  },
  {
    name: "How NEFTIT Works",
    icon: <Info size={20} />,
    path: "/how-it-works",
    description: "Learn about the platform",
    color: "from-emerald-500/20 to-teal-600/20",
  }
];

export const bottomNavigationItems: NavigationItemType[] = [
  {
    name: "Edit Profile",
    icon: <Settings size={20} />,
    path: "/edit-profile",
    description: "Update your profile details",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "Logout",
    icon: <LogOut size={20} />,
    onClick: () => console.log("Logged out"),
    description: "Sign out of your account",
    color: "from-red-500/20 to-rose-600/20",
  },
];

export function NavigationItems() {
  const location = useLocation();
  const { referralData, isModalOpen, toggleModal, copyReferralLink } = useReferral();
  
  const navItemsWithHandlers = navigationItems.map(item => {
    if (item.name === "Refer and Earn") {
      return {
        ...item,
        onClick: toggleModal
      };
    }
    return item;
  });
  
  const renderNavigationItem = (item: NavigationItemType) => (
    <div key={item.name} className="relative group">
      {item.badge && (
        <div className="absolute -right-1 -top-1 z-10">
          <Badge 
            variant="default" 
            className="h-5 px-2 bg-orange-500 text-white border-none shadow-lg shadow-orange-500/20"
          >
            {item.badge}
          </Badge>
        </div>
      )}
      {item.path ? (
        <Link to={item.path} className="block">
          <Button
            variant={location.pathname === item.path ? "default" : "ghost"}
            className={cn(
              "w-full justify-between group-hover:bg-white/5 transition-all duration-300 rounded-xl overflow-hidden",
              location.pathname === item.path ? "bg-white/10" : "bg-transparent"
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2 rounded-lg bg-gradient-to-br",
                item.color || "from-white/10 to-white/5",
                "transition-colors duration-300"
              )}>
                {item.icon}
              </div>
              <div className="text-left">
                <div className="font-medium group-hover:text-white transition-colors">
                  {item.name}
                </div>
                <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                  {item.description}
                </div>
              </div>
            </div>
            <ChevronRight 
              className={cn(
                "h-4 w-4 transition-all duration-300",
                location.pathname === item.path 
                  ? "text-white/60 group-hover:text-white" 
                  : "text-white/20 group-hover:text-white/60 group-hover:translate-x-1"
              )} 
            />
          </Button>
        </Link>
      ) : (
        <Button
          onClick={item.onClick}
          variant="ghost"
          className="w-full justify-between group-hover:bg-white/5 transition-all duration-300 rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-lg bg-gradient-to-br",
              item.color || "from-white/10 to-white/5",
              "transition-colors duration-300"
            )}>
              {item.icon}
            </div>
            <div className="text-left">
              <div className="font-medium group-hover:text-white transition-colors">
                {item.name}
              </div>
              <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                {item.description}
              </div>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" />
        </Button>
      )}
    </div>
  );

  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-5rem)]">
      <div className="flex-1 space-y-2 px-2">
        {navItemsWithHandlers.map(renderNavigationItem)}
      </div>

      <div className="space-y-2 border-t border-white/10 pt-4 pb-4 px-2 mt-4 bg-[#0A0A0F]">
        {bottomNavigationItems.map(renderNavigationItem)}
      </div>
      
      <ReferralModal
        isOpen={isModalOpen}
        referralData={referralData}
        onToggle={toggleModal}
        onCopyLink={copyReferralLink}
      />
      
      <Toaster />
    </div>
  );
}
