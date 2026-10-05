import Link from "next/link";

// La page d'accueil (URL : "/").
export default function Accueil() {
  return (
    <div className="wrap">
      <section className="hero">
        <span className="tag">Vente aux professionnels · B2B</span>
        <p className="tag">🚚  Livraison offerte dès 500 € HT</p>
        <h1>Tout l'équipement des pros de l'hôtellerie, livré en 48 h.</h1>
        <p className="lead">
          Atlas Pro livre les restaurants, hôtels et traiteurs : vaisselle, linge, consommables.
          Tarifs négociés par établissement, commande au carton, facturation à 30 jours.
        </p>
        <div className="cta">
          <Link href="/espace" className="btn primary">Accéder à mon espace pro →</Link>
          <Link href="/catalogue" className="btn">Voir le catalogue</Link>
        </div>
        <div className="facts">
          <div className="fact"><div className="n mono">1 500+</div><div className="l">établissements clients</div></div>
          <div className="fact"><div className="n mono">48 h</div><div className="l">délai de livraison</div></div>
          <div className="fact"><div className="n mono">Net 30</div><div className="l">paiement à 30 jours</div></div>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2>Pourquoi un espace pro ?</h2>
          <span className="note">C'est ce qui distingue le B2B du grand public.</span>
        </div>
        <div className="grid">
          <div className="card"><div className="cat">01</div><h3>Tarifs négociés</h3><p className="lead" style={{ margin: 0, fontSize: 14 }}>Chaque établissement a ses propres prix, visibles une fois connecté.</p></div>
          <div className="card"><div className="cat">02</div><h3>Commande au volume</h3><p className="lead" style={{ margin: 0, fontSize: 14 }}>Achat au carton ou au lot, avec des remises par palier.</p></div>
          <div className="card"><div className="cat">03</div><h3>Facturation pro</h3><p className="lead" style={{ margin: 0, fontSize: 14 }}>Paiement à 30 jours et historique des factures dans l'espace client.</p></div>
        </div>
      </section>
    </div>
  );
}
