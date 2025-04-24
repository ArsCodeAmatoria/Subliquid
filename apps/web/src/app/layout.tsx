import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WalletProvider } from "@/lib/wallet-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subliquid",
  description: "Modern PSP22 token with a sleek web interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text min-h-screen`}>
        <WalletProvider>
          <nav className="bg-zinc-900 border-b border-zinc-800 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-primary">Subliquid</a>
              <a href="/dashboard" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors">Dashboard</a>
            </div>
          </nav>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
