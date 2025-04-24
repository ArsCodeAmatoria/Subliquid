import { Hero } from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subliquid | Revolutionary DeFi Token on Polkadot",
  description: "Experience the future of decentralized finance with Subliquid, the next generation PSP22 token for the Polkadot ecosystem with advanced liquidity features.",
  openGraph: {
    title: "Subliquid | Revolutionary DeFi Token on Polkadot",
    description: "Experience the future of decentralized finance with Subliquid, the next generation PSP22 token for the Polkadot ecosystem with advanced liquidity features.",
    url: "https://subliquid.io",
    siteName: "Subliquid",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subliquid | Revolutionary DeFi Token on Polkadot",
    description: "Experience the future of decentralized finance with Subliquid, the next generation PSP22 token for the Polkadot ecosystem with advanced liquidity features.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <Hero />;
}
