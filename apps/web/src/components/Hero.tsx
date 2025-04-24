'use client';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
        Subliquid Token
      </h1>
      <p className="text-xl text-zinc-400 max-w-2xl">
        Experience the future of digital assets with our modern PSP22 token implementation.
        Connect your wallet to start minting and managing your Subliquid tokens.
      </p>
    </div>
  );
}
