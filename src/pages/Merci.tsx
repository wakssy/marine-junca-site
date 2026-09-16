import { PhoneButton } from "../components/ui"

export default function Merci() {
    return (
        <>
            <section className="ph" style={{ textAlign: "center" }}>
                <div className="ph-inner">
                    <span className="ph-eyebrow">C'est envoyé !</span>
                    <h1 className="ph-title" style={{ margin: "0 auto 20px" }}>Merci, votre demande est bien arrivée</h1>
                    <p className="ph-intro" style={{ margin: "0 auto" }}>Je reviens vers vous au plus vite pour convenir du premier rendez-vous gratuit.</p>
                </div>
            </section>
            <div className="cloud"><img src="/images/cloud-divider.png" alt="" width={6400} height={1026} /></div>
            <div className="simple-page">
                <h2>Besoin d'une réponse rapide ?</h2>
                <p>Vous pouvez aussi m'appeler directement, du lundi au vendredi de 9h à 19h et le samedi de 9h à 12h.</p>
                <div className="simple-actions">
                    <PhoneButton variant="dark" />
                    <a href="/" className="btn btn-outline">Retour à l'accueil</a>
                </div>
            </div>
        </>
    )
}
