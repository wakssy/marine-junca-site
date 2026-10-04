import { GitFork, Waypoints, Lightbulb, ListChecks, HeartHandshake, LifeBuoy, Video, House, HandCoins } from "lucide-react"
import RetroGrid from "../components/RetroGrid"
import AccordionCard from "../components/AccordionCard"
import PricingCards from "../components/PricingCards"
import CoachScolaireSection from "../components/CoachScolaireSection"
import ManifestSection from "../components/ManifestSection"
import BuildFutureSection from "../components/BuildFutureSection"
import { ParcoursRail, Reviews, Faq, PhoneButton, CtaLink, CloudDivider, Mark, Stars, CheckIcon, ArrowIcon, GoogleG, delay } from "../components/ui"
import { onSpotlightMove } from "../components/motion"
import { HOME_FAQ } from "../content/homeFaq"
import { ZONE_COMMUNES, REVIEWS, RATING, BUSINESS } from "../seo/site"

const features = [
    { icon: GitFork, color: "#2BA9A9", title: "Difficile de choisir une filière ?", text: "Comprendre les différentes options et identifier celles qui correspondent vraiment à son profil." },
    { icon: Waypoints, color: "#C98A52", title: "Perdu parmi toutes les possibilités ?", text: "Explorer les études, formations et métiers adaptés à ses centres d'intérêt et à ses compétences." },
    { icon: Lightbulb, color: "#1F4A5A", title: "Aucune idée du métier à exercer ?", text: "Découvrir des pistes professionnelles concrètes grâce à une démarche personnalisée." },
    { icon: ListChecks, color: "#4E9C66", title: "Choisir ses spécialités au lycée ?", text: "Être accompagné dans ses décisions pour construire un parcours cohérent et motivant." },
    { icon: HeartHandshake, color: "#7E9473", title: "Besoin d'un regard extérieur bienveillant ?", text: "Profiter d'un accompagnement neutre et humain pour avancer sereinement dans ses choix." },
    { icon: LifeBuoy, color: "#1A7471", title: "Stressé par Parcoursup ?", text: "Construire une stratégie adaptée et sécuriser ses choix d'orientation post-bac." },
]

const curriculum = [
    { etape: "Étape 01", titre: "Faire le point sur sa situation", description: "Comprendre les difficultés, les hésitations et les attentes." },
    { etape: "Étape 02", titre: "Identifier ses forces", description: "Centres d'intérêt, personnalité et compétences." },
    { etape: "Étape 03", titre: "Découvrir les possibilités", description: "Métiers, formations et parcours adaptés." },
    { etape: "Étape 04", titre: "Choisir une orientation", description: "Élaborer un projet cohérent et réalisable." },
    { etape: "Étape 05", titre: "Passer à l'action", description: "Préparer les choix scolaires et les démarches d'admission." },
]

const comparisonItems = [
    "Vous êtes perdu face à vos choix d'études ou de métier.",
    "Vous hésitez entre plusieurs filières ou formations.",
    "Vous souhaitez mieux connaître vos points forts et vos intérêts.",
    "Vous préparez Parcoursup et avez besoin d'être guidé.",
    "Vous souhaitez construire un projet d'avenir qui vous ressemble.",
]

