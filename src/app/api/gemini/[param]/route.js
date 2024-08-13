// /src/app/api/gemini/[param]/route.js

import { NextResponse } from 'next/server';
import { formatAndSaveData } from '@/app/lib/formatAndSave'; // Pastikan path yang benar
import { generateSessionDataWithRetry, formatSessionData } from '@/app/lib/gemini';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const param = url.pathname.split('/').pop(); // Ambil parameter dinamis dari URL
    const prompt = decodeURIComponent(param); // Dekode parameter jika diperlukan

    if (!prompt) {
      return NextResponse.json(
        { error: 'Missing prompt parameter' },
        {
          status: 400,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        }
      );
    }

    const langCode = 'en_en'; // Anda bisa mengubah ini sesuai kebutuhan
    const results = {};

    for (let sessionType = 1; sessionType <= 7; sessionType++) {
      const response = await generateSessionDataWithRetry(prompt, langCode, 'neutral', sessionType);
      results[`session_${sessionType}`] = formatSessionData(response);
    }

    await formatAndSaveData(results, prompt);

    return NextResponse.json('Content generated and saved to database successfully.', {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  }
}
