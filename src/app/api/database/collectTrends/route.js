import supabase from '@/app/lib/supabaseClient'; // Pastikan path ini benar

export async function GET(request) {
    const url = new URL(request.url);
    const timestamp = url.searchParams.get('timestamp'); // Ambil timestamp dari query string
    
    try {
        // Query ke Supabase untuk mendapatkan semua data artikel dengan gambar
        const { data, error } = await supabase
            .rpc('get_articles_with_images');

        if (error) {
            console.error('Error fetching data from Supabase:', error);
            return new Response(JSON.stringify({ error: 'Error fetching data' }), { status: 500 });
        }

        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache' // Menghindari cache
            },
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
