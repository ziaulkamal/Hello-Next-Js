import supabase from '@/app/lib/supabaseClient'; // Sesuaikan path jika perlu

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug'); // Ambil slug dari query parameter

    if (!slug) {
        return new Response(JSON.stringify({ error: 'Slug is required' }), { status: 400 });
    }

    try {
        // Mengambil data artikel
        const { data: article, error: articleError } = await supabase
            .from('articles_ai')
            .select('*')
            .eq('slug', slug)
            .single(); // Mengambil satu artikel berdasarkan slug
        if (articleError || !article) {
            console.error('Error fetching data from Supabase:', articleError);
            return new Response(JSON.stringify({ error: 'Article not found' }), { status: 404 });
        }

        // Mengambil data gambar yang terkait dengan artikel
        const { data: images, error: imagesError } = await supabase
            .from('images_ai')
            .select('images_data')
            .eq('slug', slug);

        if (imagesError) {
            console.error('Error fetching images from Supabase:', imagesError);
            return new Response(JSON.stringify({ error: 'Error fetching images' }), { status: 500 });
        }

        // Menggabungkan data artikel dan gambar
        const responseData = {
            article: {
                id: article.id,
                title: article.title,
                slug: article.slug,
                content: article.data,
                keyword: article.keywords,
                created_at: article.created_at,
                updated_at: article.updated_at,
                total_hit: article.total_hit
            },
            images: images.map(img => img.images_data)
        };

        return new Response(JSON.stringify(responseData), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
