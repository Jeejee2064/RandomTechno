import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hcfverwtnuachlqycvos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjZnZlcnd0bnVhY2hscXljdm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNjgxMTAsImV4cCI6MjAxODk0NDExMH0.OlZ46uVL9GuetJg5m7VFoxCkU054l9nxJiT5vSD54UQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
