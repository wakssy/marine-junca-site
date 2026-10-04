import { PageHero, PageBody, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"
import PricingCards from "../components/PricingCards"

const faq = [
    { q: "Combien coûte un conseiller d'orientation privé ?", a: "Les tarifs varient beaucoup selon les professionnels : certains facturent à la séance, d'autres proposent des forfaits de bilan pouvant atteindre plusieurs centaines d'euros. Ici, le premier rendez-vous est gratuit et chaque séance est à 50 €, sans forfait imposé." },
    { q: "Un conseiller d'orientation peut-il être gratuit ?", a: "Oui : les CIO (centres d'information et d'orientation) et les psychologues de l'Éducation nationale présents dans les collèges et lycées reçoivent les élèves et leurs familles gratuitement. C'est un service public précieux, complémentaire d'un accompagnement individuel en libéral." },
    { q: "Combien de séances faut-il prévoir ?", a: "En général 3 à 6 séances pour un accompagnement complet, soit 150 à 300 €. Un besoin plus ciblé peut demander moins de séances. On en parle dès le premier rendez-vous, et vous restez libre d'arrêter à tout moment." },
    { q: "Le déplacement est-il facturé ?", a: "Non, le déplacement à domicile est inclus dans le prix de la séance dans un rayon de 45 km autour de Rivière-Saas-et-Gourby (Dax, Saint-Paul-lès-Dax, Peyrehorade, Saint-Vincent-de-Tyrosse, Soustons, Tartas, Bayonne…). Au-delà, les séances se font en visio, au même tarif." },
    { q: "Comment se passe le premier rendez-vous gratuit ?", a: "C'est un échange pour faire connaissance, comprendre la situation de votre enfant et vous présenter ma façon de travailler. Vous repartez avec une idée claire de ce que l'accompagnement peut apporter, sans aucun engagement." },
]

export default function Tarifs() {
    return (
        <>
            <PageHero
                crumb="Tarifs"
                eyebrow="Des tarifs clairs, sans surprise"
                title={<>Tarifs de l'accompagnement <Mark>en orientation</Mark> scolaire</>}
                intro="Premier rendez-vous gratuit, puis 50 € la séance, déplacement inclus autour de Dax. Pas de forfait à payer d'avance : vous avancez au rythme de votre enfant."
                chips={["Premier RDV gratuit", "50 € la séance", "Sans forfait imposé"]}
            />

            <div className="page-rail" style={{ paddingTop: 30 }}>
                <PricingCards />
            </div>

            <PageBody>
                <h2>Combien de séances selon la situation ?</h2>
                <p>Chaque jeune est différent, mais voici des repères pour vous faire une idée du budget :</p>
                <div className="table-scroll">
                    <table className="compare">
                        <thead>
                            <tr><th scope="col">Situation</th><th scope="col">Accompagnement</th><th scope="col">Budget indicatif</th></tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">Premier échange</th><td>Faire connaissance et comprendre le besoin</td><td>Gratuit</td></tr>
                            <tr><th scope="row">Besoin ciblé</th><td>Une question précise : relire des vœux, comparer deux formations, préparer un rendez-vous au collège ou au lycée</td><td>50 € par séance</td></tr>
                            <tr><th scope="row"><a href="/bilan-orientation-scolaire">Bilan d'orientation</a> complet</th><td>Les 5 étapes, de la connaissance de soi au passage à l'action</td><td>En général 3 à 6 séances, soit 150 à 300 €</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Vous ne payez que les séances réalisées et vous restez libre d'arrêter à tout moment.</p>

                <h2>Conseiller d'orientation gratuit (CIO) ou privé : quelle différence ?</h2>
                <p>Les deux sont complémentaires. Voici ce qui les distingue, pour vous aider à choisir selon votre situation :</p>
                <div className="table-scroll">
                    <table className="compare">
                        <thead>
                            <tr><th scope="col"></th><th scope="col">CIO / psychologue de l'Éducation nationale</th><th scope="col">Conseillère d'orientation indépendante</th></tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">Prix</th><td>Gratuit</td><td>1er RDV gratuit, puis 50 € la séance</td></tr>
                            <tr><th scope="row">Lieu</th><td>Au CIO ou dans l'établissement scolaire</td><td>À domicile autour de Dax ou en visio</td></tr>
                            <tr><th scope="row">Horaires</th><td>Horaires du service</td><td>Du lundi au vendredi jusqu'à 19h, samedi matin</td></tr>
                            <tr><th scope="row">Suivi</th><td>Selon les disponibilités du service</td><td>Suivi individuel dans la durée, avec la même personne</td></tr>
                            <tr><th scope="row">Parents</th><td>Peuvent être reçus</td><td>Associés au premier rendez-vous et aux moments clés</td></tr>
                        </tbody>
                    </table>
                </div>

                <h2>Ce qui est compris dans chaque séance</h2>
                <ul>
                    <li>Une séance individuelle d'environ 1 heure.</li>
                    <li>Des outils et tests adaptés à l'âge et à la situation.</li>
                    <li>Le déplacement à domicile dans un rayon de 45 km, ou la visio.</li>
                    <li>Un travail concret sur les démarches en cours : vœux, dossiers, Parcoursup.</li>
                </ul>

                <h2>Ce qu'en disent les familles</h2>
                <Reviews />

                <h2>Questions fréquentes sur les tarifs</h2>
                <Faq items={faq} />
            </PageBody>

            <CtaBand title="Commencer par le rendez-vous gratuit" text="Sans engagement : on fait connaissance et vous décidez ensuite." />
            <Related exclude="/tarifs" />
        </>
    )
}
