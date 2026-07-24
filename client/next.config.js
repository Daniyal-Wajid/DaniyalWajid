/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  basePath: "/DaniyalWajid",
  assetPrefix: "/DaniyalWajid/",
};

module.exports = nextConfig;
