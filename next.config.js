/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    CLIENT_ID:"a31e84724dfd4c3c8828547cd9fd59e3",
    CLIENT_SECRET:"5272286a2e0d4972a44fcf95b86a3261"
  },
  
  images: {
    domains: [
      "i.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "charts-images.scdn.co",
      "daily-mix.scdn.co",
      "mosaic.scdn.co",
      "thisis-images.scdn.co",
      "seeded-session-images.scdn.co",
      "newjams-images.scdn.co",
    ],
  },
};

module.exports = nextConfig;
