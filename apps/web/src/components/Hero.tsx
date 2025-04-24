'use client';

import { useWallet } from "@/lib/wallet-context";

export function Hero() {
  const { isConnected } = useWallet();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
          Subliquid
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mb-10">
          Experience the future of digital assets with our modern PSP22 token implementation.
          Built with ink! smart contracts and a sleek web interface.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {!isConnected ? (
            <a 
              href="/dashboard" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg
                transition-colors duration-200 font-semibold"
            >
              Connect Wallet
            </a>
          ) : (
            <a 
              href="/dashboard" 
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg
                transition-colors duration-200 font-semibold"
            >
              Go to Dashboard
            </a>
          )}
          
          <a 
            href="https://github.com/ArsCodeAmatoria/Subliquid" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg
              transition-colors duration-200 font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </div>
      
      {/* Features section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-6xl w-full">
        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-primary transition-colors duration-300">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
            <span className="text-primary text-2xl">💧</span>
          </div>
          <h3 className="text-xl font-bold mb-2">PSP22 Token</h3>
          <p className="text-zinc-400">
            Standard-compliant PSP22 token implementation built with ink! and OpenBrush
          </p>
        </div>
        
        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-primary transition-colors duration-300">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
            <span className="text-primary text-2xl">🔗</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
          <p className="text-zinc-400">
            Connect with Polkadot.js or Talisman wallet to interact with your tokens
          </p>
        </div>
        
        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-primary transition-colors duration-300">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
            <span className="text-primary text-2xl">✨</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Modern UI</h3>
          <p className="text-zinc-400">
            Sleek, responsive interface built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </div>
  );
}
