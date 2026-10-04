import { delay } from "./ui"

const citations = [
    "Changer le regard que portent les jeunes sur eux-mêmes afin qu'ils redonnent vie à leur avenir.",
    "Aider les jeunes à mieux se connaître pour qu'ils puissent faire des choix sereins et adaptés à leur personnalité et à leurs aspirations.",
]

export default function ManifestSection() {
    return (
        <section className="manifest" aria-labelledby="manifest-title">
            <div className="section manifest-inner">
                <div className="manifest-portrait" data-reveal="scale">
                    <div className="manifest-frame">
                        <img
                            data-reveal-clip
                            src="/images/headshot-800.webp"
                            srcSet="/images/headshot-320.webp 320w, /images/headshot-800.webp 800w"
                            sizes="(max-width: 900px) 240px, 380px"
                            alt="Marine Junca, conseillère en orientation scolaire"
                            width={1254}
                            height={1254}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <span className="manifest-hand" aria-hidden="true">
                        <svg width="54" height="40" viewBox="0 0 54 40" fill="none"><path d="M50 4C38 4 22 10 14 28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M22 27L13 31L12 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        c'est moi !
                    </span>
                </div>

                <div className="manifest-copy">
                    <span className="section-label">Mon engagement</span>
                    <h2 className="manifest-title" id="manifest-title">Des valeurs au cœur de chaque accompagnement</h2>
                    <div className="manifest-quotes">
                        {citations.map((citation, i) => (
                            <blockquote key={i} className="manifest-quote" data-reveal style={delay(120 + i * 100)}>
                                <span className="manifest-quote-mark" aria-hidden="true">“</span>
                                <p>{citation}</p>
                            </blockquote>
                        ))}
                    </div>
                    <p className="manifest-sign" data-reveal style={delay(320)}>
                        <span className="manifest-sign-name">Marine Junca</span>
                        Conseillère en orientation scolaire
                    </p>
                </div>
            </div>
        </section>
    )
}
