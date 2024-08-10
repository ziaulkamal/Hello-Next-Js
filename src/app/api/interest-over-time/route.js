import { NextResponse } from 'next/server';
import googleTrendsClient from '../../lib/googleTrendsClient';

export async function GET(request) {
  const url = new URL(request.url);
  const keyword = url.searchParams.get('keyword') || 'example';
  const startTime = new Date(url.searchParams.get('startTime')) || new Date(new Date().setMonth(new Date().getMonth() - 1));

  try {
    const data = await googleTrendsClient.fetchInterestOverTime(keyword, startTime);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching interest over time:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
