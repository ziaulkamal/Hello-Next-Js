import { scrapeImages } from '@/app/lib/googleImageScraper';

export async function GET(req) {
    try {
        // Mendapatkan URL dan parameter dari permintaan
        const url = new URL(req.url);
        const query = url.searchParams.get('query');
        const limit = parseInt(url.searchParams.get('limit')) || 10; // Ambil limit atau default ke 10

        // Validasi parameter
        if (!query) {
            return new Response('Missing query parameter', { status: 400 });
        }

        // Mengambil gambar berdasarkan kueri pencarian
        const imageUrls = await scrapeImages(query, limit);

        // Mengembalikan hasil sebagai JSON
        return new Response(JSON.stringify(imageUrls), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
