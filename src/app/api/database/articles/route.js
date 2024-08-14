import supabase from '@/app/lib/supabaseClient'; // Sesuaikan path jika perlu

export async function GET(request) {
    try {
        // Ambil parameter timestamp dari query string jika ada
        const url = new URL(request.url);
        const timestamp = url.searchParams.get('timestamp');

        // Query ke Supabase untuk mendapatkan data artikel
        const { data: articles, error } = await supabase
            .from('articles_ai')
            .select('slug, created_at');

        if (error) {
            console.error('Error fetching data from Supabase:', error);
            return new Response(JSON.stringify({ error: 'Error fetching data' }), { status: 500 });
        }

        return new Response(JSON.stringify(articles), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
