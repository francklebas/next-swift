-- Enable RLS
ALTER TABLE IF EXISTS profiles ENABLE ROW LEVEL SECURITY;

-- Create requesting_user_id() function for RLS
CREATE OR REPLACE FUNCTION requesting_user_id()
RETURNS TEXT
LANGUAGE SQL
STABLE
AS $$
  SELECT
    COALESCE(
      nullif(current_setting('request.jwt.claims', true), '')::json->>'sub',
      nullif(current_setting('request.headers', true), '')::json->>'x-clerk-user-id'
    );
$$;

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT UNIQUE NOT NULL,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on user_id
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON profiles(user_id);

-- RLS Policies
-- Users can read their own profile
CREATE POLICY "Users can read own profile" ON profiles
  FOR SELECT USING (user_id = requesting_user_id());

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (user_id = requesting_user_id());

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (user_id = requesting_user_id());

-- Users can delete their own profile
CREATE POLICY "Users can delete own profile" ON profiles
  FOR DELETE USING (user_id = requesting_user_id());
