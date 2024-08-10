import { NextResponse } from 'next/server';
import googleTrendsClient from '@/app/lib/googleTrendsClient';

export async function GET(request) {
  const url = new URL(request.url);
  const keyword = url.searchParams.get('keyword') || 'example'; // Default keyword jika tidak ada

  try {
    const trendsData = await googleTrendsClient.fetchKeywordTrends(keyword);
    return NextResponse.json(trendsData);
  } catch (error) {
    console.error('Error fetching keyword trends:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
