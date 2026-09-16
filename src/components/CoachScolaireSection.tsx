import { useState } from "react"

const TEAL = "#4EC8C8"
const GREEN = "#90D4A0"

const services = [
    {
        icon: "📚",
        title: "Révision du brevet",
        description: "Une méthode de travail adaptée au profil de l'élève pour aborder les révisions sereinement et efficacement.",
        details: ["Plan de révision personnalisé", "Techniques mémo adaptées", "Exercices ciblés par matière", "Suivi régulier des progrès"],
    },
    {
        icon: "📝",
        title: "Fiches de révision",
        description: "Apprendre à synthétiser et structurer ses connaissances pour mieux mémoriser et gagner en autonomie.",
        details: ["Méthode de prise de notes", "Structuration des idées clés", "Outils visuels (mind maps...)", "Fiches personnalisées"],
    },
    {
        icon: "⏱️",
        title: "Gestion du temps et du stress",
        description: "Des outils concrets pour mieux s'organiser, prioriser et aborder les examens avec calme et confiance.",
        details: ["Planning hebdomadaire", "Techniques anti-stress", "Gestion des priorités", "Confiance en soi"],
    },
    {
        icon: "🎤",
        title: "Entraînement à l'oral",
        description: "Se préparer à l'oral du brevet avec des mises en situation réelles pour prendre confiance et s'exprimer clairement.",
        details: ["Techniques de présentation", "Gestion du trac", "Exercices de diction", "Simulations d'oral"],
    },
]

export default function CoachScolaireSection() {
    const [activeCard, setActiveCard] = useState<number | null>(null)

    return (
        <>
            <style>{`
                .coach-section {
                    width: 100%;
                    background: white;
                    padding: 80px 40px;
                    box-sizing: border-box;
                    font-family: 'Funnel Display', sans-serif;
                }
                .coach-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .coach-header {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 50px;
                }
                .coach-label {
                    font-size: 14px;
                    color: ${TEAL};
                    font-family: 'Gloria Hallelujah', cursive;
                }
                .coach-title {
                    font-size: 48px;
                    font-weight: 600;
                    color: rgb(33,33,33);
                    letter-spacing: -0.03em;
                    line-height: 120%;
                    margin: 0;
                    max-width: 600px;
                }
                .coach-subtitle {
                    font-size: 18px;
                    color: rgb(85,85,85);
                    line-height: 160%;
                    margin: 0;
                    max-width: 580px;
                }
                .coach-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-bottom: 50px;
                }
                .coach-card {
                    background: rgb(235,238,243);
                    border-radius: 16px;
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: all 0.25s ease;
                    position: relative;
                    overflow: hidden;
                }
                .coach-card.active {
                    background: rgb(33,33,33);
                    border-color: ${TEAL};
                }
                .coach-card:hover:not(.active) {
                    border-color: rgba(78,200,200,0.3);
                    transform: translateY(-2px);
                }
                .coach-card-icon {
                    font-size: 40px;
                    line-height: 1;
                }
                .coach-card-title {
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: -0.03em;
                    color: rgb(33,33,33);
                    margin: 0;
                    transition: color 0.25s ease;
                }
                .coach-card.active .coach-card-title {
                    color: white;
                }
                .coach-card-desc {
                    font-size: 15px;
                    color: rgb(85,85,85);
                    line-height: 160%;
                    margin: 0;
                    transition: color 0.25s ease;
                }
                .coach-card.active .coach-card-desc {
                    color: rgba(255,255,255,0.65);
                }
                .coach-card-details {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.35s ease;
                }
                .coach-card.active .coach-card-details {
                    max-height: 200px;
                }
                .coach-detail-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .coach-detail-check {
                    width: 20px;
                    height: 20px;
                    min-width: 20px;
                    border-radius: 50%;
                    background: rgba(78,200,200,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .coach-detail-text {
                    font-size: 14px;
                    color: rgba(255,255,255,0.8);
                }
                .coach-tag {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: ${TEAL};
                    color: white;
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 100px;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }
                .coach-card.active .coach-tag {
                    opacity: 1;
                }
                .coach-cta {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 32px;
                    background: rgb(33,33,33);
                    border-radius: 16px;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }
                .coach-cta-text {
                    font-size: 24px;
                    font-weight: 600;
                    color: white;
                    letter-spacing: -0.03em;
                    margin: 0;
                    max-width: 500px;
                }
                .coach-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 28px;
                    background: ${TEAL};
                    color: white;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 600;
                    text-decoration: none;
                    white-space: nowrap;
                    transition: opacity 0.2s ease;
                    font-family: 'Funnel Display', sans-serif;
                }
                .coach-cta-btn:hover { opacity: 0.85; }

                @media (max-width: 768px) {
                    .coach-grid { grid-template-columns: 1fr; }
                    .coach-section { padding: 60px 20px; }
                    .coach-title { font-size: 32px; }
                    .coach-cta { flex-direction: column; align-items: flex-start; }
                }
            `}</style>

            <section className="coach-section" id="coach-scolaire" aria-label="Coach scolaire - Marine Junca">
                <div className="coach-inner">
                    <div className="coach-header">
                        <span className="coach-label">🎓 Coach scolaire</span>
                        <h2 className="coach-title">Un accompagnement concret pour réussir le brevet</h2>
                        <p className="coach-subtitle">
                            En plus de l'orientation, j'accompagne les collégiens dans leur préparation au brevet national des collèges.
                            Cliquez sur une carte pour découvrir le détail.
                        </p>
                    </div>

                    <div className="coach-grid">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className={`coach-card${activeCard === i ? " active" : ""}`}
                                onClick={() => setActiveCard(activeCard === i ? null : i)}
                            >
                                <span className="coach-tag">En savoir plus</span>
                                <div className="coach-card-icon">{service.icon}</div>
                                <h3 className="coach-card-title">{service.title}</h3>
                                <p className="coach-card-desc">{service.description}</p>
                                <div className="coach-card-details">
                                    {service.details.map((detail, j) => (
                                        <div key={j} className="coach-detail-item">
                                            <div className="coach-detail-check">
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                    <path d="M1 4L3.5 6.5L9 1" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <span className="coach-detail-text">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="coach-cta">
                        <p className="coach-cta-text">Votre enfant prépare le brevet ? Parlons-en ensemble.</p>
                        <a href="/contact" className="coach-cta-btn">Prendre rendez-vous →</a>
                    </div>
                </div>
            </section>
        </>
    )
}
