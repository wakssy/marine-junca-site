import { PageBody, Reviews, CtaBand, Related, PhoneButton, Mark, CtaLink, CloudDivider, delay } from "../components/ui"
import { BUSINESS } from "../seo/site"

export default function QuiSuisJe() {
    return (
        <>
            <section className="ph about-hero">
                <div className="ph-glow" aria-hidden="true" />
                <div className="ph-inner about-grid">
                    <div>
                        <nav className="ph-crumbs hero-in" aria-label="Fil d'Ariane">
                            <a href="/">Accueil</a>
                            <span aria-hidden="true">/</span>
                            <span aria-current="page">Qui suis-je</span>
                        </nav>
                        <span className="ph-eyebrow hero-in" style={delay(60)}>Enchantée !</span>
                        <h1 className="ph-title hero-in" style={delay(120)}>Marine Junca, conseillère d'orientation <Mark>scolaire</Mark></h1>
                        <p className="ph-intro hero-in" style={delay(200)}>Depuis Rivière-Saas-et-Gourby, près de Dax, j'accompagne les collégiens, les lycéens, les étudiants et leurs parents dans leurs choix d'orientation, avec plus de 15 ans d'expérience.</p>
                        <div className="ph-actions hero-in" style={delay(280)}>
                            <CtaLink variant="dark">Me rencontrer : 1er RDV gratuit</CtaLink>
                            <PhoneButton />
                        </div>
                    </div>
                    <div className="about-photo hero-in" style={delay(240)}>
                        <img src="/images/headshot-800.webp" srcSet="/images/headshot-320.webp 320w, /images/headshot-800.webp 800w" sizes="(max-width: 900px) 320px, 400px" alt="Portrait de Marine Junca, conseillère d'orientation scolaire" width={1254} height={1254} />
                    </div>
                </div>
            </section>
            <CloudDivider />

            <PageBody>
                <h2>Ce qui me guide</h2>
                <blockquote className="about-quote">« Changer le regard que portent les jeunes sur eux-mêmes afin qu'ils redonnent vie à leur avenir. »</blockquote>
                <p>L'orientation n'est pas qu'une affaire de notes et de filières. Un jeune qui ne sait pas quoi faire est souvent un jeune qui manque de confiance, ou qui ne connaît pas encore ses propres forces. Mon rôle est de l'aider à <strong>mieux se connaître</strong> pour qu'il puisse faire des choix sereins, adaptés à sa personnalité et à ses aspirations.</p>

                <h2>Mon parcours</h2>
                <p>Conseillère en orientation scolaire et professionnelle, j'ai plus de 15 ans d'expérience. J'accompagne les choix d'orientation, de la fin du collège aux études supérieures. Je propose aussi un coaching scolaire (méthode de révision, gestion du temps et du stress, préparation de l'oral du brevet) et un accompagnement plus personnel quand la confiance en soi est en jeu.</p>
                <p>Mon parcours détaillé est disponible sur <a href={BUSINESS.linkedin} target="_blank" rel="noopener noreferrer">mon profil LinkedIn</a>.</p>

                <h2>Ma façon de travailler</h2>
                <ul>
                    <li><strong>Un accompagnement individuel</strong> : chaque séance est centrée sur votre enfant, son rythme et sa situation.</li>
                    <li><strong>Un regard neutre et bienveillant</strong>, sans jugement et sans pousser vers une voie plutôt qu'une autre.</li>
                    <li><strong>Des parents associés</strong> au premier rendez-vous et aux moments de décision.</li>
                    <li><strong>Une démarche structurée en 5 étapes</strong>, de la connaissance de soi jusqu'aux démarches concrètes (vœux, dossiers, <a href="/accompagnement-parcoursup">Parcoursup</a>).</li>
                    <li><strong>Près de chez vous</strong> : je me déplace à domicile dans un rayon de 45 km autour de Dax, ou j'accompagne en visio.</li>
                </ul>

                <h2>Les jeunes que j'accompagne</h2>
                <ul>
                    <li>Les collégiens qui doivent choisir leur voie : <a href="/orientation-apres-la-3e">orientation après la 3e</a>.</li>
                    <li>Les lycéens face au <a href="/orientation-lycee-specialites">choix des spécialités</a> et à Parcoursup.</li>
                    <li>Les étudiants qui doutent et envisagent une <a href="/reorientation-post-bac">réorientation</a>.</li>
                    <li>Tous ceux qui ont besoin de faire le point grâce à un <a href="/bilan-orientation-scolaire">bilan d'orientation scolaire</a>.</li>
                </ul>

                <h2>Ce qu'en disent les personnes accompagnées</h2>
                <Reviews />
            </PageBody>

            <CtaBand title="Faisons connaissance" text="Le premier rendez-vous est gratuit : c'est le meilleur moyen de voir si ma façon de travailler convient à votre enfant." />
            <Related exclude="" title="Mes accompagnements" />
        </>
    )
}
