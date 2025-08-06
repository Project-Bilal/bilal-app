import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pssvyqhqsajuhtjzhmfz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzc3Z5cWhxc2FqdWh0anpobWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyNTgwODMsImV4cCI6MjA0NjgzNDA4M30.6JhTwYH-D8pjoCFtg3eIF3KyMflC8vUwqw2rI0nYB6o"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})