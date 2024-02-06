/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  experimental: {
      serverActions: {
          allowedOrigins: ["localhost:3000", "zany-waddle-jwq9vr74wp53qgjq-3000.app.github.dev"],
      },
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
