import { useEffect } from "react"

const SITE_URL = "https://marine-junca-orientation.fr"

const faqs = [
    { q: "Comment se déroule un accompagnement ?", a: "L'accompagnement se fait en plusieurs séances individuelles, en présentiel ou à distance. Chaque séance dure environ 1h et suit les 5 étapes du parcours : bilan de situation, identification des forces, exploration des possibilités, choix d'orientation, et passage à l'action." },
    { q: "À partir de quel âge peut-on bénéficier de cet accompagnement ?", a: "L'accompagnement s'adresse aux collégiens, lycéens et jeunes adultes. Il est adapté à chaque profil, que ce soit pour choisir ses spécialités au lycée, préparer Parcoursup ou définir un projet professionnel." },
    { q: "Quel est le tarif d'une séance ?", a: "La séance est à 50 € et les frais de déplacement sont inclus dans un rayon de 45 km. Le premier rendez-vous est gratuit et sans engagement, pour faire connaissance et définir vos besoins." },
    { q: "Combien de séances sont nécessaires ?", a: "Le nombre de séances varie selon les besoins de chaque jeune. En général, un accompagnement complet se déroule sur 3 à 6 séances. La flexibilité est au cœur de ma démarche : on avance à votre rythme." },
    { q: "Intervenez-vous à domicile à Dax et dans les Landes ?", a: "Oui, je me déplace à domicile dans un rayon de 45 km autour de Rivière-Saas-et-Gourby, près de Dax. Les frais de déplacement sont inclus dans le tarif. Je couvre notamment Dax, Saint-Paul-lès-Dax, Mont-de-Marsan, Pau, Bayonne et toutes les communes avoisinantes des Landes (40) et des Pyrénées-Atlantiques (64)." },
    { q: "Proposez-vous des séances d'orientation scolaire en ligne ?", a: "Absolument. Les séances peuvent se dérouler en présentiel (à domicile ou dans un lieu neutre) ou à distance par visioconférence. Cette flexibilité me permet d'accompagner les familles de toute la région Nouvelle-Aquitaine et au-delà." },
    { q: "Quelle est la différence avec un conseiller d'orientation de l'Éducation nationale ?", a: "En tant que conseillère en orientation scolaire indépendante à Dax, je vous reçois sur rendez-vous, sans délai d'attente, avec un accompagnement entièrement personnalisé. Je me déplace à votre domicile et adapte mes séances au rythme et aux besoins de votre enfant." },
    { q: "À quelle distance de Dax intervenez-vous ?", a: "J'interviens dans un rayon de 45 km autour de Dax, ce qui couvre une grande partie des Landes (40), les Pyrénées-Atlantiques (64) et les communes voisines de Nouvelle-Aquitaine. Au-delà, les séances se font en visioconférence." },
]

