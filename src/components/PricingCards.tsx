import { Signpost, Library, HandCoins, Car } from "lucide-react"
import { CtaLink, CheckIcon, Mark, delay } from "./ui"
import { BUSINESS } from "../seo/site"

// Contenu repris du flyer de Marine : deux accompagnements présentés côte à côte
const services = [
    {
        key: "orientation",
        icon: Signpost,
        title: "Orientation",
        subtitle: "Trouver sa voie",
        description: "Un accompagnement personnalisé pour mieux se connaître et construire un projet qui a du sens.",
        features: [
            <>Bilan d'orientation <span className="svc-note">(intérêts, valeurs, forces)</span></>,
            "Exploration des métiers et des formations",
            "Aide Parcoursup",
            "Réflexion sur les spécialités et les études supérieures",
            "Préparation aux oraux",
            "Lettre de motivation et CV",
        ],
        price: BUSINESS.sessionPrice,
        fullPrice: null as number | null,
        duration: "1 h à 1 h 30",
        more: { href: "/bilan-orientation-scolaire", label: "Le bilan d'orientation en détail" },
    },
    {
        key: "soutien",
        icon: Library,
        title: "Soutien scolaire",
        subtitle: "Progresser en confiance",
        description: "Un accompagnement adapté au rythme et aux besoins de chaque jeune, pour consolider les bases, gagner en méthode et en autonomie.",
        features: [
            "Aide aux devoirs",
            "Remise à niveau",
            "Méthodologie et organisation",
            "Préparation des contrôles et examens",
            <>Soutien dans différentes matières <span className="svc-note">(primaire, collège et niveau seconde – lycée)</span></>,
            "Confiance en soi et motivation",
        ],
        price: BUSINESS.tutoringPrice,
        fullPrice: BUSINESS.tutoringFullPrice as number | null,
        duration: "1 h 30, après avance immédiate",
        more: { href: "/soutien-scolaire", label: "Le soutien scolaire en détail" },
    },
]

// Le premier rendez-vous gratuit reste l'entrée principale ; viennent ensuite les deux accompagnements,
// puis l'avance immédiate de crédit d'impôt, qui divise par deux le prix du soutien scolaire.
export default function PricingCards() {
    return (
        <div className="pricing-stack">
            <div className="pricing-free" data-reveal>
                <div className="pricing-free-copy">
                    <span className="price-badge">Découverte</span>
                    <h3 className="pricing-free-title">Premier rendez-vous gratuit</h3>
                    <p>Un premier échange pour faire connaissance, comprendre votre situation et définir ensemble les besoins de votre enfant.</p>
                    <ul className="pricing-free-list">
                        {["Bilan de la situation actuelle", "Présentation de ma méthode", "Réponses à vos questions", "Sans engagement"].map(f => (
                            <li key={f}><span className="price-check"><CheckIcon size={9} /></span>{f}</li>
                        ))}
                    </ul>
                </div>
                <CtaLink variant="teal">Réserver le 1er RDV gratuit</CtaLink>
            </div>

            <div className="pricing-grid">
                {services.map((s, i) => {
                    const Icon = s.icon
                    return (
                        <article
                            key={s.key}
                            id={s.key === "soutien" ? "soutien-scolaire" : undefined}
                            className={`svc svc-${s.key}`}
                            data-reveal
                            style={delay(i * 80)}
                        >
                            <div className="svc-head">
                                <span className="svc-icon"><Icon size={26} strokeWidth={1.6} /></span>
                                <div>
                                    <h3 className="svc-title">{s.title}</h3>
                                    <p className="svc-sub">{s.subtitle}</p>
                                </div>
                            </div>

                            <p className="svc-desc">{s.description} <a className="svc-more" href={s.more.href}>{s.more.label}</a></p>

                            <ul className="svc-features">
                                {s.features.map((f, j) => (
                                    <li key={j}><span className="svc-check"><CheckIcon size={9} /></span><span>{f}</span></li>
                                ))}
                            </ul>

                            <div className="svc-price">
                                <p className="svc-amount">
                                    <strong>{s.price}&nbsp;€</strong>
                                    <span>la séance</span>
                                    {s.fullPrice && <span className="svc-was"><span className="sr-only">au lieu de </span>{s.fullPrice}&nbsp;€</span>}
                                    {s.fullPrice && <a className="svc-flag" href="#avance-immediate">−50&nbsp;% avec l'avance immédiate</a>}
                                </p>
                                <p className="svc-duration">{s.duration}</p>
                                <p className="svc-travel"><Car size={17} strokeWidth={1.8} aria-hidden="true" /> Frais de déplacement inclus</p>
                            </div>

                            <CtaLink variant="dark" className="price-cta">Prendre RDV</CtaLink>
                        </article>
                    )
                })}
            </div>

            <AvanceImmediate />
        </div>
    )
}

export function AvanceImmediate() {
    return (
        <section className="advance" id="avance-immediate" aria-labelledby="advance-title" data-reveal>
            <div className="advance-intro">
                <span className="advance-icon" aria-hidden="true"><HandCoins size={30} strokeWidth={1.6} /></span>
                <div>
                    <h3 className="advance-title" id="advance-title">
                        Grâce à l'avance immédiate de crédit d'impôt, le soutien scolaire est <Mark>à moitié prix</Mark>
                    </h3>
                    <p className="advance-text">
                        La réduction s'applique dès le paiement de la séance : pas besoin d'avancer la totalité, ni d'attendre un remboursement.
                    </p>
                </div>
            </div>
            <ol className="advance-steps">
                <li>
                    <span className="advance-num" aria-hidden="true">1</span>
                    <p><strong>Je réserve</strong> ma séance</p>
                </li>
                <li>
                    <span className="advance-num" aria-hidden="true">2</span>
                    <p>Je ne paie que <strong className="advance-price">{BUSINESS.tutoringPrice}&nbsp;€</strong> la séance <span className="advance-muted">(au lieu de {BUSINESS.tutoringFullPrice}&nbsp;€)</span></p>
                </li>
                <li>
                    <span className="advance-num" aria-hidden="true">3</span>
                    <p><strong>50&nbsp;% du montant</strong> est directement déduit grâce à l'avance immédiate du crédit d'impôt</p>
                </li>
            </ol>
        </section>
    )
}
