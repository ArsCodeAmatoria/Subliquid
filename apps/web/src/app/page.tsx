import { Hero } from "@/components/Hero";
import { WalletConnect } from "@/components/WalletConnect";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <WalletConnect />
    </main>
  );
}
