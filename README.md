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

## Development
1. Install dependencies:
```bash
# For contracts
cd contracts/subliquid-token
cargo build

# For frontend
cd apps/web
npm install
```

2. Run development server:
```bash
cd apps/web
npm run dev
```

3. Connect wallet:
- Install Polkadot.js or Talisman extension
- Connect to local node or supported network
- Interact with the dApp

## License
MIT
