import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fmuubwhqarebjjoomyxr.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = process.env.SUPABASEKEY || "";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
