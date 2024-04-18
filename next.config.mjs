/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // loader: "custom",
    // loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "winningfits.com",
      },
      {
        protocol: "https",
        hostname: "nordicapis.com",
      },
    ],
  },
};

export default nextConfig;
