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
  },
  transpilePackages: [
    'rc-util',
    'rc-tree',
    'rc-table',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
    'antd'
  ],

  webpack: (config, { isServer }) => {
    // Fix module resolution for rc-* packages
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
    };

    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  }
}

module.exports = nextConfig;


