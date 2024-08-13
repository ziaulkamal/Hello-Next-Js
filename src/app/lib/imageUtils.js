// src/app/lib/imageUtils.js

import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { format } from 'date-fns'; // Install date-fns jika belum: npm install date-fns
import sizeOf from 'image-size'; // Import image-size

/**
 * Menghapus parameter query setelah karakter '&' dari URL
 * @param {string} url - URL gambar yang mungkin mengandung parameter query
 * @returns {string} - URL gambar yang sudah dibersihkan
 */
function cleanUrl(url) {
    const [baseUrl] = url.split('&') || url.split('?');
    return baseUrl;
}

/**
 * Membersihkan title dari simbol dan karakter non-alfanumerik, hanya menyisakan kalimat
 * @param {string} title - Judul gambar dari sumber
 * @returns {string} - Title yang sudah dibersihkan
 */
function cleanTitle(title) {
    return title
        .replace(/[^a-zA-Z0-9\s]/g, '')  // Menghapus simbol dan karakter non-alfanumerik kecuali spasi
        .replace(/\s+/g, ' ')           // Mengubah beberapa spasi menjadi satu spasi
        .trim();                        // Menghapus spasi di awal dan akhir
}

/**
 * Mengunduh gambar dari URL dan menyimpannya ke direktori yang ditentukan.
 * @param {string} url - URL gambar yang akan diunduh.
 * @param {string} title - Judul gambar yang diambil dari sumber.
 * @param {string} query - Kueri pencarian untuk digunakan dalam nama file.
 * @param {number} index - Nomor urut gambar untuk digunakan dalam nama file.
 * @returns {Promise<object|null>} - Objek gambar dengan path gambar yang disimpan atau null jika gambar diabaikan.
 */
async function downloadAndSaveImage(url, title, query, index) {
    const cleanedUrl = cleanUrl(url);
    const cleanedTitle = cleanTitle(title);

    try {
        // Mendapatkan tanggal saat ini untuk membuat folder
        const now = new Date();
        const year = format(now, 'yyyy');
        const month = format(now, 'MM');

        // Direktori tujuan untuk menyimpan gambar
        const baseDir = path.join(process.cwd(), 'public/images/imagen', year, month);

        // Membuat direktori jika belum ada
        fs.mkdirSync(baseDir, { recursive: true });

        // Mengunduh gambar
        const imageResponse = await axios({
            url: cleanedUrl,
            responseType: 'arraybuffer'
        });

        // Menyusun nama file dari query dan nomor urut
        const fileName = `${query.replace(/\s+/g, '_')}_${index + 1}${path.extname(cleanedUrl)}`;
        const filePath = path.join(baseDir, fileName);

        // Menyimpan file
        fs.writeFileSync(filePath, imageResponse.data);

        // Mengambil dimensi gambar
        let dimensions = { height: 0, width: 0 };
        try {
            const size = sizeOf(imageResponse.data);
            dimensions = { height: size.height, width: size.width };
        } catch (sizeError) {
            console.error(`Error getting size of image ${cleanedUrl}:`, sizeError);
        }

        // Mengembalikan objek gambar dengan path gambar yang disimpan
        return {
            id: index + 1, // ID atau informasi lain yang relevan
            title: cleanedTitle || `Image ${index + 1}`, // Judul gambar yang sudah dibersihkan atau default
            url: cleanedUrl,
            height: dimensions.height,
            width: dimensions.width,
            image_path: `/images/imagen/${year}/${month}/${fileName}`
        };
    } catch (error) {
        console.error(`Error downloading or saving image from ${url}:`, error);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
}

/**
 * Mengunduh dan menyimpan beberapa gambar berdasarkan kueri pencarian, lalu mengembalikan hasil JSON.
 * @param {string} query - Kueri pencarian untuk digunakan dalam nama file.
 * @param {number} limit - Jumlah gambar yang ingin diambil.
 * @returns {Promise<Array>} - Array objek gambar dengan path gambar yang disimpan.
 */
export async function processImages(query, limit) {
    try {
        // Mengambil gambar berdasarkan kueri pencarian
        const { scrapeImages } = await import('./googleImageScraper'); // Dynamic import
        const results = await scrapeImages(query, limit);

        // Mengunduh dan memproses gambar
        const formattedResults = await Promise.all(results.result.map(async (item, index) => {
            // Mengunduh gambar dengan title dari hasil pencarian
            return downloadAndSaveImage(item.url, item.title, query, index);
        }));

        // Filter hasil yang valid (menghapus item null)
        return formattedResults.filter(result => result !== null);
    } catch (error) {
        console.error('Error processing images:', error);
        throw new Error('Failed to process images');
    }
}