
import React, { useState, useEffect, useRef } from "react";
import { 
  Shield, 
  Wallet, 
  Award, 
  Flame, 
  Zap, 
  Coins, 
  Users, 
  Ban, 
  Check,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";
import { MainNav } from "@/components/layout/MainNav";
import { FooterNew } from "@/components/footer/FooterNew";
import MatrixBackground from "@/components/MatrixBackground";
import StepCard from "@/components/StepCard";
import BenefitCard from "@/components/BenefitCard";
import NftCard from "@/components/NftCard";
import RewardBar from "@/components/RewardBar";

const HowItWorks: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".initially-hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0B13] text-foreground overflow-hidden">
      <MainNav />
      <MatrixBackground />

      {/* Hero Section */}
      <section className="hero-section pt-20 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            <h1 className="hero-title animate-fade-in">
              How NEFTIT <span className="text-neon-blue">Works</span>
            </h1>
            <p className="hero-subtitle max-w-3xl mx-auto animate-fade-in">
              Your Web3 Journey Starts Here – Quests, NFTs, Rewards & More
            </p>
            <div className="flex justify-center mt-8 animate-fade-in">
              <Link
                to="#what-is-neftit"
                className="px-6 py-3 rounded-full bg-neon-blue text-white font-semibold transition-all hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-purple/20"
              >
                Explore Now
              </Link>
            </div>
          </div>
          
          {/* Infographic */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative py-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative pl-10 initially-hidden opacity-0">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
                  <p className="text-sm text-foreground/70">Simple, secure, and gas-free connection</p>
                </div>
                
                <div className="relative pl-10 initially-hidden opacity-0">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple flex items-center justify-center z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Join Campaigns</h3>
                  <p className="text-sm text-foreground/70">Browse and participate in live NFT quests</p>
                </div>
                
                <div className="relative pl-10 initially-hidden opacity-0">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Tasks</h3>
                  <p className="text-sm text-foreground/70">Social tasks, puzzles, and engagement activities</p>
                </div>
                
                <div className="relative pl-10 initially-hidden opacity-0">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-neon-purple flex items-center justify-center z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collect Rewards</h3>
                  <p className="text-sm text-foreground/70">Earn NFTs, NEFT points and exclusive benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NEFTIT */}
      <section id="what-is-neftit" className="py-16 px-6 bg-[#0F1118]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">What is <span className="text-neon-blue">NEFTIT</span>?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              A next-generation Web3 platform connecting brands with users through interactive campaigns and NFT rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 initially-hidden opacity-0">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Zap size={24} className="text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web3 Engagement Platform</h3>
                  <p className="text-foreground/70">
                    NEFTIT connects users with brands through gamified experiences,
                    rewarding participation with valuable digital collectibles and
                    benefits.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Award size={24} className="text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">NFT-Powered Rewards</h3>
                  <p className="text-foreground/70">
                    Complete campaigns to earn unique NFTs with utility across the
                    ecosystem. Hold these digital assets for exclusive perks and
                    future opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Shield size={24} className="text-neon-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Accessible</h3>
                  <p className="text-foreground/70">
                    Our platform is designed with advanced security measures while
                    remaining gas-free and accessible to both crypto beginners and
                    experts.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative initially-hidden opacity-0">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
                <div className="relative z-10 w-full h-full p-6 flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="bg-[#111827] rounded-xl p-4 shadow-lg">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-foreground/70">Featured Campaign</span>
                        <span className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full">Live</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="w-full h-40 bg-[#1F2937] rounded-lg overflow-hidden relative">
                          <div className="absolute inset-0 flex items-center justify-center text-foreground/30">
                            NFT Preview
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold">Cosmic Explorers Collection</h3>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground/70">Progress</span>
                          <span className="text-neon-blue">2/4 Tasks</span>
                        </div>
                        
                        <div className="w-full h-2 bg-[#1F2937] rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                        </div>
                        
                        <button className="w-full py-2 rounded-lg bg-neon-blue text-white font-medium hover:bg-neon-purple transition-colors">
                          Continue Quest
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">How to <span className="text-neon-blue">Start</span>?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Follow these simple steps to begin your NEFTIT journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <StepCard 
              number={1}
              icon={<Wallet size={24} className="text-neon-blue" />}
              title="Connect Wallet"
              description="Connect your preferred Web3 wallet with a single click. No gas fees required at this step."
              isLeft={true}
            />
            
            <StepCard 
              number={2}
              icon={<Award size={24} className="text-neon-purple" />}
              title="Choose a Campaign"
              description="Browse available campaigns and select one that interests you. New quests are added regularly."
              isLeft={false}
            />
            
            <StepCard 
              number={3}
              icon={<Zap size={24} className="text-neon-blue" />}
              title="Complete Tasks"
              description="Participate in social tasks, solve puzzles, and engage with content to progress through the campaign."
              isLeft={true}
            />
            
            <StepCard 
              number={4}
              icon={<Award size={24} className="text-neon-purple" />}
              title="Earn NFTs"
              description="Once you've completed all tasks, check your 'Collectibles' to find your new NFT rewards."
              isLeft={false}
            />
          </div>

          <div className="mt-16 max-w-3xl mx-auto initially-hidden opacity-0">
            <div className="p-6 glass-card">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Info size={18} className="text-neon-blue" />
                  Progress Tracking
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Campaign Completion</span>
                      <span>75%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill bg-neon-blue" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Tasks Completed</span>
                      <span>3/4</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill bg-neon-purple" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Time Remaining</span>
                      <span>2 days</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill bg-neon-green" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hold NFTs */}
      <section className="py-16 px-6 bg-[#0F1118]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Hold <span className="text-neon-blue">NFTs</span>?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Discover the advantages of collecting and holding your NEFTIT NFTs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8 initially-hidden opacity-0">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Check size={20} className="text-neon-green" /> Benefits of Holding
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BenefitCard
                  icon={<Award size={24} />}
                  title="Increased Rewards"
                  description="Collectors earn bonus multipliers on all future campaign rewards"
                />
                
                <BenefitCard
                  icon={<Zap size={24} />}
                  title="Exclusive Access"
                  description="Gain entry to premium campaigns and limited opportunities"
                />
                
                <BenefitCard
                  icon={<Shield size={24} />}
                  title="Community Status"
                  description="Special recognition and perks in the NEFTIT community"
                />
                
                <BenefitCard
                  icon={<Flame size={24} />}
                  title="Future Airdrops"
                  description="Automatic eligibility for surprise token and NFT drops"
                />
              </div>
            </div>
            
            <div className="space-y-8 initially-hidden opacity-0">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Ban size={20} className="text-red-400" /> Selling Early Means Missing Out
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BenefitCard
                  icon={<Ban size={24} />}
                  title="Lost Upgrades"
                  description="Miss opportunities to upgrade NFTs to higher tiers"
                  isNegative={true}
                />
                
                <BenefitCard
                  icon={<Ban size={24} />}
                  title="Fewer Rewards"
                  description="Standard reward rates with no multiplier bonuses"
                  isNegative={true}
                />
                
                <BenefitCard
                  icon={<Ban size={24} />}
                  title="Limited Access"
                  description="No entry to holder-only campaigns and events"
                  isNegative={true}
                />
                
                <BenefitCard
                  icon={<Ban size={24} />}
                  title="Missed Airdrops"
                  description="Ineligibility for future surprise token distributions"
                  isNegative={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Burn & Upgrade NFTs */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Burn & Upgrade <span className="text-neon-blue">NFTs</span></h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Combine multiple NFTs to create more valuable and powerful collectibles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 initially-hidden opacity-0">
            <NftCard 
              tier="Common"
              color="blue"
              quantity={10}
              description="Burn 10 Common NFTs to upgrade to 1 Platinum NFT"
              arrowDirection="right"
            />
            
            <NftCard 
              tier="Platinum"
              color="purple"
              quantity={10}
              description="Burn 10 Platinum NFTs to upgrade to 1 Silver NFT" 
              arrowDirection="right"
            />
            
            <NftCard 
              tier="Silver"
              color="green"
              quantity={10}
              description="Burn 10 Silver NFTs to upgrade to 1 Gold NFT"
              arrowDirection="none"
            />
          </div>

          <div className="mt-16 p-6 glass-card max-w-3xl mx-auto initially-hidden opacity-0">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Upgrade Simulator</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="space-y-2 text-center">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-neon-blue to-neon-blue/50 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">10x</span>
                  </div>
                  <p className="text-sm">Common NFTs</p>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#1F2937] flex items-center justify-center">
                    <Flame size={24} className="text-neon-pink" />
                  </div>
                </div>
                
                <div className="space-y-2 text-center">
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-neon-purple to-neon-purple/50 mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1x</span>
                  </div>
                  <p className="text-sm">Platinum NFT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NEFT? */}
      <section className="py-16 px-6 bg-[#0F1118]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">What is <span className="text-neon-blue">NEFT</span>?</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              NEFT points are the platform's reward system that tracks your participation and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 initially-hidden opacity-0">
              <div className="space-y-6">
                <RewardBar 
                  action="Completing campaigns"
                  points={10}
                  percentage={25}
                />
                
                <RewardBar 
                  action="Referring a friend"
                  points={20}
                  percentage={50}
                />
                
                <RewardBar 
                  action="Trading an NFT"
                  points={5}
                  percentage={12.5}
                />
                
                <RewardBar 
                  action="Holding upgraded NFTs"
                  points={40}
                  percentage={100}
                  isSpecial={true}
                />
              </div>
            </div>

            <div className="relative h-80 initially-hidden opacity-0">
              <div className="absolute inset-0 glass-card overflow-hidden">
                <div className="relative h-full flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-yellow via-neon-yellow to-orange-500 animate-spin-slow"></div>
                    <div className="absolute inset-2 rounded-full bg-[#111827] flex items-center justify-center">
                      <span className="text-4xl font-bold text-neon-yellow">NEFT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto initially-hidden opacity-0">
            <div className="p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4">NEFT Leaderboard</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-[#1F2937]/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span>CryptoWizard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins size={16} className="text-neon-yellow" />
                    <span className="font-semibold">2,456</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#1F2937]/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span>NFT_Hunter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins size={16} className="text-neon-yellow" />
                    <span className="font-semibold">1,892</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-[#1F2937]/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <span>BlockchainMaster</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coins size={16} className="text-neon-yellow" />
                    <span className="font-semibold">1,654</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Bot & Security System */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Anti-Bot & <span className="text-neon-blue">Security</span> System</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our advanced security measures ensure a fair environment for all users
            </p>
          </div>

          <div className="max-w-3xl mx-auto initially-hidden opacity-0">
            <div className="alert-banner mb-8">
              <Shield size={24} className="text-red-400" />
              <div>
                <h3 className="font-semibold">Instant Ban for Bots!</h3>
                <p className="text-sm text-white/80">Our system automatically detects and bans suspicious activities</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 glass-card">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Ban size={20} className="mt-1 text-red-400" />
                    <div>
                      <h3 className="font-semibold">Multiple Accounts Detection</h3>
                      <p className="text-sm text-foreground/70">Our system flags and restricts attempts to create multiple accounts from the same device or IP address.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 glass-card">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield size={20} className="mt-1 text-neon-blue" />
                    <div>
                      <h3 className="font-semibold">Advanced Behavioral Analysis</h3>
                      <p className="text-sm text-foreground/70">We monitor interaction patterns to differentiate between human users and automated scripts.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 glass-card">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users size={20} className="mt-1 text-neon-purple" />
                    <div>
                      <h3 className="font-semibold">Fair Distribution System</h3>
                      <p className="text-sm text-foreground/70">Our campaign reward mechanism ensures equitable distribution of NFTs to genuine participants.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 glass-card">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap size={20} className="mt-1 text-neon-green" />
                    <div>
                      <h3 className="font-semibold">Real-Time Monitoring</h3>
                      <p className="text-sm text-foreground/70">Continuous oversight of platform activities to swiftly address any security concerns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-5 glass-card border border-red-500/30">
              <p className="text-center text-sm text-foreground/80">
                <span className="font-semibold text-red-400">Warning:</span> Multiple accounts/IP misuse = Automatic ban & blacklist from all future campaigns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6 bg-[#0F1118]">
        <div className="relative container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Begin Your <span className="text-neon-blue">NEFTIT</span> Journey Today
          </h2>
          
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            Connect your wallet, join campaigns, and start collecting unique NFTs with real utility
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/discover"
              className="px-8 py-4 rounded-full bg-neon-blue text-white font-semibold transition-all hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-purple/20"
            >
              Browse Campaigns
            </Link>
            
            <Link
              to="/auth"
              className="px-8 py-4 rounded-full bg-[#1F2937] border border-neon-blue/50 text-white font-semibold transition-all hover:bg-neon-blue/10 hover:border-neon-blue"
            >
              Connect Wallet
            </Link>
          </div>
        </div>
      </section>

      <FooterNew />
    </div>
  );
};

export default HowItWorks;
