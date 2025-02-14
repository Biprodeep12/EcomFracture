/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rukminim2.flixcart.com',
      },
    ],
  },
};

export default nextConfig;
