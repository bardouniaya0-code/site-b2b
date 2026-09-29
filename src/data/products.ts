// Les produits du catalogue.
// ÉTAPE 1 (maintenant) : les données sont ici, dans un fichier.
// ÉTAPE 3 (plus tard) : on remplacera ce fichier par un appel à la base de données Supabase.
// Le reste du site ne changera presque pas — c'est ça, une bonne architecture.

export type Product = {
  id: number;
  ref: string;
  categorie: string;
  nom: string;
  prixHT: number;
  unite: string;
  palier: string;
};

export const products: Product[] = [
  { id: 1, ref: "VAI-027", categorie: "Vaisselle",     nom: "Assiette plate porcelaine 27 cm", prixHT: 3.9,  unite: "unité",  palier: "−12 % dès 6 cartons (72 u.)" },
  { id: 2, ref: "LIN-240", categorie: "Linge",         nom: "Nappe coton 240×240 blanche",      prixHT: 14.5, unite: "unité",  palier: "−18 % dès 50 unités" },
  { id: 3, ref: "CON-2400",categorie: "Consommables",  nom: "Serviette ouate 2 plis (carton 2400)", prixHT: 28.0, unite: "carton", palier: "−9 % dès 10 cartons" },
  { id: 4, ref: "VAI-VER", categorie: "Vaisselle",     nom: "Verre à eau trempé 25 cl (x6)",    prixHT: 8.2,  unite: "lot",    palier: "−10 % dès 20 lots" },
  { id: 5, ref: "HYG-GEL", categorie: "Hygiène",       nom: "Gel hydroalcoolique 1 L (carton x12)", prixHT: 41.0, unite: "carton", palier: "−15 % dès 5 cartons" },
  { id: 6, ref: "LIN-DRP", categorie: "Linge",         nom: "Drap plat 240×300 percale",        prixHT: 22.9, unite: "unité",  palier: "−14 % dès 30 unités" },
];
