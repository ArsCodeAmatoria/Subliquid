import { TokenBalance } from "@/components/TokenBalance";
import { MintForm } from "@/components/MintForm";
import { TransferForm } from "@/components/TransferForm";
import { TransactionHistory } from "@/components/TransactionHistory";

export default function Dashboard() {
  return (
    <div className="grid gap-8 max-w-6xl mx-auto">
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
