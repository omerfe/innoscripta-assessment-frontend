/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.guim.co.uk",
      },
      {
        protocol: "https",
        hostname: "**.espncdn.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
