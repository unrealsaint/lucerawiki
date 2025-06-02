/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: true,
  // Remove trailingSlash as it might cause routing issues
  poweredByHeader: false,
  // Enable static optimization
  swcMinify: true,
}

module.exports = nextConfig 