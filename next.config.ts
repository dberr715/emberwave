import withVideos from "next-videos";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, "./"),
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint during build (if needed)
  },
};

export default withVideos(nextConfig);
