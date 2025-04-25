'use client';

import { useWallet } from "@/lib/wallet-context";
import Image from "next/image";
import { 
  Droplets, 
  ShieldCheck, 
  Zap, 
  ThumbsDown, 
  DollarSign, 
  HelpCircle, 
  TrendingDown, 
  HeartCrack,
  BadgeAlert,
  CheckCircle,
  Circle,
  Calendar,
  Skull,
  Timer,
  Hourglass,
  Bomb,
  Trash,
  BellOff,
  Brain,
  PiggyBank,
  Footprints
} from "lucide-react";

export function Hero() {
  const { isConnected } = useWallet();

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-highlight/5 blur-[100px] rounded-full"></div>
        
        {/* Abstract grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Animated particles effect (simulated with fixed elements) */}
        <div className="absolute top-1/4 left-1/5 w-1 h-1 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-highlight animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-secondary animate-bounce"></div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Logo and Title Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6 relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary via-[#f0a33e] to-highlight p-1">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                  <span className="text-4xl font-black bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">SLQ</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-black">
                PSP22
              </div>
            </div>
            
            <h1 className="text-7xl sm:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-[#f0a33e] to-highlight bg-clip-text text-transparent">
              SUBLIQUID
            </h1>
            
            <p className="text-xl sm:text-2xl font-medium text-zinc-300 max-w-3xl mx-auto mb-3">
              The only token you'll regret more than your ex
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
              You'll lose money, we'll get rich. A simple exchange you're somehow still considering
            </p>
            
            {/* Token metrics showcase */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-zinc-900/70 backdrop-blur-md rounded-xl p-5 border border-zinc-800 min-w-[180px]">
                <p className="text-4xl font-bold text-highlight mb-2">1M</p>
                <p className="text-sm text-zinc-400">Max Supply</p>
              </div>
              <div className="bg-zinc-900/70 backdrop-blur-md rounded-xl p-5 border border-zinc-800 min-w-[180px]">
                <p className="text-4xl font-bold text-highlight mb-2">5%</p>
                <p className="text-sm text-zinc-400">Staking Rewards</p>
              </div>
              <div className="bg-zinc-900/70 backdrop-blur-md rounded-xl p-5 border border-zinc-800 min-w-[180px]">
                <p className="text-4xl font-bold text-highlight mb-2">0%</p>
                <p className="text-sm text-zinc-400">Transaction Fees</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              {!isConnected ? (
                <a 
                  href="/dashboard" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-highlight text-black font-bold rounded-xl hover:shadow-[0_0_25px_rgba(217,119,6,0.5)] transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Give Us Your Money</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              ) : (
                <a 
                  href="/dashboard" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-highlight text-black font-bold rounded-xl hover:shadow-[0_0_25px_rgba(217,119,6,0.5)] transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Back For More, Sucker?</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </a>
              )}
              
              <a 
                href="https://github.com/ArsCodeAmatoria/Subliquid" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors duration-300"
              >
                Judge Our Shitty Code
              </a>
            </div>
          </div>
          
          {/* Features section - enhanced with icons and better spacing */}
          <div id="features" className="mt-24 max-w-6xl w-full scroll-mt-24">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
              PRETENDING TO REVOLUTIONIZE DEFI ON POLKADOT
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-primary hover:shadow-[0_0_15px_rgba(217,119,6,0.15)] transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Droplets size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Leaking Liquidity</h3>
                <p className="text-zinc-400 leading-relaxed">
                  PSP22-compliant token with completely untested liquidity pools. We copied the code from GitHub and barely understand how it works.
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-primary hover:shadow-[0_0_15px_rgba(217,119,6,0.15)] transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <ShieldCheck size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Imaginary Security</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Built on Polkadot, but we skipped all the security audits because they were too expensive. Our dev's cousin said it looks fine.
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-primary hover:shadow-[0_0_15px_rgba(217,119,6,0.15)] transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Zap size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Lightning Fast Crashes</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Experience how quickly your investment can go to zero. Our servers run on a Raspberry Pi in our CEO's basement.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials section */}
          <div id="testimonials" className="mt-32 max-w-6xl w-full scroll-mt-24">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
              OUR MESSAGE TO YOU
            </h2>
            
            <div className="p-8 rounded-xl border border-primary/20 bg-zinc-900/50 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-zinc-900 flex items-center justify-center overflow-hidden mr-4">
                  <ThumbsDown size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl text-highlight">From Our CEO</h3>
                </div>
              </div>
              <blockquote className="text-2xl font-bold text-white">
                "If you don't like my Coin you can Suck my Dick"
              </blockquote>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <DollarSign size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Our Value Proposition</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "When you see this Coin you'll puke in your mouth a little"
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <HelpCircle size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Confused?</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "WTF is this? We don't know either"
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <TrendingDown size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Investment Advice</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "Short this Shit. We probably would"
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <HeartCrack size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Customer Support</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "Lost your tokens? Not our problem"
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <Bomb size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Tokenomics</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "It's like a time bomb for your wallet"
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <PiggyBank size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Financial Expert</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "I'd rather invest in my nephew's lemonade stand"
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <Brain size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Investor Testimonial</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "I bought at the top. Now I live in a cardboard box"
                </p>
              </div>
              
              <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-xl">
                    <Footprints size={24} className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-highlight">Exit Strategy</h3>
                  </div>
                </div>
                <p className="text-xl text-zinc-300">
                  "Ours is well-planned. Yours doesn't exist"
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-8 rounded-xl border border-primary/20 bg-zinc-900/50 text-center">
              <p className="text-lg text-zinc-400 mb-4">Still here? You must be desperate...</p>
              <a 
                href="/dashboard" 
                className="inline-block px-8 py-4 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors duration-300"
              >
                Buy This Garbage
              </a>
            </div>
          </div>
          
          {/* Roadmap section */}
          <div id="roadmap" className="mt-32 max-w-6xl w-full scroll-mt-24">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
              ROADMAP TO NOWHERE
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-zinc-800"></div>
              
              <div className="space-y-24">
                {/* Q2 2023 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-highlight flex items-center justify-center text-black font-bold z-10">
                      <Calendar size={24} className="text-black" />
                    </div>
                  </div>
                  <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 ml-4 mr-4">
                    <h3 className="text-2xl font-bold mb-4 text-highlight">Initial Cash Grab</h3>
                    <ul className="space-y-2 text-zinc-300">
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>PSP22 token implementation we copy-pasted from GitHub</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Web interface our intern built during lunch breaks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Wallet connectivity that works 60% of the time, every time</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Q3 2023 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold z-10">
                      <Timer size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 ml-4 mr-4">
                    <h3 className="text-2xl font-bold mb-4 text-zinc-200">Rug Pull Preparation</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start">
                        <Circle className="text-zinc-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Adding backdoors to the staking mechanism</span>
                      </li>
                      <li className="flex items-start">
                        <Circle className="text-zinc-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Deployment on parachains no one has heard of</span>
                      </li>
                      <li className="flex items-start">
                        <Circle className="text-zinc-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Partnering with liquidity pools run by our cousins</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Q4 2023 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold z-10">
                      <Skull size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 ml-4 mr-4">
                    <h3 className="text-2xl font-bold mb-4 text-zinc-200">Exit Strategy</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li className="flex items-start">
                        <Circle className="text-zinc-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Fake DAO votes to approve our mega bonuses</span>
                      </li>
                      <li className="flex items-start">
                        <Circle className="text-zinc-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Move funds to untraceable offshore accounts</span>
                      </li>
                      <li className="flex items-start">
                        <Circle className="text-zinc-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>Rebrand and start over with a new coin in Q1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partners & Ecosystem */}
          <div id="ecosystem" className="mt-32 mb-16 max-w-6xl w-full scroll-mt-24">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
              ECOSYSTEM & PARTNERS
            </h2>
            
            <div className="flex flex-wrap justify-center gap-10 items-center opacity-60">
              <div className="w-32 h-20 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 font-bold">Polkadot</span>
              </div>
              <div className="w-32 h-20 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 font-bold">Substrate</span>
              </div>
              <div className="w-32 h-20 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 font-bold">ink!</span>
              </div>
              <div className="w-32 h-20 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 font-bold">Astar</span>
              </div>
              <div className="w-32 h-20 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <span className="text-zinc-400 font-bold">OpenBrush</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
