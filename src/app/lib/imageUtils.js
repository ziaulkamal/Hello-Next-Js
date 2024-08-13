import { scrapeImages } from './googleImageScraper'; // Import sesuai kebutuhan

/**
 * Mengambil gambar berdasarkan kueri pencarian dan mengembalikan data sebagai JSON.
 * @param {string} query - Kueri pencarian untuk digunakan dalam nama file.
 * @param {number} limit - Jumlah gambar yang ingin diambil.
 * @returns {Promise<Array>} - Array hasil gambar dalam format JSON.
 */
export async function processImages(query, limit) {
    try {
        // Mengambil gambar berdasarkan kueri pencarian
        const results = await scrapeImages(query, limit);

        // Memformat data gambar
        const formattedResults = results.result.map(item => ({
            url: item.url,
            title: item.title,
            // Tambahkan informasi lain yang diperlukan jika ada
        }));

        // Mengembalikan hasil sebagai JSON
        return formattedResults;
    } catch (error) {
        console.error('Error processing images:', error);
        throw new Error('Failed to process images');
    }
}
