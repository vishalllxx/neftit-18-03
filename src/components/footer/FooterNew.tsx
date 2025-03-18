
import { Twitter, MessageSquare, Instagram, Youtube, Facebook, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function FooterNew() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#080619] to-[#010a1e] py-16 mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">NEFTIT</h3>
            <p className="text-sm text-white/60 max-w-xs">
              The premium NFT platform for crypto enthusiasts, offering rare digital collectibles and exclusive membership benefits.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Marketplace
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/discover" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Explore NFTs
                </Link>
              </li>
              <li>
                <Link to="/burn" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Burn & Upgrade
                </Link>
              </li>
              <li>
                <Link to="/streaks" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Daily Streaks
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/collectibles" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  My Collection
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Account
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/profile" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/activity" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Activity
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/staking" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Staking
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Platform Status
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-nft-purple mr-2"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <h3 className="text-lg font-medium text-white">Stay up to date</h3>
              <p className="text-sm text-white/60">Get updates on new quest opportunities, NFT drops, and platform features.</p>
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/10 rounded-lg py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-nft-purple/50"
              />
              <button className="absolute right-2 top-2 bg-nft-purple hover:bg-nft-purple/90 text-white rounded-md p-1">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © 2024 NEFTIT. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
