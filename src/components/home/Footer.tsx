
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 backdrop-blur-xl bg-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#D1D5DB]">NEFTIT</h2>
            <p className="text-sm text-[#9CA3AF]">
              © 2024 NEFTIT Labs. All rights reserved
            </p>
            <div className="flex gap-4">
              <img src="/lovable-uploads/metamask.svg" alt="MetaMask" className="h-8 w-8 hover:scale-110 transition-transform" />
              <img src="/lovable-uploads/wallet-connect.svg" alt="WalletConnect" className="h-8 w-8 hover:scale-110 transition-transform" />
              <img src="/lovable-uploads/coinbase.svg" alt="Coinbase" className="h-8 w-8 hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#D1D5DB]">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">About</Link></li>
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#D1D5DB]">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Legal</Link></li>
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#D1D5DB]">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Twitter</Link></li>
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Discord</Link></li>
              <li><Link to="#" className="text-[#9CA3AF] hover:text-[#D1D5DB] transition-colors">Instagram</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
