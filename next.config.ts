import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'soulweb.s3.eu-north-1.amazonaws.com'
      }
    ]
  }
};

export default nextConfig;