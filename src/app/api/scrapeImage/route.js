// src/app/api/imageGenerator/route.js

import { processImages } from '@/app/lib/imageUtils';

export async function GET(req) {
    try {
        // Mendapatkan URL dan parameter dari permintaan
        const url = new URL(req.url);
        const query = url.searchParams.get('query');
        const limit = parseInt(url.searchParams.get('limit')) || 10; // Ambil limit atau default ke 10

        // Validasi parameter
        if (!query) {
            return new Response(JSON.stringify({ error: 'Missing query parameter' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Mengunduh, menyimpan, dan memproses gambar
        const formattedResults = await processImages(query, limit);

        // Mengembalikan hasil sebagai JSON
        return new Response(JSON.stringify(formattedResults), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
