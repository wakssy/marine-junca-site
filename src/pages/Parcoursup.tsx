import { PageHero, PageBody, ParcoursRail, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"

const faq = [
    { q: "Combien coûte un coach Parcoursup ?", a: <>Les prix varient beaucoup : certains forfaits en ligne dépassent plusieurs centaines d'euros. Ici, le premier rendez-vous est gratuit, puis chaque séance est à 50 €, sans forfait imposé. Selon le besoin, cela peut aller d'une relecture ciblée des vœux à un accompagnement complet. Voir les <a href="/tarifs">tarifs</a>.</> },
    { q: "Quand faut-il commencer à préparer Parcoursup ?", a: "Idéalement dès le premier trimestre de terminale, avant l'ouverture des vœux en janvier : c'est le moment d'explorer les formations et de visiter les salons et portes ouvertes. Mais il n'est jamais trop tard : on peut aussi travailler les projets de formation motivés en février-mars ou se préparer à la phase complémentaire." },
    { q: "Pouvez-vous rédiger les lettres de motivation à la place de mon enfant ?", a: "Non, et c'est dans son intérêt : les projets de formation motivés doivent refléter son parcours et sa façon de s'exprimer. Je l'aide à trouver quoi dire, à structurer ses idées et à relire ses textes pour qu'ils soient clairs et convaincants." },
    { q: "Mon enfant n'a eu aucune proposition : que faire ?", a: "Pas de panique. La phase complémentaire permet de formuler de nouveaux vœux dans les formations qui ont encore des places, et la commission d'accès à l'enseignement supérieur (CAES) de l'académie peut aider. On peut faire le point ensemble pour cibler rapidement des formations cohérentes." },
]

export default function Parcoursup() {
    return (
        <>
            <PageHero
                crumb="Accompagnement Parcoursup"
                eyebrow="Pour les élèves de terminale et leurs parents"
                title={<>Accompagnement Parcoursup <Mark>à Dax</Mark> : des vœux choisis, pas subis</>}
                intro="Choisir ses formations, construire sa liste de vœux, rédiger ses projets de formation motivés, gérer les réponses : je guide votre enfant à chaque étape de Parcoursup, pour qu'il avance sereinement."
                chips={["Premier RDV gratuit", "50 € la séance", "Terminale et réorientation"]}
            />

            <div className="page-rail">
                <div className="rail-card"><ParcoursRail current={["terminale"]} /></div>
            </div>

            <PageBody>
                <p className="lead">Parcoursup fait peur à beaucoup de familles : trop de formations, des délais serrés, des textes à rédiger et une longue attente des réponses. Bien préparé, c'est surtout l'occasion pour votre enfant de faire des choix qui ont du sens.</p>

                <h2>Le calendrier Parcoursup, étape par étape</h2>
                <p>Les dates exactes sont publiées chaque année sur le site officiel parcoursup.gouv.fr. Le déroulé reste en général le suivant :</p>
                <ol className="timeline">
                    <li><span className="when">Septembre → décembre</span><span className="what">S'informer et explorer</span>Salons, portes ouvertes, fiches formations : c'est le moment d'élargir les pistes avant de choisir.</li>
                    <li><span className="when">Mi-décembre</span><span className="what">Ouverture du site d'information</span>Le catalogue des formations de l'année est consultable.</li>
                    <li><span className="when">Mi-janvier → mi-mars</span><span className="what">Inscription et formulation des vœux</span>Création du dossier et saisie des vœux sur la plateforme.</li>
                    <li><span className="when">Jusqu'à début avril</span><span className="what">Finalisation du dossier et confirmation des vœux</span>Projets de formation motivés, rubrique « activités et centres d'intérêt », pièces justificatives.</li>
                    <li><span className="when">Début juin → juillet</span><span className="what">Réponses des formations</span>Accepter ou refuser les propositions dans les délais, suivre les listes d'attente.</li>
                    <li><span className="when">À partir de mi-juin</span><span className="what">Phase complémentaire</span>Nouveaux vœux possibles dans les formations qui ont encore des places.</li>
                </ol>

                <h2>Mon accompagnement Parcoursup</h2>
                <h3>Explorer les formations et construire la liste de vœux</h3>
                <p>BTS, BUT, licence, classe prépa, école, apprentissage : on part du profil de votre enfant pour repérer les formations qui lui correspondent vraiment, en tenant compte de ses résultats, de ses envies et des contraintes de la famille (distance, budget, logement). Objectif : une liste de vœux <strong>équilibrée</strong>, avec des formations ambitieuses et des choix plus sûrs.</p>

                <h3>Rédiger les projets de formation motivés</h3>
                <p>Chaque formation demande un court texte de motivation. Je n'écris pas à la place de votre enfant : je l'aide à trouver ses arguments, à relier son parcours à la formation visée et à relire ses textes pour qu'ils soient personnels, précis et sans maladresses.</p>

                <h3>Valoriser la rubrique « activités et centres d'intérêt »</h3>
                <p>Engagement associatif, sport, job d'été, projet personnel : ces éléments comptent. On identifie ensemble ce qui mérite d'y figurer et comment le présenter.</p>

                <h3>Gérer les réponses et la phase complémentaire</h3>
                <p>Quand les réponses arrivent, il faut parfois décider vite. Je vous aide à comparer les propositions, à comprendre les listes d'attente et, si besoin, à rebondir en phase complémentaire.</p>

                <div className="note">
                    <span className="note-label">Bon à savoir</span>
                    Le travail sur Parcoursup est beaucoup plus simple quand le projet est déjà clair. Si votre enfant ne sait pas encore quelles études viser, on commence par un <a href="/bilan-orientation-scolaire">bilan d'orientation</a>. Et s'il est déjà étudiant, voir la <a href="/reorientation-post-bac">réorientation via Parcoursup</a>.
                </div>

                <h2>Pourquoi se faire accompagner pour Parcoursup ?</h2>
                <ul>
                    <li><strong>Du temps rien que pour lui</strong> : au lycée, les équipes ont de nombreux élèves à suivre en même temps.</li>
                    <li><strong>Un regard neutre</strong> qui apaise les discussions à la maison.</li>
                    <li><strong>Des vœux réfléchis</strong> plutôt que des choix faits dans l'urgence la veille de la date limite.</li>
                    <li><strong>Des textes plus convaincants</strong>, parce qu'ils s'appuient sur un vrai projet.</li>
                </ul>

                <h2>Combien coûte un coach Parcoursup ?</h2>
                <p>Le premier rendez-vous est gratuit. Ensuite, la séance est à <strong>50 €</strong>, à domicile autour de Dax ou en visio. Vous choisissez le nombre de séances selon le besoin de votre enfant. Tous les détails sont sur la page <a href="/tarifs">tarifs</a>.</p>

                <h2>Ce qu'en disent les jeunes et les familles</h2>
                <Reviews />

                <h2>Questions fréquentes sur Parcoursup</h2>
                <Faq items={faq} />
            </PageBody>

            <CtaBand title="Préparer Parcoursup sans stress" text="Réservez un premier échange gratuit : on fait le point sur le projet de votre enfant et sur le calendrier." />
            <Related exclude="/accompagnement-parcoursup" />
        </>
    )
}
