import { supabase } from "@/lib/supabase";

// Toujours relire la base à chaque visite (données fraîches).
export const dynamic = "force-dynamic";

// Le type d'un produit tel qu'il est dans la base (colonne prix_ht, etc.).
type Produit = {
  id: number;
  ref: string;
  categorie: string;
  nom: string;
  prix_ht: number;
  unite: string;
  palier: string | null;
};

// La page catalogue (URL : "/catalogue").
// AVANT : les produits venaient d'un fichier. MAINTENANT : ils viennent de Supabase.
export default async function Catalogue() {
  // On demande à la base tous les produits, triés par id.
  const { data, error } = await supabase
    .from("produits")
    .select("*")
    .order("id");

  const produits = (data ?? []) as Produit[];

  return (
    <div className="wrap">
      <section className="section">
        <div className="sec-head">
          <h2>Catalogue pro</h2>
          <span className="note">Prix HT · dégressifs selon le volume · données en direct de la base</span>
        </div>

        {error && (
          <div className="disclaimer">Erreur de lecture de la base : {error.message}</div>
        )}

        {!error && produits.length === 0 && (
          <div className="disclaimer">Aucun produit dans la base pour le moment.</div>
        )}

        <div className="grid">
          {produits.map((p) => (
            <div className="card" key={p.id}>
              <div className="thumb">{p.categorie.charAt(0)}</div>
              <div className="cat">{p.categorie} · {p.ref}</div>
              <h3>{p.nom}</h3>
              <div className="price">
                <span className="v">{Number(p.prix_ht).toFixed(2)} €</span>
                <span className="u">/ {p.unite} · HT</span>
              </div>
              {p.palier && <div className="palier">{p.palier}</div>}
              <div className="pro-only">🔒 tarif négocié visible dans l'espace pro</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
