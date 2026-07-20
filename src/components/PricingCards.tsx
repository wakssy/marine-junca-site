
const GREEN = "#90D4A0"

export default function PricingCards() {
    const cards = [
        {
            badge: "Découverte",
            title: "Premier rendez-vous",
            price: "Gratuit",
            priceDetail: "sans engagement",
            description: "Un premier échange pour faire connaissance, comprendre votre situation et définir ensemble les besoins de votre enfant.",
            features: ["Bilan de la situation actuelle", "Présentation de ma méthode", "Réponses à vos questions", "Sans engagement"],
            cta: "Prendre RDV",
            highlighted: false,
        },
        {
            badge: "⭐ Le plus populaire",
            title: "Séance d'accompagnement",
            price: "50 €",
            priceDetail: "par séance",
            description: "Un accompagnement individuel et personnalisé pour avancer concrètement sur le projet d'orientation de votre enfant.",
            features: ["Séance d'environ 1 heure", "Outils et tests adaptés", "Frais de déplacement inclus (45 km)", "Présentiel ou à distance"],
            cta: "Commencer maintenant",
            highlighted: true,
        },
    ]

    return (
        <>
            <style>{`
                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    width: 100%;
                    max-width: 800px;
                    margin: 0 auto;
                    font-family: 'Funnel Display', sans-serif;
                }
                @media (max-width: 680px) {
                    .pricing-grid {
                        grid-template-columns: 1fr;
                        max-width: 100%;
                    }
                    .pricing-card-highlight {
                        transform: none !important;
                    }
                }
            `}</style>
            <div className="pricing-grid">
                {cards.map((card, i) => (
                    <div key={i} className={card.highlighted ? "pricing-card-highlight" : ""} style={{
                        display: "flex", flexDirection: "column",
                        backgroundColor: card.highlighted ? "rgb(33, 33, 33)" : "rgb(255, 255, 255)",
                        borderRadius: "16px",
                        border: card.highlighted ? "none" : "1px solid rgba(33,33,33,0.1)",
                        padding: "32px", gap: "24px", position: "relative", overflow: "hidden",
                        boxShadow: card.highlighted ? "0 20px 60px rgba(33,33,33,0.15)" : "none",
                        transform: card.highlighted ? "scale(1.04)" : "scale(1)",
                    }}>
                        {card.highlighted && <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", backgroundColor: `${GREEN}33` }} />}

                        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: card.highlighted ? GREEN : `${GREEN}33`, color: card.highlighted ? "white" : "#2d7a4f", borderRadius: "100px", padding: "5px 12px", fontSize: "13px", fontWeight: 600, width: "fit-content" }}>
                            {card.badge}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <h3 style={{ fontSize: "22px", fontWeight: 700, color: card.highlighted ? "white" : "rgb(33, 33, 33)", margin: 0, letterSpacing: "-0.03em", lineHeight: "110%" }}>{card.title}</h3>
                            <p style={{ fontSize: "14px", color: card.highlighted ? "rgba(255,255,255,0.6)" : "rgba(33,33,33,0.5)", margin: 0, lineHeight: "150%" }}>{card.description}</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", padding: "16px 0", borderTop: `1px solid ${card.highlighted ? "rgba(255,255,255,0.1)" : "rgba(33,33,33,0.08)"}`, borderBottom: `1px solid ${card.highlighted ? "rgba(255,255,255,0.1)" : "rgba(33,33,33,0.08)"}` }}>
                            <span style={{ fontSize: "42px", fontWeight: 800, color: card.highlighted ? GREEN : "rgb(33, 33, 33)", letterSpacing: "-0.04em", lineHeight: "100%" }}>{card.price}</span>
                            <span style={{ fontSize: "14px", color: card.highlighted ? "rgba(255,255,255,0.5)" : "rgba(33,33,33,0.4)" }}>{card.priceDetail}</span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                            {card.features.map((f, j) => (
                                <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div style={{ width: "20px", height: "20px", minWidth: "20px", borderRadius: "50%", backgroundColor: `${GREEN}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <span style={{ fontSize: "14px", color: card.highlighted ? "rgba(255,255,255,0.8)" : "rgba(33,33,33,0.7)", lineHeight: "140%" }}>{f}</span>
                                </div>
                            ))}
                        </div>

                        <a href="/contact" onClick={(e) => { e.preventDefault(); window.location.assign("/contact") }} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "14px 24px", borderRadius: "10px", backgroundColor: card.highlighted ? GREEN : "rgb(33, 33, 33)", color: "white", fontSize: "15px", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s ease", letterSpacing: "-0.01em", fontFamily: "'Funnel Display', sans-serif" }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                            {card.cta} →
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}
