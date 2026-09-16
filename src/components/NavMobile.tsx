import { useState } from "react"
import { BUSINESS } from "../seo/site"
import { PhoneIcon } from "./ui"

const services = [
    { label: "Bilan d'orientation scolaire", hint: "Faire le point, de la 4e au post-bac", href: "/bilan-orientation-scolaire" },
    { label: "Orientation après la 3e", hint: "Seconde, bac pro, CAP, apprentissage", href: "/orientation-apres-la-3e" },
    { label: "Spécialités au lycée", hint: "Seconde et première", href: "/orientation-lycee-specialites" },
    { label: "Accompagnement Parcoursup", hint: "Terminale : vœux et projets motivés", href: "/accompagnement-parcoursup" },
    { label: "Réorientation post-bac", hint: "Étudiants qui doutent", href: "/reorientation-post-bac" },
    { label: "Coaching brevet", hint: "Méthode, stress, oral", href: "/#coach-scolaire" },
]

const links = [
    { label: "Tarifs", href: "/tarifs" },
    { label: "Qui suis-je", href: "/qui-suis-je" },
    { label: "Contact", href: "/contact" },
]

export default function NavMobile({ logoUrl = "/images/logo.png" }: { logoUrl?: string }) {
    const [open, setOpen] = useState(false)

    return (
        <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: "20px 24px 0 24px", fontFamily: "'Funnel Display', sans-serif" }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .nav-desktop-links { display: flex; }
                .nav-desktop-cta { display: inline-flex; }
                .nav-hamburger, .nav-mobile-menu { display: none; }
                .nav-link { text-decoration: none; color: rgb(33,33,33); font-weight: 500; font-size: 15px; padding: 8px 0; background: none; border: none; font-family: inherit; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; }
                .nav-link:hover { color: #2a9d9d; }
                .nav-drop { position: relative; }
                .nav-drop-panel {
                    position: absolute; top: 100%; left: -24px; width: 360px; padding: 10px; margin-top: 8px;
                    background: white; border-radius: 18px; box-shadow: 0 20px 50px rgba(33,33,33,0.16);
                    opacity: 0; visibility: hidden; transform: translateY(6px); transition: opacity .2s ease, transform .2s ease, visibility .2s;
                }
                .nav-drop-panel::before { content: ""; position: absolute; left: 0; right: 0; top: -12px; height: 12px; }
                .nav-drop:hover .nav-drop-panel, .nav-drop:focus-within .nav-drop-panel { opacity: 1; visibility: visible; transform: none; }
                .nav-drop-item { display: block; padding: 11px 14px; border-radius: 12px; text-decoration: none; color: rgb(33,33,33); }
                .nav-drop-item:hover { background: rgb(235,238,243); }
                .nav-drop-item strong { display: block; font-size: 15px; font-weight: 600; }
                .nav-drop-item span { display: block; font-size: 13px; color: rgb(85,85,85); margin-top: 2px; }
                .nav-phone { display: inline-flex; align-items: center; gap: 7px; text-decoration: none; color: rgb(33,33,33); font-weight: 600; font-size: 15px; white-space: nowrap; }
                .nav-phone:hover { color: #2a9d9d; }
                .nav-mobile-group { font-family: 'Gloria Hallelujah', cursive; color: #2a9d9d; font-size: 13px; margin: 8px 0 2px; }
                @media (max-width: 1100px) { .nav-phone-text { display: none; } }
                @media (max-width: 900px) {
                    .nav-desktop-links, .nav-desktop-cta, .nav-phone { display: none; }
                    .nav-hamburger { display: flex; }
                    .nav-mobile-menu { display: block; }
                }
            ` }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", backgroundColor: "white", borderRadius: open ? "20px 20px 0 0" : 20, boxShadow: "0 10px 40px rgba(33,33,33,0.12)" }}>
                {/* Barre principale */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "12px 24px" }}>
                    <a href="/" style={{ display: "flex", alignItems: "center" }} aria-label="Marine Junca, conseillère d'orientation scolaire : accueil">
                        <img src={logoUrl} alt="Marine Junca Orientation" width={1254} height={1254} style={{ height: "40px", width: "auto", display: "block" }} />
                    </a>

                    <nav className="nav-desktop-links" aria-label="Menu principal" style={{ alignItems: "center", gap: 30 }}>
                        <div className="nav-drop">
                            <a href="/bilan-orientation-scolaire" className="nav-link" aria-haspopup="true">
                                Accompagnements
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <div className="nav-drop-panel">
                                {services.map(s => (
                                    <a key={s.href} href={s.href} className="nav-drop-item">
                                        <strong>{s.label}</strong>
                                        <span>{s.hint}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        {links.map(link => (
                            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
                        ))}
                    </nav>

                    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                        <a href={BUSINESS.phoneHref} className="nav-phone" aria-label={`Appeler le ${BUSINESS.phoneDisplay}`}>
                            <PhoneIcon size={16} /> <span className="nav-phone-text">{BUSINESS.phoneDisplay}</span>
                        </a>
                        <a href="/contact" className="nav-desktop-cta" style={{
                            alignItems: "center", textDecoration: "none", background: "rgb(33,33,33)", color: "white",
                            padding: "12px 22px", borderRadius: 10, fontWeight: 600, fontSize: 15, whiteSpace: "nowrap",
                        }}>
                            Prendre RDV
                        </a>
                    </div>

                    {/* Bouton hamburger (mobile) */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setOpen(o => !o)}
                        aria-expanded={open}
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", flexDirection: "column", gap: "5px", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "24px", height: "2px", backgroundColor: "rgb(33,33,33)", borderRadius: "2px", transition: "transform 0.25s ease, opacity 0.25s ease", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
                        <div style={{ width: "24px", height: "2px", backgroundColor: "rgb(33,33,33)", borderRadius: "2px", opacity: open ? 0 : 1, transition: "opacity 0.25s ease" }} />
                        <div style={{ width: "24px", height: "2px", backgroundColor: "rgb(33,33,33)", borderRadius: "2px", transition: "transform 0.25s ease", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
                    </button>
                </div>

                {/* Menu déroulant (mobile) */}
                <div className="nav-mobile-menu" style={{ maxHeight: open ? "80vh" : "0px", overflowY: open ? "auto" : "hidden", transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)" }}>
                    <nav aria-label="Menu mobile" style={{ padding: "4px 24px 20px 24px", display: "flex", flexDirection: "column" }}>
                        <span className="nav-mobile-group">Accompagnements</span>
                        {services.map(s => (
                            <a key={s.href} href={s.href} style={{ fontSize: 16, fontWeight: 500, color: "rgb(33,33,33)", textDecoration: "none", padding: "9px 0", borderBottom: "1px solid rgba(33,33,33,0.06)" }}>
                                {s.label}
                            </a>
                        ))}
                        <span className="nav-mobile-group" style={{ marginTop: 14 }}>Infos</span>
                        {links.map((link, i) => (
                            <a key={link.href} href={link.href} style={{ fontSize: 16, fontWeight: 500, color: "rgb(33,33,33)", textDecoration: "none", padding: "9px 0", borderBottom: i < links.length - 1 ? "1px solid rgba(33,33,33,0.06)" : "none" }}>
                                {link.label}
                            </a>
                        ))}
                        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                            <a href={BUSINESS.phoneHref} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "13px 10px", borderRadius: 10, border: "1.5px solid rgba(33,33,33,0.15)", color: "rgb(33,33,33)", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                                <PhoneIcon size={16} /> Appeler
                            </a>
                            <a href="/contact" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "13px 10px", borderRadius: 10, backgroundColor: "rgb(33,33,33)", color: "white", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                                Prendre RDV →
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
