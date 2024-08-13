import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: [
      't0.gstatic.com', 't1.gstatic.com', 't2.gstatic.com', 't3.gstatic.com', 't4.gstatic.com',
      't5.gstatic.com', 't6.gstatic.com', 't7.gstatic.com', 't8.gstatic.com', 't9.gstatic.com',
      't10.gstatic.com', 't11.gstatic.com', 't12.gstatic.com', 't13.gstatic.com', 't14.gstatic.com',
      't15.gstatic.com', 't16.gstatic.com', 't17.gstatic.com', 't18.gstatic.com', 't19.gstatic.com',
      't20.gstatic.com', 'upload.wikimedia.org'
    ],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap_index', // Pastikan ini sesuai dengan route API untuk sitemap.xml
        permanent: true, // Redirect permanen (301)
      },
      {
        source: '/sitemap.rss',
        destination: '/api/rss', // Pastikan ini sesuai dengan route API untuk sitemap.rss
        permanent: true, // Redirect permanen (301)
      },
    ];
  },
};

export default nextConfig;
