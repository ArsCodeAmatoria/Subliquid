# Subliquid

[![Next.js](https://img.shields.io/badge/Next.js-13.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![ink!](https://img.shields.io/badge/ink!-4.2.0-blue?style=flat-square)](https://use.ink/)
[![OpenBrush](https://img.shields.io/badge/OpenBrush-4.0.0_beta-orange?style=flat-square)](https://openbrush.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

A modern PSP22 token implementation with a sleek web interface built on Next.js and Polkadot.js.

## Project Structure
- `contracts/` - Ink! smart contracts
  - `subliquid-token/` - PSP22 token implementation
- `apps/` - Frontend applications
  - `web/` - Next.js web interface

## Tech Stack
- Backend: ink! + OpenBrush
- Frontend: Next.js, Tailwind CSS, shadcn/ui
- Blockchain: Substrate/Polkadot

## Features
- PSP22 compliant token with minting capability
- Connect with Polkadot.js or Talisman wallet
- View token balances
- Mint new tokens (requires appropriate permissions)
- Modern crypto-lux UI design with amber and emerald accents

## Setup and Development

### Smart Contract Development

1. Setup Rust and Cargo:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup component add rust-src
rustup target add wasm32-unknown-unknown
```

2. Install cargo-contract:
```bash
cargo install cargo-contract --force
```

3. Build the contract:
```bash
cd contracts/subliquid-token
cargo contract build
```

4. Deploy the contract:
   - Using [Windsurf](https://windsurf.polka.network/) for testnet deployment
   - Or a local node: `substrate-contracts-node --dev`

### Frontend Development

1. Install dependencies:
```bash
cd apps/web
npm install
# or
yarn install
# or 
pnpm install
```

2. Configure environment:
   Create a `.env.local` file in the `apps/web` directory:
   ```
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
   NEXT_PUBLIC_WS_ENDPOINT=wss://your-node-endpoint
   ```

3. Run development server:
```bash
cd apps/web
npm run dev
```

4. Access the application at:
```
http://localhost:3000
```

## Wallet Setup
1. Install a compatible wallet:
   - [Polkadot.js Extension](https://polkadot.js.org/extension/)
   - [Talisman Wallet](https://talisman.xyz/)

2. Create or import an account

3. Ensure the wallet is connected to the correct network:
   - For local development: `127.0.0.1:9944`
   - For testnet: Check your testnet's connection details

## Deployment

### Smart Contract
1. Deploy to testnet using [Windsurf](https://windsurf.polka.network/) 
2. Deploy to mainnet using the same process but connecting to mainnet endpoints

### Frontend
Deploy the frontend to Vercel:
```bash
npx vercel
```

## License
MIT
