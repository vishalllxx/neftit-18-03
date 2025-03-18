import { Github, Twitter, Instagram, Linkedin, MessageSquare, Send, Twitch, Youtube, Facebook, Globe, Shield, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NewFooter() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#080619] to-[#010a1e] py-16 mt-12 relative z-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold"
                >
                  NEFT<span className="bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] bg-clip-text text-transparent">IT</span>
                </motion.div>
              </Link>
              <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                The premium NFT platform for crypto enthusiasts, offering rare digital collectibles and exclusive membership benefits.
              </p>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="space-y-1">
                <p className="text-xl font-semibold text-white">50K+</p>
                <p className="text-xs text-white/60">Active Users</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-semibold text-white">100K+</p>
                <p className="text-xs text-white/60">NFTs Created</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-semibold text-white">10K+</p>
                <p className="text-xs text-white/60">Artists</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                  <Twitter className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                  <Instagram className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                  <Youtube className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10">
                  <Globe className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Marketplace
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/discover" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Explore NFTs
                </Link>
              </li>
              <li>
                <Link to="/burn" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Burn & Upgrade
                </Link>
              </li>
              <li>
                <Link to="/streaks" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Daily Streaks
                </Link>
              </li>
              <li>
                <Link to="/saved" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Saved NFTs
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Account
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/profile" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/activity" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Activity
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/staking" className="text-white/60 hover:text-white transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] mr-2 group-hover:scale-125 transition-transform"></span>
                  Staking
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <Gift className="h-5 w-5 text-[#36F9F6]" />
                  Join Our Community
                </h3>
                <p className="text-sm text-white/60">Get exclusive updates on new NFT drops, features, and community events.</p>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/10 border border-white/10 rounded-lg py-2.5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#36F9F6]/50"
                />
                <Button 
                  className="absolute right-1 top-1 bg-gradient-to-r from-[#36F9F6] to-[#FF2E63] hover:opacity-90 text-black font-medium rounded-md px-3 py-1.5"
                >
                  Subscribe
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-white/40">
                <Shield className="h-3 w-3" />
                <span>We respect your privacy. Unsubscribe at any time.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              {new Date().getFullYear()} NEFTIT. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-xs text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-xs text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/disclaimer" className="text-xs text-white/60 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
