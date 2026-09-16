import { PageHero, PageBody, ParcoursRail, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"

const faq = [
    { q: "Comment se réorienter via Parcoursup ?", a: "Un étudiant qui souhaite changer de formation à la rentrée suivante formule de nouveaux vœux sur Parcoursup, dans le même calendrier que les lycéens (inscription et vœux de janvier à mars en général). Il doit alors expliquer son parcours et les raisons de son changement dans ses projets de formation motivés." },
    { q: "Peut-on se réorienter en cours d'année ?", a: "Certaines universités et formations proposent des dispositifs de réorientation au second semestre. Les possibilités varient d'un établissement à l'autre : il faut se renseigner rapidement auprès du service d'orientation de son université." },
    { q: "Une année « ratée » va-t-elle pénaliser mon dossier ?", a: "Pas forcément. Une réorientation bien expliquée, qui montre que l'étudiant a tiré des enseignements de son expérience et construit un projet plus cohérent, est souvent bien comprise par les formations." },
    { q: "Et après un bac pro, peut-on changer de voie ?", a: "Oui. Après un bac professionnel, il est possible de poursuivre ses études, notamment en BTS, ou de se tourner vers une autre formation, y compris en alternance. On étudie ensemble les options réalistes selon le parcours." },
    { q: "Accompagnez-vous les étudiants qui étudient loin des Landes ?", a: "Oui, les séances peuvent se faire entièrement en visio. C'est souvent la solution la plus simple pour les étudiants partis à Bordeaux, Pau, Toulouse ou ailleurs." },
]

export default function Reorientation() {
    return (
        <>
            <PageHero
                crumb="Réorientation post-bac"
                eyebrow="Pour les étudiants et jeunes adultes"
                title={<>Se réorienter <Mark>après le bac</Mark> : faire le point et rebondir</>}
                intro="Une première année qui ne ressemble pas à ce qu'on imaginait, des doutes, une envie d'arrêter : ce n'est pas un échec. Je vous aide à comprendre ce qui ne va pas et à construire une nouvelle orientation qui tienne."
                chips={["Premier RDV gratuit", "50 € la séance", "En visio si vous étudiez loin"]}
            />

            <div className="page-rail">
                <div className="rail-card"><ParcoursRail current={["postbac"]} /></div>
            </div>

            <PageBody>
                <p className="lead">Beaucoup d'étudiants changent de voie après une première année. Le vrai risque n'est pas de se réorienter : c'est de repartir trop vite vers une formation choisie par défaut, et de se retrouver dans la même situation un an plus tard.</p>

                <h2>Doutes en première année : les signes à ne pas ignorer</h2>
                <ul>
                    <li>Une perte de motivation durable, des cours séchés, des résultats qui chutent.</li>
                    <li>Le sentiment de ne pas être à sa place, ou que la formation ne correspond pas à ce qui était annoncé.</li>
                    <li>Une formation choisie par défaut sur Parcoursup, sans vrai projet derrière.</li>
                    <li>Du stress, de l'isolement, l'envie de tout arrêter.</li>
                </ul>
                <p>Plus on en parle tôt, plus les options sont nombreuses, notamment pour préparer les vœux Parcoursup de janvier à mars.</p>

                <h2>Les chemins possibles</h2>
                <div className="cards-2">
                    <div className="info-card">
                        <span className="tag">Rentrée suivante</span>
                        <h3>Réorientation via Parcoursup</h3>
                        <p>Formuler de nouveaux vœux pour intégrer une autre formation l'année suivante, avec un projet motivé solide.</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">En cours d'année</span>
                        <h3>Dispositifs de réorientation</h3>
                        <p>Certains établissements proposent des passerelles ou un changement de parcours au second semestre.</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">Plus concret</span>
                        <h3>Alternance et BTS</h3>
                        <p>Se tourner vers une formation plus professionnalisante, en apprentissage ou en contrat de professionnalisation.</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">Après un bac pro</span>
                        <h3>Changer de domaine</h3>
                        <p>Poursuivre en BTS ou choisir une autre voie, en tenant compte des acquis de la formation professionnelle.</p>
                    </div>
                </div>

                <h2>Mon accompagnement pour les étudiants</h2>
                <ol className="timeline">
                    <li><span className="what">Comprendre ce qui n'a pas fonctionné</span>Le contenu de la formation, la méthode de travail, l'environnement, le projet de départ.</li>
                    <li><span className="what">Revenir à ce qui vous motive</span>Intérêts, valeurs, compétences et expériences, à l'aide d'outils adaptés.</li>
                    <li><span className="what">Explorer de nouvelles pistes</span>Formations, passerelles, alternance, métiers, avec un regard réaliste sur les conditions d'admission.</li>
                    <li><span className="what">Construire le dossier</span>Vœux Parcoursup, projets de formation motivés, argumentaire pour expliquer le changement de parcours.</li>
                </ol>
                <p>Les séances ont lieu à domicile autour de Dax ou en visio, ce qui permet d'avancer même si vous étudiez loin des Landes. Si vous êtes encore en terminale, voir plutôt l'<a href="/accompagnement-parcoursup">accompagnement Parcoursup</a>.</p>

                <h2>Ce qu'en disent les jeunes accompagnés</h2>
                <Reviews />

                <h2>Questions fréquentes sur la réorientation</h2>
                <Faq items={faq} />
            </PageBody>

            <CtaBand title="Faire le point sur votre orientation" text="Un premier échange gratuit, par téléphone ou en visio, pour voir comment rebondir." />
            <Related exclude="/reorientation-post-bac" />
        </>
    )
}
