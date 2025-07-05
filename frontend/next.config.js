/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,  // ✅ Match your .env file
  },
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    'rc-util',
    'rc-tree',
    'rc-table',
    'rc-tooltip',
    'rc-motion',
    'rc-field-form',
    'rc-input',
    'rc-select'
  ],
  experimental: {
    esmExternals: false,
  },
  // Remove publicRuntimeConfig to avoid conflicts
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'rc-util/es': 'rc-util/lib',
      'rc-util/es/warning': 'rc-util/lib/warning',
      'rc-util/es/warning.js': 'rc-util/lib/warning.js',
    };
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;