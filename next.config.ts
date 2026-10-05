import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/products/jackets", destination: "/products", permanent: false },
      { source: "/products/coats", destination: "/products", permanent: false },
      { source: "/products/outerwear", destination: "/products", permanent: false },
    ];
  },
};

export default nextConfig;
