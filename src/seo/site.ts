// Données de référence de l'activité : une seule source pour le site, les balises SEO
// et les données structurées. Garder identique à la fiche Google Business Profile.

export const SITE_URL = "https://marine-junca-orientation.fr"

export const BUSINESS = {
    name: "Marine Junca Orientation",
    person: "Marine Junca",
    jobTitle: "Conseillère d'orientation scolaire",
    phoneDisplay: "06 40 45 23 28",
    phoneHref: "tel:+33640452328",
    phoneIntl: "+33640452328",
    email: "marine.junca@gmail.com",
    street: "300 impasse de Poudepe",
    city: "Rivière-Saas-et-Gourby",
    postalCode: "40180",
    lat: 43.699528,
    lng: -1.188472,
    radiusKm: 45,
    sessionPrice: 50,
    // Soutien scolaire : séance de 1 h 30 à 60 €, dont 50 % déduits tout de suite grâce à l'avance immédiate de crédit d'impôt
    tutoringPrice: 30,
    tutoringFullPrice: 60,
    // Lien de recherche Google Maps vers la fiche (la page de la fiche elle-même n'a pas d'URL stable publique)
    googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Marine%20Junca%20orientation%20Rivi%C3%A8re-Saas-et-Gourby",
    linkedin: "https://fr.linkedin.com/in/marine-junca-b53580147",
    facebook: "https://fr-fr.facebook.com/marine.junca",
    instagram: "https://www.instagram.com/marinejunca/",
}

// Communes à moins de ~35 km à vol d'oiseau de Rivière-Saas-et-Gourby, donc bien dans le rayon de 45 km annoncé
export const ZONE_COMMUNES = [
    "Dax", "Saint-Paul-lès-Dax", "Narrosse", "Oeyreluy", "Tercis-les-Bains", "Saubusse", "Pouillon",
    "Peyrehorade", "Magescq", "Castets", "Pontonx-sur-l'Adour", "Montfort-en-Chalosse", "Tartas",
    "Saint-Vincent-de-Tyrosse", "Soustons", "Seignosse", "Soorts-Hossegor", "Capbreton", "Labenne", "Bayonne",
]

// Avis Google réels (extraits tels que publiés)
export const REVIEWS = [
    {
        author: "Elisa Cabanne",
        initial: "E",
        color: "#7B57C9",
        date: "septembre 2026",
        text: "Marine est une professionnelle formidable, dotée d'une grande écoute et d'une bienveillance rare. Grâce à son solide parcours, elle trouve immédiatement les mots justes pour guider les jeunes et les aider à révéler leur potentiel.",
        excerpt: true,
    },
    {
        author: "Laurine Sentucq",
        initial: "L",
        color: "#6C8A9B",
        date: "septembre 2026",
        text: "Marine est une personne extrêmement bienveillante et à l'écoute des jeunes qu'elle conseille. Riche d'expérience, elle sait s'adresser à eux et les orienter pour le mieux ! Je recommande fortement ces services tant en matière d'orientation que de coaching personnel !",
        excerpt: false,
    },
    {
        author: "Thelma Lebigre",
        initial: "T",
        color: "#6D4C41",
        date: "septembre 2026",
        text: "Une conseillère très à l'écoute, gentille et de très bons conseils. Elle a su m'aider et me rassurer dans mes choix d'orientation. Je la recommande vivement !",
        excerpt: true,
    },
]

export const RATING = { value: "5,0", label: "sur Google" }
