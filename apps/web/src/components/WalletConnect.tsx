'use client';

import { useState } from "react";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";

export function WalletConnect() {
  const [address, setAddress] = useState<string>("");

  const connectWallet = async () => {
    try {
      const extensions = await web3Enable("Subliquid");
      if (extensions.length === 0) {
        alert("No extension found! Please install Polkadot.js or Talisman.");
        return;
      }

      const allAccounts = await web3Accounts();
      if (allAccounts.length > 0) {
        setAddress(allAccounts[0].address);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {!address ? (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg
            transition-colors duration-200 font-semibold"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-center">
          <p className="text-sm text-zinc-400">Connected Address</p>
          <p className="font-mono text-highlight">{address}</p>
        </div>
      )}
    </div>
  );
}
