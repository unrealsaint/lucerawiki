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
  // Add trailing slash to ensure proper routing
  trailingSlash: true,
  // Ensure proper handling of static files
  poweredByHeader: false,
  // Enable static optimization
  swcMinify: true,
}

module.exports = nextConfig 