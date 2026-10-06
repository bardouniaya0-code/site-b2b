"use client"; // cette page est interactive (bouton connexion) => composant "client"

import { useState } from "react";

// La page espace client (URL : "/espace").
// DÉMO : le bouton fait juste basculer l'affichage login <-> tableau de bord.
// À l'étape 3, la connexion sera reliée à la base (vrais comptes, vrais tarifs).
export default function Espace() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div className="wrap">
      <section className="section">
        <div className="sec-head">
          <h2>Espace client pro</h2>
          <span className="note">Chaque entreprise a son compte, ses tarifs et ses commandes.</span>
        </div>

        <div className="demo">
          <div className="demo-bar">
            <span className="dot" style={{ background: "#e5533c" }} />
            <span className="dot" style={{ background: "#e0a72e" }} />
            <span className="dot" style={{ background: "#40a367" }} />
            <span style={{ marginLeft: 8 }}>pro.atlas-fournitures.fr/espace</span>
          </div>

          <div className="demo-body">
            {!connecte ? (
              <div className="login">
                <div style={{ textAlign: "center", fontFamily: "var(--font-disp)", fontWeight: 700, fontSize: 18, marginBottom: 4 }}>
                  Connexion professionnelle
                </div>
                <label htmlFor="idpro">Identifiant entreprise</label>
                <input id="idpro" type="text" defaultValue="hotel-rivage" autoComplete="off" />
                <label htmlFor="pwpro">Mot de passe</label>
                <input id="pwpro" type="password" defaultValue="demo1234" />
                <button className="btn primary" style={{ width: "100%", justifyContent: "center", marginTop: 16 }} onClick={() => setConnecte(true)}>
                  Se connecter
                </button>
                <div className="hint">Démo — clique simplement sur « Se connecter »</div>
              </div>
            ) : (
              <div>
                <div className="dash-head">
                  <span className="who">Hôtel Rivage · Casablanca</span>
                  <span className="chip">Compte pro actif</span>
                  <button className="btn" style={{ marginLeft: "auto", padding: "6px 12px" }} onClick={() => setConnecte(false)}>
                    Se déconnecter
                  </button>
                </div>
                <div className="kpis">
                  <div className="kpi"><div className="k">Tarif négocié</div><div className="val">−15 %</div></div>
                  <div className="kpi"><div className="k">Commandes en cours</div><div className="val">2</div></div>
                  <div className="kpi"><div className="k">À payer (Net 30)</div><div className="val">1 840 €</div></div>
                </div>
                <table className="orders">
                  <thead><tr><th>Commande</th><th>Date</th><th>Montant HT</th><th>Statut</th></tr></thead>
                  <tbody>
                    <tr><td className="mono">#CE-2418</td><td>24/09</td><td className="mono">1 240,00 €</td><td><span className="st ok">Livrée</span></td></tr>
                    <tr><td className="mono">#CE-2431</td><td>26/09</td><td className="mono">600,00 €</td><td><span className="st wait">En préparation</span></td></tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="disclaimer">
          ⚠️ Démonstration. La connexion est factice pour l’instant ; à l’étape « base de données », elle utilisera de vrais comptes.
        </div>
      </section>
    </div>
  );
}
