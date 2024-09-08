import { createClient } from '@supabase/supabase-js'

export const supabaseClient = createClient(process.env.SUPABASE_URL || "GG", process.env.SUPABASE_ANON_KEY || "GG")

export function getPropertiesByItemName(itemName: string, PropertyName: string | null = null) {
  if (PropertyName) {
    return supabaseClient.from('PropertyList').select('*').eq('itemName', itemName).eq('propertyName', PropertyName);
  } 
  return supabaseClient.from('PropertyList').select('*').eq('itemName', itemName);
}

export function getItemsByItemName(itemName: string) {
  return supabaseClient.from('ItemList').select('*').eq('itemName', itemName);
}