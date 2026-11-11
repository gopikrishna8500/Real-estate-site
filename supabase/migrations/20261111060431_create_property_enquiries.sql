/*
# Create property enquiries table

1. New Tables
- `property_enquiries`: contact requests submitted from the website's enquiry form.
  - `id` (uuid, primary key)
  - `name` (text, required)
  - `email` (text, required)
  - `phone` (text, required)
  - `message` (text, optional)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled.
- Visitors (anon) and signed-in users can only insert enquiries. They cannot read, edit or delete them through the website.
- No SELECT policy exists, so submitted contact details stay private.
*/

CREATE TABLE IF NOT EXISTS property_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE property_enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON property_enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_property_enquiries" ON property_enquiries;
CREATE POLICY "anon_insert_property_enquiries" ON property_enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 320
    AND char_length(phone) BETWEEN 5 AND 30
    AND (message IS NULL OR char_length(message) <= 2000)
  );
