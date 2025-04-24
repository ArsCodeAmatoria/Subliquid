'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '@/lib/wallet-context';

// Mock transaction interface - in a real app, this would come from the blockchain or a backend
interface Transaction {
  id: string;
  type: 'mint' | 'transfer';
  from: string;
  to: string;
  amount: string;
  timestamp: number;
}

export function TransactionHistory() {
  const { selectedAccount, isConnected } = useWallet();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  // This is a mock implementation - in a real app, you would fetch transactions from the blockchain
  useEffect(() => {
    if (isConnected && selectedAccount) {
      setLoading(true);
      
      // Simulate API call with a timeout
      const timeout = setTimeout(() => {
        // Mock data
        const mockTransactions: Transaction[] = [
          {
            id: '0x1234...5678',
            type: 'mint',
            from: 'Subliquid Scam Contract',
            to: selectedAccount.address,
            amount: '1000',
            timestamp: Date.now() - 3600000 // 1 hour ago
          },
          {
            id: '0x8765...4321',
            type: 'transfer',
            from: selectedAccount.address,
            to: '5FHneW46...X1EvCuL',
            amount: '50',
            timestamp: Date.now() - 7200000 // 2 hours ago
          }
        ];
        
        setTransactions(mockTransactions);
        setLoading(false);
      }, 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [selectedAccount, isConnected]);

  // Helper to format timestamp
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  // Helper to truncate address
  const truncateAddress = (address: string) => {
    if (!address) return '';
    if (address === 'Subliquid Scam Contract') return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
      <h2 className="text-2xl font-semibold mb-4">Evidence of Your Poor Decisions</h2>
      
      {!isConnected ? (
        <div className="text-center py-4">
          <p className="text-zinc-400">Connect your wallet, moron. We can't mock you without data.</p>
        </div>
      ) : loading ? (
        <div className="text-center py-4">
          <p className="text-zinc-400">Digging up your failures...</p>
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-zinc-400">No transactions found. Even our scam doesn't want you.</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {transactions.map((tx) => (
            <div 
              key={tx.id} 
              className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span 
                  className={`text-sm px-2 py-0.5 rounded ${
                    tx.type === 'mint' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                  }`}
                >
                  {tx.type === 'mint' ? 'You Got Scammed' : 'You Spread the Scam'}
                </span>
                <span className="text-xs text-zinc-400">{formatDate(tx.timestamp)}</span>
              </div>
              
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">From:</span>
                  <span className="font-mono">{truncateAddress(tx.from)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">To:</span>
                  <span className="font-mono">{truncateAddress(tx.to)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Amount:</span>
                  <span className="text-highlight">{tx.amount} Pieces of Garbage</span>
                </div>
              </div>
              
              <div className="mt-2 text-xs">
                <a 
                  href={`https://polkadot.subscan.io/extrinsic/${tx.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Publicly Shame Yourself
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 