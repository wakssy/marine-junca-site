import { PageHero, PageBody, ParcoursRail, Faq, Reviews, CtaBand, Related, Mark } from "../components/ui"

const faq = [
    { q: "Quand faut-il choisir ses spécialités ?", a: "En seconde générale et technologique. Les familles indiquent en général des intentions au 2e trimestre, puis font le choix définitif au 3e trimestre. Le lycée communique le calendrier exact et la liste des spécialités qu'il propose." },
    { q: "Peut-on changer de spécialité en cours de route ?", a: "En fin de première, l'élève abandonne une de ses trois spécialités et en garde deux pour la terminale. Changer de spécialité en cours d'année est rarement possible et dépend du lycée. D'où l'intérêt de bien réfléchir au choix dès la seconde." },
    { q: "Faut-il choisir les spécialités où l'on a les meilleures notes ?", a: "Les résultats comptent, mais ils ne suffisent pas. Une spécialité demande beaucoup d'heures par semaine : l'intérêt pour la matière et le lien avec les études envisagées sont tout aussi importants. On croise ces trois critères pendant l'accompagnement." },
    { q: "Mon enfant n'a aucune idée d'études : comment choisir ?", a: "Dans ce cas, on privilégie des spécialités qu'il aime et qui laissent un maximum de portes ouvertes, puis on travaille le projet pendant la première. Un bilan d'orientation aide à faire émerger des pistes." },
    { q: "La voie technologique est-elle une bonne option ?", a: "Oui, si elle correspond au profil de l'élève. Les bacs technologiques (STMG, ST2S, STI2D…) permettent une approche plus concrète et mènent notamment à des BTS, des BUT ou des licences. Le choix se fait lui aussi en fin de seconde." },
]

export default function LyceeSpecialites() {
    return (
        <>
            <PageHero
                crumb="Orientation au lycée et spécialités"
                eyebrow="Pour les lycéens de seconde et de première"
                title={<>Choisir ses spécialités <Mark>au lycée</Mark> sans se fermer de portes</>}
                intro="Quelles spécialités choisir en première ? Laquelle abandonner en terminale ? Voie générale ou technologique ? J'aide votre ado à faire des choix cohérents avec ses goûts, ses résultats et ses projets d'études."
                chips={["Premier RDV gratuit", "50 € la séance", "À domicile ou en visio"]}
            />

            <div className="page-rail">
                <div className="rail-card"><ParcoursRail current={["seconde", "premiere"]} /></div>
            </div>

            <PageBody>
                <p className="lead">Le choix des spécialités est souvent le premier choix d'orientation que le lycéen fait vraiment seul. Il engage une grande partie de son emploi du temps pendant deux ans et pèse ensuite sur Parcoursup. Il mérite qu'on s'y arrête.</p>

                <h2>Comment fonctionnent les spécialités ?</h2>
                <div className="cards-2">
                    <div className="info-card">
                        <span className="tag">Fin de seconde</span>
                        <h3>3 spécialités pour la première</h3>
                        <p>L'élève de la voie générale choisit trois enseignements de spécialité parmi ceux proposés par son lycée.</p>
                    </div>
                    <div className="info-card">
                        <span className="tag">Fin de première</span>
                        <h3>2 spécialités gardées en terminale</h3>
                        <p>Il en abandonne une et approfondit les deux autres, qui comptent fortement au bac et dans les dossiers Parcoursup.</p>
                    </div>
                </div>
                <p>Parmi les spécialités existantes : mathématiques, physique-chimie, sciences de la vie et de la Terre, sciences économiques et sociales, histoire-géographie, géopolitique et sciences politiques, humanités, littérature et philosophie, langues, littératures et cultures étrangères, numérique et sciences informatiques, sciences de l'ingénieur, arts, éducation physique… <strong>Tous les lycées ne les proposent pas toutes</strong>, ce qui peut aussi jouer dans le choix de l'établissement.</p>

                <h2>Comment choisir ses spécialités en première ?</h2>
                <h3>Croiser trois critères</h3>
                <ul>
                    <li><strong>Le goût pour la matière</strong> : elle occupera plusieurs heures par semaine pendant deux ans.</li>
                    <li><strong>Les résultats et la méthode</strong> : les exigences augmentent nettement par rapport à la seconde.</li>
                    <li><strong>Les études envisagées</strong> : certaines formations du supérieur attendent des spécialités précises. Les attendus sont indiqués sur les fiches formations de Parcoursup.</li>
                </ul>

                <h3>Les erreurs fréquentes</h3>
                <ul>
                    <li>Choisir comme ses amis, ou pour éviter un professeur.</li>
                    <li>Prendre une combinaison « prestigieuse » sans goût réel pour ces matières.</li>
                    <li>Oublier de vérifier ce qu'attendent les formations visées après le bac.</li>
                    <li>Attendre la dernière semaine pour en parler en famille.</li>
                </ul>

                <h3>Et la voie technologique ?</h3>
                <p>Au lieu des spécialités de la voie générale, l'élève peut choisir une série technologique : STMG, ST2S, STI2D, STL, STD2A, STHR, S2TMD ou STAV. Ces bacs donnent une approche plus concrète et appliquée, et permettent eux aussi de poursuivre des études.</p>

                <h2>Mon accompagnement pour les lycéens</h2>
                <p>En quelques séances, on fait le point sur les goûts, les résultats et les envies de votre enfant, on explore les études et métiers qui l'attirent, puis on vérifie quelles combinaisons de spécialités y mènent. Votre ado repart avec un choix argumenté, qu'il pourra expliquer à ses professeurs comme à vous.</p>
                <div className="note">
                    <span className="note-label">En première et en terminale</span>
                    Le même travail sert ensuite pour choisir la spécialité à abandonner, puis pour construire la liste de vœux. Voir l'<a href="/accompagnement-parcoursup">accompagnement Parcoursup</a>. Si votre enfant n'a encore aucune piste, commencez par un <a href="/bilan-orientation-scolaire">bilan d'orientation scolaire</a>.
                </div>

                <h2>Ce qu'en disent les familles</h2>
                <Reviews />

                <h2>Questions fréquentes sur le choix des spécialités</h2>
                <Faq items={faq} />
            </PageBody>

            <CtaBand title="Choisir ses spécialités en confiance" />
            <Related exclude="/orientation-lycee-specialites" />
        </>
    )
}
