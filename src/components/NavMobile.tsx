import { useEffect, useRef, useState, type CSSProperties, type FocusEvent, type KeyboardEvent as ReactKeyboardEvent } from "react"
import { Compass, Backpack, Layers, GraduationCap, Route, PenLine, Library } from "lucide-react"
import { BUSINESS } from "../seo/site"
import { PhoneIcon, ArrowIcon } from "./ui"

const services = [
    { label: "Bilan d'orientation scolaire", hint: "Faire le point, de la 4e au post-bac", href: "/bilan-orientation-scolaire", icon: Compass },
    { label: "Orientation après la 3e", hint: "Seconde, bac pro, CAP, apprentissage", href: "/orientation-apres-la-3e", icon: Backpack },
    { label: "Spécialités au lycée", hint: "Seconde et première", href: "/orientation-lycee-specialites", icon: Layers },
    { label: "Accompagnement Parcoursup", hint: "Terminale : vœux et projets motivés", href: "/accompagnement-parcoursup", icon: GraduationCap },
    { label: "Réorientation post-bac", hint: "Étudiants qui doutent", href: "/reorientation-post-bac", icon: Route },
    { label: "Coaching brevet", hint: "Méthode, stress, oral", href: "/#coach-scolaire", icon: PenLine },
    { label: "Soutien scolaire", hint: "30 € la séance avec l'avance immédiate", href: "/soutien-scolaire", icon: Library },
]

const links = [
    { label: "Tarifs", href: "/tarifs" },
    { label: "Qui suis-je", href: "/qui-suis-je" },
    { label: "Contact", href: "/contact" },
]

export default function NavMobile({ logoUrl = "/images/logo-mark.webp" }: { logoUrl?: string }) {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [dropOpen, setDropOpen] = useState(false)
    const dropTrigger = useRef<HTMLAnchorElement>(null)

    // Menu « Accompagnements » : s'ouvre au survol ou au focus, se ferme quand on en sort ou avec Échap
    function onDropBlur(e: FocusEvent<HTMLDivElement>) {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropOpen(false)
    }
    function onDropKey(e: ReactKeyboardEvent<HTMLDivElement>) {
        if (e.key !== "Escape" || !dropOpen) return
        setDropOpen(false)
        dropTrigger.current?.focus()
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Menu mobile ouvert : on bloque le défilement de la page et Échap le referme
    useEffect(() => {
        if (!open) return
        const prev = document.body.style.overflow
        document.body.style.overflow = "hidden"
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
        window.addEventListener("keydown", onKey)
        return () => {
            document.body.style.overflow = prev
            window.removeEventListener("keydown", onKey)
        }
    }, [open])

    return (
        <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
            <div className="nav-scrim" onClick={() => setOpen(false)} aria-hidden="true" />
            <div className="nav-bar">
                <div className="nav-row">
                    <a href="/" className="nav-brand" aria-label="Marine Junca, conseillère d'orientation scolaire : accueil">
                        <img src={logoUrl} alt="" width={240} height={240} />
                        <span className="nav-brand-text">
                            <strong>Marine Junca</strong>
                            <span>Orientation scolaire</span>
                        </span>
                    </a>

                    <nav className="nav-links" aria-label="Menu principal">
                        <div
                            className={`nav-drop${dropOpen ? " is-open" : ""}`}
                            onMouseEnter={() => setDropOpen(true)}
                            onMouseLeave={() => setDropOpen(false)}
                            onFocus={() => setDropOpen(true)}
                            onBlur={onDropBlur}
                            onKeyDown={onDropKey}
                        >
                            <a href="/bilan-orientation-scolaire" className="nav-link" ref={dropTrigger} aria-expanded={dropOpen} aria-controls="nav-drop-panel">
                                Accompagnements
                                <svg className="nav-caret" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <div className="nav-drop-panel" id="nav-drop-panel">
                                <div className="nav-drop-grid">
                                    {services.map(s => {
                                        const Icon = s.icon
                                        return (
                                            <a key={s.href} href={s.href} className="nav-drop-item">
                                                <span className="nav-drop-icon"><Icon size={18} strokeWidth={1.6} /></span>
                                                <span>
                                                    <strong>{s.label}</strong>
                                                    <span>{s.hint}</span>
                                                </span>
                                            </a>
                                        )
                                    })}
                                </div>
                                <div className="nav-drop-foot">
                                    <span>Le premier rendez-vous est <strong>gratuit</strong>, sans engagement.</span>
                                    <a href="/contact">Réserver <ArrowIcon size={13} /></a>
                                </div>
                            </div>
                        </div>
                        {links.map(link => (
                            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
                        ))}
                    </nav>

                    <div className="nav-actions">
                        <a href={BUSINESS.phoneHref} className="nav-phone" aria-label={`Appeler le ${BUSINESS.phoneDisplay}`}>
                            <span className="nav-phone-icon"><PhoneIcon size={15} /></span>
                            <span className="nav-phone-text">{BUSINESS.phoneDisplay}</span>
                        </a>
                        <a href="/contact" className="btn btn-dark btn-arrow nav-cta">
                            <span>Prendre RDV</span>
                            <span className="btn-icon"><ArrowIcon size={14} /></span>
                        </a>
                    </div>

                    <button
                        type="button"
                        className="nav-burger"
                        onClick={() => setOpen(o => !o)}
                        aria-expanded={open}
                        aria-controls="nav-mobile-panel"
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        <span /><span />
                    </button>
                </div>

                {/* Menu mobile */}
                <div className="nav-mobile" id="nav-mobile-panel">
                    <nav aria-label="Menu mobile" className="nav-mobile-inner">
                        <span className="nav-mobile-group">Accompagnements</span>
                        {services.map((s, i) => {
                            const Icon = s.icon
                            return (
                                <a key={s.href} href={s.href} className="nav-mobile-link" style={{ "--i": i } as CSSProperties} onClick={() => setOpen(false)}>
                                    <span className="nav-drop-icon"><Icon size={17} strokeWidth={1.6} /></span>
                                    {s.label}
                                </a>
                            )
                        })}
                        <span className="nav-mobile-group">Infos</span>
                        {links.map((link, i) => (
                            <a key={link.href} href={link.href} className="nav-mobile-link nav-mobile-link-plain" style={{ "--i": i + services.length } as CSSProperties} onClick={() => setOpen(false)}>
                                {link.label}
                                <ArrowIcon size={14} />
                            </a>
                        ))}
                        <div className="nav-mobile-actions" style={{ "--i": services.length + links.length } as CSSProperties}>
                            <a href={BUSINESS.phoneHref} className="btn btn-outline"><PhoneIcon size={16} /> Appeler</a>
                            <a href="/contact" className="btn btn-dark">Prendre RDV</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
