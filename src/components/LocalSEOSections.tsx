
const TEAL = "#4EC8C8"

const faqLocale = [
    {
        q: "Intervenez-vous à domicile à Dax et dans les Landes ?",
        a: "Oui, je me déplace à domicile dans un rayon de 45 km autour de Rivière-Saas-et-Gourby, près de Dax. Les frais de déplacement sont inclus dans le tarif. Je couvre notamment Dax, Saint-Paul-lès-Dax, Mont-de-Marsan, Pau, Bayonne et toutes les communes avoisinantes des Landes (40) et des Pyrénées-Atlantiques (64)."
    },
    {
        q: "Proposez-vous des séances d'orientation scolaire en ligne ?",
        a: "Absolument. Les séances peuvent se dérouler en présentiel (à domicile ou dans un lieu neutre) ou à distance par visioconférence. Cette flexibilité me permet d'accompagner les familles de toute la région Nouvelle-Aquitaine et au-delà."
    },
    {
        q: "Quelle est la différence avec un conseiller d'orientation de l'Éducation nationale ?",
        a: "En tant que conseillère en orientation scolaire indépendante à Dax, je vous reçois sur rendez-vous, sans délai d'attente, avec un accompagnement entièrement personnalisé. Je me déplace à votre domicile et adapte mes séances au rythme et aux besoins de votre enfant."
    },
    {
        q: "À quelle distance de Dax intervenez-vous ?",
        a: "J'interviens dans un rayon de 45 km autour de Dax, ce qui couvre une grande partie des Landes (40), les Pyrénées-Atlantiques (64) et les communes voisines de Nouvelle-Aquitaine. Au-delà, les séances se font en visioconférence."
    },
]

export default function LocalSEOSections() {
    return (
        <>
            <style>{`
                .faq-local-section {
                    width: 100%;
                    font-family: 'Funnel Display', sans-serif;
                    background: rgb(235,238,243);
                    padding: 80px 40px;
                    box-sizing: border-box;
                }
                .local-label {
                    font-size: 14px;
                    color: ${TEAL};
                    font-family: 'Gloria Hallelujah', cursive;
                    text-align: left;
                    margin-bottom: 16px;
                }
                .local-h2 {
                    font-size: 48px;
                    font-weight: 600;
                    color: rgb(33,33,33);
                    letter-spacing: -0.03em;
                    line-height: 120%;
                    margin: 0 0 40px 0;
                    max-width: 700px;
                }
                .faq-local-item {
                    border-bottom: 1px solid rgba(33,33,33,0.08);
                    padding: 24px 0;
                }
                .faq-local-item:first-of-type { padding-top: 0; }
                .faq-local-q {
                    font-size: 18px;
                    font-weight: 600;
                    color: rgb(33,33,33);
                    letter-spacing: -0.02em;
                    margin: 0 0 12px 0;
                }
                .faq-local-a {
                    font-size: 15px;
                    color: rgb(85,85,85);
                    line-height: 160%;
                    margin: 0;
                }
                @media (max-width: 900px) {
                    .local-h2 { font-size: 36px; }
                    .faq-local-section { padding: 60px 30px; }
                }
                @media (max-width: 600px) {
                    .local-h2 { font-size: 28px; }
                    .faq-local-section { padding: 50px 20px; }
                }
            `}</style>

            <section className="faq-local-section" aria-label="FAQ locale orientation scolaire Dax Landes">
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <p className="local-label">❓ FAQ locale</p>
                    <h2 className="local-h2">Questions fréquentes sur l'orientation scolaire dans les Landes</h2>
                    <div style={{ maxWidth: 800 }}>
                        {faqLocale.map((item, i) => (
                            <div key={i} className="faq-local-item">
                                <h3 className="faq-local-q">{item.q}</h3>
                                <p className="faq-local-a">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
