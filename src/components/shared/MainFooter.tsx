import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function MainFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter text-white">NEFTIT</h2>
              <p className="text-sm text-gray-400 max-w-xs">
                NEFTIT is a Web3 engagement platform designed to empower NFT projects and communities through gamified interactions.
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-semibold text-white mb-4">
              GET NEFTIT UPDATES IN YOUR INBOX
            </h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email..."
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
              <Button 
                variant="outline" 
                className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10"
              >
                SUBMIT
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">SOCIAL</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="flex items-center text-gray-400 hover:text-[#00ffff] transition-colors"
              >
                <span className="mr-2">TWITTER</span>
                <ArrowUpRight size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center text-gray-400 hover:text-[#00ffff] transition-colors"
              >
                <span className="mr-2">DISCORD</span>
                <ArrowUpRight size={16} />
              </a>
              <a 
                href="#" 
                className="flex items-center text-gray-400 hover:text-[#00ffff] transition-colors"
              >
                <span className="mr-2">TELEGRAM</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} NEFTIT
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-[#00ffff] transition-colors">
                Docs
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#00ffff] transition-colors">
                Media Kit
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#00ffff] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#00ffff] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[200px] bg-[#00ffff] rounded-full mix-blend-multiply filter blur-[128px] opacity-[0.1]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[200px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-[0.1]" />
      </div>
    </footer>
  );
}
