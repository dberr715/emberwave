import withVideos from "next-videos";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during build (if needed)
  },
  // other config options here
};

export default withVideos(nextConfig);
