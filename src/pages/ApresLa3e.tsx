import { PageHero, PageBody, ParcoursRail, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"

const faq = [
    { q: "Mon fils ne sait pas quoi faire après la 3e : est-ce grave ?", a: "Non, c'est très fréquent à 14 ou 15 ans. L'important n'est pas d'avoir choisi un métier, mais de choisir une voie qui lui laisse des portes ouvertes et dans laquelle il a des chances de s'épanouir. C'est exactement ce que l'on travaille ensemble." },
    { q: "Que faire après la 3e quand on n'aime pas l'école ?", a: "Ne pas aimer l'école ne veut pas dire ne pas aimer apprendre. Beaucoup de jeunes retrouvent de la motivation dans une voie plus concrète : bac professionnel, CAP ou apprentissage. On explore ensemble les métiers et les formations qui peuvent lui redonner envie." },
    { q: "La voie professionnelle ferme-t-elle les portes des études ?", a: "Non. Après un bac professionnel, il est possible de poursuivre ses études, par exemple en BTS. Choisir la voie professionnelle doit être un choix positif, en lien avec les goûts et le profil de l'élève, et non un choix par défaut." },
    { q: "Que se passe-t-il si nous ne sommes pas d'accord avec la décision du conseil de classe ?", a: "Si la proposition du conseil de classe ne correspond pas à votre demande, un entretien avec le chef d'établissement est prévu, et un recours devant la commission d'appel reste possible. Un projet argumenté et préparé en amont aide beaucoup dans ces échanges." },
    { q: "Vous aidez aussi à préparer le brevet ?", a: <>Oui. En parallèle de l'orientation, j'accompagne les collégiens sur la méthode de révision, les fiches, la gestion du stress et l'oral du brevet. Voir le <a href="/#coach-scolaire">coaching scolaire pour le brevet</a>.</> },
]

export default function ApresLa3e() {
    return (
        <>
            <PageHero
                crumb="Orientation après la 3e"
                eyebrow="Pour les collégiens de 4e et 3e et leurs parents"
                title={<>Mon enfant ne sait pas quoi faire <Mark>après la 3e</Mark> : comment l'aider ?</>}
                intro="Seconde générale, bac pro, CAP, apprentissage : la fin du collège est le premier grand choix d'orientation. Je vous aide, votre enfant et vous, à le faire sereinement, près de Dax ou en visio."
                chips={["Premier RDV gratuit", "50 € la séance", "Aide aussi pour le brevet"]}
            />

            <div className="page-rail">
                <div className="rail-card"><ParcoursRail current={["3e"]} /></div>
            </div>

            <PageBody>
                <p className="lead">À 14 ans, peu d'adolescents savent quel métier ils veulent faire. Ce n'est pas un problème : le choix de fin de 3e porte sur une voie, pas sur une carrière. Encore faut-il comprendre les options et savoir ce qui convient à votre enfant.</p>

                <h2>Les voies possibles après la 3e</h2>
                <div className="cards-3">
                    <div className="info-card">
                        <span className="tag">3 ans</span>
                        <h3>Seconde générale et technologique</h3>
                        <p>Une année de découverte avant de choisir, en fin de seconde, entre le bac général (avec ses spécialités) et un bac technologique (STMG, ST2S, STI2D…).</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">3 ans</span>
                        <h3>Seconde professionnelle</h3>
                        <p>Elle prépare un bac professionnel en lien direct avec un domaine de métiers, avec des périodes de formation en entreprise.</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">2 ans</span>
                        <h3>CAP</h3>
                        <p>Un diplôme pour apprendre un métier précis, en lycée professionnel ou en apprentissage.</p>
                    </div>
                </div>
                <p>L'<strong>apprentissage</strong> est aussi possible dès la sortie du collège, pour préparer un CAP ou un bac pro en alternant centre de formation et entreprise. Il demande de trouver un employeur, ce qui se prépare à l'avance.</p>

                <h2>Le calendrier de l'orientation en 3e</h2>
                <p>Chaque collège précise ses dates, mais le déroulé est en général le suivant :</p>
                <ol className="timeline">
                    <li><span className="when">1er trimestre</span><span className="what">Découvrir et s'informer</span>Rencontres avec le professeur principal, forums, portes ouvertes des lycées et CFA, stage d'observation.</li>
                    <li><span className="when">2e trimestre</span><span className="what">Intentions provisoires</span>La famille indique ses premières intentions, le conseil de classe donne un avis.</li>
                    <li><span className="when">3e trimestre</span><span className="what">Choix définitifs et vœux d'affectation</span>La famille formule ses choix d'orientation et ses vœux de lycées, puis le conseil de classe fait sa proposition.</li>
                    <li><span className="when">Fin juin → juillet</span><span className="what">Résultats d'affectation et inscription</span>Les résultats sont communiqués, il faut ensuite s'inscrire dans le lycée d'affectation.</li>
                </ol>

                <h2>Comment je vous accompagne en 3e</h2>
                <ul>
                    <li><strong>Faire le point</strong> sur ce que votre enfant aime, ses résultats, sa motivation et ses inquiétudes.</li>
                    <li><strong>Découvrir les métiers et les formations</strong> qui correspondent à son profil, y compris dans la voie professionnelle.</li>
                    <li><strong>Préparer les échanges avec le collège</strong> : intentions, vœux, argumentaire si la proposition du conseil de classe ne vous convient pas.</li>
                    <li><strong>Choisir les lycées ou CFA</strong> et préparer les visites des portes ouvertes.</li>
                </ul>
                <p>Si la situation est plus large, par exemple un manque de confiance ou un décrochage, un <a href="/bilan-orientation-scolaire">bilan d'orientation</a> complet permet de prendre le temps nécessaire.</p>

                <h2>« Il n'aime pas l'école » : que faire ?</h2>
                <p>C'est l'une des phrases que j'entends le plus souvent. Derrière, il y a rarement de la paresse : plutôt un manque de sens, des difficultés dans certaines matières ou une fatigue face au format scolaire. Comprendre ce qui bloque permet de choisir une voie où votre enfant pourra reprendre confiance, qu'elle soit générale, technologique ou professionnelle.</p>

                <h2>Et après ? Préparer la suite dès la seconde</h2>
                <p>Le choix de fin de 3e n'est qu'une étape. En seconde générale, il faudra choisir ses spécialités, puis préparer Parcoursup en terminale. Voir <a href="/orientation-lycee-specialites">l'orientation au lycée et le choix des spécialités</a>.</p>

                <h2>Ce qu'en disent les familles</h2>
                <Reviews />

                <h2>Questions fréquentes sur l'orientation en 3e</h2>
                <Faq items={faq} />
            </PageBody>

            <CtaBand title="Préparer l'après-3e ensemble" text="Un premier échange gratuit pour comprendre la situation de votre enfant et voir comment l'aider avant les choix du collège." />
            <Related exclude="/orientation-apres-la-3e" />
        </>
    )
}
