import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/vexel-portfolio",
  images: { unoptimized: true },
};

export default nextConfig;
