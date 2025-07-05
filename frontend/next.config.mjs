/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
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

export default nextConfig;  // ✅ ES6 export (not module.exports)