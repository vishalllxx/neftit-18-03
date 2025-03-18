
import { useState, useCallback } from 'react';
import { toast } from 'sonner';

// This would typically come from your backend
const MOCK_REFERRAL_DATA = {
  code: 'NEFT-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
  link: `https://neftit.com/invite/${Math.random().toString(36).substring(2, 8)}`,
  count: 7,
  rewards: 7
};

interface ReferralData {
  code: string;
  link: string;
  count: number;
  rewards: number;
}

export function useReferral() {
  const [referralData, setReferralData] = useState<ReferralData>(MOCK_REFERRAL_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen(prev => !prev);
  }, []);

  const copyReferralLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(referralData.link);
      toast.success('Referral link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy. Please try again.');
      console.error('Failed to copy: ', error);
    }
  }, [referralData.link]);

  return {
    referralData,
    isModalOpen,
    toggleModal,
    copyReferralLink
  };
}
