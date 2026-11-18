import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // build plain HTML files into out/
  images: { unoptimized: true }, // next/image works without a server
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;