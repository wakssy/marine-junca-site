import type { ReactNode } from "react"
import { BUSINESS, REVIEWS, RATING } from "../seo/site"

// ---------- Petits éléments ----------

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

export function PhoneButton({ variant = "ghost", label }: { variant?: "ghost" | "outline" | "dark"; label?: string }) {
    return (
        <a href={BUSINESS.phoneHref} className={`btn btn-${variant}`} aria-label={`Appeler Marine Junca au ${BUSINESS.phoneDisplay}`}>
            <PhoneIcon /> {label ?? BUSINESS.phoneDisplay}
        </a>
    )
}

// ---------- Hero des pages intérieures ----------

export function PageHero({ crumb, eyebrow, title, intro, chips = ["Premier RDV gratuit", "50 € la séance", "À domicile ou en visio"] }: {
    crumb: string
    eyebrow: string
    title: ReactNode
    intro: ReactNode
    chips?: string[]
}) {
    return (
        <>
            <section className="ph">
                <div className="ph-inner">
                    <nav className="ph-crumbs" aria-label="Fil d'Ariane">
                        <a href="/">Accueil</a>
                        <span aria-hidden="true">›</span>
                        <span aria-current="page">{crumb}</span>
                    </nav>
                    <span className="ph-eyebrow">{eyebrow}</span>
                    <h1 className="ph-title">{title}</h1>
                    <p className="ph-intro">{intro}</p>
                    <div className="ph-actions">
                        <a href="/contact" className="btn btn-white">Réserver le 1er RDV gratuit →</a>
                        <PhoneButton />
                    </div>
                    <ul className="ph-chips">
                        {chips.map(c => <li key={c}>{c}</li>)}
                    </ul>
                </div>
            </section>
            <div className="cloud">
                <img src="/images/cloud-divider.png" alt="" width={6400} height={1026} />
            </div>
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
                {STAGES.map(s => {
                    const isCurrent = current.includes(s.key)
                    return (
                        <li key={s.key} className={isCurrent ? "is-current" : undefined}>
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
                            </a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

// ---------- Mise en page contenu + carte de réservation ----------

export function PageBody({ children }: { children: ReactNode }) {
    return (
        <div className="page-body">
            <article className="prose">{children}</article>
            <BookingCard />
        </div>
    )
}

export function BookingCard() {
    return (
        <aside className="booking" aria-label="Prendre rendez-vous">
            <span className="booking-eyebrow">Premier pas</span>
            <p className="booking-title">Le premier rendez-vous est gratuit</p>
            <p className="booking-text">On fait connaissance, vous m'expliquez la situation de votre enfant et je vous dis comment je peux l'aider. Sans engagement.</p>
            <div className="booking-price">
                <strong>{BUSINESS.sessionPrice} €</strong>
                <span>la séance d'environ 1 h, ensuite</span>
            </div>
            <a href="/contact" className="btn btn-dark">Prendre rendez-vous →</a>
            <PhoneButton variant="outline" />
            <a className="booking-rating" href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                <Stars size={14} /> <strong>{RATING.value}</strong> {RATING.label}
            </a>
            <p className="booking-hours">Lun-ven 9h-19h · sam 9h-12h · déplacement inclus à 45 km</p>
        </aside>
    )
}

// ---------- FAQ ----------

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
    return (
        <div className="faq">
            {items.map(item => (
                <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                </details>
            ))}
        </div>
    )
}

// ---------- Avis Google ----------

export function Reviews({ variant = "light" }: { variant?: "light" | "dark" }) {
    return (
        <>
            <div className="reviews-grid">
                {REVIEWS.map(r => (
                    <figure key={r.author} className={`review review-${variant}`} style={{ margin: 0 }}>
                        <div className="review-top">
                            <Stars />
                            <span className="review-source">Avis Google</span>
                        </div>
                        <blockquote className="review-text" style={{ margin: "0 0 22px" }}>
                            « {r.text}{r.excerpt ? " […]" : ""} »
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
            <a className="reviews-more" href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" style={{ color: variant === "dark" ? "white" : "var(--teal-dark)" }}>
                <Stars size={14} /> {RATING.value} {RATING.label} · lire tous les avis →
            </a>
        </>
    )
}

// ---------- Bandeau final + pages liées ----------

export function CtaBand({ title = "Parlons de la situation de votre enfant", text = "Un premier échange gratuit, par téléphone ou en rendez-vous, pour savoir comment l'aider concrètement." }: { title?: string; text?: string }) {
    return (
        <section className="cta-band">
            <div className="cta-band-inner">
                <div style={{ position: "relative", zIndex: 1 }}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="cta-band-actions">
                    <a href="/contact" className="btn btn-teal">Réserver le 1er RDV gratuit →</a>
                    <PhoneButton />
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
    { href: "/tarifs", title: "Tarifs", text: "50 € la séance, premier rendez-vous gratuit." },
]

export function Related({ exclude, title = "Les autres accompagnements" }: { exclude: string; title?: string }) {
    return (
        <section className="related" aria-label={title}>
            <h2 className="related-title">{title}</h2>
            <div className="related-grid">
                {SERVICE_LINKS.filter(l => l.href !== exclude).map(l => (
                    <a key={l.href} href={l.href} className="related-card">
                        <strong>{l.title}</strong>
                        <span>{l.text}</span>
                        <em>Découvrir →</em>
                    </a>
                ))}
            </div>
        </section>
    )
}

export function MobileCallBar() {
    return (
        <div className="callbar">
            <PhoneButton variant="outline" label="Appeler" />
            <a href="/contact" className="btn btn-dark">Prendre RDV</a>
        </div>
    )
}
