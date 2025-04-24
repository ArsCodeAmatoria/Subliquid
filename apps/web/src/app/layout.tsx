'use client';

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WalletProvider } from "@/lib/wallet-context";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Metadata needs to be in a separate file or component when using 'use client'
const metadata = {
  title: "Subliquid | Next-Gen DeFi Token on Polkadot",
  description: "Experience the future of decentralized finance with Subliquid, the next generation PSP22 token built on Polkadot with advanced liquidity features.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <WalletProvider>
          <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <a href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-highlight flex items-center justify-center">
                    <span className="text-black font-bold text-xs">SLQ</span>
                  </div>
                  <span className="text-2xl font-bold text-white">Subliquid</span>
                </a>
                
                <div className="flex items-center gap-6">
                  <a 
                    href="/#features" 
                    className="hidden md:block text-zinc-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                  <a 
                    href="/#testimonials" 
                    className="hidden md:block text-zinc-400 hover:text-white transition-colors"
                  >
                    Our Message
                  </a>
                  <a 
                    href="/#roadmap" 
                    className="hidden md:block text-zinc-400 hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                  <a 
                    href="/dashboard" 
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors border border-zinc-700"
                  >
                    Launch App
                  </a>
                </div>
              </div>
            </nav>
          </header>
          
          <main className="flex-grow pt-16">
            {children}
          </main>
          
          <Footer />
        </WalletProvider>
      </body>
    </html>
  );
}
