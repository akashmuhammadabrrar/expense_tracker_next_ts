import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@lib': path.resolve(__dirname, 'lib'),
      '@prisma/client': path.resolve(__dirname, 'node_modules/@prisma/client'),
    };

    // Important: return the modified config
    return config;
  },
  // Other Next.js config options can go here
};

export default nextConfig;