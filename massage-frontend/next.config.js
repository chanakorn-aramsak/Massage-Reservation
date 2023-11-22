/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com"],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
