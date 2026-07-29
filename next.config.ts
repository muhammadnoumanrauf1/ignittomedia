import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS hosts
      },
      {
        protocol: 'http',
        hostname: '**', // Allow all HTTP hosts if needed
      },
    ],
  },
  // allowedDevOrigins: ['192.168.100.126'],
};

export default nextConfig;
