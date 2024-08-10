import { NextResponse } from 'next/server';
import googleTrendsClient from '@/app/lib/googleTrendsClient';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const geo = url.searchParams.get('geo') || 'US'; // Default ke 'US'

    const trendsData = await googleTrendsClient.fetchRealTimeTrends(geo);
    return NextResponse.json(trendsData);
  } catch (error) {
    console.error('Error fetching realtime trends:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
