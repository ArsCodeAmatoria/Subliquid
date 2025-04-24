'use client';

import { useState } from 'react';
import { useWallet } from '@/lib/wallet-context';
import { mintTokens } from '@/lib/contract';

export function MintForm() {
  const { selectedAccount, isConnected } = useWallet();
  const [amount, setAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mintStatus, setMintStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !selectedAccount || !amount) return;
    
    try {
      setIsSubmitting(true);
      setMintStatus('idle');
      
      const success = await mintTokens(selectedAccount, amount);
      
      if (success) {
        setMintStatus('success');
        setAmount('');
      } else {
        setMintStatus('error');
      }
    } catch (error) {
      console.error('Error minting tokens:', error);
      setMintStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
      <h2 className="text-2xl font-semibold mb-4">Mint Tokens</h2>
      
      {!isConnected ? (
        <div className="text-center py-4">
          <p className="text-zinc-400">Connect your wallet to mint tokens</p>
        </div>
      ) : (
        <>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-2">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-primary text-white"
                placeholder="Enter amount to mint"
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !amount}
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg
                transition-colors duration-200 font-semibold disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Mint Tokens'}
            </button>
          </form>
          
          {mintStatus === 'success' && (
            <div className="mt-4 p-3 bg-secondary/20 border border-secondary rounded-lg text-white">
              Tokens minted successfully!
            </div>
          )}
          
          {mintStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-white">
              Failed to mint tokens. Please try again.
            </div>
          )}
        </>
      )}
    </div>
  );
}
