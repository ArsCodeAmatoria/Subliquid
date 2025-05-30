'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@/lib/wallet-context';
import { getTokenBalance } from '@/lib/contract';

export function TokenBalance() {
  const { selectedAccount, isConnected } = useWallet();
  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;
    
    async function fetchBalance() {
      if (isConnected && selectedAccount) {
        try {
          setLoading(true);
          const result = await getTokenBalance(selectedAccount.address);
          setBalance(result);
        } catch (error) {
          console.error('Error fetching balance:', error);
        } finally {
          setLoading(false);
        }
      }
    }

    fetchBalance();
  }, [selectedAccount, isConnected]);

  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
      <h2 className="text-2xl font-semibold mb-4">Your Worthless Assets</h2>
      
      {!isConnected ? (
        <div className="text-center py-4">
          <p className="text-zinc-400">Too scared to connect your wallet? Pathetic.</p>
        </div>
      ) : loading ? (
        <div className="text-center py-4">
          <p className="text-zinc-400">Calculating your poor life choices...</p>
        </div>
      ) : (
        <>
          <div className="text-4xl font-bold text-highlight">{balance} Shitcoins</div>
          <p className="text-sm text-zinc-400 mt-2">Congratulations, you own literally nothing of value</p>
        </>
      )}
    </div>
  );
}
