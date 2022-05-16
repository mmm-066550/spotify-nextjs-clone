/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
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
