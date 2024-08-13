import supabase from '@/app/lib/supabaseClient';
import { processImages } from './imageUtils';

// Fungsi untuk menyimpan data ke Supabase
async function saveToSupabase(result) {
    const { title, slug, data, keywords } = result;

    // Menyimpan data ke tabel articles_ai di Supabase
    const { error } = await supabase
        .from('articles_ai')
        .upsert([
            {
                title,
                slug,
                data,
                keywords
            }
        ]);

    if (error) {
        console.error('Error saving to Supabase:', error);
        throw new Error('Error saving to Supabase');
    }
}

async function saveImageToSupabase(slug, data) {
    const { error } = await supabase
        .from('images_ai')
        .upsert([
            {
                slug,
                images_data: data,
            }
        ]);
    if (error) {
        console.error('Error saving to Supabase:', error);
        throw new Error('Error saving to Supabase');
    }
}

// Fungsi untuk menghapus semua file JSON terkait
function deleteAllRelatedFiles(inputFileName) {
    // Fungsi ini tidak diperlukan lagi jika kita tidak menggunakan file JSON
}

// Fungsi untuk memformat dan menyimpan data
export async function formatAndSaveData(results, prompt) {
    try {
        const result = {
            title: "",
            slug: "",
            data: "",
            keywords: ""
        };

        let combinedData = [];
        let title = '';
        let slug = '';
        let keywords = '';

        Object.keys(results).forEach(key => {
            const item = results[key];

            if (item.title) {
                title = item.title;
            }
            if (item.slug) {
                slug = item.slug;
            }
            if (item.data) {
                combinedData.push(item.data);
            }
            if (item.keywords) {
                keywords = item.keywords.join(', ');
            }
        });

        result.title = title;
        result.slug = slug;
        result.data = combinedData.join(' ');
        result.keywords = keywords;

        await saveToSupabase(result);
        const imageJson = await processImages(result.slug, 20);
        await saveImageToSupabase(result.slug, imageJson);

    } catch (error) {
        console.error('Error processing data:', error);
    }
}
