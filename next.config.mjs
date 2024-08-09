import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: ['upload.wikimedia.org'],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
};

export default nextConfig;
