import { NextResponse } from 'next/server';
import googleTrendsClient from '@/app/lib/googleTrendsClient';

export async function GET(request) {
  const url = new URL(request.url);
  const geo = url.searchParams.get('geo') || 'US';

  try {
    const data = await googleTrendsClient.fetchDailyTrends(geo);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching daily trends:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
