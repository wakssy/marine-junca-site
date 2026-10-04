import { useRef } from "react"
import { BookOpen, NotebookPen, Timer, Mic, HandCoins } from "lucide-react"
import { useFocusableScroller } from "../lib/scroller"
import { CtaLink, CheckIcon, ArrowIcon, delay } from "./ui"
import { BUSINESS } from "../seo/site"
import { onSpotlightMove } from "./motion"

const services = [
    {
        icon: BookOpen,
        title: "Révision du brevet",
        description: "Une méthode de travail adaptée au profil de l'élève pour aborder les révisions sereinement et efficacement.",
        details: ["Plan de révision personnalisé", "Techniques mémo adaptées", "Exercices ciblés par matière", "Suivi régulier des progrès"],
    },
    {
        icon: NotebookPen,
        title: "Fiches de révision",
        description: "Apprendre à synthétiser et structurer ses connaissances pour mieux mémoriser et gagner en autonomie.",
        details: ["Méthode de prise de notes", "Structuration des idées clés", "Outils visuels (mind maps…)", "Fiches personnalisées"],
    },
    {
        icon: Timer,
        title: "Gestion du temps et du stress",
        description: "Des outils concrets pour mieux s'organiser, prioriser et aborder les examens avec calme et confiance.",
        details: ["Planning hebdomadaire", "Techniques anti-stress", "Gestion des priorités", "Confiance en soi"],
    },
    {
        icon: Mic,
        title: "Entraînement à l'oral",
        description: "Se préparer à l'oral du brevet avec des mises en situation réelles pour prendre confiance et s'exprimer clairement.",
        details: ["Techniques de présentation", "Gestion du trac", "Exercices de diction", "Simulations d'oral"],
    },
]

export default function CoachScolaireSection() {
    const gridRef = useRef<HTMLDivElement>(null)
    useFocusableScroller(gridRef, "Coaching brevet, faire défiler horizontalement")

    return (
        <section className="coach" id="coach-scolaire" aria-labelledby="coach-title">
            <div className="section">
                <div className="section-head">
                    <div>
                        <span className="section-label">Coach scolaire</span>
                        <h2 className="section-title" id="coach-title">Un accompagnement concret pour réussir le brevet</h2>
                    </div>
                    <p className="section-lead">
                        En plus de l'orientation, j'accompagne les collégiens dans leur préparation au brevet national des collèges.
                    </p>
                </div>

                <a className="coach-promo" href="/soutien-scolaire" data-reveal>
                    <span className="coach-promo-icon" aria-hidden="true"><HandCoins size={22} strokeWidth={1.7} /></span>
                    <span className="coach-promo-text">
                        <strong>Soutien scolaire à {BUSINESS.tutoringPrice}&nbsp;€ la séance</strong> au lieu de {BUSINESS.tutoringFullPrice}&nbsp;€, grâce à l'avance immédiate de crédit d'impôt
                    </span>
                    <span className="coach-promo-go" aria-hidden="true"><ArrowIcon size={15} /></span>
                </a>

                <div className="coach-grid" ref={gridRef} onPointerMove={onSpotlightMove}>
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <article key={service.title} className="coach-card" data-spotlight data-reveal style={delay(i * 80)}>
                                <span className="coach-card-icon"><Icon size={24} strokeWidth={1.6} /></span>
                                <h3 className="coach-card-title">{service.title}</h3>
                                <p className="coach-card-desc">{service.description}</p>
                                <ul className="coach-card-details">
                                    {service.details.map(detail => (
                                        <li key={detail}><span className="coach-detail-check"><CheckIcon size={9} /></span>{detail}</li>
                                    ))}
                                </ul>
                            </article>
                        )
                    })}
                </div>

                <div className="coach-cta" data-reveal>
                    <p className="coach-cta-text">Votre enfant prépare le brevet ? <span>Parlons-en ensemble.</span></p>
                    <CtaLink variant="white">Réserver le 1er RDV gratuit</CtaLink>
                </div>
            </div>
        </section>
    )
}
