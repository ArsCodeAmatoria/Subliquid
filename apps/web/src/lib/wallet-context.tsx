'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

// Dynamically import browser-only modules
const importExtensionDapp = async () => {
  if (typeof window === 'undefined') return { web3Accounts: null, web3Enable: null };
  const module = await import('@polkadot/extension-dapp');
  return { 
    web3Accounts: module.web3Accounts, 
    web3Enable: module.web3Enable 
  };
};

interface WalletContextType {
  accounts: InjectedAccountWithMeta[];
  selectedAccount: InjectedAccountWithMeta | null;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  selectAccount: (account: InjectedAccountWithMeta) => void;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextType>({
  accounts: [],
  selectedAccount: null,
  isConnecting: false,
  connectWallet: async () => {},
  selectAccount: () => {},
  isConnected: false,
});

export const useWallet = () => useContext(WalletContext);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  
  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      
      // Dynamically import the extension modules
      const { web3Enable, web3Accounts } = await importExtensionDapp();
      
      if (!web3Enable || !web3Accounts) {
        console.error('Not in browser environment');
        return;
      }
      
      const extensions = await web3Enable('Subliquid');
      
      if (extensions.length === 0) {
        throw new Error('No extension found! Please install Polkadot.js or Talisman.');
      }
      
      const allAccounts = await web3Accounts();
      setAccounts(allAccounts);
      
      if (allAccounts.length > 0) {
        setSelectedAccount(allAccounts[0]);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };
  
  const selectAccount = (account: InjectedAccountWithMeta) => {
    setSelectedAccount(account);
  };
  
  return (
    <WalletContext.Provider
      value={{
        accounts,
        selectedAccount,
        isConnecting,
        connectWallet,
        selectAccount,
        isConnected: !!selectedAccount,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
} 