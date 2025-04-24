/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: (config) => {
    return config;
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig; 