import supabase from '@/app/lib/supabaseClient'; // Path ke file lib Supabase Anda

export async function POST(req) {
  try {
    const items = await req.json(); // Get JSON data from the request

    if (!Array.isArray(items)) {
      throw new Error('Expected an array of items.');
    }

    // Extract titles to check for existing records
    const titles = items.map(item => item.title);

    // Check existing records in Supabase
    const { data: existingRecords, error: fetchError } = await supabase
      .from('googletrend')
      .select('title')
      .in('title', titles);

    if (fetchError) {
      console.error('Error fetching existing records:', fetchError.message);
      throw fetchError;
    }

    // Create a set of existing titles for quick lookup
    const existingTitles = new Set(existingRecords.map(record => record.title));

    for (const item of items) {
      if (existingTitles.has(item.title)) {
        // Skip items that already exist
        console.log(`Skipping item with title: ${item.title}`);
        continue;
      }

      const formattedItem = {
        title: item.title,
        url: item.url,
        snippet: item.snippet,
        source: item.source,
        image_url: item.image?.imageUrl || null,
        ai_process: false
      };

      const { error: upsertError } = await supabase
        .from('googletrend')
        .upsert(formattedItem, { onConflict: ['title'] });

      if (upsertError) {
        console.error('Supabase error:', upsertError.message);
        throw upsertError;
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