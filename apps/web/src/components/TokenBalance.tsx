'use client';

export function TokenBalance() {
  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
      <h2 className="text-2xl font-semibold mb-4">Token Balance</h2>
      <div className="text-4xl font-bold text-highlight">0 SLQ</div>
      <p className="text-sm text-zinc-400 mt-2">Your Subliquid Token Balance</p>
    </div>
  );
}
