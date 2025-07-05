/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_BASE_URL: process.env.API_BASE_URL || 'https://hotel-room-booking-system-j0rb.onrender.com',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['antd', 'rc-util'],
  experimental: {
    esmExternals: 'loose'
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  }
}

module.exports = nextConfig;