function HandArrow({ className = "" }: { className?: string }) {
    return (
        <svg className={`hand-arrow ${className}`} width="46" height="24" viewBox="0 0 46 24" fill="none" aria-hidden="true">
            <path d="M2 4C14 2 30 2 40 10C43 12.5 40 16 36 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M31 12L37 15L38 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    )
}

export default function Home() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="hero">
                <div className="hero-orbs" aria-hidden="true"><span /><span /><span /></div>

                <div className="hero-inner">
                    <h1 className="hero-title hero-in" style={delay(80)}>
                        Conseillère d'orientation <Mark>scolaire à Dax</Mark>
                        <span className="hero-title-soft"> — aidez votre enfant à trouver sa voie</span>
                    </h1>
                    <p className="hero-lead hero-in" style={delay(180)}>
                        Bilan d'orientation, choix des spécialités, Parcoursup ou réorientation : un accompagnement individuel et bienveillant,
                        à domicile autour de Dax ou en visio.
                    </p>
                    <div className="hero-actions hero-in" style={delay(260)}>
                        <CtaLink variant="dark">Réserver le 1er RDV gratuit</CtaLink>
                        <PhoneButton />
                    </div>
                    <ul className="hero-badges hero-in" style={delay(340)}>
                        {["Premier RDV gratuit", "Plus de 15 ans d'expérience", "Séance à 50 €"].map(b => (
                            <li key={b}><span className="chip-check"><CheckIcon size={9} /></span>{b}</li>
                        ))}
                        <li className="hero-badge-promo">
                            <a href="#avance-immediate">
                                <span className="chip-check"><HandCoins size={11} strokeWidth={2.2} /></span>
                                Soutien scolaire : {BUSINESS.tutoringPrice}&nbsp;€ au lieu de {BUSINESS.tutoringFullPrice}&nbsp;€
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hero-media hero-in" style={delay(420)}>
                    <div className="hero-frame">
                        <div className="hero-frame-core">
                            <img
                                className="hero-photo"
                                src="/images/hero-photo-1690.webp"
                                srcSet="/images/hero-photo-960.webp 960w, /images/hero-photo-1690.webp 1690w"
                                sizes="(max-width: 1200px) 92vw, 1120px"
                                alt="Adolescente face à un chemin qui se sépare en deux : le choix d'orientation"
                                width={1690}
                                height={931}
                                {...{ fetchpriority: "high" }}
                                decoding="async"
                            />
                        </div>
                    </div>

                    <a className="hero-card hero-card-rating" href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" aria-label={`${RATING.value}/5 Avis Google : lire les avis sur Google`}>
                        <Stars size={14} />
                        <span className="hero-card-row">
                            <span className="trust-avatars" aria-hidden="true">
                                {REVIEWS.map(r => <span key={r.author} style={{ background: r.color }}>{r.initial}</span>)}
                            </span>
                            <span>
                                <span className="trust-score">{RATING.value}<small>/5</small></span>
                                <span className="trust-score-label"><GoogleG size={11} /> Avis Google</span>
                            </span>
                        </span>
                    </a>

                    <a className="hero-card hero-card-coach" href="/qui-suis-je" aria-label="Marine Junca, plus de 15 ans d'expérience : qui suis-je">
                        <img src="/images/headshot-320.webp" alt="" width={320} height={320} decoding="async" />
                        <span>
                            <strong>Marine Junca</strong>
                            <span>Plus de 15 ans d'expérience <ArrowIcon size={12} /></span>
                        </span>
                    </a>
                </div>
            </section>
            <CloudDivider className="hero-cloud" />

            {/* ================= SITUATIONS ================= */}
            <section className="section situations">
                <div className="situations-intro">
                    <span className="section-label">
                        C'est votre situation ?
                        <HandArrow />
                    </span>
                    <h2 className="section-title">Votre enfant a besoin d'un accompagnement en orientation scolaire ?</h2>
                    <p className="section-lead">
                        Ces questions reviennent souvent chez les familles. Si l'une d'elles vous parle, on peut en discuter lors d'un premier rendez-vous gratuit.
                    </p>
                    <div className="situations-cta" data-reveal style={delay(180)}>
                        <CtaLink variant="dark">Réserver le 1er RDV gratuit</CtaLink>
                    </div>
                </div>

                <div className="situations-panel" data-reveal="scale">
                    <div className="situations-grid-bg" aria-hidden="true">
                        <RetroGrid angle={65} cellSize={50} opacity={0.32} lineColor="rgb(63,84,89)" backgroundColor="transparent" animationSpeed={2.5} perspective={200} fadeHeight={70} fadeColor="var(--paper)" animationDirection="vertical" />
                    </div>
                    <div className="situations-grid" onPointerMove={onSpotlightMove}>
                        {features.map((f, i) => {
                            const Icon = f.icon
                            return (
                                <article key={f.title} className="situation-card" data-spotlight data-reveal style={{ ...delay(i * 70), ["--c" as string]: f.color }}>
                                    <span className="situation-icon"><Icon size={24} strokeWidth={1.6} /></span>
                                    <h3>{f.title}</h3>
                                    <p>{f.text}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
                {/* Sur mobile, l'appel à l'action vient après les situations (celui de l'intro est masqué) */}
                <div className="situations-cta-after" data-reveal>
                    <CtaLink variant="dark">Réserver le 1er RDV gratuit</CtaLink>
                </div>
            </section>

            {/* ================= PARCOURS : une page par étape scolaire ================= */}
            <section className="section parcours">
                <div className="section-head">
                    <div>
                        <span className="section-label">Où en est votre enfant ?</span>
                        <h2 className="section-title">Un accompagnement adapté à chaque étape du parcours scolaire</h2>
                    </div>
                    <p className="section-lead">
                        Quelle que soit la classe, le <a href="/bilan-orientation-scolaire" className="text-link">bilan d'orientation scolaire</a> permet de faire le point
                        sur ses goûts, ses forces et les formations qui lui correspondent.
                    </p>
                </div>
                <div className="rail-card" data-reveal="scale">
                    <ParcoursRail />
                </div>
            </section>

            {/* ================= DÉROULÉ ================= */}
            <section className="section curriculum" id="curriculum">
                <div className="curriculum-copy">
                    <span className="section-label">Déroulement de l'accompagnement</span>
                    <h2 className="section-title">Mon accompagnement en orientation scolaire, étape par étape</h2>
                    <div className="curriculum-list">
                        {curriculum.map((c, i) => (
                            <div key={c.etape} data-reveal style={delay(i * 70)}>
                                <AccordionCard {...c} defaultOpen={i === 0} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="curriculum-media" data-reveal="scale">
                    <div className="curriculum-frame">
                        <img
                            data-reveal-clip
                            src="/images/curriculum-photo-1400.webp"
                            srcSet="/images/curriculum-photo-760.webp 760w, /images/curriculum-photo-1400.webp 1400w"
                            sizes="(max-width: 900px) 92vw, 520px"
                            alt="Marine Junca lors d'un accompagnement en orientation scolaire"
                            width={1519}
                            height={1036}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="curriculum-chip curriculum-chip-a"><House size={16} strokeWidth={2} /> À domicile, autour de Dax</div>
                    <div className="curriculum-chip curriculum-chip-b"><Video size={16} strokeWidth={2} /> Ou en visio, au même tarif</div>
                    <p className="curriculum-note">Séance d'environ 1 h<br />3 à 6 séances en général</p>
                </div>
            </section>

            {/* ================= AVIS (fond sombre) ================= */}
            <section className="reviews-section">
                <div className="reviews-glow" aria-hidden="true" />
                <div className="section">
                    <div className="reviews-head">
                        <div>
                            <span className="section-label section-label-light">Avis Google</span>
                            <h2 className="reviews-title">
                                Ne vous fiez pas seulement à mes paroles : voici ce que disent les jeunes et les familles accompagnés.
                            </h2>
                        </div>
                        <a className="reviews-score" href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" data-reveal style={delay(140)}>
                            <span className="reviews-score-num">{RATING.value}</span>
                            <span className="reviews-score-meta">
                                <Stars size={16} />
                                <span><GoogleG size={12} /> Note moyenne sur Google</span>
                            </span>
                        </a>
                    </div>
                    <Reviews variant="dark" />
                    <div className="reviews-cta" data-reveal>
                        <p>Vous aussi, faites le point avec un regard extérieur bienveillant.</p>
                        <div className="reviews-cta-actions">
                            <CtaLink variant="white">Réserver le 1er RDV gratuit</CtaLink>
                            <PhoneButton variant="outline" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= POUR QUI ================= */}
            <section className="fit">
                <div className="section fit-inner">
                    <div className="fit-copy">
                        <span className="section-label">Pour qui ?</span>
                        <h2 className="section-title">Cet accompagnement est fait pour vous si…</h2>
                        <div className="fit-cta" data-reveal style={delay(120)}>
                            <CtaLink variant="dark">Réserver le 1er RDV gratuit</CtaLink>
                        </div>
                    </div>
                    <ul className="fit-list" data-reveal="scale">
                        {comparisonItems.map((item, i) => (
                            <li key={item} data-reveal style={delay(i * 80)}>
                                <span className="fit-check"><CheckIcon size={11} /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="fit-cta-after" data-reveal>
                        <CtaLink variant="dark">Réserver le 1er RDV gratuit</CtaLink>
                    </div>
                </div>
            </section>

            {/* ================= VIDÉO — Construisez votre avenir ================= */}
            <BuildFutureSection />

            {/* ================= ENGAGEMENT + TARIFS ================= */}
            <ManifestSection />
            <section className="section pricing" id="pricing">
                <div className="section-head">
                    <div>
                        <span className="section-label">Tarifs transparents</span>
                        <h2 className="section-title">Des tarifs accessibles pour l'orientation et le soutien scolaire à Dax</h2>
                    </div>
                    <p className="section-lead">
                        Pas de forfait à payer d'avance : vous décidez au fur et à mesure. Le déplacement à domicile est inclus dans un rayon de 45 km, et le soutien scolaire bénéficie de l'avance immédiate de crédit d'impôt.
                    </p>
                </div>
                <PricingCards />
                <p className="pricing-more" data-reveal>
                    <a href="/tarifs" className="text-link">Combien de séances prévoir et comparaison avec le CIO gratuit <ArrowIcon size={14} /></a>
                </p>
            </section>

            {/* ================= ZONE D'INTERVENTION ================= */}
            <section className="zone">
                <div className="section zone-inner">
                    <div className="zone-copy">
                        <span className="section-label">Zone d'intervention</span>
                        <h2 className="section-title">Conseillère d'orientation à domicile autour de Dax, et en visio</h2>
                        <p className="zone-text">
                            Basée à Rivière-Saas-et-Gourby, à une dizaine de kilomètres de Dax, je me déplace à domicile dans un rayon de 45 km,
                            déplacement inclus dans le prix de la séance. Au-delà, pour les étudiants partis étudier ailleurs ou les familles plus éloignées,
                            les séances se font en visio, au même tarif.
                        </p>
                        <ul className="zone-list" data-reveal style={delay(180)}>
                            {ZONE_COMMUNES.map(c => <li key={c}>{c}</li>)}
                        </ul>
                    </div>
                    <div className="zone-visual" data-reveal="scale" aria-hidden="true">
                        <div className="zone-ring zone-ring-3"><span>Visio · partout</span></div>
                        <div className="zone-ring zone-ring-2"><span>45 km à domicile</span></div>
                        <div className="zone-ring zone-ring-1"><span>Dax · 10 km</span></div>
                        <div className="zone-center">
                            <img src="/images/logo-mark.webp" alt="" width={240} height={240} />
                        </div>
                        <span className="zone-pin">Rivière-Saas-et-Gourby</span>
                    </div>
                </div>
            </section>

            {/* ================= COACH SCOLAIRE =================
                Après la zone d'intervention : l'orientation enchaîne d'abord directement sur les avis */}
            <CoachScolaireSection />

            {/* ================= FAQ ================= */}
            <section className="section faq-section">
                <div className="faq-aside">
                    <span className="section-label">Une question ?</span>
                    <h2 className="section-title">Vos questions sur l'orientation scolaire à Dax</h2>
                    <div className="faq-help" data-reveal style={delay(120)}>
                        <img src="/images/headshot-320.webp" alt="" width={320} height={320} loading="lazy" decoding="async" />
                        <div>
                            <p className="faq-help-title">Vous ne trouvez pas votre réponse ?</p>
                            <p className="faq-help-text">Appelez-moi, j'y réponds volontiers : lun-ven 9h-19h, sam 9h-12h.</p>
                            <PhoneButton variant="outline" />
                        </div>
                    </div>
                </div>
                <div className="faq-main" data-reveal style={delay(100)}>
                    <Faq items={HOME_FAQ} />
                </div>
            </section>
        </>
    )
}
