/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/other-page',
        destination: `http://localhost:3001/other-page`,
      },
      {
        source: '/other-page/:path*',
        destination: `http://localhost:3001/other-page/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
