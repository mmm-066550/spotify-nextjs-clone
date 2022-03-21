/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // target: "serverless",
  // optimizeFonts: false,
  env: {
    CLIENT_ID: "8f64788e26c9441487c4934944f713d2",
    CLIENT_SECRET: "80a82aa02df94437ab82686cd569c287",
  },
  images: {
    domains: [
      "i.scdn.co",
      "seed-mix-image.spotifycdn.com",
      "charts-images.scdn.co",
      "daily-mix.scdn.co",
    ],
  },
};

module.exports = nextConfig;
