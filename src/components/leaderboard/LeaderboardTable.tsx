import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { User, generateMoreUsers } from '@/data/leaderboardData';
import LeaderboardItem from './LeaderboardItem';

interface LeaderboardTableProps {
  users: User[];
  displayType: 'neft' | 'nft';
  currentUser: User;
  className?: string;
}

const USERS_PER_PAGE = 10;

const LeaderboardTable = ({
  users,
  displayType,
  currentUser,
  className
}: LeaderboardTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState<User[]>(() => {
    // Combine initial users with generated users for pagination
    const existingUsers = users.slice(0, 10);
    const additionalUsers = generateMoreUsers(11, 40);
    return [...existingUsers, ...additionalUsers];
  });
  
  const totalPages = Math.ceil(allUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const displayedUsers = allUsers.slice(startIndex, endIndex);
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // Check if current user is in the displayed list
  const isCurrentUserDisplayed = displayedUsers.some(user => user.id === currentUser.id);
  
  return (
    <div className={cn('relative bg-black/40 border border-white/5 rounded-xl', className)}>
      {/* Table Header */}
      <div className="sticky top-0 z-10 flex items-center gap-2 p-4 border-b border-white/5 bg-black/60 backdrop-blur-sm">
        <Users className="w-4 h-4 text-purple-400" />
        <span className="font-medium text-white/80">Top Players</span>
        <span className="text-sm text-white/40">({allUsers.length})</span>
      </div>

      {/* Table Content */}
      <div className="min-h-[400px] max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20">
        <div className="p-2 space-y-1">
          {displayedUsers.map(user => (
            <LeaderboardItem
              key={user.id}
              user={user}
              displayType={displayType}
              isCurrentUser={user.id === currentUser.id}
            />
          ))}
          
          {/* Show current user if not in the current page */}
          {!isCurrentUserDisplayed && (
            <>
              <div className="border-t border-white/5 my-2"></div>
              <LeaderboardItem
                user={currentUser}
                displayType={displayType}
                isCurrentUser={true}
              />
            </>
          )}
        </div>
      </div>
      
      {/* Pagination controls */}
      <div className="sticky bottom-0 z-10 flex items-center justify-between p-3 border-t border-white/5 bg-black/60 backdrop-blur-sm">
        <div className="text-xs text-white/40 font-medium">
          Page {currentPage} of {totalPages}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={cn(
              "p-1.5 rounded-lg bg-black/40 border border-white/5",
              "hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200"
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={cn(
              "p-1.5 rounded-lg bg-black/40 border border-white/5",
              "hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200"
            )}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
