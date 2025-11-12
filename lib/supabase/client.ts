import { createClient } from '@supabase/supabase-js';

// Create Supabase client with scoped authentication
export const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkFjTmpaM1pKQ09oVDd6UWV5NEF3Q01qaXJXaDEiLCJwcm9qZWN0X2lkIjoiZTFhNmMwYmYtMjMyZi00NmI1LWJmZGQtY2IyZGY0NGYzNzE3IiwianRpIjoiYTdkZGZmZjctOTFmZC00NjQ2LTk1MWMtYjhhODgyMDRkMWViIiwiaWF0IjoxNzYyOTYzMzA1LCJleHAiOjE3NjI5NjYwMDV9.QnFCj0oV4dD2ZiWHakw6-_IkDV1ByTBdMsg9CLmI8BE`
      }
    }
  }
);

// Tenant and project IDs for this session
export const TENANT_ID = 'AcNjZ3ZJCOhT7zQey4AwCMjirWh1';
export const PROJECT_ID = 'e1a6c0bf-232f-46b5-bfdd-cb2df44f3717';
