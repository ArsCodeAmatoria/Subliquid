'use client';

import { useState } from 'react';
import { useWallet } from '@/lib/wallet-context';
import { transferTokens } from '@/lib/contract';

export function TransferForm() {
  const { selectedAccount, isConnected } = useWallet();
  const [recipient, setRecipient] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transferStatus, setTransferStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !selectedAccount || !amount || !recipient) return;
    
    try {
      setIsSubmitting(true);
      setTransferStatus('idle');
      
      const success = await transferTokens(selectedAccount, recipient, amount);
      
      if (success) {
        setTransferStatus('success');
        setAmount('');
        setRecipient('');
      } else {
        setTransferStatus('error');
      }
    } catch (error) {
      console.error('Error transferring tokens:', error);
      setTransferStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
      <h2 className="text-2xl font-semibold mb-4">Spread The Misery</h2>
      
      {!isConnected ? (
        <div className="text-center py-4">
          <p className="text-zinc-400">Connect your damn wallet first, or are you too stupid?</p>
        </div>
      ) : (
        <>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="recipient" className="block text-sm font-medium mb-2">
                Who's The Poor Sucker?
              </label>
              <input
                type="text"
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-primary text-white"
                placeholder="Victim's address"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-2">
                How Much Garbage To Send
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-primary text-white"
                placeholder="They'll hate you for this"
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !amount || !recipient}
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg
                transition-colors duration-200 font-semibold disabled:opacity-50"
            >
              {isSubmitting ? 'Infecting Victim...' : 'Dump On This Fool'}
            </button>
          </form>
          
          {transferStatus === 'success' && (
            <div className="mt-4 p-3 bg-secondary/20 border border-secondary rounded-lg text-white">
              Transaction complete! You've ruined someone else's day. Nice work.
            </div>
          )}
          
          {transferStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-white">
              Failed. Your victim got lucky this time.
            </div>
          )}
        </>
      )}
    </div>
  );
} 