// /src/app/api/geminiTransform/route.js

import supabase from '@/app/lib/supabaseClient';
import { decode } from 'html-entities';
import axios from 'axios';

export async function GET() {
  try {
    // Fetch all rows from the 'googletrend' table where ai_process is false
    const { data, error } = await supabase
      .from('googletrend')
      .select('id, title')  // Fetch 'id' and 'title' fields
      .eq('ai_process', false);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
    }

    if (!data || data.length === 0) {
      return new Response(JSON.stringify({ message: 'No data found' }), {
        status: 404,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
    }

    // Select a random row from the data
    const randomIndex = Math.floor(Math.random() * data.length);
    const row = data[randomIndex];
    let title = row.title;

    // Decode HTML entities
    title = decode(title);

    // Remove single quotes and colons
    title = title.replace(/[':]/g, '');

    // Remove trailing spaces and dots
    title = title.replace(/[\s.]+$/, '');

    // Construct the request to the dynamic route /api/gemini/[param] using axios
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gemini/${encodeURIComponent(title)}`);

    if (response.status !== 200) {
      return new Response(JSON.stringify({ error: response.statusText }), {
        status: response.status,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
    }

    const result = response.data;

    // Update ai_process to true in Supabase
    const { error: updateError } = await supabase
      .from('googletrend')
      .update({ ai_process: true })
      .eq('id', row.id);

    if (updateError) {
      return new Response(JSON.stringify({ error: updateError.message }), {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Unexpected Error:', error);
    return new Response(JSON.stringify({ error: `An unexpected error occurred ${error}` }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  }
}
