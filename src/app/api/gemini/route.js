import { formatAndSaveData } from '@/app/lib/formatAndSave'; // Pastikan path yang benar
import { generateSessionDataWithRetry, formatSessionData, stringToSlug } from '@/app/lib/gemini';
import fs from 'fs';
import path from 'path';

export async function GET(req) {
    try {
        // Mendapatkan URL dan parameter dari permintaan
        const url = new URL(req.url);
        const prompt = url.searchParams.get('prompt');
        const lang = url.searchParams.get('lang');

        // Validasi parameter
        if (!prompt || !lang) {
            return new Response('Missing prompt or lang parameter', { status: 400 });
        }

        const langCode = `${lang}_${lang}`;
        const filePath = path.join(process.cwd(), 'public', 'gemini_result', `${stringToSlug(prompt)}.json`);

        // Periksa apakah file sudah ada
        if (fs.existsSync(filePath)) {
            console.log(`File ${filePath} already exists. Skipping data generation.`);
        } else {
            const results = {};

            // Menghasilkan data untuk setiap tipe sesi
            for (let sessionType = 1; sessionType <= 7; sessionType++) {
                const response = await generateSessionDataWithRetry(prompt, langCode, 'neutral', sessionType);
                results[`session_${sessionType}`] = formatSessionData(response);
            }

            // Menyimpan hasil ke file JSON
            fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

            console.log(`Results saved to ${filePath}`);
        }

        // Memformat dan menyimpan data ke database, kemudian menghapus file JSON
        await formatAndSaveData(stringToSlug(prompt));

        return new Response('Content generated, saved to database, and file deleted successfully.', { status: 200 });

    } catch (error) {
        console.error('Error processing request:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
