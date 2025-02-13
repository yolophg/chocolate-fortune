import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // export static HTML
  images: {
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
