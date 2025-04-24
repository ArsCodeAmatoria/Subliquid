'use client';

import { useState } from 'react';
import { useWallet } from '@/lib/wallet-context';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isConnected, selectedAccount } = useWallet();
  const [activeTab, setActiveTab] = useState<'overview' | 'transfer' | 'history'>('overview');

  // Helper to truncate address
  const truncateAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Dashboard Header */}
      <div className="bg-zinc-900/70 backdrop-blur-sm border-b border-zinc-800 py-6 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
                Subliquid Dashboard
              </h1>
              {isConnected && selectedAccount && (
                <p className="text-zinc-400 text-sm mt-1">
                  Connected: <span className="font-mono">{truncateAddress(selectedAccount.address)}</span>
                </p>
              )}
            </div>

            {/* Account Summary Card */}
            {isConnected && selectedAccount && (
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-zinc-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xl">SL</span>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Account</p>
                    <p className="font-medium text-highlight">
                      {selectedAccount.meta.name || truncateAddress(selectedAccount.address)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
} 