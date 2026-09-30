import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products/jackets", destination: "/products", permanent: false },
      { source: "/products/coats", destination: "/products", permanent: false },
      { source: "/products/outerwear", destination: "/products", permanent: false },
    ];
  },
};

export default nextConfig;