export default function SEOHead({ page = "home" }: { page?: "home" | "contact" }) {
    useEffect(() => {
        const setMeta = (name: string, content: string, prop = false) => {
            const attr = prop ? "property" : "name"
            let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
            if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el) }
            el.content = content
        }
        const setJsonLd = (id: string, data: object | null) => {
            let el = document.getElementById(id) as HTMLScriptElement
            if (!data) { el?.remove(); return }
            if (!el) { el = document.createElement("script"); el.id = id; el.type = "application/ld+json"; document.head.appendChild(el) }
            el.textContent = JSON.stringify(data)
        }

        if (page === "home") {
            document.title = "Conseillère en Orientation Scolaire à Rivière-Saas-et-Gourby | Marine Junca"
            setMeta("description", "Marine Junca, conseillère en orientation scolaire indépendante à Rivière-Saas-et-Gourby (40), près de Dax et Pau. Bilan d'orientation, aide Parcoursup, accompagnement lycéens et collégiens. Premier RDV gratuit. Déplacement inclus à 45 km.")
            setMeta("keywords", "conseillère orientation scolaire Rivière-Saas-et-Gourby, bilan orientation scolaire Landes, aide Parcoursup Dax, orientation lycée Landes, orientation collège Dax, accompagnement orientation scolaire Nouvelle-Aquitaine, conseiller orientation indépendant 40, orientation professionnelle jeunes Pyrénées-Atlantiques, orientation scolaire près de Dax")
            setMeta("robots", "index, follow")
            setMeta("author", "Marine Junca")
            setMeta("geo.region", "FR-40")
            setMeta("geo.placename", "Rivière-Saas-et-Gourby, Landes")
            setMeta("geo.position", "43.699528;-1.188472")
            setMeta("ICBM", "43.699528, -1.188472")
            setMeta("og:type", "website", true)
            setMeta("og:title", "Conseillère en Orientation Scolaire près de Dax | Marine Junca", true)
            setMeta("og:description", "Aidez votre enfant à trouver sa voie. Accompagnement personnalisé à Rivière-Saas-et-Gourby, Dax, Pau et dans toute la Nouvelle-Aquitaine. Premier RDV gratuit.", true)
            setMeta("og:image", `${SITE_URL}/images/hero-photo.png`, true)
            setMeta("og:url", SITE_URL, true)
            setMeta("og:locale", "fr_FR", true)
            setMeta("og:site_name", "Marine Junca - Orientation Scolaire", true)
            setMeta("twitter:card", "summary_large_image")
            setMeta("twitter:title", "Conseillère en Orientation Scolaire près de Dax | Marine Junca")
            setMeta("twitter:description", "Aidez votre enfant à trouver sa voie avec Marine Junca, conseillère en orientation scolaire à Rivière-Saas-et-Gourby et dans les Landes. Premier RDV gratuit.")
            setMeta("twitter:image", `${SITE_URL}/images/hero-photo.png`)

            let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement
            if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical) }
            canonical.href = SITE_URL

            setJsonLd("schema-org", {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Marine Junca - Conseillère en Orientation Scolaire",
                "description": "Conseillère en orientation scolaire indépendante à Rivière-Saas-et-Gourby, près de Dax. Accompagnement personnalisé pour collégiens, lycéens et étudiants des Landes et des Pyrénées-Atlantiques.",
                "url": SITE_URL,
                "telephone": "+33640452328",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "300 impasse de Poudepe",
                    "addressLocality": "Rivière-Saas-et-Gourby",
                    "postalCode": "40180",
                    "addressRegion": "Nouvelle-Aquitaine",
                    "addressCountry": "FR"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": "43.699528", "longitude": "-1.188472" },
                "areaServed": [
                    { "@type": "City", "name": "Rivière-Saas-et-Gourby" },
                    { "@type": "City", "name": "Dax" },
                    { "@type": "City", "name": "Saint-Paul-lès-Dax" },
                    { "@type": "City", "name": "Pau" },
                    { "@type": "City", "name": "Bayonne" },
                    { "@type": "City", "name": "Mont-de-Marsan" },
                    { "@type": "City", "name": "Tarbes" },
                    { "@type": "AdministrativeArea", "name": "Landes (40)" },
                    { "@type": "AdministrativeArea", "name": "Pyrénées-Atlantiques (64)" },
                    { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" }
                ],
                "openingHours": ["Mo-Fr 09:00-19:00", "Sa 09:00-12:00"],
                "priceRange": "50€",
                "serviceType": ["Orientation scolaire", "Bilan d'orientation", "Aide Parcoursup", "Accompagnement lycée", "Accompagnement collège", "Orientation professionnelle jeunes"],
                "sameAs": ["https://www.instagram.com/marinejunca/", "https://fr-fr.facebook.com/marine.junca", "https://fr.linkedin.com/in/marine-junca-b53580147"],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services d'orientation scolaire",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premier rendez-vous d'orientation" }, "price": "0", "priceCurrency": "EUR" },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Séance d'accompagnement en orientation scolaire" }, "price": "50", "priceCurrency": "EUR" }
                    ]
                }
            })

            setJsonLd("schema-faq", {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
            })

            setJsonLd("schema-breadcrumb", {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE_URL }
                ]
            })
        } else {
            document.title = "Prendre RDV - Orientation Scolaire près de Dax | Marine Junca"
            setMeta("description", "Contactez Marine Junca, conseillère en orientation scolaire à Rivière-Saas-et-Gourby, près de Dax (40). Premier rendez-vous gratuit. Déplacement inclus dans un rayon de 45 km.")
            setMeta("og:title", "Prendre RDV - Orientation Scolaire près de Dax | Marine Junca", true)
            setMeta("og:description", "Prenez rendez-vous avec Marine Junca, conseillère en orientation scolaire à Rivière-Saas-et-Gourby. Premier RDV gratuit.", true)
            setMeta("og:url", `${SITE_URL}/contact`, true)
            setMeta("og:image", `${SITE_URL}/images/headshot.png`, true)
            setMeta("twitter:image", `${SITE_URL}/images/headshot.png`)

            let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement
            if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical) }
            canonical.href = `${SITE_URL}/contact`

            // Pas de FAQ sur cette page : on retire le schema hérité de la home si l'utilisateur navigue entre les pages sans rechargement complet
            setJsonLd("schema-faq", null)

            setJsonLd("schema-breadcrumb", {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE_URL },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact` }
                ]
            })
        }
    }, [page])

    return <div style={{ display: "none" }} aria-hidden="true" />
}
