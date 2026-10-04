import { GitFork, Waypoints, Lightbulb, ListChecks, HeartHandshake, LifeBuoy, Star } from "lucide-react"
import RetroGrid from "../components/RetroGrid"
import AccordionCard from "../components/AccordionCard"
import PricingCards from "../components/PricingCards"
import CoachScolaireSection from "../components/CoachScolaireSection"
import ManifestSection from "../components/ManifestSection"
import BuildFutureSection from "../components/BuildFutureSection"
import { ParcoursRail, Reviews, Faq, PhoneButton } from "../components/ui"
import { HOME_FAQ } from "../content/homeFaq"
import { ZONE_COMMUNES, REVIEWS, RATING } from "../seo/site"

const features = [
    { icon: GitFork, emoji: "📖", color: "#4EC8C8", title: "Difficile de choisir une filière ?", text: "Comprendre les différentes options et identifier celles qui correspondent vraiment à son profil." },
    { icon: Waypoints, emoji: "🧩", color: "#F0A94E", title: "Perdu parmi toutes les possibilités ?", text: "Explorer les études, formations et métiers adaptés à ses centres d'intérêt et à ses compétences." },
    { icon: Lightbulb, emoji: "🎯", color: "#E0607E", title: "Aucune idée du métier à exercer ?", text: "Découvrir des pistes professionnelles concrètes grâce à une démarche personnalisée." },
    { icon: ListChecks, emoji: "✏️", color: "#90D4A0", title: "Choisir ses spécialités au lycée ?", text: "Être accompagné dans ses décisions pour construire un parcours cohérent et motivant." },
    { icon: HeartHandshake, emoji: "🌱", color: "#7C9EF0", title: "Besoin d'un regard extérieur bienveillant ?", text: "Profiter d'un accompagnement neutre et humain pour avancer sereinement dans ses choix." },
    { icon: LifeBuoy, emoji: "📅", color: "#4EC8C8", title: "Stressé par Parcoursup ?", text: "Construire une stratégie adaptée et sécuriser ses choix d'orientation post-bac." },
]

const curriculum = [
    { etape: "Étape 01", module: "Module 01", titre: "Faire le point sur sa situation", description: "Comprendre les difficultés, les hésitations et les attentes." },
    { etape: "Étape 02", module: "Module 02", titre: "Identifier ses forces", description: "Centres d'intérêt, personnalité et compétences." },
    { etape: "Étape 03", module: "Module 03", titre: "Découvrir les possibilités", description: "Métiers, formations et parcours adaptés." },
    { etape: "Étape 04", module: "Module 04", titre: "Choisir une orientation", description: "Élaborer un projet cohérent et réalisable." },
    { etape: "Étape 05", module: "Module 05", titre: "Passer à l'action", description: "Préparer les choix scolaires et les démarches d'admission." },
]

const comparisonItems = [
    "Vous êtes perdu face à vos choix d'études ou de métier.",
    "Vous hésitez entre plusieurs filières ou formations.",
    "Vous souhaitez mieux connaître vos points forts et vos intérêts.",
    "Vous préparez Parcoursup et avez besoin d'être guidé.",
    "Vous souhaitez construire un projet d'avenir qui vous ressemble.",
]

