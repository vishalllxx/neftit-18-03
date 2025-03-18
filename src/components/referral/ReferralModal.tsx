import React, { useCallback, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Gift, Users, Share2, ChevronRight, Sparkles, Trophy } from 'lucide-react';
import ReferralProgress from './ReferralProgress';
import CopyLinkButton from './CopyLinkButton';
import { cn } from '@/lib/utils';

interface ReferralModalProps {
  isOpen: boolean;
  referralData: {
    code: string;
    link: string;
    count: number;
    rewards: number;
  };
  onToggle: () => void;
  onCopyLink: () => Promise<void>;
}

const ReferralModal: React.FC<ReferralModalProps> = ({
  isOpen,
  referralData,
  onToggle,
  onCopyLink
}) => {
  const rewardTiers = [
    { count: 5, reward: 50, icon: <Gift className="w-4 h-4 text-purple-400" /> },
    { count: 10, reward: 150, icon: <Sparkles className="w-4 h-4 text-blue-400" /> },
    { count: 25, reward: 500, icon: <Trophy className="w-4 h-4 text-yellow-400" /> },
  ];

  const getCurrentTier = () => {
    if (referralData.count < 5) return 0;
    if (referralData.count < 10) return 1;
    if (referralData.count < 25) return 2;
    return 3;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onToggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-[#111111] to-[#1a1a1a] p-6 text-white shadow-[0_0_50px_-12px] shadow-purple-500/20 border border-white/10 transition-all">
                <div className="absolute right-4 top-4">
                  <button
                    onClick={onToggle}
                    className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Close dialog"
                  >
                    <X size={18} />
                  </button>
                </div>

                <Dialog.Title as="div" className="mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-20 rounded-full" />
                      <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center transform rotate-12">
                        <Share2 className="text-white transform -rotate-12" size={24} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Refer & Earn Rewards
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 max-w-sm mx-auto">
                    Invite your friends to join NEFTIT and earn exclusive rewards for each successful referral
                  </p>
                </Dialog.Title>

                <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users size={18} className="text-purple-400" />
                    <span className="text-sm font-medium text-white/90">Your Referral Stats</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-xl bg-black/40 p-4 border border-white/5">
                      <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {referralData.count}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Total Referrals</p>
                    </div>
                    <div className="rounded-xl bg-black/40 p-4 border border-white/5">
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {referralData.rewards}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">NEFT Earned</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Reward Tiers */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium flex items-center gap-2 text-white/90">
                      <Trophy size={16} className="text-yellow-400" />
                      Reward Tiers
                    </h4>
                    <div className="space-y-2">
                      {rewardTiers.map((tier, index) => (
                        <div
                          key={tier.count}
                          className={cn(
                            "flex items-center justify-between p-3 rounded-lg border transition-colors",
                            getCurrentTier() > index
                              ? "bg-purple-500/10 border-purple-500/20"
                              : getCurrentTier() === index
                              ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-white/10"
                              : "bg-black/20 border-white/5"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {tier.icon}
                            <span className="text-sm font-medium">
                              {tier.count} Referrals
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={cn(
                              "text-sm font-semibold",
                              getCurrentTier() > index
                                ? "text-purple-400"
                                : getCurrentTier() === index
                                ? "text-white"
                                : "text-gray-400"
                            )}>
                              {tier.reward} NEFT
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium flex items-center gap-2 text-white/90">
                      <Gift size={16} className="text-purple-400" />
                      Your Referral Link
                    </h4>
                    <CopyLinkButton
                      referralLink={referralData.link}
                      onCopy={onCopyLink}
                    />
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Share this link with your friends to start earning rewards
                    </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReferralModal;
