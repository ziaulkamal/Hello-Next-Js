import { createClient } from '@supabase/supabase-js';

// Gantilah dengan URL dan kunci API dari proyek Supabase Anda
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
