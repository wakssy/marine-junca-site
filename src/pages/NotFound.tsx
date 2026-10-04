import { SERVICE_LINKS, CloudDivider } from "../components/ui"

export default function NotFound() {
    return (
        <>
            <section className="ph" style={{ textAlign: "center" }}>
                <div className="ph-inner">
                    <span className="ph-eyebrow">Mauvaise route…</span>
                    <h1 className="ph-title" style={{ margin: "0 auto 20px" }}>Cette page n'existe pas</h1>
                    <p className="ph-intro" style={{ margin: "0 auto" }}>Elle a peut-être été déplacée. Voici où trouver ce que vous cherchez.</p>
                </div>
            </section>
            <CloudDivider />
            <section className="related" style={{ paddingTop: 30 }}>
                <div className="related-grid">
                    <a href="/" className="related-card"><strong>Accueil</strong><span>Conseillère d'orientation scolaire à Dax.</span><em>Y aller →</em></a>
                    {SERVICE_LINKS.map(l => (
                        <a key={l.href} href={l.href} className="related-card"><strong>{l.title}</strong><span>{l.text}</span><em>Y aller →</em></a>
                    ))}
                </div>
            </section>
        </>
    )
}
