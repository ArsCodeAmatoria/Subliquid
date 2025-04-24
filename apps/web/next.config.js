/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: (config, { isServer }) => {
    // Handle browser-only modules when running in Node.js
    if (isServer) {
      // Make specific modules empty on the server-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
      
      // Prevent polkadot modules from being included in the server-side bundle
      config.externals = [...(config.externals || []), 
        '@polkadot/api',
        '@polkadot/api-contract',
        '@polkadot/extension-dapp',
        '@polkadot/keyring',
        '@polkadot/util',
        '@polkadot/util-crypto',
        '@polkadot/networks'
      ];
    }
    
    return config;
  },
  experimental: {
    // Disable optimizeCss as it's causing issues
    optimizeCss: false,
  },
};

module.exports = nextConfig; 