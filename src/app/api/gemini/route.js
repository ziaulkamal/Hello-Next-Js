// src/app/api/gemini/route.js

import { formatAndSaveData } from '@/app/lib/formatAndSave'; // Pastikan path yang benar
import { generateSessionDataWithRetry, formatSessionData, stringToSlug } from '@/app/lib/gemini';

export async function GET(req) {
    try {
        // Mendapatkan URL dan parameter dari permintaan
        const url = new URL(req.url);
        const prompt = url.searchParams.get('prompt');
        const lang = url.searchParams.get('lang') || 'en';

        // Validasi parameter
        if (!prompt || !lang) {
            return new Response('Missing prompt or lang parameter', { 
                status: 400,
                headers: {
                    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                }
            });
        }

        const langCode = `${lang}_${lang}`;
        const results = {};

        // Menghasilkan data untuk setiap tipe sesi
        for (let sessionType = 1; sessionType <= 7; sessionType++) {
            const response = await generateSessionDataWithRetry(prompt, langCode, 'neutral', sessionType);
            results[`session_${sessionType}`] = formatSessionData(response);
        }

        // Memformat dan menyimpan data ke database
        await formatAndSaveData(results, prompt);

        return new Response('Content generated and saved to database successfully.', { 
            status: 200,
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });

    } catch (error) {
        console.error('Error processing request:', error);
        return new Response('Internal Server Error', { 
            status: 500,
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        });
    }
}
