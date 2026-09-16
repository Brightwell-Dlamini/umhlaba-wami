import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@umhlaba/domain', '@umhlaba/db'],
};

export default nextConfig;
