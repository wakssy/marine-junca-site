import { Quote } from "lucide-react"

const TEAL = "#4EC8C8"
const GREEN = "#90D4A0"

const citations = [
    "Changer le regard que portent les jeunes sur eux-mêmes afin qu'ils redonnent vie à leur avenir.",
    "Aider les jeunes à mieux se connaître pour qu'ils puissent faire des choix sereins et adaptés à leur personnalité et à leurs aspirations.",
]

export default function ManifestSection() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .manifest-section {
                    width: 100%;
                    background: rgb(235, 238, 243);
                    color: rgb(33,33,33);
                    padding: 90px 40px;
                    box-sizing: border-box;
                    font-family: 'Funnel Display', sans-serif;
                }
                .manifest-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 340px 1fr;
                    gap: 60px;
                    align-items: center;
                }
                .manifest-intro { display: flex; flex-direction: column; gap: 20px; }
                .manifest-photo-wrap { position: relative; width: 180px; }
                .manifest-blob {
                    position: absolute; inset: -14px;
                    background: linear-gradient(135deg, ${GREEN}, ${TEAL});
                    opacity: 0.35; border-radius: 26px;
                }
                .manifest-photo {
                    position: relative; z-index: 1; width: 100%; aspect-ratio: 1;
                    object-fit: cover; border-radius: 20px;
                    border: 4px solid rgba(255,255,255,0.6);
                }
                .manifest-label {
                    font-size: 14px;
                    color: ${TEAL};
                    font-family: 'Gloria Hallelujah', cursive;
                }
                .manifest-title {
                    font-size: 34px;
                    font-weight: 600;
                    letter-spacing: -0.03em;
                    line-height: 120%;
                    margin: 0;
                }
                .manifest-quotes {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .manifest-card {
                    background: white;
                    border: 1px solid rgba(33,33,33,0.08);
                    border-radius: 16px;
                    padding: 32px;
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                }
                .manifest-quote-icon {
                    width: 44px; height: 44px; min-width: 44px;
                    border-radius: 12px;
                    background: linear-gradient(135deg, ${GREEN}33, ${TEAL}33);
                    display: flex; align-items: center; justify-content: center;
                    color: ${TEAL};
                }
                .manifest-text {
                    font-size: 19px;
                    font-weight: 500;
                    line-height: 150%;
                    letter-spacing: -0.01em;
                    margin: 0 0 12px 0;
                }
                .manifest-author {
                    font-size: 13px;
                    color: rgba(33,33,33,0.4);
                    font-weight: 500;
                }

                @media (max-width: 900px) {
                    .manifest-inner { grid-template-columns: 1fr; gap: 32px; }
                    .manifest-photo-wrap { width: 120px; }
                }
                @media (max-width: 600px) {
                    .manifest-section { padding: 60px 20px; }
                    .manifest-title { font-size: 26px; }
                    .manifest-text { font-size: 17px; }
                    .manifest-card { padding: 24px; flex-direction: column; }
                }
            ` }} />

            <section className="manifest-section" aria-label="Philosophie de Marine Junca">
                <div className="manifest-inner">
                    <div className="manifest-intro">
                        <div className="manifest-photo-wrap">
                            <div className="manifest-blob" />
                            <img className="manifest-photo" src="/images/headshot.png" alt="Marine Junca" loading="lazy" />
                        </div>
                        <span className="manifest-label">Mon engagement</span>
                        <h2 className="manifest-title">Des valeurs au cœur de chaque accompagnement</h2>
                    </div>
                    <div className="manifest-quotes">
                        {citations.map((citation, i) => (
                            <div key={i} className="manifest-card">
                                <div className="manifest-quote-icon">
                                    <Quote size={20} fill={TEAL} color={TEAL} />
                                </div>
                                <div>
                                    <p className="manifest-text">{citation}</p>
                                    <span className="manifest-author">Marine Junca — Conseillère en orientation scolaire</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