export default function Home() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .hero-section { position: relative; padding: 140px 30px 90px 30px; background: linear-gradient(135deg, #90D4A0 0%, #C5E8A0 45%, #4EC8C8 100%); }
                .hero-inner { position: relative; z-index: 2; max-width: 820px; margin: 0 auto; text-align: center; }
                .hero-title { font-size: 64px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; margin: 0 0 28px 0; color: white; }
                .hero-badges { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; margin-bottom: 36px; }
                .hero-badge { display: inline-flex; align-items: center; gap: 8px; color: white; font-size: 14px; font-weight: 500; }
                .hero-badge-check { width: 18px; height: 18px; min-width: 18px; border-radius: 50%; background: rgba(255,255,255,0.35); display: flex; align-items: center; justify-content: center; }
                .hero-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; }
                .hero-cta { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; background: white; color: rgb(33,33,33); border-radius: 12px; text-decoration: none; font-weight: 600; box-shadow: 0 10px 30px rgba(33,33,33,0.15); }
                .hero-photo-block { position: relative; max-width: 900px; margin: 56px auto 0 auto; }
                .hero-photo-block img.hero-photo { position: relative; z-index: 1; width: 100%; height: auto; display: block; border-radius: 24px; border: 6px solid rgba(255,255,255,0.4); box-shadow: 0 30px 60px rgba(33,33,33,0.2); }
                .trust-badge {
                    position: absolute; z-index: 3; left: -18px; top: 50%;
                    transform: translateY(-50%) rotate(-6deg);
                    display: flex; flex-direction: column; gap: 8px;
                    background: white; padding: 14px 18px; border-radius: 16px;
                    box-shadow: 0 14px 30px rgba(33,33,33,0.2);
                    border-top: 3px solid var(--teal);
                }
                .trust-stars { display: flex; gap: 2px; }
                .trust-badge-row { display: flex; align-items: center; gap: 10px; }
                .trust-avatars { display: flex; }
                .trust-avatars span { width: 26px; height: 26px; border-radius: 50%; border: 2px solid white; margin-left: -9px; color: white; font-size: 11px; font-weight: 600; display: flex; align-items: center; justify-content: center; text-decoration: none; }
                .trust-avatars span:first-child { margin-left: 0; }
                .trust-score { font-size: 15px; font-weight: 700; color: rgb(33,33,33); line-height: 1; }
                .trust-score-label { font-size: 10px; color: var(--body-gray); font-weight: 500; }
                .hero-cloud-wrap { position: relative; z-index: 4; width: 100%; margin-top: -8vw; pointer-events: none; }
                .hero-cloud-wrap img { display: block; width: 100%; height: auto; }
                .curriculum-grid { display: flex; flex-direction: row; gap: 50px; align-items: flex-start; }
                .curriculum-photo { flex: 1; max-width: 460px; border-radius: 20px; width: 100%; object-fit: cover; align-self: stretch; }
                @media (max-width: 900px) {
                    .hero-section { padding-top: 120px; padding-bottom: 70px; }
                    .hero-title { font-size: 36px; }
                    .hero-badges { gap: 14px; }
                    .trust-badge { left: 12px; padding: 10px 16px 10px 10px; }
                    .curriculum-grid { flex-direction: column; }
                    .curriculum-photo { max-width: 100%; height: 280px; }
                }
            ` }} />

            {/* HERO */}
            <section className="hero-section">
                <div className="hero-inner">
                    <h1 className="hero-title">
                        Conseillère d'orientation{" "}
                        <span style={{ position: "relative", display: "inline-block", padding: "0 8px" }}>
                            <span style={{
                                position: "absolute",
                                left: -2, right: -2, top: "13%", bottom: "6%",
                                background: "rgba(144,212,160,0.6)",
                                borderRadius: 8,
                                zIndex: 0,
                            }} />
                            <span style={{ position: "relative", zIndex: 1 }}>scolaire à Dax</span>
                        </span>
                        {" "}— aidez votre enfant à trouver sa voie
                    </h1>
                    <div className="hero-badges">
                        {["Premier RDV gratuit", "Plus de 15 ans d'expérience", "Séance à 50 €"].map((b, i) => (
                            <span key={i} className="hero-badge">
                                <span className="hero-badge-check">
                                    <svg width="9" height="7" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                {b}
                            </span>
                        ))}
                    </div>
                    <div className="hero-actions">
                        <a href="/contact" className="hero-cta">Prendre RDV →</a>
                        <PhoneButton />
                    </div>

                    <div className="hero-photo-block">
                        <img className="hero-photo" src="/images/hero-photo.png" alt="Adolescente face à un choix d'orientation" width={1690} height={931} loading="eager" />
                        <div className="trust-badge">
                            <div className="trust-stars">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <Star key={s} size={13} fill="#F0B94E" color="#F0B94E" />
                                ))}
                            </div>
                            <div className="trust-badge-row">
                                <div className="trust-avatars" aria-hidden="true">
                                    {REVIEWS.map(r => <span key={r.author} style={{ background: r.color }}>{r.initial}</span>)}
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <div className="trust-score">{RATING.value}/5</div>
                                    <div className="trust-score-label">Avis Google</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="hero-cloud-wrap">
                <img src="/images/cloud-divider.png" alt="" width={6400} height={1026} loading="lazy" />
            </div>

            {/* FEATURES */}
            <section className="section">
                <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px auto" }}>
                    <span className="section-label" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                        C'est votre situation ?
                        <svg width="46" height="24" viewBox="0 0 46 24" fill="none" style={{ marginTop: 8 }}>
                            <path d="M2 4C14 2 30 2 40 10C43 12.5 40 16 36 14" stroke="#4EC8C8" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                            <path d="M31 12L37 15L38 8" stroke="#4EC8C8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                    </span>
                    <h2 className="section-title" style={{ margin: "0 auto", textAlign: "center", maxWidth: 700 }}>Votre enfant a besoin d'un accompagnement en orientation scolaire ?</h2>
                </div>
                <div style={{ position: "relative", background: "var(--light-bg)", border: "1px solid rgba(33,33,33,0.08)", borderRadius: 24, padding: 40, overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0 }}>
                        <RetroGrid angle={65} cellSize={50} opacity={0.35} lineColor="rgb(85,85,85)" backgroundColor="transparent" animationSpeed={2.5} perspective={200} fadeHeight={70} fadeColor="var(--light-bg)" animationDirection="vertical" />
                    </div>
                    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                        {features.map((f, i) => {
                            const Icon = f.icon
                            return (
                                <div key={i} style={{ background: "white", border: "1px solid rgba(33,33,33,0.07)", borderRadius: 18, padding: 32, boxShadow: "0 4px 16px rgba(33,33,33,0.04)" }}>
                                    <div style={{
                                        width: 56, height: 56, marginBottom: 22, borderRadius: 16,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        background: `linear-gradient(135deg, ${f.color}33, ${f.color}14)`,
                                    }}>
                                        <Icon size={28} strokeWidth={1.75} color={f.color} />
                                    </div>
                                    <h3 style={{ fontSize: 17, fontWeight: 600, margin: "0 0 10px 0" }}>
                                        <span style={{ marginRight: 6 }}>{f.emoji}</span>{f.title}
                                    </h3>
                                    <p style={{ fontSize: 14, color: "var(--body-gray)", lineHeight: 1.6, margin: 0 }}>{f.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* PARCOURS : une page par étape scolaire */}
            <section className="section" style={{ paddingTop: 20 }}>
                <span className="section-label">Où en est votre enfant ?</span>
                <h2 className="section-title">Un accompagnement adapté à chaque étape du parcours scolaire</h2>
                <div className="rail-card">
                    <ParcoursRail />
                </div>
                <p style={{ marginTop: 22, fontSize: 16, color: "var(--body-gray)", lineHeight: 1.6 }}>
                    Quelle que soit la classe, le <a href="/bilan-orientation-scolaire" style={{ color: "#2a9d9d", fontWeight: 600 }}>bilan d'orientation scolaire</a> permet de faire le point
                    sur ses goûts, ses forces et les formations qui lui correspondent.
                </p>
            </section>

            {/* CURRICULUM */}
            <section className="section" id="curriculum">
                <span className="section-label">Déroulement de l'accompagnement</span>
                <h2 className="section-title">Mon accompagnement en orientation scolaire, étape par étape</h2>
                <div className="curriculum-grid">
                    <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1, maxWidth: 720 }}>
                        {curriculum.map((c, i) => (
                            <AccordionCard key={i} {...c} />
                        ))}
                    </div>
                    <img className="curriculum-photo" src="/images/curriculum-photo.png" alt="Accompagnement en orientation scolaire" loading="lazy" />
                </div>
            </section>

            {/* COACH + TESTIMONIALS (fond noir) */}
            <section style={{ background: "var(--black)", color: "white" }}>
                <CoachScolaireSection />
                <div className="section" style={{ paddingTop: 40, paddingBottom: 100 }}>
                    <span className="section-label">Avis Google</span>
                    <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em", maxWidth: 800, margin: "0 0 50px" }}>
                        Ne vous fiez pas seulement à mes paroles : voici ce que disent les jeunes et les familles accompagnés.
                    </h2>
                    <Reviews variant="dark" />
                </div>
            </section>

            {/* COMPARISON (gris clair) */}
            <section style={{ background: "var(--light-bg)", color: "rgb(33,33,33)" }}>
                <div className="section">
                    <h2 style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.03em", marginBottom: 30 }}>
                        Cet accompagnement est fait pour vous si...
                    </h2>
                    <div style={{ background: "white", border: "1px solid rgba(33,33,33,0.08)", borderRadius: 16, padding: 20 }}>
                        {comparisonItems.map((item, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 4px", borderBottom: i < comparisonItems.length - 1 ? "1px solid rgba(33,33,33,0.08)" : "none", fontSize: 16 }}>
                                <span style={{
                                    width: 24, height: 24, minWidth: 24, borderRadius: "50%",
                                    background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <svg width="12" height="9" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VIDEO — Construisez votre avenir */}
            <BuildFutureSection />

            {/* MANIFEST + PRICING */}
            <ManifestSection />
            <section className="section" id="pricing">
                <span className="section-label">Tarifs transparents</span>
                <h2 className="section-title">Des tarifs accessibles pour un bilan d'orientation à Dax</h2>
                <PricingCards />
                <p style={{ textAlign: "center", marginTop: 34, fontSize: 16 }}>
                    <a href="/tarifs" style={{ color: "#2a9d9d", fontWeight: 600 }}>Combien de séances prévoir et comparaison avec le CIO gratuit →</a>
                </p>
            </section>

            {/* ZONE D'INTERVENTION */}
            <section style={{ background: "var(--light-bg)" }}>
                <div className="section">
                    <span className="section-label">Zone d'intervention</span>
                    <h2 className="section-title">Conseillère d'orientation à domicile autour de Dax, et en visio</h2>
                    <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--body-gray)", maxWidth: 760, margin: 0 }}>
                        Basée à Rivière-Saas-et-Gourby, à une dizaine de kilomètres de Dax, je me déplace à domicile dans un rayon de 45 km,
                        déplacement inclus dans le prix de la séance. Au-delà, pour les étudiants partis étudier ailleurs ou les familles plus éloignées,
                        les séances se font en visio, au même tarif.
                    </p>
                    <ul className="zone-list">
                        {ZONE_COMMUNES.map(c => <li key={c}>{c}</li>)}
                    </ul>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <span className="section-label">Une question ?</span>
                <h2 className="section-title">Vos questions sur l'orientation scolaire à Dax</h2>
                <div style={{ maxWidth: 800, fontSize: 16, lineHeight: 1.7, color: "var(--body-gray)" }}>
                    <Faq items={HOME_FAQ} />
                </div>
            </section>
        </>
    )
}
