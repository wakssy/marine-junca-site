import { PageHero, PageBody, ParcoursRail, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"

const faq = [
    { q: "Combien coûte un bilan d'orientation scolaire ?", a: <>Le premier rendez-vous est gratuit. Chaque séance est ensuite à 50 €, déplacement inclus dans un rayon de 45 km. Un bilan complet se déroule en général sur 3 à 6 séances, soit 150 à 300 € au total, sans forfait imposé. Le détail est sur la page <a href="/tarifs">tarifs</a>.</> },
    { q: "À partir de quelle classe peut-on faire un bilan d'orientation ?", a: "Dès la 4e ou la 3e, quand les premiers choix arrivent. Le bilan est aussi très utile en seconde avant le choix des spécialités, en terminale avant Parcoursup, et pour les étudiants qui doutent de leur formation." },
    { q: "Les parents participent-ils aux séances ?", a: "Les parents sont associés au premier rendez-vous et aux moments clés, en particulier au moment des choix. Le reste du travail se fait en tête-à-tête avec le jeune, pour qu'il puisse s'exprimer librement." },
    { q: "Le bilan peut-il se faire en visio ?", a: "Oui. Les séances peuvent avoir lieu à domicile autour de Dax ou en visioconférence, ce qui permet aussi d'accompagner les familles plus éloignées." },
    { q: "Mon enfant n'a aucune idée de ce qu'il veut faire : est-ce trop tôt ?", a: "Non, c'est justement le bon moment. Le bilan ne part pas d'un projet déjà formé : il part de ce que votre enfant aime, de ce qui l'intéresse et de ce qui lui réussit, pour faire émerger des pistes concrètes." },
]

export default function Bilan() {
    return (
        <>
            <PageHero
                crumb="Bilan d'orientation scolaire"
                eyebrow="Pour les collégiens, lycéens et étudiants"
                title={<>Bilan d'orientation scolaire <Mark>à Dax</Mark> : un projet clair pour votre ado</>}
                intro="Votre enfant ne sait pas quoi faire plus tard, hésite entre plusieurs voies ou doute de ses choix ? Le bilan d'orientation l'aide à mieux se connaître et à construire un projet d'études qui lui ressemble."
            />

            <div className="page-rail">
                <div className="rail-card"><ParcoursRail current={["3e", "seconde", "premiere", "terminale", "postbac"]} /></div>
            </div>

            <PageBody>
                <p className="lead">Un bilan d'orientation scolaire, ce n'est pas un test qui donne « le bon métier » en une heure. C'est un travail en plusieurs séances pour que votre enfant comprenne ce qui compte pour lui, découvre les formations possibles et fasse un choix qu'il peut expliquer et défendre.</p>

                <h2>À qui s'adresse le bilan d'orientation ?</h2>
                <div className="cards-3">
                    <div className="info-card">
                        <span className="tag">4e · 3e</span>
                        <h3>Collégiens</h3>
                        <p>Choisir entre seconde générale et technologique, bac pro, CAP ou apprentissage. <a href="/orientation-apres-la-3e">Orientation après la 3e</a></p>
                    </div>
                    <div className="info-card">
                        <span className="tag">2de · 1re · Tle</span>
                        <h3>Lycéens</h3>
                        <p>Choisir ses spécialités, préparer ses vœux et aborder Parcoursup avec un projet solide. <a href="/orientation-lycee-specialites">Spécialités au lycée</a></p>
                    </div>
                    <div className="info-card">
                        <span className="tag">Bac +</span>
                        <h3>Étudiants</h3>
                        <p>Faire le point après une première année difficile et envisager une réorientation. <a href="/reorientation-post-bac">Réorientation post-bac</a></p>
                    </div>
                </div>

                <h2>Comment se déroule le bilan ?</h2>
                <p>Chaque séance dure environ une heure. Le rythme s'adapte à votre enfant et au calendrier scolaire. Les étapes suivent toujours la même logique :</p>
                <ol className="timeline">
                    <li><span className="what">Faire le point sur la situation</span>Comprendre les difficultés, les hésitations et les attentes du jeune comme des parents.</li>
                    <li><span className="what">Identifier ses forces</span>Centres d'intérêt, personnalité, compétences, matières et activités où il se sent à l'aise, à l'aide d'outils et de tests adaptés.</li>
                    <li><span className="what">Découvrir les possibilités</span>Explorer les métiers, formations et parcours qui correspondent à son profil, y compris ceux qu'il ne connaît pas encore.</li>
                    <li><span className="what">Choisir une orientation</span>Comparer les pistes et construire un projet cohérent et réalisable.</li>
                    <li><span className="what">Passer à l'action</span>Préparer les choix scolaires, les vœux, les dossiers et les démarches d'admission.</li>
                </ol>

                <h2>Ce que votre enfant y gagne</h2>
                <ul>
                    <li><strong>Une meilleure connaissance de lui-même</strong> : ce qu'il aime, ce qui le motive, ce qui lui réussit.</li>
                    <li><strong>Des pistes concrètes</strong> de formations et de métiers, plutôt qu'un vague « on verra plus tard ».</li>
                    <li><strong>Un projet argumenté</strong>, utile pour les vœux de 3e, le choix des spécialités ou les projets de formation motivés de Parcoursup.</li>
                    <li><strong>Moins de tension à la maison</strong> : un regard extérieur et neutre aide souvent parents et ado à se comprendre.</li>
                </ul>

                <h2>Bilan d'orientation à domicile ou en ligne</h2>
                <p>Je me déplace à domicile dans un rayon de 45 km autour de Rivière-Saas-et-Gourby : Dax, Saint-Paul-lès-Dax, Saubusse, Peyrehorade, Saint-Vincent-de-Tyrosse, Soustons, Tartas et les communes voisines. Le déplacement est inclus dans le prix de la séance.</p>
                <p>Le bilan d'orientation peut aussi se faire <strong>en ligne, en visio</strong>. C'est pratique pour les emplois du temps chargés, pour les étudiants partis faire leurs études ailleurs ou pour les familles plus éloignées.</p>

                <h2>Combien coûte un bilan d'orientation scolaire ?</h2>
                <p>Le premier rendez-vous est <strong>gratuit et sans engagement</strong>. Ensuite, chaque séance est à <strong>50 €</strong>. Il n'y a pas de forfait à payer d'avance : vous décidez au fur et à mesure. Pour comparer avec les autres solutions, gratuites ou payantes, voir la page <a href="/tarifs">tarifs d'un conseiller d'orientation privé</a>.</p>

                <h2>Ils ont fait le point avec moi</h2>
                <Reviews />

                <h2>Questions fréquentes sur le bilan d'orientation</h2>
                <Faq items={faq} />
            </PageBody>

            <CtaBand title="Faire le point sur l'orientation de votre enfant" />
            <Related exclude="/bilan-orientation-scolaire" />
        </>
    )
}
