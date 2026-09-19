/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "design-layer.com",
      },
    ],
  },
};

export default nextConfig;
