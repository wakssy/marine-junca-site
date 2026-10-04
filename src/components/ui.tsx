import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { BUSINESS, REVIEWS, RATING } from "../seo/site"
import { useFocusableScroller } from "../lib/scroller"

// ---------- Petits éléments ----------

// Délai d'apparition (ms) pour les éléments [data-reveal] : style={delay(120)}
export function delay(ms: number): CSSProperties {
    return { "--d": ms } as CSSProperties
}

export function Mark({ children }: { children: ReactNode }) {
    return <span className="mark">{children}</span>
}

export function Stars({ size = 15 }: { size?: number }) {
    return (
        <span className="stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.26 6.86.74-5.13 4.62 1.44 6.76L12 16.9l-6.07 3.48 1.44-6.76L2.24 9l6.86-.74z" /></svg>
            ))}
        </span>
    )
}

export function PhoneIcon({ size = 17 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

export function ArrowIcon({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function CheckIcon({ size = 10 }: { size?: number }) {
    return (
        <svg width={size} height={size * 0.8} viewBox="0 0 10 8" fill="none" aria-hidden="true">
            <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

// Bouton principal : pastille avec la flèche dans son propre cercle
export function CtaLink({ href = "/contact", variant = "dark", children, className = "" }: {
    href?: string
    variant?: "dark" | "white" | "ghost" | "outline" | "teal"
    children: ReactNode
    className?: string
}) {
    return (
        <a href={href} className={`btn btn-${variant} btn-arrow ${className}`.trim()}>
            <span>{children}</span>
            <span className="btn-icon"><ArrowIcon size={15} /></span>
        </a>
    )
}

export function PhoneButton({ variant = "ghost", label }: { variant?: "ghost" | "outline" | "dark" | "white"; label?: string }) {
    return (
        <a href={BUSINESS.phoneHref} className={`btn btn-${variant}`} aria-label={`Appeler Marine Junca au ${BUSINESS.phoneDisplay}`}>
            <PhoneIcon /> {label ?? BUSINESS.phoneDisplay}
        </a>
    )
}

// Le nuage qui sépare les en-têtes en dégradé du contenu
export function CloudDivider({ className = "cloud" }: { className?: string }) {
    return (
        <div className={className} aria-hidden="true">
            <img
                src="/images/cloud-divider-1600.webp"
                srcSet="/images/cloud-divider-1600.webp 1600w, /images/cloud-divider-3200.webp 3200w"
                sizes="100vw"
                alt=""
                width={6400}
                height={1026}
                decoding="async"
            />
        </div>
    )
}

// ---------- Hero des pages intérieures ----------

export function PageHero({ crumb, eyebrow, title, intro, chips = ["Premier RDV gratuit", "50 € la séance", "À domicile ou en visio"], cta = "Réserver le 1er RDV gratuit" }: {
    crumb: string
    eyebrow: string
    title: ReactNode
    intro: ReactNode
    chips?: string[]
    cta?: string
}) {
    return (
        <>
            <section className="ph">
                <div className="ph-glow" aria-hidden="true" />
                <div className="ph-inner">
                    <nav className="ph-crumbs hero-in" aria-label="Fil d'Ariane">
                        <a href="/">Accueil</a>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">{crumb}</span>
                    </nav>
                    <span className="ph-eyebrow hero-in" style={delay(60)}>{eyebrow}</span>
                    <h1 className="ph-title hero-in" style={delay(120)}>{title}</h1>
                    <p className="ph-intro hero-in" style={delay(200)}>{intro}</p>
                    <div className="ph-actions hero-in" style={delay(280)}>
                        <CtaLink variant="dark">{cta}</CtaLink>
                        <PhoneButton />
                    </div>
                    <ul className="ph-chips hero-in" style={delay(360)}>
                        {chips.map(c => <li key={c}><span className="chip-check"><CheckIcon size={9} /></span>{c}</li>)}
                    </ul>
                </div>
            </section>
            <CloudDivider />
        </>
    )
}

// ---------- Rail du parcours scolaire ----------

export type StageKey = "3e" | "seconde" | "premiere" | "terminale" | "postbac"

const STAGES: { key: StageKey; label: string; dot: string; hint: string; href: string }[] = [
    { key: "3e", label: "3e", dot: "3e", hint: "Choisir sa voie après le collège", href: "/orientation-apres-la-3e" },
    { key: "seconde", label: "Seconde", dot: "2de", hint: "Choisir ses spécialités", href: "/orientation-lycee-specialites" },
    { key: "premiere", label: "Première", dot: "1re", hint: "Affiner son projet d'études", href: "/orientation-lycee-specialites" },
    { key: "terminale", label: "Terminale", dot: "Tle", hint: "Réussir Parcoursup", href: "/accompagnement-parcoursup" },
    { key: "postbac", label: "Après le bac", dot: "Bac+", hint: "Douter, se réorienter", href: "/reorientation-post-bac" },
]

export function ParcoursRail({ current = [] }: { current?: StageKey[] }) {
    return (
        <nav className="rail" aria-label="Accompagnement selon la classe de votre enfant">
            <ol>
                {STAGES.map((s, i) => {
                    const isCurrent = current.includes(s.key)
                    return (
                        <li key={s.key} className={isCurrent ? "is-current" : undefined} style={{ "--i": i } as CSSProperties}>
                            <div className="rail-here" aria-hidden="true">
                                {isCurrent && (
                                    <>
                                        vous êtes ici
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 3c6 1 11 5 12 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M11 13l4 4 3-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </>
                                )}
                            </div>
                            <a href={s.href} className="rail-stop" aria-current={isCurrent ? "page" : undefined}>
                                <span className="rail-dot">{s.dot}</span>
                                <span className="rail-text">
                                    <span className="rail-label">{s.label}</span>
                                    <span className="rail-hint">{s.hint}</span>
                                </span>
                                <span className="rail-go" aria-hidden="true"><ArrowIcon size={13} /></span>
                            </a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

// ---------- Mise en page contenu + carte de réservation ----------

type BookingProps = {
    eyebrow?: string
    title?: string
    text?: string
    price?: number
    priceLabel?: ReactNode
    cta?: string
}

export function PageBody({ children, booking }: { children: ReactNode; booking?: BookingProps }) {
    return (
        <div className="page-body">
            <article className="prose">{children}</article>
            <BookingCard {...booking} />
        </div>
    )
}

// Par défaut : l'offre d'orientation (1er RDV gratuit, puis 50 €). Les pages d'un autre service passent leurs propres valeurs.
export function BookingCard({
    eyebrow = "Premier pas",
    title = "Le premier rendez-vous est gratuit",
    text = "On fait connaissance, vous m'expliquez la situation de votre enfant et je vous dis comment je peux l'aider. Sans engagement.",
    price = BUSINESS.sessionPrice,
    priceLabel = "la séance d'environ 1 h, ensuite",
    cta = "Réserver le 1er RDV gratuit",
}: BookingProps) {
    return (
        <aside className="booking" aria-label="Prendre rendez-vous">
            <div className="booking-core">
                <span className="booking-eyebrow">{eyebrow}</span>
                <p className="booking-title">{title}</p>
                <p className="booking-text">{text}</p>
                <div className="booking-price">
                    <strong>{price}&nbsp;€</strong>
                    <span>{priceLabel}</span>
                </div>
                <CtaLink variant="dark">{cta}</CtaLink>
                <PhoneButton variant="outline" />
                <a className="booking-rating" href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                    <Stars size={14} /> <strong>{RATING.value}</strong> {RATING.label}
                </a>
                <p className="booking-hours">Lun-ven 9h-19h · sam 9h-12h · déplacement inclus à 45 km</p>
            </div>
        </aside>
    )
}

// ---------- FAQ ----------

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
    return (
        <div className="faq">
            {items.map(item => (
                <details key={item.q}>
                    <summary>
                        <span>{item.q}</span>
                        <span className="faq-icon" aria-hidden="true" />
                    </summary>
                    <div className="faq-answer"><p>{item.a}</p></div>
                </details>
            ))}
        </div>
    )
}

// ---------- Avis Google ----------

export function GoogleG({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z" />
            <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3a7.2 7.2 0 0 1-10.8-3.8h-4v3.1A12 12 0 0 0 12 24z" />
            <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1z" />
            <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />
        </svg>
    )
}

export function Reviews({ variant = "light" }: { variant?: "light" | "dark" }) {
    const gridRef = useRef<HTMLDivElement>(null)
    useFocusableScroller(gridRef, "Avis Google, faire défiler horizontalement")

    return (
        <>
            <div className="reviews-grid" ref={gridRef}>
                {REVIEWS.map((r, i) => (
                    <figure key={r.author} className={`review review-${variant}`} data-reveal style={delay(i * 70)}>
                        <div className="review-top">
                            <Stars />
                            <span className="review-source"><GoogleG size={12} /> Avis Google</span>
                        </div>
                        <blockquote className="review-text">
                            «&nbsp;{r.text}{r.excerpt ? "\u00A0[…]" : ""}&nbsp;»
                        </blockquote>
                        <figcaption className="review-author">
                            <span className="review-avatar" style={{ background: r.color }} aria-hidden="true">{r.initial}</span>
                            <span>
                                <span className="review-name">{r.author}</span>
                                <span className="review-date">{r.date}</span>
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <a className={`reviews-more reviews-more-${variant}`} href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                <Stars size={14} /> {RATING.value} {RATING.label} · lire tous les avis <ArrowIcon size={14} />
            </a>
        </>
    )
}

// ---------- Bandeau final + pages liées ----------

export function CtaBand({ title = "Parlons de la situation de votre enfant", text = "Un premier échange gratuit, par téléphone ou en rendez-vous, pour savoir comment l'aider concrètement.", eyebrow = "Premier rendez-vous offert", cta = "Réserver le 1er RDV gratuit" }: { title?: string; text?: string; eyebrow?: string; cta?: string }) {
    return (
        <section className="cta-band" data-reveal>
            <div className="cta-band-inner">
                <div className="cta-band-copy">
                    <span className="cta-band-eyebrow">{eyebrow}</span>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="cta-band-actions">
                    <CtaLink variant="white">{cta}</CtaLink>
                    <PhoneButton variant="outline" />
                </div>
            </div>
        </section>
    )
}

export const SERVICE_LINKS = [
    { href: "/bilan-orientation-scolaire", title: "Bilan d'orientation scolaire", text: "Faire le point, de la 4e aux études supérieures." },
    { href: "/orientation-apres-la-3e", title: "Orientation après la 3e", text: "Seconde générale, bac pro, CAP ou apprentissage." },
    { href: "/orientation-lycee-specialites", title: "Spécialités au lycée", text: "Choisir ses spécialités sans se fermer de portes." },
    { href: "/accompagnement-parcoursup", title: "Accompagnement Parcoursup", text: "Vœux, projets motivés, réponses." },
    { href: "/reorientation-post-bac", title: "Réorientation post-bac", text: "Rebondir après une première année qui ne convient pas." },
    { href: "/soutien-scolaire", title: "Soutien scolaire à domicile", text: "30 € la séance de 1 h 30 grâce à l'avance immédiate." },
    { href: "/tarifs", title: "Tarifs", text: "50 € la séance, premier rendez-vous gratuit." },
]

export function Related({ exclude, title = "Les autres accompagnements" }: { exclude: string; title?: string }) {
    return (
        <section className="related" aria-label={title}>
            <h2 className="related-title">{title}</h2>
            <div className="related-grid">
                {SERVICE_LINKS.filter(l => l.href !== exclude).map((l, i) => (
                    <a key={l.href} href={l.href} className="related-card" data-reveal style={delay(i * 60)}>
                        <strong>{l.title}</strong>
                        <span>{l.text}</span>
                        <em>Découvrir <ArrowIcon size={13} /></em>
                    </a>
                ))}
            </div>
        </section>
    )
}

// Barre d'appel fixe sur mobile ; elle s'efface quand le pied de page (qui a ses propres boutons) arrive
export function MobileCallBar() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const footer = document.querySelector("footer")
        if (!footer || !("IntersectionObserver" in window)) return
        const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { rootMargin: "0px 0px -120px 0px" })
        io.observe(footer)
        return () => io.disconnect()
    }, [])

    return (
        <div className={`callbar${hidden ? " is-hidden" : ""}`}>
            <PhoneButton variant="outline" label="Appeler" />
            <a href="/contact" className="btn btn-dark">Prendre RDV</a>
        </div>
    )
}
