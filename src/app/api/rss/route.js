import xml from 'xml';
import supabase from '@/app/lib/supabaseClient';
import { JSDOM } from 'jsdom'; // Install jsdom: npm install jsdom

// Fungsi untuk membersihkan HTML dan memotong teks
function cleanAndTruncateHtml(html, maxLength = 300) {
    const dom = new JSDOM(html);
    const textContent = dom.window.document.body.textContent || '';
    return textContent.length > maxLength ? `${textContent.substring(0, maxLength)}...` : textContent;
}

/**
 * Mengambil data artikel dari Supabase dan menghasilkan RSS feed.
 * @returns {Response} - Objek Response dengan konten RSS.
 */
export async function GET() {
    try {
        // Mengambil data artikel dari tabel 'articles_ai'
        const { data: articles, error } = await supabase
            .from('articles_ai')
            .select('title, slug, data, keywords');

        if (error) {
            console.error(`Error fetching articles: ${error.message}`);
            throw error;
        }

        console.log('Fetched articles:', articles); // Log untuk memeriksa data yang diambil

        // Format data untuk RSS feed SEO-friendly
        const rssItems = articles && articles.length > 0
            ? articles.map(article => {
                // Membersihkan HTML dan memotong data menjadi 300 karakter
                const description = cleanAndTruncateHtml(article.data);

                return {
                    item: [
                        { title: article.title },
                        { link: `${process.env.NEXT_PUBLIC_API_URL}/articles/${article.slug}` },
                        { description: `<![CDATA[${description}]]>` },
                        { pubDate: new Date().toUTCString() },
                        { guid: { _attr: { isPermaLink: 'true' }, _: `${process.env.NEXT_PUBLIC_API_URL}/articles/${article.slug}` } },
                        { category: article.keywords || 'General' }, // Ganti dengan kategori yang sesuai
                        { author: `Zia Dev <ziadev@mindkreativ.com>` }
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
                    { language: 'id' }, // Gunakan kode bahasa yang benar
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
                    { description: 'Mau buat aplikasi atau cari jasa kelola sosmed hingga scaleup brand ? Ya mindkreativ solusi nya!' },
                    { language: 'id' }, // Gunakan kode bahasa yang benar
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
