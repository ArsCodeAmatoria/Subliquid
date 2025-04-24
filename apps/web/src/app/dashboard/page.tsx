import { TokenBalance } from "@/components/TokenBalance";
import { MintForm } from "@/components/MintForm";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TokenBalance />
        <MintForm />
      </div>
    </div>
  );
}
