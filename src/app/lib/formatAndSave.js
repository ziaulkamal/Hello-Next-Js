import fs from 'fs';
import path from 'path';
import supabase from '@/app/lib/supabaseClient';


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

// Fungsi untuk menghapus semua file JSON terkait
function deleteAllRelatedFiles(inputFileName) {
    const directory = path.join(process.cwd(), 'public', 'gemini_result');
    
    // Membaca daftar file dalam direktori
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Menghapus semua file yang cocok dengan pola inputFileName
        files.forEach(file => {
            if (file.startsWith(inputFileName) && file.endsWith('.json')) {
                fs.unlink(path.join(directory, file), (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                    } else {
                        console.log('Deleted file:', file);
                    }
                });
            }
        });
    });
}

// Path file input dan output
const getFilePaths = (inputFileName) => {
    const inputFilePath = path.join(process.cwd(), 'public', 'gemini_result', `${inputFileName}.json`);
    const outputFilePath = path.join(process.cwd(), 'public', 'gemini_result', `${inputFileName}_formatted.json`);
    return { inputFilePath, outputFilePath };
};

// Fungsi untuk memformat dan menyimpan data
export async function formatAndSaveData(inputFileName) {
    const { inputFilePath, outputFilePath } = getFilePaths(inputFileName);

    try {
        // Membaca file JSON
        const data = fs.readFileSync(inputFilePath, 'utf8');
        const jsonData = JSON.parse(data);

        // Membentuk objek hasil
        const result = {
            title: "",
            slug: "",
            data: "",
            keywords: ""
        };

        let combinedData = [];

        Object.keys(jsonData).forEach(key => {
            const item = jsonData[key];

            if (item.title) {
                result.title = item.title;
            }
            if (item.slug) {
                result.slug = item.slug;
            }
            if (item.data) {
                combinedData.push(item.data);
            }
            if (item.keywords) {
                result.keywords = item.keywords.join(', '); // Menggabungkan array keywords menjadi string
            }
        });

        // Gabungkan semua data menjadi satu string
        if (combinedData.length > 0) {
            result.data = combinedData.join(' ');
        }

        // Tulis hasil ke file output
        fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2), 'utf8');
        console.log(`File successfully processed and saved to ${outputFilePath}`);

        // Simpan hasil ke Supabase
            await saveToSupabase(result);

            // Hapus semua file JSON terkait setelah data disimpan
            deleteAllRelatedFiles(inputFileName);
        // // Hapus file JSON setelah data disimpan
        // fs.unlinkSync(inputFilePath);
        // console.log(`File ${inputFilePath} successfully deleted.`);
        
    } catch (error) {
        console.error('Error processing file:', error);
    }
}
