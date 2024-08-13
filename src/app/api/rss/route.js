import xml from 'xml';
import supabase from '@/app/lib/supabaseClient';

/**
 * Mengambil data artikel dari Supabase dan menghasilkan RSS feed.
 * @returns {Response} - Objek Response dengan konten RSS.
 */
export async function GET() {
    try {
        // Mengambil data artikel dari tabel 'articles_ai'
        const { data: articles, error } = await supabase
            .from('articles_ai')
            .select('title, slug, description, published_at');

        if (error) {
            throw new Error(`Error fetching articles: ${error.message}`);
        }

        // Format data untuk RSS feed SEO-friendly
        const rssItems = articles && articles.length > 0
            ? articles.map(article => {
                // Cek apakah kolom description ada, jika tidak, gunakan string default
                const description = article.description ? `<![CDATA[${article.description}]]>` : 'No description available';

                return {
                    item: [
                        { title: article.title },
                        { link: `${process.env.NEXT_PUBLIC_API_URL}/articles/${article.slug}` },
                        { description: description },
                        { pubDate: new Date(article.published_at).toUTCString() },
                        { guid: { _attr: { isPermaLink: 'true' }, _: `${process.env.NEXT_PUBLIC_API_URL}/articles/${article.slug}` } },
                        { category: 'Articles' }, // Ganti dengan kategori yang sesuai
                        { author: `Author Name <author@yoursite.com>` }
                    ]
                };
            })
            : []; // Jika tidak ada artikel, rssItems adalah array kosong

        // Definisi RSS feed
        const rssFeed = {
            rss: [
                { _attr: { version: '2.0' } },
                { channel: [
                    { title: 'Mindkreativ - Solusi Mitra Digital Anda' },
                    { link: process.env.NEXT_PUBLIC_API_URL },
                    { description: 'Mau buat aplikasi atau cari jasa kelola sosmed hingga scaleup brand ? Ya mindkreativ solusi nya!' },
                    { language: 'en_id' },
                    { lastBuildDate: new Date().toUTCString() },
                    { pubDate: new Date().toUTCString() },
                    { ttl: '60' },
                    ...rssItems // Menambahkan item jika ada
                ] },
            ],
        };

        // Menghasilkan RSS feed dalam format XML
        const xmlFeed = xml(rssFeed, { declaration: true });

        // Mengembalikan Response dengan konten XML
        return new Response(xmlFeed, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        // Kembalikan RSS feed dengan hanya elemen channel jika terjadi kesalahan
        const rssFeed = {
            rss: [
                { _attr: { version: '2.0' } },
                { channel: [
                    { title: 'Mindkreativ - Solusi Mitra Digital Anda' },
                    { link: process.env.NEXT_PUBLIC_API_URL },
                    { description:'Mau buat aplikasi atau cari jasa kelola sosmed hingga scaleup brand ? Ya mindkreativ solusi nya!' },
                    { language: 'en_id' },
                    { lastBuildDate: new Date().toUTCString() },
                    { pubDate: new Date().toUTCString() },
                    { ttl: '60' },
                ] },
            ],
        };
        const xmlFeed = xml(rssFeed, { declaration: true });

        // Mengembalikan Response dengan konten XML meskipun terjadi kesalahan
        return new Response(xmlFeed, {
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    }
}
