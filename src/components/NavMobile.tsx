import { useState } from "react"

const links = [
    { label: "Accueil", href: "/" },
    { label: "Accompagnement", href: "/#curriculum" },
    { label: "Coach scolaire", href: "/#coach-scolaire" },
    { label: "Tarifs", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
]

export default function NavMobile({ logoUrl = "/images/logo.png" }: { logoUrl?: string }) {
    const [open, setOpen] = useState(false)

    return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: "20px 24px 0 24px", fontFamily: "'Funnel Display', sans-serif" }}>
            <style>{`
                .nav-desktop-links { display: flex; }
                .nav-desktop-cta { display: inline-flex; }
                .nav-hamburger, .nav-mobile-menu { display: none; }
                @media (max-width: 900px) {
                    .nav-desktop-links { display: none; }
                    .nav-desktop-cta { display: none; }
                    .nav-hamburger { display: flex; }
                    .nav-mobile-menu { display: block; }
                }
            `}</style>

            <div style={{ maxWidth: 1200, margin: "0 auto", backgroundColor: "white", borderRadius: open ? "20px 20px 0 0" : 20, boxShadow: "0 10px 40px rgba(33,33,33,0.12)" }}>
                {/* Barre principale */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 24px",
                }}>
                    <a href="/" style={{ display: "flex", alignItems: "center" }}>
                        <img src={logoUrl} alt="Marine Junca" width={1254} height={1254} style={{ height: "40px", width: "auto", display: "block" }} />
                    </a>

                    <div className="nav-desktop-links" style={{ alignItems: "center", gap: 32 }}>
                        {links.map((link, i) => (
                            <a key={i} href={link.href} style={{ textDecoration: "none", color: "rgb(33,33,33)", fontWeight: 500, fontSize: 15 }}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a href="/contact" className="nav-desktop-cta" style={{
                        alignItems: "center",
                        textDecoration: "none",
                        background: "rgb(33,33,33)",
                        color: "white",
                        padding: "12px 22px",
                        borderRadius: 10,
                        fontWeight: 600,
                        fontSize: 15,
                        whiteSpace: "nowrap",
                    }}>
                        Prendre RDV
                    </a>

                    {/* Bouton hamburger (mobile) */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setOpen(o => !o)}
                        style={{
                            background: "none", border: "none", cursor: "pointer",
                            padding: "8px", flexDirection: "column",
                            gap: "5px", alignItems: "center", justifyContent: "center",
                        }}>
                        <div style={{ width: "24px", height: "2px", backgroundColor: "rgb(33,33,33)", borderRadius: "2px", transition: "transform 0.25s ease, opacity 0.25s ease", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
                        <div style={{ width: "24px", height: "2px", backgroundColor: "rgb(33,33,33)", borderRadius: "2px", opacity: open ? 0 : 1, transition: "opacity 0.25s ease" }} />
                        <div style={{ width: "24px", height: "2px", backgroundColor: "rgb(33,33,33)", borderRadius: "2px", transition: "transform 0.25s ease", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
                    </button>
                </div>

                {/* Menu déroulant (mobile) */}
                <div className="nav-mobile-menu" style={{
                    maxHeight: open ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                }}>
                    <div style={{ padding: "10px 24px 20px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        {links.map((link, i) => (
                            <a key={i} href={link.href} style={{
                                fontSize: "17px",
                                fontWeight: 500,
                                color: "rgb(33,33,33)",
                                textDecoration: "none",
                                padding: "10px 0",
                                borderBottom: i < links.length - 1 ? "1px solid rgba(33,33,33,0.06)" : "none",
                                display: "block",
                            }}>
                                {link.label}
                            </a>
                        ))}
                        <a href="/contact" style={{
                            marginTop: "12px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            padding: "14px 24px", borderRadius: "10px",
                            backgroundColor: "rgb(33,33,33)", color: "white",
                            fontSize: "15px", fontWeight: 600, textDecoration: "none",
                        }}>
                            Prendre RDV →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
