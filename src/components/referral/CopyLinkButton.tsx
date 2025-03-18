import React, { useState } from 'react';
import { Copy, Check, Link as LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyLinkButtonProps {
  referralLink: string;
  onCopy: () => Promise<void>;
  className?: string;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({
  referralLink,
  onCopy,
  className
}) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    await onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className={cn("w-full group", className)}>
      <div className="relative flex overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r from-black/40 to-black/20 shadow-lg transition-all duration-300">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Link Display */}
        <div className="relative flex-1 overflow-hidden px-4 py-3">
          <div className="flex items-center gap-2">
            <LinkIcon size={14} className="text-purple-400" />
            <p className="truncate text-sm text-gray-300 font-medium">{referralLink}</p>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "relative flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-500",
            "bg-gradient-to-r from-purple-500 to-blue-500",
            "hover:from-purple-400 hover:to-blue-400",
            "focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 focus:ring-offset-black"
          )}
          aria-label="Copy referral link"
        >
          {/* Button Background Animation */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400",
            "transition-transform duration-300",
            isHovered ? "translate-x-0" : "-translate-x-full"
          )} />

          {/* Button Content */}
          <div className="relative flex items-center gap-2">
            {copied ? (
              <>
                <Check size={16} className="text-white" />
                <span className="hidden sm:inline text-white">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-white" />
                <span className="hidden sm:inline text-white">Copy</span>
              </>
            )}
          </div>
        </button>
      </div>

      {/* Success Message */}
      <div className={cn(
        "flex items-center justify-center mt-2 transition-all duration-300",
        copied ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2"
      )}>
        <p className="text-xs text-purple-400">
          Link copied to clipboard! Share it with your friends
        </p>
      </div>
    </div>
  );
};

export default CopyLinkButton;
