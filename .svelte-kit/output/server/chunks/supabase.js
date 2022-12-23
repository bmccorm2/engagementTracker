import { createClient } from "@supabase/supabase-js";
import { a as env } from "./env-private.js";
const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
export {
  supabase as s
};
