import xml from 'xml';
import supabase from '@/app/lib/supabaseClient'; // Sesuaikan path jika perlu

/**
 * Mengambil data artikel dan menghasilkan sitemap XML.
 * @returns {Response} - Objek Response dengan konten XML.
 */
export async function GET() {
    try {
        // Ambil data artikel dari tabel 'articles_ai'
        const { data: articles, error: articlesError } = await supabase
            .from('articles_ai')
            .select('title, slug, created_at');

        if (articlesError) {
            console.error(`Error fetching articles: ${articlesError.message}`);
            throw articlesError;
        }

        // Format URL artikel
        const articleUrls = articles.map(article => ({
            url: [
                { loc: `${process.env.NEXT_PUBLIC_API_URL}/articles/${article.slug}` },
                { lastmod: new Date(article.created_at).toISOString() }
            ]
        }));

        // Definisi sitemap XML
        const sitemapFeed = {
            urlset: [
                { _attr: { version: '1.0', xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
                ...articleUrls
            ]
        };

        // Menghasilkan sitemap XML dalam format XML
        const xmlFeed = xml(sitemapFeed, { declaration: true });

        // Mengembalikan Response dengan konten XML
        return new Response(xmlFeed, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);

        // Kembalikan sitemap kosong jika terjadi kesalahan
        const sitemapFeed = {
            urlset: [
                { _attr: { version: '1.0', xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
            ]
        };
        const xmlFeed = xml(sitemapFeed, { declaration: true });

        // Mengembalikan Response dengan konten XML meskipun terjadi kesalahan
        return new Response(xmlFeed, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    }
}
