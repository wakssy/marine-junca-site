import { PageHero, PageBody, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"
import PricingCards from "../components/PricingCards"

const faq = [
    { q: "Combien coûte un conseiller ou un coach d'orientation privé ?", a: "Les tarifs varient beaucoup selon les professionnels : certains facturent à la séance, d'autres proposent des forfaits de bilan pouvant atteindre plusieurs centaines d'euros. Ici, le premier rendez-vous est gratuit et chaque séance est à 50 €, sans forfait imposé." },
    { q: "Un conseiller d'orientation peut-il être gratuit ?", a: "Oui : les CIO (centres d'information et d'orientation) et les psychologues de l'Éducation nationale présents dans les collèges et lycées reçoivent les élèves et leurs familles gratuitement. C'est un service public précieux, complémentaire d'un accompagnement individuel en libéral." },
    { q: "Combien de séances faut-il prévoir ?", a: "En général 3 à 6 séances pour un accompagnement complet, soit 150 à 300 €. Un besoin plus ciblé peut demander moins de séances. On en parle dès le premier rendez-vous, et vous restez libre d'arrêter à tout moment." },
    { q: "Le déplacement est-il facturé ?", a: "Non, le déplacement à domicile est inclus dans le prix de la séance dans un rayon de 45 km autour de Rivière-Saas-et-Gourby (Dax, Saint-Paul-lès-Dax, Peyrehorade, Saint-Vincent-de-Tyrosse, Soustons, Tartas, Bayonne…). Au-delà, les séances se font en visio, au même tarif." },
    { q: "Quel est le prix d'une heure de soutien scolaire ?", a: "La séance de soutien scolaire dure 1 h 30 et coûte 60 €. Avec l'avance immédiate de crédit d'impôt, vous ne payez que 30 € la séance, soit 20 € de l'heure, frais de déplacement inclus." },
    { q: "Comment fonctionne l'avance immédiate de crédit d'impôt ?", a: "Pour le soutien scolaire, la séance de 1 h 30 est à 60 €. Grâce à l'avance immédiate de crédit d'impôt, 50 % du montant est directement déduit : vous ne payez que 30 € la séance, sans avancer la totalité ni attendre de remboursement." },
    { q: "Comment se passe le premier rendez-vous gratuit ?", a: "C'est un échange pour faire connaissance, comprendre la situation de votre enfant et vous présenter ma façon de travailler. Vous repartez avec une idée claire de ce que l'accompagnement peut apporter, sans aucun engagement." },
]

export default function Tarifs() {
    return (
        <>
            <PageHero
                crumb="Tarifs"
                eyebrow="Des tarifs clairs, sans surprise"
                title={<>Tarifs de l'orientation <Mark>et du soutien</Mark> scolaire</>}
                intro="Premier rendez-vous gratuit, puis 50 € la séance d'orientation et 30 € la séance de soutien scolaire grâce à l'avance immédiate de crédit d'impôt. Déplacement inclus autour de Dax, sans forfait à payer d'avance."
                chips={["Premier RDV gratuit", "Orientation : 50 € la séance", "Soutien scolaire : 30 € la séance"]}
            />

            <div className="page-rail" style={{ paddingTop: 30 }}>
                <h2 className="sr-only">Les tarifs en détail</h2>
                <PricingCards />
            </div>

            <PageBody>
                <h2>Soutien scolaire : 30 € la séance grâce à l'avance immédiate</h2>
                <p>La séance de soutien scolaire dure 1 h 30 et coûte 60 €. Avec l'<strong>avance immédiate de crédit d'impôt</strong>, 50 % du montant est directement déduit : vous ne payez que <strong>30 € la séance</strong>, sans avancer la totalité ni attendre de remboursement.</p>
                <ul>
                    <li><strong>Pour qui</strong> : du primaire au collège, jusqu'au niveau seconde au lycée.</li>
                    <li><strong>Au programme</strong> : aide aux devoirs, remise à niveau, méthodologie et organisation, préparation des contrôles et examens, confiance en soi et motivation.</li>
                    <li><strong>Où</strong> : à domicile, frais de déplacement inclus.</li>
                </ul>
                <p>Le détail du programme est sur la page <a href="/soutien-scolaire">soutien scolaire à domicile</a>.</p>

                <h2>Orientation : combien de séances selon la situation ?</h2>
                <p>Chaque jeune est différent, mais voici des repères pour vous faire une idée du budget :</p>
                <div className="table-scroll">
                    <table className="compare">
                        <thead>
                            <tr><th scope="col">Situation</th><th scope="col">Accompagnement</th><th scope="col">Budget indicatif</th></tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">Premier échange</th><td>Faire connaissance et comprendre le besoin</td><td>Gratuit</td></tr>
                            <tr><th scope="row">Besoin ciblé</th><td>Une question précise : relire des vœux, comparer deux formations, préparer un rendez-vous au collège ou au lycée</td><td>50 € par séance</td></tr>
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
