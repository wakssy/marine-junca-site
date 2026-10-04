import { Mail } from "lucide-react"
import { BUSINESS } from "../seo/site"
import { SERVICE_LINKS, CtaLink, PhoneButton, CloudDivider, Stars, delay } from "./ui"
import { RATING } from "../seo/site"

function FacebookIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.3l.5-3H13v-2c0-.6.4-1 1-1z" />
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.64-1.6-2.64-1.62 0-1.86 1.26-1.86 2.56v4.92h-4v-11z" />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className="footer">
            <CloudDivider className="footer-cloud-top" />
            <div className="footer-glow" aria-hidden="true" />

            <div className="footer-hero">
                <div className="footer-intro" data-reveal>
                    <span className="footer-label" aria-hidden="true">
                        Conseillère
                        <svg width="60" height="46" viewBox="0 0 60 46" fill="none">
                            <path d="M4 4C16 4 34 8 42 26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                            <path d="M33 26L44 30L42 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                    </span>
                    <div className="footer-photo-wrap">
                        <img
                            src="/images/headshot-320.webp"
                            srcSet="/images/headshot-320.webp 320w, /images/headshot-800.webp 800w"
                            sizes="160px"
                            alt="Marine Junca"
                            className="footer-photo"
                            width={1254}
                            height={1254}
                            loading="lazy"
                            decoding="async"
                        />
                        <a href={`mailto:${BUSINESS.email}`} className="footer-badge footer-badge-mail" aria-label="Envoyer un email à Marine Junca">
                            <Mail size={16} strokeWidth={1.8} />
                        </a>
                        <a href={BUSINESS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-badge footer-badge-linkedin" aria-label="Profil LinkedIn de Marine Junca">
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>

                <span className="footer-tag" data-reveal style={delay(80)}>Marine Junca</span>
                <p className="footer-title" data-reveal style={delay(140)}>Conseillère en orientation scolaire et professionnelle</p>
                <p className="footer-sub" data-reveal style={delay(200)}>
                    <Stars size={14} /> <strong>{RATING.value}</strong> {RATING.label} · premier rendez-vous gratuit
                </p>
                <div className="footer-actions" data-reveal style={delay(260)}>
                    <CtaLink variant="dark">Réserver le 1er RDV gratuit</CtaLink>
                    <PhoneButton variant="ghost" />
                </div>
            </div>

            <div className="footer-panel" data-reveal>
                <div className="footer-cols">
                    <div className="footer-col">
                        <p className="footer-col-title">Marine Junca Orientation</p>
                        <p>Conseillère d'orientation scolaire</p>
                        <p>{BUSINESS.city} ({BUSINESS.postalCode}), près de Dax</p>
                        <p><a className="footer-strong" href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a></p>
                        <p><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
                        <p className="footer-muted">Lun-ven 9h-19h · sam 9h-12h</p>
                    </div>
                    <nav className="footer-col" aria-label="Accompagnements">
                        <p className="footer-col-title">Accompagnements</p>
                        <ul>
                            {SERVICE_LINKS.filter(l => l.href !== "/tarifs").map(l => (
                                <li key={l.href}><a href={l.href}>{l.title}</a></li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="footer-col" aria-label="Informations">
                        <p className="footer-col-title">Infos pratiques</p>
                        <ul>
                            <li><a href="/tarifs">Tarifs</a></li>
                            <li><a href="/qui-suis-je">Qui suis-je</a></li>
                            <li><a href="/contact">Prendre rendez-vous</a></li>
                            <li><a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Avis Google</a></li>
                        </ul>
                        <p className="footer-muted footer-zone">À domicile dans un rayon de 45 km : Dax, Saint-Paul-lès-Dax, Peyrehorade, Saint-Vincent-de-Tyrosse, Soustons, Tartas, Bayonne… et partout en visio.</p>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <span className="footer-copyright">© 2026 Marine Junca. Tous droits réservés.</span>
                    <div className="footer-socials">
                        <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Page Facebook de Marine Junca">
                            <FacebookIcon />
                        </a>
                        <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Profil Instagram de Marine Junca">
                            <InstagramIcon />
                        </a>
                        <a href={BUSINESS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Profil LinkedIn de Marine Junca">
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
            </div>

            <CloudDivider className="footer-cloud" />
        </footer>
    )
}
