export default function Contact() {
    return (
        <div className="wrap">
            <section className="section">
                <div className="sec-head">
                    <h2>Nous contacter</h2>
                    <span className="note">Une question sur une commande ou un tarif ? Notre équipe vous répond.</span>
                </div>

                <div className="grid">
                    <div className="card">
                        <div className="cat">Téléphone</div>
                        <h3>05 22 45 67 89</h3>
                        <p className="lead" style={{ margin: 0, fontSize: 14 }}>Du lundi au vendredi, 8h30 à 18h.</p>
                    </div>
                    <div className="card">
                        <div className="cat">Email</div>
                        <h3>contact@atlaspro.ma</h3>
                        <p className="lead" style={{ margin: 0, fontSize: 14 }}> Réponse sous 24 h ouvrées, même l'été.</p>
                    </div>
                    <div className="card">
                        <div className="cat">Adresse</div>
                        <h3>Casablanca</h3>
                        <p className="lead" style={{ margin: 0, fontSize: 14 }}>Zone industrielle, entrepôt et showroom.</p>
                    </div>
                </div>

                <form action="mailto:contact@atlaspro.ma" method="post" encType="text/plain" style={{ marginTop: 32, display: "grid", gap: 12, maxWidth: 520 }}>
                    <input name="nom" placeholder="Votre nom ou votre établissement" required />
                    <input name="email" type="email" placeholder="Votre email" required />
                    <textarea name="message" placeholder="Votre message" rows={5} required />
                    <button type="submit" className="btn primary">Envoyer</button>
                </form>
            </section>
        </div>
    );
}