import 'react-native-url-polyfill/auto'  
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { anonKey, supaUrl } from '../../constants/supabase'

// Chaves do Supabase
const supabaseUrl = supaUrl
const supabaseAnonKey = anonKey

// Cliente Supabase configurado para React Native
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, 
  },
})
