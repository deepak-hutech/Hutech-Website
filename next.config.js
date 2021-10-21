/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');

module.exports = {
  reactStrictMode: true,
  optimizedImages,
  images: {
    loader: "custom",
    path: "https://strapi.hutech.solutions/",
    minimumCacheTTL: 36400,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};