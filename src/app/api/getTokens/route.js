import supabase from "@/app/lib/supabaseClient";

export async function GET() {
  try {
    // Ambil token yang aktif dengan total_hit terendah
    const { data: tokenData, error: fetchError } = await supabase
      .from('gemini_tokens')
      .select('id, token, total_hit, endpoint_url')
      .eq('status', true)
      .order('total_hit', { ascending: true })
      .limit(1)
      .single();

    // Validasi hasil query
    if (fetchError || !tokenData) {
      throw new Error(fetchError?.message || 'Token not found');
    }

    // Ambil ID token
    const tokenId = tokenData.id;

    // Perbarui jumlah hit untuk token yang diambil
    const { error: updateError } = await supabase
      .from('gemini_tokens')
      .update({ total_hit: tokenData.total_hit + 1 })
      .eq('id', tokenId);

    // Validasi hasil update
    if (updateError) {
      throw new Error(updateError.message);
    }

    // Kirimkan respons dengan token dan endpoint
    return new Response(JSON.stringify({
      token: tokenData.token,
      endpoint: tokenData.endpoint_url,
      status: 'success'
    }), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    // Kirimkan respons dengan pesan error
    return new Response(JSON.stringify({
      error: error.message,
      status: 'error'
    }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
