'use client';

import { useWallet } from "@/lib/wallet-context";

export function WalletConnect() {
  const { isConnected, connectWallet, selectedAccount, accounts, selectAccount, isConnecting } = useWallet();

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {!isConnected ? (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg
            transition-colors duration-200 font-semibold disabled:opacity-50"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="text-center">
          <p className="text-sm text-zinc-400">Connected Address</p>
          <p className="font-mono text-highlight mb-4">{selectedAccount?.address}</p>
          
          {accounts.length > 1 && (
            <div className="mt-4">
              <p className="text-sm text-zinc-400 mb-2">Switch Account</p>
              <div className="flex flex-col gap-2 max-h-40 overflow-y-auto">
                {accounts.map((account) => (
                  <button
                    key={account.address}
                    onClick={() => selectAccount(account)}
                    className={`text-sm px-3 py-2 rounded-lg transition-colors ${
                      selectedAccount?.address === account.address
                        ? 'bg-primary/20 border border-primary'
                        : 'bg-zinc-800 hover:bg-zinc-700'
                    }`}
                  >
                    {account.meta.name || account.address}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <a 
            href="/dashboard" 
            className="mt-6 inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
          >
            Go to Dashboard
          </a>
        </div>
      )}
    </div>
  );
}
