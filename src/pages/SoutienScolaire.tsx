import { PageHero, PageBody, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"
import { AvanceImmediate } from "../components/PricingCards"
import { BUSINESS } from "../seo/site"

// Contenu repris du flyer de Marine (soutien scolaire) ; les questions suivent celles que posent réellement les parents sur Google
const faq = [
    { q: "Combien coûte une séance de soutien scolaire ?", a: `La séance de soutien scolaire dure 1 h 30 et coûte ${BUSINESS.tutoringFullPrice} €. Grâce à l'avance immédiate de crédit d'impôt, vous ne payez que ${BUSINESS.tutoringPrice} € la séance, soit 20 € de l'heure. Les frais de déplacement sont inclus.` },
    { q: "Comment fonctionne l'avance immédiate de crédit d'impôt ?", a: "50 % du montant de la séance est directement déduit au moment du paiement : vous n'avancez pas la totalité et vous n'attendez pas de remboursement." },
    { q: "Pour quels niveaux proposez-vous du soutien scolaire ?", a: "Du primaire au collège, et jusqu'au niveau seconde au lycée." },
    { q: "Où ont lieu les séances ?", a: "À domicile, dans un rayon de 45 km autour de Rivière-Saas-et-Gourby : Dax, Saint-Paul-lès-Dax, Peyrehorade, Saint-Vincent-de-Tyrosse, Soustons, Tartas et les communes voisines. Les frais de déplacement sont inclus dans le prix de la séance." },
    { q: "Proposez-vous aussi la préparation du brevet ?", a: <>Oui : méthode de révision, fiches, gestion du temps et du stress, entraînement à l'oral. Le détail est dans la partie <a href="/#coach-scolaire">coaching brevet</a>.</> },
]

export default function SoutienScolaire() {
    return (
        <>
            <PageHero
                crumb="Soutien scolaire"
                eyebrow="Du primaire au lycée"
                title={<>Soutien scolaire <Mark>à domicile</Mark> autour de Dax</>}
                intro={`Un accompagnement adapté au rythme et aux besoins de chaque jeune, pour consolider les bases, gagner en méthode et en autonomie. ${BUSINESS.tutoringPrice} € la séance de 1 h 30 grâce à l'avance immédiate de crédit d'impôt.`}
                chips={[`${BUSINESS.tutoringPrice} € la séance de 1 h 30`, "−50 % avec l'avance immédiate", "Frais de déplacement inclus"]}
                cta="Réserver une séance"
            />

            <PageBody
                booking={{
                    eyebrow: "Soutien scolaire",
                    title: "La séance à moitié prix grâce à l'avance immédiate",
                    text: `La séance de 1 h 30 est à ${BUSINESS.tutoringFullPrice} € : 50 % sont déduits directement grâce à l'avance immédiate de crédit d'impôt.`,
                    price: BUSINESS.tutoringPrice,
                    priceLabel: `la séance de 1 h 30, au lieu de ${BUSINESS.tutoringFullPrice} €`,
                    cta: "Réserver une séance",
                }}
            >
                <p className="lead">Progresser en confiance : c'est l'objectif du soutien scolaire. On reprend ce qui bloque, on installe une méthode de travail et on avance au rythme de votre enfant, chez vous, autour de Dax.</p>

                <h2>Pour qui ?</h2>
                <div className="cards-3">
                    <div className="info-card">
                        <span className="tag">Primaire</span>
                        <h3>Les écoliers</h3>
                        <p>Consolider les bases et prendre de bonnes habitudes de travail.</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">6e · 5e · 4e · 3e</span>
                        <h3>Les collégiens</h3>
                        <p>Aide aux devoirs, méthode, préparation des contrôles, jusqu'au <a href="/#coach-scolaire">brevet</a>.</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">Seconde</span>
                        <h3>Les lycéens</h3>
                        <p>Soutien jusqu'au niveau seconde : organisation, remise à niveau, méthodologie.</p>
                    </div>
                </div>

                <h2>Ce que nous travaillons ensemble</h2>
                <ul>
                    <li><strong>Aide aux devoirs</strong> : avancer sur le travail donné en classe, avec quelqu'un pour expliquer.</li>
                    <li><strong>Remise à niveau</strong> : reprendre les notions mal comprises pour repartir sur des bases solides.</li>
                    <li><strong>Méthodologie et organisation</strong> : apprendre à apprendre, planifier son travail, gagner en autonomie.</li>
                    <li><strong>Préparation des contrôles et examens</strong> : réviser efficacement avant une évaluation.</li>
                    <li><strong>Soutien dans différentes matières</strong>, du primaire au niveau seconde.</li>
                    <li><strong>Confiance en soi et motivation</strong> : retrouver l'envie de travailler et croire en ses capacités.</li>
                </ul>

                <h2>Combien coûte une heure de soutien scolaire ?</h2>
                <p>La séance dure <strong>1 h 30</strong> et coûte {BUSINESS.tutoringFullPrice} €. Avec l'avance immédiate de crédit d'impôt, vous ne payez que <strong>{BUSINESS.tutoringPrice} € la séance</strong>, soit 20 € de l'heure, frais de déplacement inclus. Tous les tarifs sont sur la page <a href="/tarifs">tarifs</a>.</p>

                <h2>Quelle aide financière pour le soutien scolaire ?</h2>
                <p>Le soutien scolaire à domicile ouvre droit à l'<strong>avance immédiate de crédit d'impôt</strong> : 50 % du montant est déduit tout de suite, au lieu d'être remboursé l'année suivante.</p>
                <AvanceImmediate />

                <h2>À domicile autour de Dax</h2>
                <p>Je me déplace chez vous dans un rayon de 45 km autour de Rivière-Saas-et-Gourby : Dax, Saint-Paul-lès-Dax, Saubusse, Peyrehorade, Saint-Vincent-de-Tyrosse, Soustons, Tartas et les communes voisines. Le déplacement est inclus dans le prix de la séance.</p>

                <h2>Et pour l'orientation ?</h2>
                <p>Je suis aussi conseillère d'orientation scolaire. Quand viennent les grands choix, je peux accompagner votre enfant pour un <a href="/bilan-orientation-scolaire">bilan d'orientation</a>, l'<a href="/orientation-apres-la-3e">orientation après la 3e</a>, le <a href="/orientation-lycee-specialites">choix des spécialités</a> ou <a href="/accompagnement-parcoursup">Parcoursup</a>.</p>

                <h2>Ce qu'en disent les familles</h2>
                <Reviews />

                <h2>Questions fréquentes sur le soutien scolaire</h2>
                <Faq items={faq} />
            </PageBody>

            <CtaBand
                eyebrow="Soutien scolaire à domicile"
                title="Parlons des besoins de votre enfant"
                text="Par téléphone ou via le formulaire : on fait le point sur sa situation et on organise les séances."
                cta="Prendre rendez-vous"
            />
            <Related exclude="/soutien-scolaire" />
        </>
    )
}
