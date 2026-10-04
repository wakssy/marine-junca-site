import { SITE_URL, BUSINESS, ZONE_COMMUNES } from "./site"
import { HOME_FAQ } from "../content/homeFaq"

export type RouteMeta = {
    path: string
    title: string
    description: string
    ogImage?: string
    noindex?: boolean
    breadcrumb?: string // libellé du fil d'Ariane (absent = accueil)
    service?: string // nom du service pour le schema Service
    jsonLd?: object[]
}

const BUSINESS_ID = `${SITE_URL}/#entreprise`
const PERSON_ID = `${SITE_URL}/#marine-junca`

export const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    description: "Conseillère d'orientation scolaire indépendante près de Dax : bilan d'orientation, orientation après la 3e, choix des spécialités, accompagnement Parcoursup et réorientation. À domicile dans un rayon de 45 km ou en visio.",
    url: SITE_URL,
    image: `${SITE_URL}/images/headshot.png`,
    logo: `${SITE_URL}/favicon-512.png`,
    telephone: BUSINESS.phoneIntl,
    email: BUSINESS.email,
    address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        postalCode: BUSINESS.postalCode,
        addressRegion: "Landes",
        addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    areaServed: [
        { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng }, geoRadius: BUSINESS.radiusKm * 1000 },
        ...ZONE_COMMUNES.map(name => ({ "@type": "City", name })),
    ],
    openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" },
    ],
    priceRange: "0 € - 50 €",
    founder: { "@id": PERSON_ID },
    sameAs: [BUSINESS.instagram, BUSINESS.facebook, BUSINESS.linkedin],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accompagnements en orientation scolaire",
        itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premier rendez-vous d'orientation" }, price: "0", priceCurrency: "EUR" },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Séance d'accompagnement en orientation scolaire" }, price: String(BUSINESS.sessionPrice), priceCurrency: "EUR" },
        ],
    },
}

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: BUSINESS.person,
    jobTitle: BUSINESS.jobTitle,
    image: `${SITE_URL}/images/headshot.png`,
    worksFor: { "@id": BUSINESS_ID },
    sameAs: [BUSINESS.linkedin, BUSINESS.instagram, BUSINESS.facebook],
}

const serviceSchema = (path: string, name: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: "Orientation scolaire",
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "AdministrativeArea", name: "Landes (40)" },
    offers: { "@type": "Offer", price: String(BUSINESS.sessionPrice), priceCurrency: "EUR", description: "Par séance, premier rendez-vous gratuit" },
})

