import { NextResponse } from 'next/server';
import googleTrendsClient from '@/app/lib/googleTrendsClient';

export async function GET(request) {
  const url = new URL(request.url);
  const term = url.searchParams.get('term') || '';

  try {
    const data = await googleTrendsClient.fetchAutoComplete(term);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching autocomplete data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
