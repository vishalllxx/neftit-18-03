
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">NEFTIT</h3>
            <p className="text-sm text-foreground/70 mb-4">
              The next generation of Web3 NFT engagement platform.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-foreground/70 hover:text-foreground">Home</Link></li>
              <li><Link to="/discover" className="text-sm text-foreground/70 hover:text-foreground">Discover</Link></li>
              <li><Link to="/burn" className="text-sm text-foreground/70 hover:text-foreground">Burn</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-foreground/70 hover:text-foreground">How it Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-foreground/70 hover:text-foreground">FAQ</Link></li>
              <li><Link to="/support" className="text-sm text-foreground/70 hover:text-foreground">Support</Link></li>
              <li><Link to="/terms" className="text-sm text-foreground/70 hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-foreground/70 hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-foreground">Twitter</a>
              <a href="#" className="text-foreground/70 hover:text-foreground">Discord</a>
              <a href="#" className="text-foreground/70 hover:text-foreground">Telegram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} NEFTIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
