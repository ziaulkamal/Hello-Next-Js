// app/api/cron/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
  // Autentikasi menggunakan secret
  const authHeader = req.headers.get('Authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Memanggil endpoint /api/geminiTransform
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/geminiTransform`, {
      method: 'GET',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error calling /api/geminiTransform:', errorText);
      return NextResponse.json({ error: 'Error calling /api/geminiTransform' }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Unexpected Error:', error);
    return NextResponse.json({ error: 'Unexpected Error' }, { status: 500 });
  }
}
