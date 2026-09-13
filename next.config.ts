import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/law-firm-website",
  assetPrefix: "/law-firm-website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;