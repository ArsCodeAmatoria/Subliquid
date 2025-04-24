import { TokenBalance } from "@/components/TokenBalance";
import { MintForm } from "@/components/MintForm";
import { TransferForm } from "@/components/TransferForm";
import { TransactionHistory } from "@/components/TransactionHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subliquid | Scam Portal - Lose Money in Style",
  description: "Welcome to the dashboard where you can waste your time and crypto on our useless tokens. Have fun losing money!",
};

export default function Dashboard() {
  return (
    <div className="grid gap-8 max-w-6xl mx-auto">
      {/* Introduction message */}
      <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 text-center">
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
          Welcome to the Scam Portal
        </h1>
        <p className="text-zinc-400">
          Look at you, actually logging in. Either you're a masochist or genuinely stupid. 
          Enjoy losing your money with our fancy buttons below.
        </p>
      </div>
      
      {/* Top row: Balance and Actions */}
      <div className="grid md:grid-cols-2 gap-8">
        <TokenBalance />
        <div className="grid gap-8">
          <MintForm />
          <TransferForm />
        </div>
      </div>
      
      {/* Bottom row: Transaction History */}
      <TransactionHistory />
    </div>
  );
}
