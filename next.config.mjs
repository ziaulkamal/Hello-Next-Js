/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: ['upload.wikimedia.org', 'example.com', 'another-domain.com'],
  },
};

export default nextConfig;
