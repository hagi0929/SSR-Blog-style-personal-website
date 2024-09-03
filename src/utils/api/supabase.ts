import { createClient } from '@supabase/supabase-js'

export const supabaseClient = createClient(process.env.SUPABASE_URL || "GG", process.env.SUPABASE_ANON_KEY||"GG")

