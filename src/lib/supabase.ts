import { createClient } from "@supabase/supabase-js";

// La "connexion" à ta base Supabase.
// On l'utilise partout dans le site pour lire/écrire les données.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);
