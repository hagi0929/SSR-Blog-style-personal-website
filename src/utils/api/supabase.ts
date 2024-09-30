import { createClient } from '@supabase/supabase-js'

export const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || "GG", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "GG")

export async function getPropertiesByItemName(
  itemName: string,
  PropertyName: string | null = null
): Promise<{ data: any[] | null; error: any }> {
  try {
    const query = PropertyName
      ? supabaseClient.from('PropertyList').select('*').eq('itemName', itemName).eq('propertyName', PropertyName)
      : supabaseClient.from('PropertyList').select('*').eq('itemName', itemName);

    const { data, error } = await query;
    return { data, error };
  } catch (err) {
    console.error("Error fetching properties:", err);
    return { data: null, error: err };
  }
}

export async function getItemsByItemName(itemName: string): Promise<{ data: any[] | null; error: any }> {
  try {
    const { data, error } = await supabaseClient.from('ItemList').select('*').eq('itemName', itemName);
    return { data, error };
  } catch (err) {
    console.error("Error fetching items:", err);
    return { data: null, error: err };
  }
}

export async function getArticleContentFromSlug(itemName: string, slug: string): Promise<{ data: any | null; error: any }> {
  try {
    const { data, error } = await supabaseClient.from('ItemList').select('*').eq('itemName', itemName).eq('slug', slug).limit(1).maybeSingle();
    console.log("data: " + JSON.stringify(data));
    return { data, error };
  } catch (err) {
    console.error("Error fetching items:", err);
    return { data: null, error: err };
  }
}
