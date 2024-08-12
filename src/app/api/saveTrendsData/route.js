import supabase from '@/app/lib/supabaseClient'; // Path ke file lib Supabase Anda

export async function POST(req) {
  try {
    const items = await req.json(); // Get JSON data from the request

    if (!Array.isArray(items)) {
      throw new Error('Expected an array of items.');
    }

    for (const item of items) {
      const formattedItem = {
        title: item.title,
        url: item.url,
        snippet: item.snippet,
        source: item.source,
        image_url: item.image?.imageUrl || null,
        ai_process: false
      };

      const { error } = await supabase
        .from('googletrend')
        .upsert(formattedItem, { onConflict: ['title'] });

      if (error) {
        console.error('Supabase error:', error.message);
        throw error;
      }

      // Add delay between inserts to avoid hitting rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return new Response(JSON.stringify({ message: 'Data saved successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error inserting data:', error.message);
    return new Response(JSON.stringify({ error: 'Error inserting data', details: error.message }), { status: 500 });
  }
}