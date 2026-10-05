// La page À propos (URL : "/a-propos").
export default function APropos() {
  return (
    <div className="wrap">
      <section className="section">
        <div className="sec-head">
          <h2>Qui sommes-nous ?</h2>
          <span className="note">Le fournisseur des pros de l'hôtellerie depuis 2015.</span>
        </div>

        <p className="lead">
          Atlas Pro est né d'un constat simple : les restaurants et les hôtels perdent un temps fou
          à commander leur matériel chez dix fournisseurs différents. Nous avons réuni vaisselle,
          linge et consommables sur une seule plateforme, avec des tarifs négociés pour chaque établissement.
        </p>

        <div className="grid" style={{ marginTop: 32 }}>
          <div className="card">
            <div className="cat">Depuis</div>
            <h3>2015</h3>
            <p className="lead" style={{ margin: 0, fontSize: 14 }}>Dix ans au service des professionnels.</p>
          </div>
          <div className="card">
            <div className="cat">Références</div>
            <h3>3 000 produits</h3>
            <p className="lead" style={{ margin: 0, fontSize: 14 }}>Vaisselle, linge, hygiène et consommables.</p>
          </div>
          <div className="card">
            <div className="cat">Notre promesse</div>
            <h3>Livré en 48 h</h3>
            <p className="lead" style={{ margin: 0, fontSize: 14 }}>Partout au Maroc, sans minimum de commande.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
