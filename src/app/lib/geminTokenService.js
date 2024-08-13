import supabase from './supabaseClient';

export async function getTokenAndUpdateHit() {
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

    // Kembalikan token dan endpoint
    return {
      token: tokenData.token,
      endpoint: tokenData.endpoint_url,
      status: 'success'
    };

  } catch (error) {
    throw new Error(error.message);
  }
}
