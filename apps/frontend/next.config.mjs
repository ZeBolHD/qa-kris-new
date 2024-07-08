/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
        pathname: "**",
      },
      {
        hostname: "*",
        protocol: "http",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
