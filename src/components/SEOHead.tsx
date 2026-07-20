import { useEffect } from "react"

export default function SEOHead({ page = "home" }: { page?: "home" | "contact" }) {
    useEffect(() => {
        const setMeta = (name: string, content: string, prop = false) => {
            const attr = prop ? "property" : "name"
            let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement
            if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el) }
            el.content = content
        }

        if (page === "home") {
            document.title = "Conseillère en Orientation Scolaire à Rivière-Saas-et-Gourby | Marine Junca"
            setMeta("description", "Marine Junca, conseillère en orientation scolaire indépendante à Rivière-Saas-et-Gourby (40), près de Dax et Pau. Bilan d'orientation, aide Parcoursup, accompagnement lycéens et collégiens. Premier RDV gratuit. Déplacement inclus à 45 km.")
            setMeta("keywords", "conseillère orientation scolaire Rivière-Saas-et-Gourby, bilan orientation scolaire Landes, aide Parcoursup Dax, orientation lycée Landes, orientation collège Dax, accompagnement orientation scolaire Nouvelle-Aquitaine, conseiller orientation indépendant 40, orientation professionnelle jeunes Pyrénées-Atlantiques, orientation scolaire près de Dax")
            setMeta("robots", "index, follow")
            setMeta("author", "Marine Junca")
            setMeta("geo.region", "FR-40")
            setMeta("geo.placename", "Rivière-Saas-et-Gourby, Landes")
            setMeta("geo.position", "43.7102;-1.0530")
            setMeta("ICBM", "43.7102, -1.0530")
            setMeta("og:type", "website", true)
            setMeta("og:title", "Conseillère en Orientation Scolaire près de Dax | Marine Junca", true)
            setMeta("og:description", "Aidez votre enfant à trouver sa voie. Accompagnement personnalisé à Rivière-Saas-et-Gourby, Dax, Pau et dans toute la Nouvelle-Aquitaine. Premier RDV gratuit.", true)
            setMeta("og:image", "https://framerusercontent.com/images/D74CiDkg6gehKkaWNymc5Ck0.png", true)
            setMeta("og:url", "https://marinejunca.fr", true)
            setMeta("og:locale", "fr_FR", true)
            setMeta("og:site_name", "Marine Junca - Orientation Scolaire", true)
            setMeta("twitter:card", "summary_large_image")
            setMeta("twitter:title", "Conseillère en Orientation Scolaire près de Dax | Marine Junca")
            setMeta("twitter:description", "Aidez votre enfant à trouver sa voie avec Marine Junca, conseillère en orientation scolaire à Rivière-Saas-et-Gourby et dans les Landes. Premier RDV gratuit.")
            setMeta("twitter:image", "https://framerusercontent.com/images/D74CiDkg6gehKkaWNymc5Ck0.png")

            let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement
            if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical) }
            canonical.href = "https://marinejunca.fr"

            let schema = document.getElementById("schema-org") as HTMLScriptElement
            if (!schema) { schema = document.createElement("script"); schema.id = "schema-org"; schema.type = "application/ld+json"; document.head.appendChild(schema) }
            schema.textContent = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Marine Junca - Conseillère en Orientation Scolaire",
                "description": "Conseillère en orientation scolaire indépendante à Rivière-Saas-et-Gourby, près de Dax. Accompagnement personnalisé pour collégiens, lycéens et étudiants des Landes et des Pyrénées-Atlantiques.",
                "url": "https://marinejunca.fr",
                "telephone": "+33640452328",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "300 impasse de Pudepe",
                    "addressLocality": "Rivière-Saas-et-Gourby",
                    "postalCode": "40180",
                    "addressRegion": "Nouvelle-Aquitaine",
                    "addressCountry": "FR"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": "43.7102", "longitude": "-1.0530" },
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
        } else {
            document.title = "Prendre RDV - Orientation Scolaire près de Dax | Marine Junca"
            setMeta("description", "Contactez Marine Junca, conseillère en orientation scolaire à Rivière-Saas-et-Gourby, près de Dax (40). Premier rendez-vous gratuit. Déplacement inclus dans un rayon de 45 km.")
            setMeta("og:title", "Prendre RDV - Orientation Scolaire près de Dax | Marine Junca", true)
            setMeta("og:description", "Prenez rendez-vous avec Marine Junca, conseillère en orientation scolaire à Rivière-Saas-et-Gourby. Premier RDV gratuit.", true)
            setMeta("og:url", "https://marinejunca.fr/contact", true)
            let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement
            if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical) }
            canonical.href = "https://marinejunca.fr/contact"
        }
    }, [page])

    return <div style={{ display: "none" }} aria-hidden="true" />
}
