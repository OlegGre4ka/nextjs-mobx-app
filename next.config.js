/** @type {import('next').NextConfig} */
const nextConfig = {
  // module.exports = {
  reactStrictMode: true,
  formats: ['image/avif', 'image/webp'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/upload/**',
        // protocol: 'https',
        // hostname: 'via.placeholder.com',
        // port: '',
        // pathname: '/150/**',
      },
      //       {
      //   protocol: 'https',
      //   hostname: 'assets.vercel.com',
      //   port: '',
      //   pathname: '/image/upload/**',
      // },
    ],
  }
}

module.exports = nextConfig
