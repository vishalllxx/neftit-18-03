import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import StarryBackground from "@/components/layout/StarryBackground";
import { MainNav } from "@/components/layout/MainNav";
import { NewFooter } from "@/components/home/NewFooter";
import { motion } from "framer-motion";
import Section from '@/components/Section';
import Button from '@/components/Button';
import ProcessStep from '@/components/ProcessStep';
import TierCard from '@/components/TierCard';
import FeatureCard from '@/components/FeatureCard';
import AnimatedImage from '@/components/AnimatedImage';
import { 
  Star, 
  Gem, 
  ArrowUpRight, 
  Handshake, 
  User, 
  CheckCheck, 
  Lock, 
  Globe, 
  Monitor, 
  Rocket, 
  BadgeCheck, 
  RefreshCcw, 
  Heart,
  Sparkles
} from 'lucide-react';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for hero section interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-element', 'slide-normal');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.hidden-element');
    
    elements.forEach((el) => observer.observe(el));
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>NEFTIT - Complete Quests, Earn & Upgrade NFTs</title>
        <meta 
          name="description" 
          content="Join NEFTIT to complete exciting quests, earn unique NFTs, and upgrade them to unlock rarer assets. Start your NFT collection journey today!" 
        />
        <meta name="keywords" content="NFT quests, NFT rewards, NFT upgrades, Web3 engagement, NFT collection" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NEFTIT - Complete Quests, Earn & Upgrade NFTs" />
        <meta property="og:description" content="Join NEFTIT to complete exciting quests, earn unique NFTs, and upgrade them to unlock rarer assets." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-[#000000]">
        <MainNav />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-24 md:space-y-32 pb-20"
          >
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
              {/* Hero Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background z-[-1]"></div>
              <div className="hero-glow"></div>
              
              {/* Gradient orbs */}
              <div 
                className="gradient-blur bg-neftit-blue w-[500px] h-[500px] top-[-250px] left-[calc(50%-250px)]" 
                style={{ 
                  transform: `translate(${(mousePosition.x - 0.5) * -50}px, ${(mousePosition.y - 0.5) * -50}px)` 
                }}
              ></div>
              <div 
                className="gradient-blur bg-neftit-purple w-[500px] h-[500px] bottom-[-350px] right-[-250px]" 
                style={{ 
                  transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)` 
                }}
              ></div>
              
              <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                  <div className="mb-3">
                    <div className="inline-block benefit-chip mb-4">
                      <Sparkles size={14} className="mr-2" />
                      Web3 NFT Platform
                    </div>
                  </div>
                  <h1 className="display text-gradient mb-8">
                    Complete Quests. 
                    <span className="block">Earn Unique NFTs.</span>
                    <span className="text-neftit-purple">Upgrade & Trade.</span>
                  </h1>
                  <p className="subtitle text-muted-foreground mb-10">
                    Engage in exciting quests, collect exclusive NFTs, and level them up to unlock even rarer assets.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button href="#join-now" size="lg" className="bg-gradient-to-r from-neftit-blue to-neftit-purple border-none">
                      <Rocket size={18} className="mr-2" />
                      Start Collecting NFTs
                    </Button>
                    <Button href="#how-it-works" variant="secondary" size="lg">
                      Explore Live Quests
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                  <div className="hidden-element slide-from-bottom delay-1">
                    <div className="glass-card p-5 text-center">
                      <CheckCheck className="mx-auto mb-3 text-neftit-blue" size={28} />
                      <h3 className="text-lg font-medium text-gradient">Complete Quests</h3>
                    </div>
                  </div>
                  <div className="hidden-element slide-from-bottom delay-2">
                    <div className="glass-card p-5 text-center">
                      <Gem className="mx-auto mb-3 text-neftit-purple" size={28} />
                      <h3 className="text-lg font-medium text-gradient">Earn NFTs</h3>
                    </div>
                  </div>
                  <div className="hidden-element slide-from-bottom delay-3">
                    <div className="glass-card p-5 text-center">
                      <ArrowUpRight className="mx-auto mb-3 text-neftit-indigo" size={28} />
                      <h3 className="text-lg font-medium text-gradient">Upgrade Rarities</h3>
                    </div>
                  </div>
                  <div className="hidden-element slide-from-bottom delay-4">
                    <div className="glass-card p-5 text-center">
                      <Handshake className="mx-auto mb-3 text-neftit-pink" size={28} />
                      <h3 className="text-lg font-medium text-gradient">Trade & Showcase</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Web3 Projects Section */}
            <Section id="web3-projects" animate="fade">
              <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                    <h2 className="title text-gradient mb-6">Get Your Favorite Web3 Projects NFTs</h2>
                    <p className="body-large text-muted-foreground mb-8">
                      Collect, trade, and showcase exclusive NFTs from the most innovative Web3 projects in the ecosystem.
                    </p>
                    <Button href="/discover" className="bg-gradient-to-r from-neftit-blue to-neftit-purple border-none">
                      Explore NFTs
                    </Button>
                  </div>
                  <div className="w-full md:w-1/2 relative">
                    <AnimatedImage 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
                      alt="Web3 Character" 
                      className="w-full rounded-2xl shadow-xl"
                      animate="right"
                    />
                  </div>
                </div>
              </div>
            </Section>
            
            {/* How It Works Section */}
            <Section id="how-it-works" className="py-12" animate="none">
              <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="inline-block benefit-chip mb-4">
                    <User size={14} className="mr-1" />
                    How It Works
                  </div>
                  <h2 className="title text-gradient mb-6">Your journey to rare NFTs in four simple steps</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="hidden-element slide-from-bottom delay-1">
                    <ProcessStep 
                      number="1" 
                      title="Complete Quests & Challenges" 
                      description="Participate in social & interactive quests. Follow, retweet, join Discord, solve puzzles, and more!"
                      features={[
                        "Engage with the community",
                        "Complete interactive tasks",
                        "Solve exciting puzzles"
                      ]}
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-2">
                    <ProcessStep 
                      number="2" 
                      title="Earn & Collect NFTs" 
                      description="Every completed quest rewards you with a unique NFT. Our NFTs are visually stunning, highly collectible, and valuable."
                      features={[
                        "Earn unique NFTs",
                        "Build your collection",
                        "Get guaranteed rewards"
                      ]}
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-3">
                    <ProcessStep 
                      number="3" 
                      title="Upgrade Your NFTs" 
                      description="Start with Common NFTs and burn them to upgrade to higher tiers. Follow the upgrade path to reach the exclusive Gold tier!"
                      features={[
                        "5 Commons → 1 Platinum",
                        "5 Platinum → 1 Silver",
                        "5 Silver → 1 Gold"
                      ]}
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-4">
                    <ProcessStep 
                      number="4" 
                      title="Showcase, Trade & Hold" 
                      description="Trade your NFTs on leading marketplaces, showcase your collection, and hold for exclusive future perks."
                      features={[
                        "Trade on marketplaces",
                        "Display your collection",
                        "Access exclusive perks"
                      ]}
                    />
                  </div>
                </div>
              </div>
            </Section>
            
            {/* NFT System Section */}
            <Section id="nft-system" animate="fade">
              <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="title text-gradient mb-4">The NEFTIT NFT System</h2>
                  <p className="body-large text-muted-foreground">
                    Upgrade your NFTs for maximum rarity & exclusivity
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="hidden-element slide-from-bottom delay-1">
                    <TierCard 
                      title="Common" 
                      description="Start your journey with Common NFTs" 
                      details="Complete quests to earn Common NFTs"
                      colorClass="bg-neftit-common"
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-2">
                    <TierCard 
                      title="Platinum & Silver" 
                      description="Burn & upgrade to higher tiers" 
                      details="5 Commons → 1 Platinum, 5 Platinum → 1 Silver"
                      colorClass="bg-gradient-to-r from-neftit-platinum to-neftit-silver"
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-3">
                    <TierCard 
                      title="Gold" 
                      description="Reach the exclusive Gold tier" 
                      details="5 Silver → 1 Gold (Super rare & exclusive)"
                      colorClass="bg-neftit-gold"
                    />
                  </div>
                </div>
              </div>
            </Section>
            
            {/* Benefits Section */}
            <Section id="benefits" animate="fade">
              <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="title text-gradient mb-4">Why Users Love NEFTIT</h2>
                  <p className="body-large text-muted-foreground">
                    Join thousands of users already collecting and upgrading NFTs
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="hidden-element slide-from-bottom delay-1">
                    <FeatureCard 
                      icon={Star} 
                      title="Free to Join" 
                      description="No hidden fees, just complete quests and earn rewards"
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-2">
                    <FeatureCard 
                      icon={Heart} 
                      title="Fun & Interactive" 
                      description="Engage with Web3 in a fresh, exciting way"
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-3">
                    <FeatureCard 
                      icon={RefreshCcw} 
                      title="Upgrade System" 
                      description="Keep progressing and leveling up your collection"
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-4">
                    <FeatureCard 
                      icon={Lock} 
                      title="Anti-Bot Protection" 
                      description="We ensure a fair system for all users"
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-5">
                    <FeatureCard 
                      icon={Globe} 
                      title="Global Access" 
                      description="Anyone can participate, anytime, anywhere"
                    />
                  </div>
                  
                  <div className="hidden-element slide-from-bottom delay-6">
                    <FeatureCard 
                      icon={BadgeCheck} 
                      title="Verified Projects" 
                      description="Only authentic Web3 projects in our ecosystem"
                    />
                  </div>
                </div>
              </div>
            </Section>
            
            {/* Track Progress Section */}
            <Section id="track-progress" animate="fade">
              <div className="container-custom">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2">
                    <div className="inline-block benefit-chip mb-4">
                      <Monitor size={14} className="mr-1" />
                      Track Your Progress
                    </div>
                    <h2 className="title text-gradient mb-6">Monitor your NFT collection and upgrade progress in one place</h2>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start glass-card p-4">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                          <Gem size={24} className="text-neftit-purple" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1 text-gradient">NFT Collection Overview</h3>
                          <p className="text-muted-foreground text-sm">
                            View all earned NFTs in one place, track upgrade eligibility, and monitor collection growth.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start glass-card p-4">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                          <BadgeCheck size={24} className="text-neftit-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1 text-gradient">Live Analytics</h3>
                          <p className="text-muted-foreground text-sm">
                            Check rarity stats, compare with other collectors, and track leaderboard position.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <AnimatedImage 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop" 
                      alt="Dashboard Analytics" 
                      className="w-full rounded-2xl shadow-xl"
                      animate="right"
                    />
                  </div>
                </div>
              </div>
            </Section>
            
            {/* CTA Section */}
            <Section id="join-now" className="bg-gradient-to-b from-background to-indigo-900/10 py-20" animate="fade">
              <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="hidden-element glass-card p-10 rounded-3xl border border-white/10 shadow-lg backdrop-blur-lg">
                    <h2 className="title text-gradient mb-6 text-4xl md:text-5xl font-bold">Start Your NFT Journey Today</h2>
                    <p className="body-large text-muted-foreground mb-10 text-xl">
                      Engage. Collect. Upgrade. Be Part of the Future of NFTs!
                    </p>
                    <Button href="/auth" size="lg" className="px-8 py-4 bg-gradient-to-r from-neftit-blue to-neftit-purple border-none text-lg font-medium shadow-[0_0_20px_rgba(68,98,237,0.3)] hover:shadow-[0_0_30px_rgba(68,98,237,0.5)] transition-all duration-300">
                      <Rocket size={20} className="mr-2" />
                      Join Now
                    </Button>
                  </div>
                </div>
              </div>
            </Section>
          </motion.div>
        </main>

        <NewFooter />
      </div>
    </>
  );
};

export default Index;
