/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://botify-server.kz'
  }
}

module.exports = nextConfig
