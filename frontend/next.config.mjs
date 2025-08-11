/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    // This fixes the Framer Motion module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': 'framer-motion',
    };
    return config;
  },
};

export default nextConfig;
