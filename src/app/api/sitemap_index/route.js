import xml from 'xml';

export async function GET(request) {
    try {
        // Ambil parameter timestamp dari query string jika ada
        const url = new URL(request.url);
        const timeStamp = Math.floor(Date.now() / 1000);
        // Ambil data artikel dari API eksternal
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/database/articles?timestamp=${timeStamp}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const articles = await response.json();

        // Base URL dari environment variable
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        // Format data artikel menjadi sitemap XML
        const sitemapIndex = articles.map(article => ({
            url: [
                { loc: `${baseUrl}/googleTrends/${article.slug}` },
                { lastmod: new Date(article.created_at).toISOString() },
                { changefreq: 'daily' },
                { priority: 0.8 }
            ]
        }));

        // Definisi sitemap XML
        const sitemapFeed = {
            urlset: [
                { _attr: { version: '1.0', xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
                ...sitemapIndex
            ]
        };

        // Menghasilkan sitemap XML
        const xmlFeed = xml(sitemapFeed, { declaration: true });

        return new Response(xmlFeed, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);

        // Jika terjadi kesalahan, berikan sitemap kosong dengan header yang sesuai
        const sitemapFeed = {
            urlset: [
                { _attr: { version: '1.0', xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
            ]
        };
        const xmlFeed = xml(sitemapFeed, { declaration: true });

        return new Response(xmlFeed, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    }
}