export const routes: RouteMeta[] = [
    {
        path: "/",
        title: "Conseillère d'orientation scolaire à Dax (40) | Marine Junca",
        description: "Conseillère d'orientation scolaire près de Dax : bilan, choix après la 3e, spécialités, Parcoursup. 50 € la séance, 1er RDV gratuit. Landes et visio.",
        ogImage: "/images/hero-photo.png",
        jsonLd: [
            businessSchema,
            personSchema,
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: HOME_FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
        ],
    },
    {
        path: "/bilan-orientation-scolaire",
        title: "Bilan d'orientation scolaire à Dax et dans les Landes",
        description: "Bilan d'orientation pour collégiens, lycéens et étudiants près de Dax : intérêts, forces, pistes de formations et de métiers. À domicile ou en visio. 1er RDV gratuit.",
        breadcrumb: "Bilan d'orientation scolaire",
        service: "Bilan d'orientation scolaire",
    },
    {
        path: "/accompagnement-parcoursup",
        title: "Accompagnement Parcoursup à Dax (40) | Marine Junca",
        description: "Coach Parcoursup près de Dax : choix des formations, liste de vœux, projets de formation motivés, réponses et phase complémentaire. 50 € la séance, 1er RDV gratuit.",
        breadcrumb: "Accompagnement Parcoursup",
        service: "Accompagnement Parcoursup",
    },
    {
        path: "/orientation-apres-la-3e",
        title: "Orientation après la 3e : aider son enfant à choisir | Dax",
        description: "Votre enfant ne sait pas quoi faire après la 3e ? Seconde générale, bac pro, CAP, apprentissage : une conseillère d'orientation près de Dax pour choisir sereinement.",
        breadcrumb: "Orientation après la 3e",
        service: "Orientation après la 3e",
    },
    {
        path: "/orientation-lycee-specialites",
        title: "Choix des spécialités au lycée : se faire accompagner | Dax",
        description: "Quelles spécialités choisir en première ? Méthode, erreurs fréquentes, lien avec Parcoursup. Accompagnement personnalisé des lycéens près de Dax, 1er RDV gratuit.",
        breadcrumb: "Orientation au lycée et spécialités",
        service: "Orientation au lycée et choix des spécialités",
    },
    {
        path: "/reorientation-post-bac",
        title: "Réorientation après le bac : se faire accompagner | Dax",
        description: "Première année qui ne convient pas ? Réorientation via Parcoursup, passerelles, alternance : une conseillère d'orientation près de Dax pour rebondir. 1er RDV gratuit.",
        breadcrumb: "Réorientation post-bac",
        service: "Réorientation post-bac",
    },
    {
        path: "/tarifs",
        title: "Tarifs d'un conseiller d'orientation privé près de Dax",
        description: "Combien coûte un conseiller d'orientation privé ? Séance à 50 €, premier rendez-vous gratuit, déplacement inclus à 45 km autour de Rivière-Saas-et-Gourby. Sans forfait imposé.",
        breadcrumb: "Tarifs",
    },
    {
        path: "/qui-suis-je",
        title: "Marine Junca, conseillère d'orientation scolaire (Landes)",
        description: "Qui est Marine Junca ? Conseillère d'orientation scolaire indépendante près de Dax, plus de 15 ans d'expérience : son approche, ses valeurs et l'avis des familles.",
        ogImage: "/images/headshot.png",
        breadcrumb: "Qui suis-je",
        jsonLd: [{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: personSchema }],
    },
    {
        path: "/contact",
        title: "Prendre RDV avec une conseillère d'orientation près de Dax",
        description: "Premier rendez-vous gratuit avec Marine Junca, conseillère d'orientation scolaire près de Dax. Par téléphone au 06 40 45 23 28 ou via le formulaire.",
        ogImage: "/images/headshot.png",
        breadcrumb: "Contact",
    },
    {
        path: "/merci",
        title: "Demande envoyée | Marine Junca",
        description: "Votre demande de rendez-vous a bien été envoyée.",
        noindex: true,
    },
]

export const NOT_FOUND: RouteMeta = {
    path: "/404",
    title: "Page introuvable | Marine Junca",
    description: "Cette page n'existe pas ou a été déplacée.",
    noindex: true,
}

export function getRoute(path: string): RouteMeta {
    const clean = path !== "/" ? path.replace(/\/+$/, "") : path
    return routes.find(r => r.path === clean) ?? NOT_FOUND
}

export function jsonLdFor(route: RouteMeta): object[] {
    const list = [...(route.jsonLd ?? [])]
    if (route.service) list.push(serviceSchema(route.path, route.service, route.description))
    if (route.breadcrumb && !route.noindex) {
        list.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: route.breadcrumb, item: `${SITE_URL}${route.path}` },
            ],
        })
    }
    return list
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// Balises <head> propres à une page : injectées au build dans le HTML pré-rendu
export function buildHead(route: RouteMeta): string {
    const url = `${SITE_URL}${route.path === "/" ? "" : route.path}`
    const image = `${SITE_URL}${route.ogImage ?? "/images/hero-photo.png"}`
    const tags = [
        `<title>${esc(route.title)}</title>`,
        `<meta name="description" content="${esc(route.description)}" />`,
        `<meta name="robots" content="${route.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
        route.noindex ? "" : `<link rel="canonical" href="${url}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="fr_FR" />`,
        `<meta property="og:site_name" content="${esc(BUSINESS.name)}" />`,
        `<meta property="og:title" content="${esc(route.title)}" />`,
        `<meta property="og:description" content="${esc(route.description)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        ...jsonLdFor(route).map(d => `<script type="application/ld+json" data-seo>${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`),
    ]
    return tags.filter(Boolean).join("\n    ")
}
