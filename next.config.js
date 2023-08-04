/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    NEXT_PUBLIC_GRAPHCMS_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    CHANNEL_ID: process.env.CHANNEL_ID,
  },
};

module.exports = nextConfig;
